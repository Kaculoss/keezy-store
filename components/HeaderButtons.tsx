"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useAuth, UserButton } from "@clerk/nextjs"
import {
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline"

import CartButton from "./CartButton"
import { ThemeToggle } from "./ThemeToggle"
import ToolTip from "./ToolTip"
import { Input } from "./ui/input"

const HeaderButtons = () => {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()

  const { userId } = useAuth()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

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
    <div className="ml-auto flex items-center border-l border-slate-200 pl-6 dark:border-slate-800 lg:ml-12">
      {pathname === "/products" ? (
        <form className="hidden items-center sm:inline-flex mr-3">
          <Input
            onChange={onChange}
            id="search"
            name="search"
            type="search"
            autoComplete="off"
            placeholder="Search products..."
            className="h-9 w-[300px]"
            defaultValue={defaultSearchQuery}
          />
        </form>
      ) : (
        <ToolTip position="bottom" tooltip="Search">
          <Link
            href="/products"
            className=" flex h-8 w-8 items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300 mr-3"
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon
              width={24}
              height={24}
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            />
          </Link>
        </ToolTip>
      )}

      <label className="sr-only" htmlFor="theme">
        Theme
      </label>

      <ToolTip position="bottom" tooltip="Toggle Theme">
        <ThemeToggle />
      </ToolTip>

      <ToolTip position="bottom" tooltip="Open Cart">
        <CartButton
          classname="ml-3 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          iconClassname="w-5 h-5"
        />
      </ToolTip>

      {userId ? (
        <ToolTip position="bottom" tooltip="User">
          <div className="ml-6">
            <UserButton afterSignOutUrl="/" />
          </div>
        </ToolTip>
      ) : (
        <ToolTip position="bottom" tooltip="Sign in">
          <Link
            href="/sign-in"
            className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
          >
            <UserPlusIcon className="h-5 w-5" fill="currentColor" aria-hidden />
          </Link>
        </ToolTip>
      )}
    </div>
  )
}

export default HeaderButtons
