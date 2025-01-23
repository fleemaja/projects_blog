import { PortableText } from "@portabletext/react"
import About from "./about";
import Books from "./books";
import Link from "next/link";

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
            <div className="grid content-center max-w-3xl mx-auto mt-20 px-5 lg:px-0">
                <h1 className="mx-auto text-gray-700 text-9xl font-bold">
                  (&gt;_&lt;)
                </h1>
                <h2 className="mx-auto my-10">This page does not exist.</h2>
                <Link href="/" className="mx-auto" >
                  <span className="ml-2 underline underline-offset-8 decoration-blue-500">
                    Return to Drew&apos;s Projects
                  </span>
                </Link>
            </div>
        )
    }
}