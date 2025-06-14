"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import { TotalUsageContext } from "../(context)/TotalUsageContext"
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext"
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';
import { UserButton } from '@clerk/nextjs';

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [totalUsage, setTotalUsage] = useState<number>(0);
    const [userSubscription, setUserSubscription] = useState<boolean>(false);
    const [updateCreditUsageContext, setUpdateCreditUsageContext] = useState<any>();

    return (
        <TotalUsageContext.Provider value={{ totalUsage, setTotalUsage }}>

            <UserSubscriptionContext.Provider value={{ userSubscription, setUserSubscription }}>

                <UpdateCreditUsageContext.Provider value={{ updateCreditUsageContext, setUpdateCreditUsageContext }}>

                    <div className="relative bg-slate-100 h-screen">

                        <div className='absolute right-4 top-4'>
                            <UserButton />
                        </div>
                        <div className='md:w-64 hidden md:block fixed '>
                            <SideNav />
                        </div>

                        <div className='md:ml-64'>
                            {children}
                        </div>
                    </div>

                </UpdateCreditUsageContext.Provider>

            </UserSubscriptionContext.Provider>

        </TotalUsageContext.Provider>
    );
}

export default layout;