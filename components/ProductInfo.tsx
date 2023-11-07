"use client"

import { useEffect, useState } from "react"
import { dataset, projectId } from "@/sanity/env"
import { CartProduct, Colour, Product } from "@/types"
import PortableText from "react-portable-text"

import { formatter } from "@/lib/utils"
import useCart from "@/hooks/use-cart"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import QuantityToggle from "./QuantityToggle"

interface Props {
  product: Product
}

export default function ProductInfo({ product }: Props) {
  const [selectedColor, setSelectedColor] = useState<Colour>()
  const [quantity, setQuantity] = useState<number>(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    if (product.colours) {
      setSelectedColor(product.colours[0])
    }
  }, [product.colours])

  function addToCart() {
    const color = selectedColor ? selectedColor.name : ""
    const cartItem: CartProduct = {
      name: product.name,
      description: product.description,
      id: product._id,
      price: product.price,
      image: product.image,
      colour: color,
      createdAt: new Date().toLocaleString(),
      quantity,
      brand: product.brand?.name,
      category: product.category?.name,
    }
    addItem(cartItem)

    toast({
      title: `${product.name}${selectedColor && ` (${selectedColor.name})`})`,
      description: "Product added to cart",
    })
  }

  const increase = () => {
    setQuantity((prevAmount) => (prevAmount + 1 < 11 ? prevAmount + 1 : 10))
  }

  const decrease = () => {
    setQuantity((prevAmount) => (prevAmount - 1 >= 1 ? prevAmount - 1 : 1))
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>
      <div className="space-y-6 text-sm">{product.description}</div>

      <div className=" mt-3">
        <h2 className="sr-only">Product Information</h2>
        <p className="relative text-3xl tracking-tight">
          {product.old_price && product.old_price > product.price && (
            <span className="absolute left-full top-0 text-xl tracking-tight line-through">
              {formatter.format(product.old_price)}
            </span>
          )}
          {formatter.format(product.price)}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Details</h3>
        <div className="space-y-6 text-base">
          <PortableText
            content={product.details}
            dataset={dataset}
            projectId={projectId}
            serializers={{
              h1: (props: any) => (
                <h1 className="text-3xl font-bold " {...props} />
              ),
              h2: (props: any) => (
                <h2 className="text-2xl font-bold " {...props} />
              ),
              h3: (props: any) => (
                <h3 className="text-2xl font-bold " {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a
                  className="cursor-pointer text-sky-500 hover:underline"
                  href={href}
                >
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </div>

      <div className="mt-4">
        <p>
          SKU: <strong>{product.sku || "None"}</strong>
        </p>
      </div>

      <div className="mt-4">
        <p>
          Category: <strong>{product.category?.name || "None"}</strong>
        </p>
      </div>

      <div className="mt-4">
        <p>
          Brand: <strong>{product.brand?.name || "None"}</strong>
        </p>
      </div>

      <div className="mt-4">
        <p>
          Available:{" "}
          <strong>{product.stock > 0 ? "In Stock" : "Out of Stock"}</strong>
        </p>
      </div>

      <div className="mt-4">
        <p>
          Colour: <strong>{selectedColor?.name || "None"}</strong>
        </p>
        {product.colours &&
          product.colours.map((colour) => (
            <Button
              onClick={() => setSelectedColor(colour)}
              key={colour.hash}
              variant={
                selectedColor?.name === colour.name ? "default" : "outline"
              }
              className="mr-2 mt-4"
            >
              {colour.name}
            </Button>
          ))}
      </div>

      {product.stock > 0 && (
        <div className="mt-6">
          <QuantityToggle
            increase={increase}
            decrease={decrease}
            quantity={quantity}
            canDecrease={quantity > 1}
            canIncrease={quantity < 11}
          />
        </div>
      )}

      {product.stock > 0 && (
        <form className="mt-2">
          <div className="mt-4 flex">
            <Button
              type="button"
              onClick={addToCart}
              className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              Add to cart
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}
