import { PortableTextBlock } from "sanity";
import { Category } from "./Category";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    content: PortableTextBlock[];
    excerpt: string;
    category: Category;
}