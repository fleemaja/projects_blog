import Image from 'next/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity/config/client-config'
import YouTubeEmbed from "./youtubeEmbed";
import getYouTubeID from "get-youtube-id";
import Link from "next/link";
import { type PortableTextReactComponents } from '@portabletext/react'
import { createClient, type SanityClient } from 'next-sanity';

interface Props {
  asset: SanityImageSource
  alt: string
  caption?: string
}

const SanityImage = async (props: Props) => {
  const { asset, alt, caption } = props
  const imageProps = useNextSanityImage(createClient(client), asset)

  if (!imageProps) return null

  return (
    <figure>
      <Image
        className="mx-auto max-h-[400px] w-auto rounded-xl"
        src={imageProps.src}
        width={imageProps.width}
        height={imageProps.height}
        alt={alt}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export const CuriosityComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }: any) => {
          return <SanityImage {...value} />
        },
        youtube: ({ value }: any) => {
          const id = getYouTubeID(value.url);
          return id ? <YouTubeEmbed id={id} /> : null;
        },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <Link
            {...value}
            className="text-blue-600 hover:text-blue-500 no-underline"
            target="_blank"
          >
            {children}
          </Link>
        );
      },
    }
}