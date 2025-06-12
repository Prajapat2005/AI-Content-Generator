"use client"
import React, { useState } from 'react'
import { Zap } from 'lucide-react'
import Link from "next/link"
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useUser, UserButton } from '@clerk/nextjs'

const Header = () => {

    const route = useRouter();
    const { isSignedIn } = useUser();

    const handelAuth = async () => {
        route.push('sign-in');

    }

    const handelStart = async () => {
        if (isSignedIn) {
            route.push('/dashboard');
        }
        else {
            route.push('sign-in');
        }
    }

    return (
        <div className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">StreamLine</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Features
                        </Link>
                        <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Reviews
                        </Link>
                        <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                            Contact
                        </Link>
                    </nav>

                    <div className="flex items-center space-x-4">

                        <Button onClick={handelStart} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                            Get Started
                        </Button>

                        {
                            isSignedIn ? <UserButton /> : <Button onClick={handelAuth} variant="ghost" className="hidden sm:inline-flex">
                                Sign In
                            </Button>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header