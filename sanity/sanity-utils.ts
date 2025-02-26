import { Project } from "@/types/Project";
import { Book } from "@/types/Book";
import { Curiosity } from "@/types/Curiosity";
import { Page } from "@/types/Page";
import { Category } from "@/types/Category";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProjects(): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project"] | order(_createdAt desc){
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            excerpt,
            category->{
                ...,
                "slug": slug.current
            }
        }`
    )
}

export async function getBooks(): Promise<Book[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "book"] | order(_createdAt desc){
            _id,
            _createdAt,
            name,
            author,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            excerpt,
        }`
    )
}

export async function getCuriosities(): Promise<Curiosity[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "curiosity"] | order(_createdAt desc){
            _id,
            _createdAt,
            content,
            color,
            emoji
        }`
    )
}

export async function getProject(slug: string): Promise<Project> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            excerpt,
            category->{
                ...,
                "slug": slug.current
            }
        }`,
        { slug }
    )
}

export async function getBook(slug: string): Promise<Book> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "book" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            author,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            excerpt,
        }`,
        { slug }
    )
}

export async function getPages(): Promise<Page[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
    )
}

export async function getPage(slug: string): Promise<Page> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
        { slug }
    )
}

export async function getCategories(): Promise<Category[]> {
    return createClient(clientConfig).fetch(
        groq`*[_type == "category"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            color
        }`
    )
}

export async function getCategoryProjects(category: string): Promise<Project[]> {

    return createClient(clientConfig).fetch(
        groq`*[_type == "project" && category->slug.current == $category] | order(_createdAt desc){
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            content,
            excerpt,
            category->{
                ...,
                "slug": slug.current
            }
        }`,
        { category }
    )
}