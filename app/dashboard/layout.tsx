"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import { TotalUsageContext } from "../(context)/TotalUsageContext"
import { UserSubscriptionContext } from "../(context)/UserSubscriptionContext"
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

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

                    <div className="bg-slate-100 h-screen">
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