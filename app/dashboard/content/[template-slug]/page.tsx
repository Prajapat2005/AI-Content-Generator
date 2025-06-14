import { Suspense } from 'react'
import ContentGenerator from './ContentGenerator'
import { use } from 'react'

interface PageProps {
    params: {
        'template-slug': string
    }
}

export default function Page({ params }: PageProps) {
    // Ensure the params are properly typed and handled
    const templateSlug = params['template-slug']

    return (
        <Suspense fallback={<div>Loading...</div>}>

            <div className="py-5 px-4 md:px-6">
                <div className="max-w-5xl mx-auto h-100vh">
                    <h1 className="text-3xl md:text-4xl font-bold mb-5 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                        Content Generation
                    </h1>
                    <ContentGenerator templateSlug={templateSlug} />
                </div>
            </div>

        </Suspense>
    )
}