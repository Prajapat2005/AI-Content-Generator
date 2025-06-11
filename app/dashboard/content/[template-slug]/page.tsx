import { Suspense } from 'react'
import ContentGenerator from './ContentGenerator'

export default function Page({ params }: { params: { 'template-slug': string } }) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContentGenerator templateSlug={params['template-slug']} />
        </Suspense>
    )
}