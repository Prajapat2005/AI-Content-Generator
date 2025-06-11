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
            <ContentGenerator templateSlug={templateSlug} />
        </Suspense>
    )
}