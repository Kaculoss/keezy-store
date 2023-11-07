import { client } from "@/sanity/lib/client"
import { Product } from "@/types"
import { groq } from "next-sanity"

import { siteConfig } from "@/lib/config"
import Filters from "@/components/Filter"
import ProductGrid from "@/components/ProductGrid"
import ProductSort from "@/components/ProductSort"

interface Props {
  searchParams: {
    date?: string
    price?: string
    name?: string
    colour?: string
    category?: string
    brand?: string
    search?: string
  }
}

export const revalidate = 0

export default async function ProductsPage({ searchParams }: Props) {
  const {
    date = "desc",
    price,
    colour,
    category,
    brand,
    search,
    name,
  } = searchParams

  const priceOrder = price ? `| order(price ${price})` : ""
  const nameOrder = name ? `| order(name ${name})` : ""
  const dateOrder = date ? `| order(date ${date})` : ""
  const order = `${priceOrder}${nameOrder}${dateOrder}`

  const productFilter = `_type == "product"`
  const colourFilter = colour ? `&& "${colour}" in colours[]->name` : ""
  const categoryFilter = category ? `&& category->name == "${category}"` : ""
  const brandFilter = brand ? `&& brand->name == "${brand}"` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colourFilter}${categoryFilter}${brandFilter}${searchFilter}]`

  const products = await client.fetch<Product[]>(
    groq`${filter} ${order} {
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      "image": images[0].asset->url,
      price,
      old_price,
      details,
      stock,
      sku,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, image, description},
      "category": category->{_id, name, "slug": slug.current, image, description},
      "colours": colours[]->{_id, name, hash}
    }`
  )

  return (
    <div>
      <div className="px-4 pt-10 text-center md:pt-20">
        <h1 className="text-4xl font-extrabold tracking-normal">
          {siteConfig.name}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">
          {siteConfig.description}
        </p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl ">
          <div className="flex items-center justify-between border-b border-gray-200 px-6 pb-4 pt-12 dark:border-gray-800 md:pt-24">
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            <ProductSort />
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="flex w-full items-start justify-between gap-4 px-0 sm:px-6">
              <ProductGrid products={products} />
              <div className="hidden xl:block">
                <Filters />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
