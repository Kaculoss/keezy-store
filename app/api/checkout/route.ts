// import https from "https";
import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"
import { CartProduct } from "@/types"
import axios from "axios"
import { groq } from "next-sanity"

import { generateOrderNumber } from "@/lib/utils"

interface IProps {
  params: { storeId: string }
}

type InventoryProductType = {
  _id: string
  name: string
  price: number
  image: string
  category?: string
  brand?: string
  description?: string
}

export async function POST(req: Request, { params }: IProps) {
  try {
    const {
      items,
      email,
      fullName,
      phone,
      country,
      city,
      address,
    }: {
      items: CartProduct[]
      email: string
      fullName: string
      country: string
      phone: string
      city: string
      address: string
    } = await req.json()

    if (!items || items.length === 0) {
      return new NextResponse("Product ids are required", { status: 400 })
    }

    if (!email)
      return new NextResponse("Customer not Authenticated", { status: 400 })

    if (!fullName)
      return new NextResponse("Customer fullname is required", { status: 400 })

    if (!phone)
      return new NextResponse("Customer phone is required", { status: 400 })

    if (!country)
      return new NextResponse("Customer country is required", { status: 400 })

    if (!city)
      return new NextResponse("Customer city is required", { status: 400 })

    if (!address)
      return new NextResponse("Customer address is required", { status: 400 })

    const productIds = items.map((item) => item.id)

    const products: InventoryProductType[] = await client.fetch(
      groq`*[_type == "product" && _id in $productIds]{
        _id,
        name,
        price,
        "image": images[0].asset->url,
        "category": category->name,
        "brand": brand->name,
        description,
      }
      `,
      { productIds }
    )

    if (!products || products.length === 0) {
      return new NextResponse("Products not in store", { status: 400 })
    }

    const cartItems = products
      .map((product) => {
        const matchingItem = items.find((item) => item.id === product._id)
        if (matchingItem) {
          return {
            _key: product._id,
            name: product.name,
            price: product.price,
            category: product.category,
            quantity: matchingItem.quantity,
            colour: matchingItem.colour,
            brand: product.brand,
            image: product.image,
            description: product.description,
          }
        }
        return null
      })
      .filter((item) => item !== null) as {
      _key: string
      name: string
      price: number
      category?: string
      quantity: number
      colour?: string
      brand?: string
      image: string
      description?: string
    }[]

    console.log()

    const totalPrice = cartItems.reduce(
      (total, current) => (total += current.price * current.quantity),
      0
    )

    const orderNumber = generateOrderNumber(
      `${new Date().toISOString()}-${email}`
    )

    const orderId = await client
      .create({
        _type: "order",
        order_number: orderNumber,
        name: fullName,
        address: "",
        phone: "",
        email,
        order_items: cartItems,
        order_status: "awaiting",
        isPaid: false,
        payment: "not_paid",
      })
      .then((res) => res._id)

    const origin = req.headers.get("origin")

    const paystackParams = {
      email,
      reference: orderNumber,
      amount: (totalPrice + 10) * 100,
      currency: "GHS",
      callback_url: `${origin}/cart-summary?success=1`,
      metadata: {
        orderId,
        fullName,
        phone,
        country,
        address,
        city,
        cart_products: cartItems,
      },
    }

    const paystackResponse = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      paystackParams,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )

    return NextResponse.json(paystackResponse.data)
  } catch (error) {
    console.log("[CHECKOUT_POST]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
}
