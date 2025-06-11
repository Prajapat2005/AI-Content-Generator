"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios'
import Razorpay from "razorpay"
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';

const today = new Date()
const formattedDate = today.toLocaleDateString()

const billing = () => {

    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const CreateSubscription = async () => {
        setLoading(true);
        try {
            const resp = await axios.post('/api/create-subscription', {});
            Onpayment(resp.data.id);
        }
        catch (err) {
            console.error("payment server down");
            setLoading(false);
        }
    }

    const Onpayment = (subId: string) => {
        const option = {
            "key": process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
            "subscription_id": subId,
            "name": "AI Content Generator",
            description: "Monthly Subscription",
            handler: async (resp: any) => {
                console.log(resp);
                if (resp) {
                    SaveSubscription(resp.razorpay_payment_id);
                }
                setLoading(false);
            }
        }

        // @ts-ignore
        const rzpay = new window.Razorpay(option);
        rzpay.open();
    }

    const SaveSubscription = async (paymentId: string) => {
        try {
            const result = await db.insert(UserSubscription).values({
                email: user?.primaryEmailAddress?.emailAddress,
                userName: user?.fullName,
                active: true,
                paymentId: paymentId,
                joinDate: formattedDate,
            });

            console.log(result);
            window.location.reload();

        } catch (err) {
            console.error("insert in DB error");
        }

    }

    return (
        <div>
            <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
            <Button onClick={CreateSubscription}>SUBS</Button>
        </div>
    )
}

export default billing;