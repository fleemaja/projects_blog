import { getPage } from '@/sanity/sanity-utils';
import { PortableText } from "@portabletext/react";

export default async function About() {
    const page = await getPage('about');
    return (
        <div className="max-w-3xl mx-auto mt-10 px-5 lg:px-0">
            <h1 className="text-gray-700 text-5xl font-extrabold">
                {page.title}
            </h1>
            <div className="prose text-lg text-gray-700 mt-10">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}