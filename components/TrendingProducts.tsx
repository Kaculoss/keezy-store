import Link from "next/link"
import { Product } from "@/types"

import { BoxProduct, StandardProduct } from "./product"

interface IProps {
  trendingProducts: Product[]
}

const TrendingProducts = ({ trendingProducts }: IProps) => {
  return (
    <div className="mx-0 mt-20 flex w-full flex-col gap-4 sm:mx-4">
      <div className="flex w-full items-end justify-between gap-4">
        <h3 className="ml-4 text-xl font-extrabold tracking-wider sm:text-3xl">
          Trending Products
        </h3>
        <Link
          href="/products"
          className="cursor pointer mr-4 rounded-xl bg-sky-500 px-2 py-1 text-base font-bold tracking-wider text-slate-900 sm:text-xl"
        >
          Shop Now
        </Link>
      </div>
      <div className="hidden w-full flex-wrap items-center justify-center gap-4 gap-y-6 md:flex ">
        {trendingProducts.map((product) => (
          <StandardProduct key={product._id} product={product} />
        ))}
      </div>

      <div className="flex w-full gap-3 sm:mx-4  sm:gap-6 md:hidden">
        <div className="w-1/2">
          <div className="flex w-full flex-wrap items-center justify-center gap-4 ">
            {trendingProducts.slice(0, 4).map((product) => (
              <BoxProduct key={product._id} product={product} />
            ))}
          </div>
        </div>

        <div className="w-1/2">
          <div className="flex w-full flex-wrap items-center justify-center gap-4">
            {trendingProducts.slice(4).map((product) => (
              <BoxProduct key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingProducts
