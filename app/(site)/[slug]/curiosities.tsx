import { getCuriosities } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "../portableTextComponents";

export default async function Curiosities() {
    const curiosities = await getCuriosities();
    return (
        <div className="max-w-3xl mx-auto mt-10 px-5 lg:px-0">
            {
                curiosities.map((curiosity) => (
                <div key={curiosity._id} className="prose text-lg text-gray-700 mt-10">
                    <PortableText value={curiosity.content} components={PortableTextComponents} />
                </div>
                ))
            }
        </div>
    )
}