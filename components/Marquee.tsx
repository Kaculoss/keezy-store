import React from "react"
import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { BrandAndCategory, Product } from "@/types"

import { shimmer, toBase64 } from "@/lib/image"

import { BoxProduct } from "./product"

type Props = {
  products?: Product[]
  others?: BrandAndCategory[]
}

const Marquee = ({ products, others }: Props) => {
  return (
    <>
      {products && (
        <div className="mx-auto my-20 flex w-full flex-col items-center">
          <h2 className="text-center text-xl font-bold underline">
            You May Also like
          </h2>
          <div className="mb- mx-auto mt-6 max-w-full overflow-hidden">
            <div className="flex gap-6">
              <div className="hover:pause flex min-w-full shrink-0 animate-scroll-left-1 items-center justify-around gap-6">
                {products.map((item) => {
                  return <BoxProduct key={item._id} product={item} />
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {others && (
        <div className="mx-auto my-20 max-w-full overflow-hidden bg-slate-200">
          <div className="flex gap-6">
            <div className="flex min-w-full animate-scroll-left items-center justify-around gap-6 px-2 py-4 ">
              {others.map((item) => {
                return (
                  <Image
                    placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(200, 200)
                    )}`}
                    key={item._id}
                    src={urlForImage(item.image).url()}
                    alt={item.name}
                    height={200}
                    width={200}
                    className="w-[120px] object-contain md:w-[150px]"
                  />
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Marquee
