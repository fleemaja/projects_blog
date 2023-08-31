import { getCategories, getCategoryProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { category: string }
}

export default async function CategoryPage({params}: Props) {
  const projects = await getCategoryProjects(params.category);
  const categories = await getCategories();

  return (
    <div>
      <div className="mt-10">

        <div className="flex flex-wrap justify-center items-center gap-5 text-lg text-gray-600 px-5">
            <Link href={`/`}>
              <span className="p-2 rounded-lg border border-gray-500 hover:bg-gray-100">
                All
              </span>
            </Link>
          { categories.map((category) => {
            if (category.slug == params.category) {
                return (
                    <Link key={category._id} href={`/projects/${category.slug}`}>
                      <span className="bg-gradient-to-r from-green-100 via-sky-200 to-blue-300 text-gray-900 p-2 rounded-lg border border-gray-500">
                        {category.title}
                      </span>
                    </Link>
                  )
            } else {
                return (
                    <Link key={category._id} href={`/projects/${category.slug}`}>
                      <span className="p-2 rounded-lg border border-gray-500 hover:bg-gray-100">
                        {category.title}
                      </span>
                    </Link>
                  )
            }
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20">
          {
            projects.map((project) => (
              <Link 
                href={`/projects/${project.category.slug}/${project.slug}`}
                className="group rounded-lg p-1" key={project._id}>
                {
                  project.image && (
                    <Image 
                      src={project.image}
                      alt={project.name}
                      width={750}
                      height={300}
                      className="object-cover rounded-lg border border-gray-500"
                    />
                  )
                }
                <div className="mt-2 text-xl font-extrabold text-gray-700 group-hover:underline decoration-4 underline-offset-4 decoration-zinc-900">
                  {project.name}
                </div>
                <p>
                  {project.excerpt}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}