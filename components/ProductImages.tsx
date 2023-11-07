"use client"

import { useState } from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import clsx from "clsx"
import { Image as ImageType } from "sanity"

import { shimmer, toBase64 } from "@/lib/image"

type Props = {
  images: ImageType[]
  name: string
}

const ProductImages = ({ images, name }: Props) => {
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className="flex flex-col-reverse">
        {/* Image Grid */}
        <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
          <ul className="grid grid-cols-4 gap-6">
            {images.map((image, i) => (
              <div
                key={image._key as string}
                onMouseEnter={() => setIndex(i)}
                className={clsx(
                  "relative flex h-24 cursor-pointer items-center justify-center rounded-md text-sm font-medium  uppercase",
                  i === index ? "bg-red-600" : "bg-white "
                )}
              >
                <span className="absolute inset-0 overflow-hidden rounded-md">
                  <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(200, 200)
                    )}`}
                    src={urlForImage(image).url()}
                    width={200}
                    height={200}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </span>
                {i === index && (
                  <span
                    className="pointer-events-none absolute inset-0 rounded-md ring-4 ring-indigo-500"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Main Image */}
        <div className="aspect-h-1 aspect-w-1 w-full">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(600, 750)
            )}`}
            src={urlForImage(images[index]).url()}
            alt={`Main ${name} image`}
            width={600}
            height={750}
            className="h-full w-full border-2 border-gray-200 object-contain object-center shadow-sm hover:bg-red-600 dark:border-gray-800 sm:rounded-lg md:h-[550px] lg:h-[650] xl:h-[750]"
          />
        </div>
      </div>
    </>
  )
}

export default ProductImages
