import { getCuriosities } from "@/sanity/sanity-utils";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { CuriosityComponents } from "../curiosityComponents";

const tailwindBGColor: { [key: string]: string } = {
    'red': 'bg-red-300',
    'orange': 'bg-orange-300',
    'yellow': 'bg-yellow-300',
    'green': 'bg-green-300',
    'teal': 'bg-teal-300',
    'blue': 'bg-blue-300',
    'indigo': 'bg-indigo-300',
    'violet': 'bg-violet-300'
  };

export default async function Curiosities() {
    const curiosities = await getCuriosities();
    return (
        <div className="max-w-[598px] mx-auto mt-10 px-5 lg:px-0">
            {
                curiosities.map((curiosity) => {
                    const datePosted = new Date(curiosity._createdAt).toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});
                    return (
                        <div key={curiosity._id} className="prose text-lg text-gray-700 border-2 border-gray-200 p-4">
                            <div className="flex">
                                <div className={`${tailwindBGColor[curiosity.color]} w-12 h-12 rounded-full mr-4 flex items-center justify-center`}>
                                    { curiosity.emoji }
                                </div>
                                <p className="text-sm">{ datePosted }</p>
                            </div>
                            <PortableText value={curiosity.content} components={CuriosityComponents} />
                        </div>
                    )
                })
            }
        </div>
    )
}