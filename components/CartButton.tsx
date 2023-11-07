"use client"

import { useEffect, useState } from "react"
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

import useCart from "@/hooks/use-cart"
import useWeb from "@/hooks/use-web"

interface IProps {
  classname?: string
  iconClassname?: string
  iconWidth?: number
  iconHeight?: number
  iconFill?: string
}

const CartButton = ({
  classname,
  iconClassname,
  iconWidth,
  iconHeight,
  iconFill,
}: IProps) => {
  const { toggleCartbar } = useWeb()
  const items = useCart((state) => state.items)

  const [isMounted, setIsMounted] = useState(false)

  const totalQty = items.reduce((current, item) => {
    return (current += item.quantity)
  }, 0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <button type="button" className={classname} onClick={toggleCartbar}>
      <span className="relative flex items-center">
        <span className="sr-only">Cart</span>
        <ShoppingBagIcon
          className={iconClassname}
          fill={iconFill || "currentColor"}
          aria-hidden
          width={iconWidth}
          height={iconHeight}
        />
        <span className="text-md absolute right-[-16px] top-[-10px] flex h-5 w-5 items-center justify-center rounded-md bg-amber-500 p-2 font-bold text-red-700  ">
          {totalQty}
        </span>
      </span>
    </button>
  )
}

export default CartButton
