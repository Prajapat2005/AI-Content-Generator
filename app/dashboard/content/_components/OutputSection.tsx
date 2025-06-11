import React, { useEffect, useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { Copy } from "lucide-react";


const Editor = dynamic(
    () => import('@toast-ui/react-editor').then(mod => mod.Editor),
    {
        ssr: false,
        loading: () => <p>Loading editor...</p>
    }
);

interface PROPS {
    aiOutput: string,
}

const OutputSection = ({ aiOutput }: PROPS) => {
    const editorRef = useRef<any>(null);

    useEffect(() => {
        // Wait for editor to be mounted and initialized
        if (editorRef.current && aiOutput) {
            const instance = editorRef.current.getInstance();
            if (instance) {
                instance.setMarkdown(aiOutput);
            }
        }
    }, [aiOutput]);

    const onChange = () => {
        if (editorRef.current) {
            const instance = editorRef.current.getInstance();
            if (instance) {
                console.log(instance.getMarkdown());
            }
        }
    }

    return (
        <div className='bg-white shadow-lg border rounded-lg'>
            <div className='flex justify-between items-center p-3'>
                <h2 className='font-medium text-lg text-bold'>Your Result</h2>
                <Button className='flex gap-2'
                    onClick={() => {
                        navigator.clipboard.writeText(aiOutput)
                    }}><Copy className='w-4 h-4' />Copy</Button>
            </div>
            <Editor
                ref={editorRef}
                initialValue="Your result is generating"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
                onChange={onChange}
            />
        </div>
    )
}

export default OutputSection;