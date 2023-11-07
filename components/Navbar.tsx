"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()
  const navs = [
    { name: "Home", href: "/", isCurrent: pathname === "/" },
    {
      name: "Products",
      href: "/products",
      isCurrent: pathname.startsWith("/products"),
    },
    {
      name: "Categories",
      href: "/categories",
      isCurrent: pathname.startsWith("/categories"),
    },
    {
      name: "Brands",
      href: "/brands",
      isCurrent: pathname.startsWith("/brands"),
    },
    {
      name: "Orders",
      href: "/orders",
      isCurrent:
        pathname.startsWith("/orders") || pathname.startsWith("/sign-in"),
    },
    {
      name: "Contact Us",
      href: "/contact-us",
      isCurrent: pathname.startsWith("/contact-us"),
    },
  ]

  return (
    <nav className=" w-full text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200 md:h-full">
      <ul className="flex w-full  space-x-4 py-3 sm:space-x-8 md:h-full">
        {navs.map((nav) => (
          <li key={nav.href}>
            <Link
              href={nav.href}
              className={`whitespace-nowrap px-1 py-3 text-center text-xs transition-all duration-300 hover:text-sky-500 dark:hover:text-sky-400 sm:text-sm lg:py-4 ${
                nav.isCurrent &&
                "border-b-4 border-sky-600  text-sky-600 dark:border-sky-500 dark:text-sky-500 "
              }`}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
