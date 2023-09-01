import { getCategories, getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

const tailwindTextColor: { [key: string]: string } = {
  'red': 'text-red-700',
  'orange': 'text-orange-700',
  'yellow': 'text-yellow-700',
  'green': 'text-green-700',
  'teal': 'text-teal-700',
  'blue': 'text-blue-700',
  'indigo': 'text-indigo-700',
  'violet': 'text-violet-700'
};

export default async function Home() {
  const projects = await getProjects();
  const categories = await getCategories();

  return (
    <div>
      <div className="mt-10">

        <div className="flex flex-wrap justify-center items-center gap-5 text-lg text-gray-600 px-5">
            <Link href={`/`}>
              <span className="bg-gradient-to-r from-green-100 via-sky-200 to-blue-300 text-gray-900 p-2 rounded-lg border border-gray-500">
                All
              </span>
            </Link>
          { categories.map((category) => (
            <Link key={category._id} href={`/projects/${category.slug}`}>
              <span className="p-2 rounded-lg border border-gray-500 hover:bg-gray-100">
                {category.title}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
          {
            projects.map((project) => (
              <Link 
                href={`/projects/${project.category.slug}/${project.slug}`}
                className="grid grid-cols-2 gap-4 md:grid-cols-1 md:gap-0 group rounded-lg p-1" key={project._id}>
                {
                  project.image && (
                    <div>
                      <Image 
                        src={project.image}
                        alt={project.name}
                        width={750}
                        height={300}
                        className="object-cover rounded-lg border border-gray-500"
                      />
                    </div>
                  )
                }
                <div>
                  <div className="mt-2 text-xl font-extrabold text-gray-700 group-hover:underline decoration-4 underline-offset-4 decoration-zinc-900">
                    {project.name}
                  </div>
                  <p className={`${tailwindTextColor[project.category.color]}`}>
                    {project.category.title}
                  </p>
                  <p>
                    {project.excerpt}
                  </p>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
