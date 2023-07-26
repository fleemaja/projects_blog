import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <div className="bg-gray-100 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold">
            Project-based <span className="bg-gradient-to-r from-green-400 via-sky-500 to-blue-600 bg-clip-text text-transparent">Learning</span>
          </h1>
          <p className="mt-3 text-xl text-gray-600">
            Exploring the world and gaining skills by trying new things - fitness, music, art, diy, coding, cooking, and more
          </p>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            projects.map((project) => (
              <Link 
                href={`/projects/${project.slug}`}
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
                <div className="mt-2 font-extrabold text-gray-700">
                  {project.name}
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
