import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug)

    return (
        <div className="max-w-3xl mx-auto mt-10">
            <h1 className="text-gray-700 text-5xl font-extrabold">
                {page.title}
            </h1>
            <div className="prose text-lg text-gray-700 mt-10">
                <PortableText value={page.content} />
            </div>
        </div>
    )
}