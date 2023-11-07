"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrandAndCategory, BrandProducts } from "@/types"
import clsx from "clsx"

import useWeb from "@/hooks/use-web"

import SidebarMainItem from "./ui/SidebarMainItem"
import SidebarSubItem from "./ui/SidebarSubItem"

interface iProps {
  categories: BrandAndCategory[]
  brandProducts: BrandProducts[]
}

const SidebarSmall = ({ categories, brandProducts }: iProps) => {
  const { miniSidebar } = useWeb()
  const pathname = usePathname()

  return (
    <div
      className={clsx(
        " fixed  inset-y-0 z-40 overflow-y-auto bg-background  p-6 shadow-lg",
        miniSidebar
          ? `left-0  block w-80 max-w-[calc(100%-3rem)] animate-in slide-in-from-left duration-300 lg:hidden ${
              pathname === "/products"
                ? " top-[155.375px] sm:top-[109.6px]"
                : "top-[106px]"
            } `
          : "hidden"
      )}
    >
      <nav className="relative mb-4 text-sm ">
        <ul>
          <li className="ml-3">
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
                      ? "mb-3 font-bold text-sky-600 dark:text-sky-500"
                      : "mb-3 font-semibold text-slate-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400"
                  }
                >
                  {item.name}
                </h5>
              </Link>
              <ul className="space-y-4 border-l border-slate-100 dark:border-slate-800">
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

export default SidebarSmall
