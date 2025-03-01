import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { PortableTextComponents } from "../../../portableTextComponents";

type Props = {
    params: { project: string }
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);
    const datePosted = new Date(project._createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});

    return (
      <div className="max-w-3xl mx-auto mt-5 px-5 lg:px-0">
        <div className="mb-5 text-xl">
            <Link href={`/projects/${project.category.slug}`}>
                &#8592; 
                <span className="ml-2 hover:underline underline-offset-8 decoration-blue-500">
                  {project.category.title}
                </span>
            </Link>
        </div>
        <header className="grid grid-flow-col items-center justify-center gap-10">
            <div>
                <Image 
                    src={project.image}
                    alt={project.name}
                    width={532}
                    height={400}
                    className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
                />
            </div>
            <div className="">
                <h1 className="text-gray-700 text-xl sm:text-3xl font-extrabold">
                    { project.name }
                </h1>
                <p>
                    { `Published: ${datePosted}` }
                </p>
            </div>
        </header>

        <div className="prose text-lg text-gray-700 mt-10">
            <PortableText value={project.content} components={PortableTextComponents} />
        </div>
      </div>
)}