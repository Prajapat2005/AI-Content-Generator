"use client"
import React, { useEffect, useState, useContext } from 'react'
import { Button } from '@/components/ui/button'
import { currentUser } from '@clerk/nextjs/server'
import { useUser } from '@clerk/nextjs';
import { AIOutput, UserSubscription } from '@/utils/schema';
import { db } from '@/utils/db';
import { HISTORY } from '../history/page';
import { eq, lt, gte, ne } from 'drizzle-orm';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext"
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext"
import axios from 'axios';

const UsageTrack = () => {

    const { user } = useUser();
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const [maxWords, setMaxWords] = useState(10000);
    const { updateCreditUsageContext, setUpdateCreditUsageContext } = useContext(UpdateCreditUsageContext);

    useEffect(() => {
        user && GetData();
        user && IsUserSubscribe();
    }, [user]);


    useEffect(() => {
        user && GetData();
    }, [updateCreditUsageContext && user]);


    const GetData = async () => {

        // @ts-ignore
        const rawResult = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, user?.primaryEmailAddress?.emailAddress));

        const result: HISTORY[] = rawResult.map((item: any) => ({
            ...item,
            aiResponse: item.aiResponse ?? "",
        }));

        getTotalUsage(result);
    }

    const IsUserSubscribe = async () => {
        const result = await db.select().from(UserSubscription).where(eq(UserSubscription.email, user?.primaryEmailAddress?.emailAddress));

        if (result) {
            setUserSubscription(true);
            setMaxWords(100000);
        }
    }

    const getTotalUsage = (result: HISTORY[]) => {
        let total = 0;
        result.forEach((ele) => {
            total = total + Number(ele.aiResponse?.length);
        });

        setTotalUsage(total);
    }

    return (
        <div className='m-3'>
            <div className='bg-primary text-white p-3 rounded-lg '>
                <h2 className='font-medium'>
                    Creadits
                </h2>
                <div className='h-2 bg-[#9981f9] rounded-full mt-3'>
                    <div className='h-2 bg-white rounded-full' style={{
                        width: `${(totalUsage / maxWords) * 100}%`
                    }}></div>
                </div>
                <h2 className='text-sm my-2'>{totalUsage}/{userSubscription ? "1,00,000" : "10,000"} creadits used</h2>
                <Button variant={'secondary'} className='w-full my-3 text-primary shadow-sm box-shadow'>Upgrade</Button>
            </div>
        </div>
    )
}

export default UsageTrack