"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { CartProduct, Product } from "@/types"
import {
  LucideCreditCard,
  LucideFileSearch,
  LucideShoppingCart,
} from "lucide-react"

import { shimmer, toBase64 } from "@/lib/image"
import { formatter, getPercentDiff } from "@/lib/utils"
import useCart from "@/hooks/use-cart"
import useWeb from "@/hooks/use-web"

import ToolTip from "../ToolTip"
import { useToast } from "../ui/use-toast"

interface Iprops {
  product: Product
}

const BoxProduct = ({ product }: Iprops) => {
  const { setCartBarTrue } = useWeb()
  const { toast } = useToast()
  const { addItem } = useCart()

  function buyNow() {
    addToCart()
    setCartBarTrue()
  }

  function addToCart() {
    const color = product.colours ? product.colours[0].name : ""
    const cartItem: CartProduct = {
      name: product.name,
      description: product.description,
      id: product._id,
      price: product.price,
      image: product.image,
      quantity: 1,
      createdAt: new Date().toLocaleString(),
      colour: color,
      brand: product.brand?.name,
      category: product.category?.name,
    }
    addItem(cartItem)

    toast({
      title: `${product.name}${
        product.colours && ` (${product.colours[0].name})`
      })`,
      description: "Product added to cart",
    })
  }

  return (
    <div className="group relative flex w-48 flex-col items-center justify-center px-2 text-center duration-300 sm:w-56">
      {product.old_price && product.old_price > product.price && (
        <div className="absolute left-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-slate-50 sm:h-14 sm:w-14 sm:text-base">
          <p>-{getPercentDiff(product.price, product.old_price)}%</p>
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Link href={`/products/${product.slug}`} className="cursor-pointer">
            <Image
              priority
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(250, 250)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              height={250}
              width={250}
              className="h-52 w-40 object-contain sm:h-60 sm:w-52"
            />
          </Link>

          <Link
            href={`/products/${product.slug}`}
            className="absolute bottom-0 hidden h-10 w-full overflow-y-hidden bg-white/80 px-1 text-center text-sm font-light text-slate-700 animate-in slide-in-from-bottom duration-300 group-hover:block dark:bg-slate-900/80 dark:text-slate-400 sm:h-12 "
          >
            {product.description}
          </Link>

          <div className="absolute right-4 top-4 hidden flex-col items-center justify-center divide-y-2 bg-white/80 animate-in slide-in-from-right duration-300 group-hover:flex dark:bg-slate-900/80">
            <div className="p-2">
              <ToolTip tooltip="Buy Now" position="left">
                <LucideCreditCard
                  className="hover: cursor-pointer opacity-80"
                  onClick={buyNow}
                />
              </ToolTip>
            </div>
            <div className="p-2">
              <ToolTip tooltip="Quick View" position="left">
                <Link href={`/products/${product.slug}`}>
                  <LucideFileSearch className="hover: cursor-pointer opacity-80" />
                </Link>
              </ToolTip>
            </div>
            <div className="p-2">
              <ToolTip tooltip="Add To Cart" position="left">
                <LucideShoppingCart
                  className="hover: cursor-pointer opacity-80"
                  onClick={addToCart}
                />
              </ToolTip>
            </div>
          </div>
        </div>
      </div>

      <Link
        href={`/products/${product.slug}`}
        className="mt-2 flex cursor-pointer flex-col items-center justify-center gap-1 text-center"
      >
        <h3 className="px-1 text-sm font-semibold tracking-wider sm:text-base">
          {product.name}
        </h3>
        <p className="flex flex-col items-center justify-center gap-1 px-1 text-center text-sm font-semibold tracking-wider sm:text-base">
          {product.old_price && product.old_price > product.price && (
            <span className="text-xs text-slate-600 line-through dark:text-slate-400 sm:text-sm">
              {formatter.format(product.old_price)}
            </span>
          )}
          <span className="text-sky-500 dark:text-sky-400">
            {formatter.format(product.price)}
          </span>
        </p>
      </Link>
    </div>
  )
}

export default BoxProduct
