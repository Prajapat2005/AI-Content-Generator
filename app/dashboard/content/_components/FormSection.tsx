"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Loader2Icon } from 'lucide-react'

interface PROPS {
    selectedTemplate?: TEMPLATE
    userFormInput: any
    loading: boolean
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {

    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        userFormInput(formData);
    }

    return (
        <div className='p-5 shadow-md border rounded-lg bg-white h-[100%]'>
            <Image src={selectedTemplate?.icon ? selectedTemplate?.icon : ""} width={70} height={70} alt="icon" />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-4' onSubmit={onSubmit} >
                {selectedTemplate?.form?.map((item, index) => (
                    <div className='my-2 flex flex-col gap-2 mb-4' key={index}>
                        <label className='font-bold text-gray-500'>{item.label}</label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item?.required}
                                onChange={handleInputChange} /> :
                            item.field == 'textarea' ?
                                <Textarea name={item.name} required={item?.required}
                                    onChange={handleInputChange} /> : null
                        }
                    </div>
                ))}

                <Button type="submit" className='w-full py-6 text-lg' disabled={loading}>
                    {loading && <Loader2Icon className='animate-spin' />}
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default FormSection;