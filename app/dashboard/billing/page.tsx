"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import axios from 'axios'
import Razorpay from "razorpay"
import { db } from '@/utils/db';
import { UserSubscription } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useEffect } from 'react';


const billing = () => {

    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    const [formattedDate, setFormattedDate] = useState<string | null>(null);

    useEffect(() => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = now.getFullYear();
        const dateStr = `${day}/${month}/${year}`;
        setFormattedDate(dateStr);
    }, []);


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
            <section id="pricing" className="py-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-[70%]">
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
                            <CardHeader>
                                <CardTitle className="text-center">Starter</CardTitle>
                                <CardDescription className="text-center">Perfect for small teams</CardDescription>
                                <div className="text-center">
                                    <span className="text-4xl font-bold">$29</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Up to 5 team members
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Basic automation workflows
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Email support
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        1GB storage
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" variant="outline">
                                    Start Free Trial
                                </Button>
                            </CardFooter>
                        </Card>

                        <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
                            <CardHeader>
                                <CardTitle className="text-center">Professional</CardTitle>
                                <CardDescription className="text-center">For growing businesses</CardDescription>
                                <div className="text-center">
                                    <span className="text-4xl font-bold">$79</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Up to 25 team members
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Advanced AI automation
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Priority support
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        10GB storage
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                                        Advanced analytics
                                    </li>
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button onClick={CreateSubscription} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                                    Start Free Trial
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default billing;