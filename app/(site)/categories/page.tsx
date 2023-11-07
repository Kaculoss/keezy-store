import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

import { getBrands, getCategories } from "@/lib/getFunctions"
import { shimmer, toBase64 } from "@/lib/image"
import Marquee from "@/components/Marquee"

export default async function CategoriesPage() {
  const [categories, brands] = await Promise.all([getCategories(), getBrands()])

  return (
    <>
      <div className="my-20">
        <div>
          <div className="flex items-center">
            <h1 className="inline-block text-2xl font-extrabold tracking-wider sm:text-3xl ">
              Categories
            </h1>
          </div>
        </div>
        <div>
          <div className="mt-5 flex w-full flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/categories/${category.slug}`}
                className="mx-2 flex h-56 w-40 scale-100 cursor-pointer flex-col items-center justify-center p-2 shadow-xl transition-transform duration-500 hover:scale-105 md:h-64 md:w-52"
              >
                <Image
                  priority
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(500, 500)
                  )}`}
                  className="h-[150px] w-[150px] scale-100 rounded-2xl bg-slate-400 transition-transform duration-500 md:h-[180px] md:w-[180px]"
                  height={500}
                  width={500}
                  src={urlForImage(category.image).url()}
                  alt={category.name}
                />
                <div className="mt-2 w-full">
                  <p className="font-bold text-slate-900 dark:text-slate-200">
                    {category.name}
                  </p>
                  <p className="font-normal text-slate-700 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Marquee others={brands} />
    </>
  )
}
