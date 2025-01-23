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
      <body className="pt-5 flex flex-col min-h-screen">
        <header className="mx-auto w-full max-w-3xl flex items-center justify-between px-5 lg:px-0">
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
          <div className="flex items-center gap-10 text-lg text-gray-600">
            <Link href={`/books`} className="hover:underline">
              Book Notes
            </Link>
            <Link href={`/about`} className="hover:underline">
              About
            </Link>
          </div>
        </header>
        <main className="py-5 mb-20">{children}</main>
        <footer className="mt-auto flex flex-col md:flex-row items-center justify-between gap-8 py-20 px-2 sm:px-20 bg-slate-800 text-white">
          <div className="flex">
            <svg className="w-[21px] fill-current text-gray-900 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <g fillRule="nonzero">
                <circle fill="#D76E5D" cx="7" cy="22" r="7"/>
                <circle fill="#66B2B2" cx="23" cy="22" r="7"/>
                <circle fill="#C0AFD3" cx="15" cy="8" r="7"/>
              </g>
            </svg>
            <Link href="/" className="text-white text-xl font-bold">
              drew&apos;s projects
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 text-lg text-white">
            <Link href="/" className="text-white text-xl hover:underline">
              Projects
            </Link>
            <Link href={`/books`} className="hover:underline">
              Book Notes
            </Link>
            <Link href={`/about`} className="hover:underline">
              About
            </Link>
          </div>
        </footer>
      </body>
    </html>
  )
}
