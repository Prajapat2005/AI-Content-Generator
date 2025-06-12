"use client";
import React, { useEffect } from 'react'
import Image from 'next/image';
import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import UsageTrack from './UsageTrack';
import { usePathname, useRouter } from 'next/navigation';

const SideNav = () => {

    const MenuList = [
        {
            name: "Home",
            icon: Home,
            path: '/dashboard',
        },
        {
            name: "History",
            icon: FileClock,
            path: '/dashboard/history',
        },
        {
            name: "Billing",
            icon: WalletCards,
            path: '/dashboard/billing',
        },
        {
            name: "Setting",
            icon: Settings,
            path: '/dashboard/settings',
        },

    ]

    const router = useRouter();
    const path = usePathname();

    useEffect(() => {
        console.log(path);
    }, []);

    return (
        <div className='relative h-screen p-2 shadow-sm border bg-white'>
            <div className='flex items-center justify-center'>
                <Image src={'/logo.svg'} alt="logo" width={100} height={70} />
            </div>

            <hr className='my-3 border' />

            <div className="">
                {MenuList.map((menu, index) => (
                    <div className={`flex
                    gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-md cursor-pointer items-center ${path == menu.path && "bg-primary text-white"}`} key={index}
                        onClick={() => router.push(menu.path)}>
                        <menu.icon />
                        <h2 className='text-sm'>{menu.name}</h2>
                    </div>
                ))}
            </div>

            <div className='absolute bottom-2 left-0 w-full'>
                <UsageTrack />
            </div>
        </div >
    )
}

export default SideNav