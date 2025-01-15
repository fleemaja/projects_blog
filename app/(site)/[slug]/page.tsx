import { PortableText } from "@portabletext/react"
import About from "./about";
import Books from "./books";

type Props = {
    params: { slug: string }
}

export default function Page({params}: Props) {
    const page = params.slug
    if (page === 'about') {
        return (
            <About />
        )
    } else if (page ==='books') {
        return (
            <Books />
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