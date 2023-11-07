import Link from "next/link"
import { XCircle } from "lucide-react"

import { getBrands, getOneCategoryProduct } from "@/lib/getFunctions"
import CarouselSlider from "@/components/CarouselSlider"
import Marquee from "@/components/Marquee"
import { BoxProduct, StandardProduct } from "@/components/product"

type Props = {
  params: { category: string }
}

export const revalidate = 0

export default async function CategoryPage({ params }: Props) {
  const slug = params.category
  const [categoryProducts, brands] = await Promise.all([
    getOneCategoryProduct(slug),
    getBrands(),
  ])

  return (
    <>
      {categoryProducts && (
        <CarouselSlider trendingProducts={categoryProducts.products} />
      )}
      <div className="mt-6">
        <p className="mb-2 text-base font-semibold leading-6 text-sky-500 dark:text-sky-400">
          Category
        </p>
        <div className="mb-16">
          {categoryProducts && (
            <div>
              <div className="flex items-center">
                <h1 className="inline-block text-2xl font-extrabold tracking-wider sm:text-3xl">
                  {categoryProducts.name}
                </h1>
              </div>
              <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
                {categoryProducts.description}
              </p>
            </div>
          )}

          <div className="hidden md:block">
            <div className="mt-5 flex w-full flex-wrap justify-center gap-4">
              {categoryProducts &&
                categoryProducts.products.map((product) => (
                  <StandardProduct key={product._id} product={product} />
                ))}
            </div>
          </div>

          {!categoryProducts && (
            <div className="mx-auto flex h-56 w-full flex-1 items-center justify-center  rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
              <div>
                <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
                <h1 className="my-2 mb-4 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
                  {`"${slug}" Category Not Found!`}
                </h1>
                <Link
                  href="/categories"
                  className=" cursor-pointer rounded bg-gray-900 p-1 text-center text-lg font-bold tracking-tight text-gray-50 dark:bg-gray-50 dark:text-gray-900 sm:text-xl"
                >
                  All Available Categories
                </Link>
              </div>
            </div>
          )}

          <div className="block md:hidden">
            {categoryProducts && (
              <div className="mt-5 flex w-full gap-2 sm:gap-4 md:hidden">
                <div className="w-1/2">
                  <div className="flex w-full flex-wrap items-center justify-center gap-4 ">
                    {categoryProducts.products
                      .slice(0, Math.ceil(categoryProducts.products.length / 2))
                      .map((product) => (
                        <BoxProduct key={product._id} product={product} />
                      ))}
                  </div>
                </div>

                <div className="w-1/2">
                  <div className="flex w-full flex-wrap items-center justify-center gap-4">
                    {categoryProducts.products
                      .slice(Math.ceil(categoryProducts.products.length / 2))
                      .map((product) => (
                        <BoxProduct key={product._id} product={product} />
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Marquee others={brands} />
    </>
  )
}
