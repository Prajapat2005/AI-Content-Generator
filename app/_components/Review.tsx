import React from 'react'
import { Card, CardContent, } from '@/components/ui/card'
import { Star } from "lucide-react"

const Review = () => {
    return (
        <div id="testimonials" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-xl text-gray-600">See what our customers have to say about StreamLine</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <Card className="border-0 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">
                                "StreamLine has revolutionized our workflow. We've reduced manual tasks by 80% and our team
                                productivity has never been higher."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    S
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                                    <p className="text-sm text-gray-600">CEO, TechCorp</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">
                                "The AI automation features are incredible. StreamLine handles our complex workflows seamlessly,
                                saving us countless hours every week."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    M
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Michael Chen</p>
                                    <p className="text-sm text-gray-600">CTO, InnovateLab</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg">
                        <CardContent className="pt-6">
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6">
                                "Outstanding platform with exceptional support. The ROI we've seen from StreamLine has exceeded all
                                our expectations."
                            </p>
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                                    E
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                                    <p className="text-sm text-gray-600">Operations Director, ScaleUp</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Review