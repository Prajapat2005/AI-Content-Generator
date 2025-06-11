import { Search } from 'lucide-react'
import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
    return (
        <div className='p-5 shadow-sm flex justify-between items-center bg-white'>
            <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
                <Search />
                <input type="text" placeholder='Search...' className='outline-none' />
            </div>
            <div className='w-10 h-10'>
                <UserButton />
            </div>
        </div>
    )
}

export default Header