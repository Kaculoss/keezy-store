"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrandAndCategory, BrandProducts } from "@/types"

import SidebarMainItem from "./ui/SidebarMainItem"
import SidebarSubItem from "./ui/SidebarSubItem"

interface iProps {
  categories: BrandAndCategory[]
  brandProducts: BrandProducts[]
}

const Sidebar = ({ categories, brandProducts }: iProps) => {
  const pathname = usePathname()

  return (
    <div className="left-[max(0px, calc(50%-45rem))] fixed inset-0 right-auto top-[3.8125rem] z-20 hidden w-[20rem] overflow-y-auto px-8 py-10 lg:block">
      <nav className="relative lg:text-sm lg:leading-6">
        <ul>
          <li className="-ml-px">
            <ul>
              {categories.map((item) => (
                <SidebarMainItem
                  key={item._id}
                  itemName={item.name}
                  itemUrl={`/categories/${item.slug}`}
                  selected={pathname === `/categories/${item.slug}`}
                  itemImage={item.image}
                />
              ))}
            </ul>
          </li>

          {brandProducts.map((item) => (
            <li key={item._id} className="mt-12 lg:mt-8">
              <Link href={`/brands/${item.slug}`}>
                <h5
                  className={
                    pathname === `/brands/${item.slug}`
                      ? "mb-8 font-bold text-sky-600 dark:text-sky-500 lg:mb-3"
                      : "mb-8 font-semibold text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400 lg:mb-3"
                  }
                >
                  {item.name}
                </h5>
              </Link>
              <ul className="space-y-6 border-l border-slate-100 dark:border-slate-800 lg:space-y-2">
                {item.products.map((product) => (
                  <SidebarSubItem
                    key={product._id}
                    itemName={product.name}
                    itemUrl={`/products/${product.slug}`}
                    selected={pathname === `/products/${product.slug}`}
                  />
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar
