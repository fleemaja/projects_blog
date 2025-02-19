import { PortableTextBlock } from "sanity";

export type Curiosity = {
    _id: string;
    _createdAt: Date;
    content: PortableTextBlock[];
    color: string;
    emoji: string;
}