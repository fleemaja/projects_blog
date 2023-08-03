import Image from 'next/image'
import imageUrlBuilder from '@sanity/image-url'
import client from '@/sanity/config/client-config'
import YouTubeEmbed from "./youtubeEmbed";
import getYouTubeID from "get-youtube-id";

function urlFor (source: any) {
  return imageUrlBuilder(client).image(source)
}

export const PortableTextComponents = {
    types: {
        image: ({value}:any) => {
            return (
                <Image
                  src={urlFor(value).url()}
                  width={200}
                  height={150}
                  alt="Blog Image"
                 />
            )
        },
        youtube: ({ value }: any) => {
            const id = getYouTubeID(value.url);
            return id ? <YouTubeEmbed id={id} /> : null;
          },
    }
}