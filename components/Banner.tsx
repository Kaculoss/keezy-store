"use client"

import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { Product } from "@/types"

import { shimmer, toBase64 } from "@/lib/image"
import { formatter, getPercentDiff } from "@/lib/utils"

interface Iprops {
  type: number
  product: Product
}

const Banner = ({ type, product }: Iprops) => {
  if (type === 1)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-violet-500 p-3"
      >
        <div className="relative h-full w-full flex-1">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in zoom-in-110 duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-violet-950 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}%</p>
            </div>
          )}
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-0.5 py-0.5 lg:gap-2 lg:py-2">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-start gap-0.5 text-left animate-in slide-in-from-top duration-700 lg:gap-2">
            <p className="text-base font-bold lg:text-3xl">{product.name}</p>
            <p className="text-xs font-medium lg:text-lg">
              {product.description}
            </p>
            <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-violet-950 lg:p-1 lg:py-0.5 lg:text-lg">
              {formatter.format(product.price)}
              {product.old_price && product.old_price > product.price && (
                <span className="absolute left-full top-0 text-[10px] font-medium text-violet-950 line-through lg:text-sm">
                  {formatter.format(product.old_price)}
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            className="animate-pulse rounded-md bg-violet-950 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
        </div>
      </Link>
    )

  if (type === 2)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-orange-500 p-3"
      >
        <div className="flex-2 flex h-full w-full flex-col items-start justify-center gap-1 text-left animate-in slide-in-from-left duration-700">
          <p className="text-xs font-medium lg:text-lg">
            {product.description}
          </p>
          <p className="text-base font-bold lg:text-3xl">{product.name}</p>
        </div>
        <div className="flex-3 relative h-full w-full">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in slide-in-from-top duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute right-0 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-orange-950 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}</p>
            </div>
          )}
        </div>

        <div className="flex-2 flex h-full w-full flex-col items-end justify-center gap-3 text-right animate-in slide-in-from-right duration-700 lg:gap-6">
          <button
            type="button"
            className="animate-bounce rounded-md bg-orange-950 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
          <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-orange-950 lg:p-1 lg:py-0.5 lg:text-lg">
            {formatter.format(product.price)}
            {product.old_price && product.old_price > product.price && (
              <span className="absolute right-full top-0 text-[10px] font-medium text-orange-950 line-through lg:text-sm">
                {formatter.format(product.old_price)}
              </span>
            )}
          </p>
        </div>
      </Link>
    )

  if (type === 3)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-red-500 p-3"
      >
        <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-0.5 py-0.5 lg:gap-2 lg:py-2">
          <button
            type="button"
            className="animate-pulse rounded-md bg-red-800 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-0.5 text-left animate-in slide-in-from-bottom duration-700 lg:gap-2">
            <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-red-800 lg:p-1 lg:py-0.5 lg:text-lg">
              {formatter.format(product.price)}
              {product.old_price && product.old_price > product.price && (
                <span className="absolute left-full top-0 text-[10px] font-medium text-red-800 line-through lg:text-sm">
                  {formatter.format(product.old_price)}
                </span>
              )}
            </p>
            <p className="text-base font-bold lg:text-3xl">{product.name}</p>
            <p className="text-xs font-medium lg:text-lg">
              {product.description}
            </p>
          </div>
        </div>

        <div className="relative h-full w-full flex-1">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in slide-in-from-right duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-red-800 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}</p>
            </div>
          )}
        </div>
      </Link>
    )

  if (type === 4)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-lime-500 p-3"
      >
        <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-0.5 py-0.5 lg:gap-2 lg:py-2">
          <div className="flex h-full w-full flex-1 flex-col items-start justify-start gap-0.5 text-left animate-in slide-in-from-bottom duration-700 lg:gap-2">
            <p className="text-xs font-medium lg:text-lg">
              {product.description}
            </p>
            <p className="text-base font-bold lg:text-3xl">{product.name}</p>
            <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-lime-950 lg:p-1 lg:py-0.5 lg:text-lg">
              {formatter.format(product.price)}
              {product.old_price && product.old_price > product.price && (
                <span className="absolute left-full top-0 text-[10px] font-medium text-lime-950 line-through lg:text-sm">
                  {formatter.format(product.old_price)}
                </span>
              )}
            </p>
          </div>
          <button
            type="button"
            className="animate-bounce rounded-md bg-lime-950 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
        </div>

        <div className="relative h-full w-full flex-1">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in slide-in-from-right duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-lime-950 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}</p>
            </div>
          )}
        </div>
      </Link>
    )

  if (type === 5)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-emerald-500 p-3"
      >
        <div className="flex-2 flex h-full w-full flex-col items-end justify-center gap-3 text-right animate-in slide-in-from-right duration-700 lg:gap-6">
          <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-emerald-800 lg:p-1 lg:py-0.5 lg:text-lg">
            {formatter.format(product.price)}
            {product.old_price && product.old_price > product.price && (
              <span className="absolute right-full top-0 text-[10px] font-medium text-emerald-800 line-through lg:text-sm">
                {formatter.format(product.old_price)}
              </span>
            )}
          </p>
          <button
            type="button"
            className="animate-pulse rounded-md bg-emerald-800 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
        </div>
        <div className="flex-3 relative h-full w-full">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in slide-in-from-top duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute right-0 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}</p>
            </div>
          )}
        </div>

        <div className="flex-2 flex h-full w-full flex-col items-start justify-center gap-1 text-left animate-in slide-in-from-left duration-700">
          <p className="text-base font-bold lg:text-3xl">{product.name}</p>
          <p className="text-xs font-medium lg:text-lg">
            {product.description}
          </p>
        </div>
      </Link>
    )

  if (type === 6)
    return (
      <Link
        href={`/products/${product.slug}`}
        className="flex h-full w-full cursor-pointer items-center justify-between gap-4 bg-sky-500 p-3"
      >
        <div className="relative h-full w-full flex-1">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(500, 500)
            )}`}
            src={urlForImage(product.images[0]).url()}
            alt={product.name}
            height={500}
            width={500}
            className="h-full w-full object-contain animate-in zoom-in-110 duration-1000"
          />
          {product.old_price && product.old_price > product.price && (
            <div className="absolute left-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-sky-950 text-xs font-semibold text-slate-50 lg:h-14 lg:w-14 lg:text-base">
              <p>-{getPercentDiff(product.price, product.old_price)}</p>
            </div>
          )}
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-0.5 py-0.5 lg:gap-2 lg:py-2">
          <button
            type="button"
            className="animate-bounce rounded-md bg-sky-950 p-1 text-xs font-semibold text-slate-50 lg:p-2 lg:text-base"
          >
            Buy Now
          </button>
          <div className="flex h-full w-full flex-1 flex-col items-start justify-end gap-0.5 text-left animate-in slide-in-from-top duration-700 lg:gap-2">
            <p className="text-base font-bold lg:text-3xl">{product.name}</p>
            <p className="relative rounded bg-slate-50 p-0.5 py-0 text-xs font-bold text-sky-950 lg:p-1 lg:py-0.5 lg:text-lg">
              {formatter.format(product.price)}
              {product.old_price && product.old_price > product.price && (
                <span className="absolute left-full top-0 text-[10px] font-medium text-sky-950 line-through lg:text-sm">
                  {formatter.format(product.old_price)}
                </span>
              )}
            </p>
            <p className="text-xs font-medium lg:text-lg">
              {product.description}
            </p>
          </div>
        </div>
      </Link>
    )
}

export default Banner
