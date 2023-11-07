import Link from "next/link"
import { XCircle } from "lucide-react"

import { getOneCategoryProduct, getSingleProduct } from "@/lib/getFunctions"
import Marquee from "@/components/Marquee"
import ProductImages from "@/components/ProductImages"
import ProductInfo from "@/components/ProductInfo"

interface IProps {
  params: { product: string }
}

export default async function ProductPage({ params }: IProps) {
  const slug = params.product
  const product = await getSingleProduct(slug)

  let categoryProducts

  if (product) {
    categoryProducts =
      product.category && (await getOneCategoryProduct(product.category.slug))
  }

  return (
    <>
      <div className="mt-8 sm:mt-16">
        <p className="mb-2 text-base font-semibold leading-6 text-sky-500 dark:text-sky-400">
          Product
        </p>
        <div className="mb-16">
          {product && (
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="pb-20 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-12">
                <ProductImages images={product.images} name={product.name} />
                <ProductInfo product={product} />
              </div>
            </div>
          )}

          {!product && (
            <div className="mx-auto flex h-56 w-full flex-1 items-center justify-center  rounded-md border-2 border-dashed bg-gray-50 py-10 text-center dark:bg-gray-900">
              <div>
                <XCircle className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-200" />
                <h1 className="my-2 mb-4 text-xl font-bold tracking-tight text-gray-500 dark:text-gray-200 sm:text-2xl">
                  {`"${slug}" Product Not Found!`}
                </h1>
                <Link
                  href="/products"
                  className=" cursor-pointer rounded bg-gray-900 p-1 text-center text-lg font-bold tracking-tight text-gray-50 dark:bg-gray-50 dark:text-gray-900 sm:text-xl"
                >
                  All Available Products
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {categoryProducts && <Marquee products={categoryProducts.products} />}
    </>
  )
}
