import { Image, PortableTextBlock } from "sanity"

export type Product = {
  _id: string
  name: string
  slug: string
  description?: string
  images: Image[]
  image: string
  price: number
  old_price?: number
  details: PortableTextBlock[]
  stock: number
  brand?: BrandAndCategory
  category?: BrandAndCategory
  featured?: boolean
  new_product?: boolean
  trending?: boolean
  sku?: string
  colours?: Colour[]
}

export type CartProduct = {
  id: string
  name: string
  price: number
  image: string
  quantity: number
  createdAt: string
  description?: string
  colour?: string
  category?: string
  brand?: string
}

export type FootList = {
  name: string
  slug: string
  id: string
}

export type FilterType = {
  id: string
  name: string
  options: { value: string; label: string }[]
}

export type Colour = {
  _id: string
  name: string
  hash: string
}

export type BrandAndCategory = {
  _id: string
  name: string
  slug: string
  image: Image
  description?: string
}

export type BrandProducts = {
  _id: string
  name: string
  slug: string
  image: Image
  description?: string
  products: BrandProduct[]
}

export type BrandAndCategoryProduct = {
  _id: string
  name: string
  slug: string
  image: Image
  description?: string
  products: Product[]
}

type BrandProduct = {
  _id: string
  name: string
  slug: string
  description?: string
}

export type Order = {
  _id: string
  order_number: string
  email: string
  name: string
  address: string
  phone: string
  status: string
  order_items: OrderItems[]
  createdAt: string
}

type OrderItems = {
  _key: string
  name: string
  price: number
  quantity: number
}
