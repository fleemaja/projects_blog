import { getBooks } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Books() {
    const books = await getBooks();
    return (
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
          {
            books.map((book) => (
              <Link 
                href={`/books/${book.slug}`}
                className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-0 group rounded-lg p-1" key={book._id}>
                {
                  book.image && (
                    <div>
                      <Image 
                        src={book.image}
                        alt={book.name}
                        width={196}
                        height={300}
                        className="object-cover rounded-lg border border-gray-500"
                      />
                    </div>
                  )
                }
                <div>
                  <div className="mt-2 text-xl font-extrabold text-gray-700 group-hover:underline decoration-4 underline-offset-4 decoration-zinc-900">
                    {book.name}
                  </div>
                  <div className="text-lg font-bold text-gray-500">
                  { `by ${book.author}` }
                  </div>
                  <p>
                    {book.excerpt}
                  </p>
                </div>
              </Link>
            ))
          }
        </div>
    )
}