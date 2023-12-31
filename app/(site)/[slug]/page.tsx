import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Props = {
    params: { slug: string }
}

export default async function Page({params}: Props) {
    const page = await getPage(params.slug)
    if (page) {
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
    } else {
        return (
            <div className="max-w-3xl mx-auto mt-20 px-5 lg:px-0">
                <h1 className="text-gray-700 text-9xl font-extrabold">
                    404
                </h1>
            </div>
        )
    }
}