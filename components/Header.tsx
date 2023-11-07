import React from "react"
import Image from "next/image"
import Link from "next/link"

import { shimmer, toBase64 } from "@/lib/image"

import logo from "../public/logo.png"
import HeaderBottom from "./HeaderBottom"
import HeaderButtons from "./HeaderButtons"
import Navbar from "./Navbar"

const Header = async () => {
  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 backdrop-blur transition-colors duration-500 dark:border-slate-50/[0.06] dark:bg-transparent lg:z-50 lg:border-b lg:border-slate-900/10">
      <div className="max-w-8xl mx-auto">
        <div className="mx-4 border-b border-slate-900/10 py-3 dark:border-slate-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="relative flex h-full items-center">
            <Link
              href="/"
              className="mr-3 w-auto flex-none overflow-hidden md:w-auto"
            >
              <span className="sr-only">Keezy home page</span>
              <div className="flex h-auto w-auto items-center text-slate-900 dark:text-white">
                <Image
                  priority
                  placeholder="blur"
                  blurDataURL={`data:image/svg+xml;base64,${toBase64(
                    shimmer(20, 20)
                  )}`}
                  className="mr-2 rounded-md "
                  src={logo}
                  width={40}
                  height={40}
                  alt="logo"
                />
                <h1 className="text-xl font-bold tracking-wider">
                  Keezy Store
                </h1>
              </div>
            </Link>

            <div className="relative ml-auto hidden h-full items-center lg:flex">
              <Navbar />
            </div>

            <HeaderButtons />
          </div>
        </div>

        <HeaderBottom />
      </div>
    </div>
  )
}

export default Header
