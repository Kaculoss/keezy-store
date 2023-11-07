"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Product } from "@/types"

import { BoxProduct, TwoImageProduct } from "./product"

interface IProps {
  newProducts: Product[]
}

const NewProducts = ({ newProducts }: IProps) => {
  const [slides, setSlides] = useState<Product[]>([])
  const [nonSlides, setNonSlides] = useState<Product[]>([])

  useEffect(() => {
    if (newProducts) {
      setNonSlides(newProducts.slice(0, 6))
      setSlides(newProducts.slice(6))
    }
  }, [newProducts])

  return (
    <div className="mx-0 mt-20 flex w-full gap-3  p-2 sm:mx-4  sm:gap-6 ">
      <div className="flex w-1/2 flex-col gap-4 border-2 border-sky-500">
        <div className="ml-4 mt-2 flex w-full items-center justify-start">
          <Link
            href="/products"
            className="cursor pointer mr-4 rounded-xl bg-sky-500 px-2 py-1 text-base font-bold tracking-wider text-slate-900 sm:text-xl"
          >
            Shop Now
          </Link>
        </div>
        <div className="hidden w-full flex-wrap items-center justify-center gap-4 md:flex">
          {slides.length &&
            slides.map((product) => (
              <div key={product._id} className="w-56">
                <TwoImageProduct product={product} />
              </div>
            ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 md:hidden">
          {slides.length &&
            slides.map((product) => (
              <BoxProduct key={product._id} product={product} />
            ))}
        </div>
      </div>

      <div className="flex w-1/2  flex-col gap-4">
        <h3 className="ml-4  text-left text-xl font-extrabold tracking-wider sm:text-3xl">
          New Products
        </h3>
        <div className="hidden w-full flex-wrap items-center justify-center gap-4 md:flex">
          {nonSlides.length &&
            nonSlides.map((product) => (
              <div key={product._id} className="w-56">
                <TwoImageProduct product={product} />
              </div>
            ))}
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-4 md:hidden">
          {nonSlides.length &&
            nonSlides.map((product) => (
              <BoxProduct key={product._id} product={product} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
