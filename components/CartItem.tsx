"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CartProduct } from "@/types"
import { TrashIcon } from "@heroicons/react/24/outline"

import { shimmer, toBase64 } from "@/lib/image"
import { formatter } from "@/lib/utils"
import useCart from "@/hooks/use-cart"

import QuantityToggle from "./QuantityToggle"
import ToolTip from "./ToolTip"
import { useToast } from "./ui/use-toast"

interface IProps {
  product: CartProduct
}

const CartItem = ({ product }: IProps) => {
  const [productQty, setProductQty] = useState<number>(product.quantity)
  const { toast } = useToast()
  const { increaseQuantity, decreaseQuantity, removeItem } = useCart()

  const increaseQty = () => {
    productQty + 1 < 11 && increaseQuantity(product.id)
  }

  const decreaseQty = () => {
    productQty - 1 >= 1 && decreaseQuantity(product.id)
  }

  useEffect(() => {
    setProductQty(product.quantity)
  }, [product.quantity])

  function removeCartItem() {
    removeItem(product.id)
    toast({
      title: `${product.name} removed`,
      description: "Product removed from cart",
      variant: "destructive",
    })
  }

  return (
    <div className="mb-1 flex w-full items-center justify-between gap-2 border-y border-t-[0.5px] border-slate-200 px-1 py-5 text-slate-500 dark:border-slate-200/5 lg:p-5">
      <Image
        priority
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 600))}`}
        className="h-20 w-20 rounded-md bg-slate-400"
        src={product.image!}
        width={600}
        height={600}
        alt={product.name}
      />

      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <div className="flex w-full flex-col items-start justify-start gap-1">
          <h4 className="text-base text-slate-900 dark:text-slate-200">
            {product.name}
          </h4>
          <div className="flex w-full items-center justify-between">
            <div className="flex flex-col items-start justify-start">
              <p className="text-xs text-slate-900 dark:text-slate-200">
                Price:
              </p>
              <p className="text-xs text-slate-700 dark:text-slate-400">
                {formatter.format(product.price)}
              </p>
            </div>
            <div className="flex flex-col items-start justify-start">
              <p className="text-xs text-slate-900 dark:text-slate-200">
                Colour:
              </p>

              <p className="text-xs text-slate-700 dark:text-slate-400">
                {product.colour}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <QuantityToggle
            quantity={productQty}
            decrease={decreaseQty}
            increase={increaseQty}
            canDecrease={productQty > 1}
            canIncrease={productQty < 10}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h4 className="text-sm text-sky-500 dark:text-sky-400 ">
          {formatter.format(product.price * product.quantity)}
        </h4>
        <ToolTip position="left" tooltip="Remove Item">
          <button
            type="button"
            className="cursor-pointer border-none bg-transparent"
            onClick={removeCartItem}
          >
            <TrashIcon
              className="text-red-600 hover:text-red-500"
              height={24}
              width={24}
            />
          </button>
        </ToolTip>
      </div>
    </div>
  )
}

export default CartItem
