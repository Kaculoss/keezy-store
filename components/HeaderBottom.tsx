"use client"

import React from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Bars3Icon } from "@heroicons/react/24/outline"

import useWeb from "@/hooks/use-web"

import Navbar from "./Navbar"
import ToolTip from "./ToolTip"
import { Input } from "./ui/input"

const HeaderBottom = () => {
  const { toggleSidebar } = useWeb()
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const defaultSearchQuery = searchParams.get("search") ?? ""

  const onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    event.preventDefault()
    const searchQuery = event.currentTarget.value
    const params = new URLSearchParams(searchParams.toString())
    const isSearch = params.has("search")
    if (isSearch) {
      params.delete("search")
    }
    params.set("search", searchQuery)
    router.replace(`/products?${params.toString()}`)
  }

  return (
    <>
      <div className="mx-4 flex items-center justify-start border-b  border-slate-900/10 dark:border-slate-300/10 lg:hidden">
        <ToolTip position="top" tooltip="Menu">
          <button
            type="button"
            className="mr-4 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Navigation</span>
            <Bars3Icon height={24} width={24} />
          </button>
        </ToolTip>

        <div className="flex-1 overflow-hidden overflow-x-auto">
          <Navbar />
        </div>
      </div>

      {pathname === "/products" && (
        <div className="mx-4 flex items-center justify-center border-b   border-slate-900/10 dark:border-slate-300/10 sm:hidden">
          <form className="my-2 inline-flex items-center">
            <Input
              // onChange={onChange}
              id="search"
              name="search"
              type="search"
              autoComplete="off"
              placeholder="Search products..."
              className="h-9 w-[300px]"
              // defaultValue={defaultSearchQuery}
            />
          </form>
        </div>
      )}
    </>
  )
}

export default HeaderBottom
