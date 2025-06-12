"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight } from "lucide-react"
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const HeroSection = () => {

    const route = useRouter();
    const { isSignedIn } = useUser();

    const handelOnClick = async () => {
        if (isSignedIn) {
            route.push('/dashboard');
        }
        else {
            route.push('sign-in');
        }
    }

    return (
        <div className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <Badge variant="secondary" className="mb-4">
                        🚀 New: AI-Powered Automation
                    </Badge>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        Streamline Your Workflow,{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Amplify Your Success
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Transform your business operations with our intelligent automation platform. Save time, reduce errors, and
                        focus on what matters most.
                    </p>
                    <div className="flex justify-center">
                        <Button
                            onClick={handelOnClick}
                            size="lg"
                            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;