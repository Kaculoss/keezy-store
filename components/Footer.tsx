"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FootList } from "@/types"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai"

type Props = {
  footList?: FootList[]
}

const Footer = ({ footList }: Props) => {
  const pathname = usePathname()
  const [prevItem, setPrevItem] = useState<string[]>([])
  const [nextItem, setNextItem] = useState<string[]>([])

  useEffect(() => {
    if (footList) {
      const index = footList.findIndex((item) => {
        if (item.name === "Account")
          return pathname === item.slug || pathname === "/sign-in"

        return item.slug === pathname
      })
      const prevIndex = index - 1 < 0 ? -1 : index - 1
      const nextIndex =
        index + 1 >= footList.length || index + 1 === 0 ? -1 : index + 1

      if (prevIndex === -1) {
        setPrevItem([])
      }

      if (prevIndex !== -1) {
        setPrevItem([footList[prevIndex].name, footList[prevIndex].slug])
      }

      if (nextIndex === -1) {
        setNextItem([])
      }

      if (nextIndex !== -1) {
        setNextItem([footList[nextIndex].name, footList[nextIndex].slug])
      }
    }
  }, [pathname, footList])

  return (
    <footer className="text-sm leading-6">
      <div className="mb-10 flex items-center font-semibold text-slate-700 dark:text-slate-200">
        {prevItem.length === 0 ? (
          <div className="group flex items-center text-transparent">
            <p className="text-transparent">none</p>
          </div>
        ) : (
          <Link
            href={prevItem[1]}
            className="group flex items-center hover:text-slate-900 dark:hover:text-white "
          >
            <ChevronLeftIcon className="mr-3 h-2 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
            {prevItem[0]}
          </Link>
        )}

        {nextItem.length === 0 ? (
          <div className="group flex items-center text-transparent">
            <p className="text-transparent">none</p>
          </div>
        ) : (
          <Link
            href={nextItem[1]}
            className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white "
          >
            {nextItem[0]}
            <ChevronRightIcon className="ml-3 h-2 w-auto overflow-visible text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300" />
          </Link>
        )}
      </div>

      <div className="justify-between border-t border-slate-200 pb-28 pt-10 text-slate-500 dark:border-slate-200/5 sm:flex">
        <div className="mb-6 sm:mb-0 sm:flex ">
          <p>2023 Keezy Store</p>
          <p className="sm:ml-4 sm:border-l sm:border-slate-200 sm:pl-4 dark:sm:border-slate-200/5">
            <Link
              href="/"
              className="hover:text-slate-900 dark:hover:text-slate-400"
            >
              All rights reserved
            </Link>
          </p>
        </div>
        <div className="flex">
          <Link
            href="/"
            className="ml-auto block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <AiFillInstagram className="h-5 w-5 text-current" />
          </Link>
          <Link
            href="/"
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <AiOutlineTwitter className="h-5 w-5 text-current" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
