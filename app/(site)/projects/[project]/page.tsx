import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: { project: string }
};

export default async function Project({ params }: Props) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
      <div className="max-w-3xl mx-auto mt-10">
        <header className="flex items-center justify-between">
            <h1 className="text-gray-700 text-5xl font-extrabold">
                { project.name }
            </h1>
        </header>

        <Image 
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
        />

        <div className="prose text-lg text-gray-700 mt-5">
            <PortableText value={project.content} />
        </div>
      </div>
)}