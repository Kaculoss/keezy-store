"use client"

import Link from "next/link"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Product } from "@/types"
import { Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import { BoxProduct } from "./product"

interface IProps {
  featuredProducts: Product[]
}

const FeaturedProducts = ({ featuredProducts }: IProps) => {
  return (
    <div className="mx-0 mt-20 border-2 border-sky-500 p-2 sm:mx-4">
      <div className="mb-2 flex w-full items-end justify-between gap-4">
        <h3 className="ml-4 text-xl font-extrabold tracking-wider sm:text-3xl">
          Featured Products
        </h3>
        <Link
          href="/products"
          className="cursor pointer mr-4 rounded-xl bg-sky-500 px-2 py-1 text-base font-bold tracking-wider text-slate-900 sm:text-xl"
        >
          Shop Now
        </Link>
      </div>

      {featuredProducts.length && (
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          // centeredSlides={true}
          navigation
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex h-full w-full items-center justify-center">
                <BoxProduct product={product} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  )
}

export default FeaturedProducts
