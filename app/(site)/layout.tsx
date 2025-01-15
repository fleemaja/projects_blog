import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'
import { getPages } from '@/sanity/sanity-utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Drew's Projects",
  description: 'Follow my journey as I chronicle my various projects for fun and self-development. Coding, art, music, fitness, cooking, book notes, and more!',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="mx-auto py-5">
        <header className="max-w-3xl mx-auto flex items-center justify-between px-5 lg:px-0">
          <div className="flex">
            <svg className="w-[21px] fill-current text-gray-900 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g fillRule="nonzero">
                <circle fill="#D76E5D" cx="7" cy="22" r="7"/>
                <circle fill="#66B2B2" cx="23" cy="22" r="7"/>
                <circle fill="#C0AFD3" cx="15" cy="8" r="7"/>
              </g>
            </svg>
            <Link href="/" className="text-gray-700 text-xl font-bold">
              drew&apos;s projects
            </Link>
          </div>
          <div className="flex items-center gap-5 text-lg text-gray-600">
            <Link href={`/books`} className="hover:underline">
              Book Notes
            </Link>
            <Link href={`/about`} className="hover:underline">
              About
            </Link>
          </div>
        </header>
        <main className="py-5">{children}</main>
      </body>
    </html>
  )
}
