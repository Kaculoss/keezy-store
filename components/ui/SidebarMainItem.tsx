import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Image as SanityImage } from "sanity"
import { shimmer, toBase64 } from "@/lib/image"
import { urlForImage } from "@/sanity/lib/image"

interface IProps {
  itemImage: SanityImage
  itemName: string
  itemUrl: string
  selected: boolean
  clickHandler?: () => void
}

const SidebarMainItem = ({
  itemImage,
  itemName,
  itemUrl,
  selected,
  clickHandler,
}: IProps) => {
  return (
    <li>
      <Link
        href={itemUrl}
        className={
          selected
            ? "group mb-4 flex items-center font-semibold text-sky-500 dark:text-sky-400 lg:text-sm lg:leading-6"
            : "group mb-4 flex items-center font-medium text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 lg:text-sm lg:leading-6"
        }
        onClick={clickHandler}
      >
        <div
          className={
            selected
              ? "dark:group-hover:highlight-white/10 dark:highlight-white/10 mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-sky-200 group-hover:ring-slate-900/10 dark:bg-sky-500 dark:shadow-none dark:ring-0 dark:group-hover:bg-sky-500 dark:group-hover:shadow-none"
              : "dark:group-hover:highlight-white/10 dark:highlight-white/5 mr-4 rounded-md shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-indigo-200 group-hover:ring-slate-900/10 dark:bg-slate-500 dark:shadow-none dark:ring-0 dark:group-hover:bg-indigo-500 dark:group-hover:shadow-none"
          }
        >
          <Image
          placeholder="blur"
                    blurDataURL={`data:image/svg+xml;base64,${toBase64(
                      shimmer(100, 100)
                    )}`}
            className="h-6 w-6 rounded-md"
            src={urlForImage(itemImage).url()}
            width={100}
            height={100}
            alt={itemName}
          />
        </div>
        {itemName}
      </Link>
    </li>
  )
}

export default SidebarMainItem
