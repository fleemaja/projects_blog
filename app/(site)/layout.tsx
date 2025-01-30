import Link from 'next/link'
import '../globals.css'
import { Inter } from 'next/font/google'

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
      <body className="flex flex-col-reverse md:flex-row">
        <aside className="sticky bottom-0 md:h-screen top-0 bg-slate-200">
            <div className="flex flex-row md:flex-col items-center justify-center gap-10 md:p-5 text-sm font-bold text-gray-600">
              <Link href="/" className="flex flex-col items-center justify-center text-center hover:underline hover:bg-slate-300 rounded-lg p-5">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z" />
                  </svg>
                </p>
                <p>Projects</p>
              </Link>
              <Link href={`/books`} className="flex flex-col items-center justify-center text-center hover:underline hover:bg-slate-300 rounded-lg p-5">
                <p>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </p>
                <p>Book Notes</p>
              </Link>
              <Link href={`/about`} className="flex flex-col items-center justify-center text-center hover:underline hover:bg-slate-300 rounded-lg p-5">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                  </svg>
                </span>
                <span>About</span>
              </Link>
            </div>
        </aside>
        <div className="pt-5 flex flex-col w-full min-h-screen">
          <header className="mx-auto w-full px-20 flex items-center justify-between">
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
        </div>
      </body>
    </html>
  )
}
