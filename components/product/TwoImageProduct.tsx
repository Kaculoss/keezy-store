"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { CartProduct, Colour, Product } from "@/types"
import clsx from "clsx"
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

const TwoImageProduct = ({ product }: Iprops) => {
  const [selectedColor, setSelectedColor] = useState<Colour>()
  const [showSelect, setShowSelect] = useState(false)
  const { setCartBarTrue } = useWeb()
  const { toast } = useToast()
  const { addItem } = useCart()

  function buyNow() {
    addToCart()
    setCartBarTrue()
  }

  function addToCart() {
    const color = selectedColor ? selectedColor.name : ""
    const cartItem: CartProduct = {
      name: product.name,
      description: product.description,
      id: product._id,
      price: product.price,
      image: product.image,
      colour: color,
      createdAt: new Date().toLocaleString(),
      quantity: 1,
      brand: product.brand?.name,
      category: product.category?.name,
    }
    addItem(cartItem)
    toast({
      title: `${product.name}${selectedColor && ` (${selectedColor.name})`})`,
      description: "Product added to cart",
    })
  }
  useEffect(() => {
    if (product.colours) {
      setSelectedColor(product.colours[0])
    }
  }, [product.colours])

  const handleSelect = (color: { _id: string; name: string; hash: string }) => {
    setSelectedColor(color)
    setShowSelect(false)
  }

  return (
    <div className="group relative flex w-full flex-col items-center justify-center px-2 text-center duration-300">
      {product.old_price && product.old_price > product.price && (
        <div className="absolute left-4 top-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-sky-700 text-sm font-semibold text-slate-50 sm:h-14 sm:w-14 sm:text-base">
          <p>-{getPercentDiff(product.price, product.old_price)}%</p>
        </div>
      )}

      {product.colours && selectedColor && (
        <div
          className={clsx(
            "absolute inset-0 z-40 hidden items-center justify-center bg-white/90 group-hover:flex dark:bg-slate-900/90",
            showSelect
              ? "visible animate-in fade-in duration-300"
              : "invisible animate-out fade-out duration-100"
          )}
        >
          <ul
            className="dark:highlight-white/5 overflow-hidden rounded-lg bg-white py-1 text-sm font-semibold text-slate-700 shadow-lg ring-1 ring-slate-900/10 animate-in slide-in-from-top duration-300 dark:bg-slate-800 dark:text-slate-300 dark:ring-0"
            aria-orientation="vertical"
            role="listbox"
            tabIndex={0}
          >
            {product.colours.map((color) => (
              <li
                key={color._id}
                className={clsx(
                  "flex cursor-pointer items-center gap-2 px-2 py-1",
                  selectedColor.hash === color.hash ? "text-sky-500" : ""
                )}
                role="option"
                aria-selected={selectedColor.hash === color.hash}
                tabIndex={-1}
                onClick={() => handleSelect(color)}
              >
                {color.hash.startsWith("#") && (
                  <div
                    style={{ backgroundColor: color.hash }}
                    className="h-5 w-5 rounded-full sm:h-6 sm:w-6"
                  />
                )}
                {color.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <Link
            href={`/products/${product.slug}`}
            className={clsx(
              "cursor-pointer",
              product.images.length > 1 && "group-hover:hidden"
            )}
          >
            <Image
              priority
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(700, 700)
              )}`}
              src={urlForImage(product.images[0]).url()}
              alt={product.name}
              height={700}
              width={700}
              className="h-full w-full object-contain"
            />
          </Link>
          {product.images.length > 1 && (
            <Link href={`/products/${product.slug}`} className="cursor-pointer">
              <Image
                priority
                placeholder="blur"
                blurDataURL={`data:image/svg+xml;base64,${toBase64(
                  shimmer(700, 700)
                )}`}
                src={urlForImage(product.images[1]).url()}
                alt={product.name}
                height={700}
                width={700}
                className="hidden h-full w-full object-contain animate-in zoom-in-105 duration-1000 group-hover:block"
              />
            </Link>
          )}
          {product.colours && (
            <button
              type="button"
              onClick={() => setShowSelect(true)}
              className="absolute bottom-0 hidden w-full bg-sky-600/50 py-2 text-center text-base font-semibold tracking-wide text-white animate-in slide-in-from-bottom duration-300 group-hover:block "
            >
              Select Color{" "}
              {selectedColor && <span>({selectedColor.name})</span>}
            </button>
          )}

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
              <Link href={`/products/${product.slug}`}>
                <LucideFileSearch className="hover: cursor-pointer opacity-80" />
              </Link>
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

export default TwoImageProduct
