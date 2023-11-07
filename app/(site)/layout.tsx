import "@/styles/globals.css"

import { Metadata } from "next"
import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
} from "next/font/google"
import Providers from "@/providers/providers"
import { FilterType, FootList } from "@/types"
import { ClerkProvider } from "@clerk/nextjs"

import { siteConfig } from "@/lib/config"
import {
  getBrandProducts,
  getBrands,
  getCategories,
  getColours,
} from "@/lib/getFunctions"
import { cn } from "@/lib/utils"
import CartBar from "@/components/CartBar"
import FilterSmall from "@/components/FilterSmall"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Sidebar from "@/components/Sidebar"
import SidebarSmall from "@/components/SidebarSmall"
import SiteBlob from "@/components/SiteBlob"

const fontMono = FontMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--fontMono",
})
const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--fontSans",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
}

export const revalidate = 0

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [categories, brands, colours, brandProducts] = await Promise.all([
    getCategories(),
    getBrands(),
    getColours(),
    getBrandProducts(),
  ])

  const categoryFilter: FilterType = {
    id: "category",
    name: "Category",
    options: categories.map((category) => ({
      value: category.name,
      label: category.name,
    })),
  }

  const brandFilter: FilterType = {
    id: "brand",
    name: "Brand",
    options: brands.map((brand) => ({ value: brand.name, label: brand.name })),
  }

  const colourFilter: FilterType = {
    id: "colour",
    name: "Colour",
    options: colours
      .map((colour) => ({
        value: colour.name,
        label: colour.name,
      }))
      .reduce((acc: { value: string; label: string }[], curr) => {
        const isAdded = acc.find((item) => item.value === curr.value)
        if (!isAdded) {
          acc.push({ value: curr.value, label: curr.label })
        }
        return acc
      }, []),
  }

  const filters: FilterType[] = [categoryFilter, brandFilter, colourFilter]

  const initList: FootList[] = [
    { name: "Home", slug: "/", id: "home" },
    { name: "Products", slug: "/products", id: "/products" },
    { name: "Categories", slug: "/categories", id: "/categories" },
    { name: "Brands", slug: "/brands", id: "/brands" },
    { name: "Account", slug: "/account", id: "/account" },
    { name: "Contact Us", slug: "/contact-us", id: "/contact-us" },
  ]

  const initCatList = categories.reduce((acc, cur) => {
    acc.push({
      name: cur.name,
      slug: `/categories/${cur.slug}`,
      id: cur._id,
    })
    return acc
  }, initList)

  const finalList = brandProducts.reduce((acc, cur) => {
    acc.push({
      name: cur.name,
      slug: `/brands/${cur.slug}`,
      id: cur._id,
    })

    cur.products.forEach((product) => {
      acc.push({
        name: product.name,
        slug: `/products/${product.slug}`,
        id: product._id,
      })
    })

    return acc
  }, initCatList)

  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${fontMono.variable} ${fontSans.variable}`}
      >
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <SiteBlob />
              <div className="relative flex-1">
                <CartBar />
                <FilterSmall filters={filters} />
                <SidebarSmall
                  categories={categories}
                  brandProducts={brandProducts}
                />
                <div className="max-w-8xl mx-auto min-h-full px-4 sm:px-6 md:px-8">
                  <Sidebar
                    categories={categories}
                    brandProducts={brandProducts}
                  />
                  <div className="lg:pl-[20rem]">
                    {children}
                    <div className="mt-12">
                      <Footer footList={finalList} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
