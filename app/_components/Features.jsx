import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Users, BarChart3 } from "lucide-react"

const Features = () => {
    return (
        <div id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Powerful Features for Modern Teams</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Everything you need to automate, optimize, and scale your business operations
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <CardTitle>AI Automation</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Intelligent workflows that learn and adapt to your business processes automatically.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                                <Shield className="w-6 h-6 text-green-600" />
                            </div>
                            <CardTitle>Enterprise Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Bank-level security with end-to-end encryption and compliance certifications.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-purple-600" />
                            </div>
                            <CardTitle>Team Collaboration</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">
                                Real-time collaboration tools that keep your team synchronized and productive.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                        <CardHeader>
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                <BarChart3 className="w-6 h-6 text-orange-600" />
                            </div>
                            <CardTitle>Advanced Analytics</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600">Deep insights and reporting to help you make data-driven decisions.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Features