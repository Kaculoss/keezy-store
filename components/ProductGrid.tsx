"use client"

import { Product } from "@/types"
import { XCircle } from "lucide-react"

import BoxProduct from "./product/BoxProduct"
import StandardProduct from "./product/StandardProduct"

interface Props {
  products: Product[]
}

export default function ProductGrid({ products }: Props) {
  if (products.length === 0) {
    return (
      <div className="mx-auto flex h-40 w-full flex-1 items-center justify-center  rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
        <div>
          <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
          <h1 className="mt-2 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
            No products found
          </h1>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="hidden w-full flex-1 flex-wrap items-start justify-center gap-4 md:flex ">
        {products.map((product) => (
          <div key={product._id} className="h-fit">
            <StandardProduct product={product} />
          </div>
        ))}
      </div>

      <div className="flex w-full flex-1 gap-3 sm:mx-4  sm:gap-6 md:hidden">
        <div className="w-1/2">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 ">
            {products
              .slice(0, Math.ceil(products.length / 2))
              .map((product) => (
                <div key={product._id} className="h-fit">
                  <BoxProduct product={product} />
                </div>
              ))}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            {products.slice(Math.ceil(products.length / 2)).map((product) => (
              <div key={product._id} className="h-fit">
                <BoxProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
