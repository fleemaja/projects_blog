import { getBook } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "../../portableTextComponents";

type Props = {
    params: { slug: string }
};

export default async function Project({ params }: Props) {
    const slug = params.slug;
    const book = await getBook(slug);
    const datePosted = new Date(book._createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

    return (
      <div className="max-w-3xl mx-auto mt-5 px-5 lg:px-0">
        <header>
            <h1 className="text-gray-700 text-5xl font-extrabold">
                { book.name }
            </h1>
            <p className="mt-2">
                { `Published: ${datePosted}` }
            </p>
        </header>

        <Image 
            src={book.image}
            alt={book.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />

        <div className="prose text-lg text-gray-700 mt-10">
            <PortableText value={book.content} components={PortableTextComponents} />
        </div>
      </div>
)}