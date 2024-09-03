import Image from 'next/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { useNextSanityImage } from 'next-sanity-image'
import client from '@/sanity/config/client-config'
import YouTubeEmbed from "./youtubeEmbed";
import CodeEmbed from './codeEmbed';
import CodepenEmbed from './codepenEmbed';
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
        className="mx-auto"
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

export const PortableTextComponents: Partial<PortableTextReactComponents> = {
    types: {
        image: ({ value }: any) => {
          return <SanityImage {...value} />
        },
        youtube: ({ value }: any) => {
          const id = getYouTubeID(value.url);
          return id ? <YouTubeEmbed id={id} /> : null;
        },
        code: ({ value }: any) => {
          return <CodeEmbed {...value} />
        },
        codepen: ({ value }: any) => {
          return <CodepenEmbed {...value} />
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