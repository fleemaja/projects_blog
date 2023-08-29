import { getCategories, getCategoryProjects, getCategory } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
    params: { category: string }
}

export default async function CategoryPage({params}: Props) {
  const projects = await getCategoryProjects(params.category);
  const categories = await getCategories();
  const categoryObj = await getCategory(params.category);

  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-5 lg:px-0">
          <h1 className="text-5xl font-extrabold">
            Project-based <span className="bg-gradient-to-r from-green-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">Learning</span>
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            { categoryObj && categoryObj.title }
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">

        <div className="flex flex-wrap items-center gap-5 text-lg text-gray-600 px-5">
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

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-0">
          {
            projects.map((project) => (
              <Link 
                href={`/projects/${project.category.slug}/${project.slug}`}
                className="rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition" key={project._id}>
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
                <div className="mt-2 text-xl font-extrabold text-gray-700">
                  {project.name}
                </div>
                <p>
                  {project.category.title}
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}