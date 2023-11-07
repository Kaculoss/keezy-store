"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"
import { AiOutlineShopping } from "react-icons/ai"

import { formatter } from "@/lib/utils"
import useCart from "@/hooks/use-cart"
import useWeb from "@/hooks/use-web"

import CartItem from "./CartItem"
import { useToast } from "./ui/use-toast"

const CartBar = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { cartBar, setCartBarFalse } = useWeb()
  const pathname = usePathname()
  const { toast } = useToast()
  const removeAll = useCart((state) => state.removeAll)
  const items = useCart((state) => state.items)

  const sortedItems = items.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return dateA - dateB
  })

  const totalQty = items.reduce((current, item) => {
    return (current += item.quantity)
  }, 0)

  const totalPrice = items.reduce((current, item) => {
    return (current += item.quantity * item.price)
  }, 0)

  function clearCartItems() {
    removeAll()
    toast({
      title: `Cart Items Cleared`,
      description: "All Products removed from cart",
      variant: "destructive",
    })
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={clsx(
        "fixed  inset-y-0 z-50 overflow-y-auto bg-background  p-6 shadow-lg ",
        cartBar
          ? `right-0  flex w-full flex-col animate-in slide-in-from-top duration-300 md:w-[60%] lg:w-[45%] ${
              pathname === "/products"
                ? " top-[54.0417px] sm:top-[61.0938px] lg:top-[72px]"
                : "top-[57.1007px] lg:top-[72px]"
            }`
          : "hidden animate-out slide-out-to-top duration-300"
      )}
    >
      <div className="flex w-full items-center justify-between gap-2">
        <button
          type="button"
          className="ml-2 flex cursor-pointer items-center gap-0.5 border-none bg-transparent hover:text-slate-900 dark:hover:text-slate-300 sm:mt-4"
          onClick={setCartBarFalse}
        >
          <span className="sr-only">Close Cart</span>
          <ChevronLeftIcon
            className="overflow-visible"
            height={24}
            width={24}
          />
          <span className="ml-2">Your Cart</span>
          <span className="ml-2 text-red-600">({totalQty} items)</span>
        </button>

        <button
          type="button"
          onClick={clearCartItems}
          className="cursor-pointer border border-red-600 bg-transparent p-2 text-sm font-medium text-red-600 transition hover:border-red-400 hover:text-red-400 "
        >
          Clear Cart
        </button>
      </div>

      <div className="mt-3 flex-1 overflow-y-auto px-2 py-5 lg:mt-4">
        {items.length < 1 ? (
          <div className="flex h-full w-full flex-col   items-center  justify-center text-slate-700 dark:text-slate-400">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link href="/products">
              <button
                className="w-max-[400px] mt-4 cursor-pointer rounded-xl border-none bg-red-600 p-3 text-lg uppercase text-slate-100"
                type="button"
                onClick={setCartBarFalse}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <>
            {sortedItems.map((value) => (
              <CartItem key={value.id} product={value} />
            ))}
            <div className="mt-2 flex w-full flex-col border-t border-slate-200 px-16 py-3 text-slate-500 dark:border-slate-200/5">
              <div className="mb-2 flex w-full flex-col items-end justify-start gap-3  ">
                <h3 className="text-base font-medium">
                  Subtotal: {formatter.format(totalPrice)}
                </h3>
                <h3 className="fornt-normal text-sm">
                  Shipping Estimate: {formatter.format(10)}
                </h3>
                <h3 className="mt-4 text-lg font-semibold text-sky-500 dark:text-sky-400">
                  Order Total
                </h3>
                <h3>
                  <span className="text-lg font-semibold text-sky-500 dark:text-sky-400">
                    {formatter.format(totalPrice + 10)}
                  </span>
                </h3>
              </div>
              <div className="m-auto flex w-full justify-center">
                <Link
                  href="/cart-summary"
                  onClick={setCartBarFalse}
                  className="w-full text-center bg-violet-600 py-2 rounded-lg mt-2 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-50 hover:opacity-50"
                >
                  Proceed To Checkout Page
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartBar
