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
      <div className="max-w-3xl mx-auto mt-5 mb-20 px-5 lg:px-0">
        <div className="mb-5 text-xl">
            <Link href="/books">
                &#8592; 
                <span className="ml-2 hover:underline underline-offset-8 decoration-blue-500">
                  Book Notes
                </span>
            </Link>
        </div>
        <header className="mt-14">
          <div className="grid grid-flow-col items-center">
            <div>
                <Image 
                    src={book.image}
                    alt={book.name}
                    width={196}
                    height={300}
                    className="border-2 border-gray-700 object-cover rounded-xl"
                />
            </div>
            <div className="p-10">
                <h1 className="text-gray-700 text-2xl sm:text-5xl font-extrabold">
                    { book.name }
                </h1>
                <p>
                    { book.excerpt }
                </p>
            </div>
          </div>
        </header>

        <div className="prose text-lg text-gray-700 mt-14">
            <PortableText value={book.content} components={PortableTextComponents} />
        </div>
      </div>
)}