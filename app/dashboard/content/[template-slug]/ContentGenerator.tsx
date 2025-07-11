"use client"
import React, { useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import Chat from '@/utils/AiModel'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { useContext, useEffect } from 'react'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext"
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext"

interface Props {
    templateSlug: string
}

const ContentGenerator = ({ templateSlug }: Props) => {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) =>
        item.slug === templateSlug
    )
    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<any>("")
    const { user } = useUser()
    const { totalUsage } = useContext(TotalUsageContext);
    const router = useRouter();
    const { userSubscription, setUserSubscription } = useContext(UserSubscriptionContext);
    const { updateCreditUsageContext, setUpdateCreditUsageContext } = useContext(UpdateCreditUsageContext);
    const [formattedDate, setFormattedDate] = useState<string | null>(null);

    useEffect(() => {
        const now = new Date();
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = now.getFullYear();
        const dateStr = `${day}/${month}/${year}`;
        setFormattedDate(dateStr);
    }, []);

    const GenerateAIContent = async (formData: any) => {

        if (totalUsage >= (userSubscription ? 100000 : 100000)) {
            console.log("please Update");
            router.push('/dashboard/billing')
            return;
        }
        setLoading(true)
        const SelectedPrompt = selectedTemplate?.aiPrompt
        const FinalAIprompt = JSON.stringify(formData) + ", " + SelectedPrompt

        const result = await Chat.sendMessage({
            message: FinalAIprompt
        })

        setAiOutput(result?.text)
        setLoading(false)
        await SaveInDB(formData, selectedTemplate?.slug, aiOutput);

        setUpdateCreditUsageContext(Date.now());
    }

    const SaveInDB = async (formData: any, slug: string | undefined, aiResponse: string) => {
        if (!slug || !user?.primaryEmailAddress?.emailAddress) {
            console.error("Missing required fields for DB insert")
            return
        }
        const result = await db.insert(AIOutput).values({
            formData: typeof formData === "string" ? formData : JSON.stringify(formData),
            templateSlug: slug,
            aiResponse: aiResponse,
            createdBy: user.primaryEmailAddress.emailAddress,
            createdAt: formattedDate
        })
        console.log(result)
    }

    const userFormInput = (formData: any) => {
        GenerateAIContent(formData)
    }

    return (

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 h-100vh'>
            <FormSection
                selectedTemplate={selectedTemplate}
                userFormInput={userFormInput}
                loading={loading}
            />
            <div className='col-span-2'>
                <OutputSection aiOutput={aiOutput} />
            </div>
        </div>
    )
}

export default ContentGenerator;