import { client } from "@/sanity/lib/client"
import {
  BrandAndCategory,
  BrandAndCategoryProduct,
  BrandProducts,
  Colour,
  Order,
  Product,
} from "@/types"
import { groq } from "next-sanity"

export const getFeaturedProducts = async (): Promise<Product[]> => {
  return client.fetch(
    groq`*[_type == "product" && featured == true]{
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      "image": images[0].asset->url,
      price,
      old_price,
      details,
      stock,
      sku,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, image, description},
      "category": category->{_id, name, "slug": slug.current, image, description},
      "colours": colours[]->{_id, name, hash},
   }[0...12]`
  )
}

export const getNewProducts = async (): Promise<Product[]> => {
  return client.fetch(
    groq`*[_type == "product" && new_product == true]{
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      "image": images[0].asset->url,
      price,
      old_price,
      details,
      stock,
      sku,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, image, description},
      "category": category->{_id, name, "slug": slug.current, image, description},
      "colours": colours[]->{_id, name, hash},
   }[0...12]`
  )
}

export const getTrendingProducts = async (): Promise<Product[]> => {
  return client.fetch(
    groq`*[_type == "product" && trending == true]{
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      "image": images[0].asset->url,
      price,
      old_price,
      details,
      stock,
      sku,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, image, description},
      "category": category->{_id, name, "slug": slug.current, image, description},
      "colours": colours[]->{_id, name, hash},
   }[0...8]`
  )
}

export const getCategories = async (): Promise<BrandAndCategory[]> => {
  return client.fetch(
    groq`*[_type == "category"]{
      _id,
      name,
      "slug": slug.current,
      image,
      description,
   }`
  )
}

export const getBrands = async (): Promise<BrandAndCategory[]> => {
  return client.fetch(
    groq`*[_type == "brand"]{
      _id,
      name,
      "slug": slug.current,
      image,
      description,
   }`
  )
}

export const getBrandProducts = async (): Promise<BrandProducts[]> => {
  return client.fetch(
    groq`*[_type == "brand"] {
      _id,
      name,
      "slug": slug.current,
      image,
      description,
	   "products": *[_type == "product" && references(^._id)] {
         _id,
         name,
         "slug": slug.current,
         description,
      }
   }`
  )
}

export const getColours = async (): Promise<Colour[]> => {
  return client.fetch(
    groq`*[_type == "colour"] {
      _id,
      name,
      hash
   }`
  )
}

export const getOneCategoryProduct = async (
  slug: string
): Promise<BrandAndCategoryProduct> => {
  return client.fetch(
    groq`*[_type == "category" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      image,
      description,
	    "products": *[_type == "product" && references(^._id)] {
        _id,
        name,
        "slug": slug.current,
        description,
        images,
        "image": images[0].asset->url,
        price,
        old_price,
        details,
        stock,
        sku,
        reviews,
        "brand": brand->{_id, name, "slug": slug.current, image, description},
        "category": category->{_id, name, "slug": slug.current, image, description},
        "colours": colours[]->{_id, name, hash}
      }
   }`,
    { slug }
  )
}

export const getOneBrandProduct = async (
  slug: string
): Promise<BrandAndCategoryProduct> => {
  return client.fetch(
    groq`*[_type == "brand" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      image,
      description,
	    "products": *[_type == "product" && references(^._id)] {
        _id,
        name,
        "slug": slug.current,
        description,
        images,
        "image": images[0].asset->url,
        price,
        old_price,
        details,
        stock,
        sku,
        reviews,
        "brand": brand->{_id, name, "slug": slug.current, image, description},
        "category": category->{_id, name, "slug": slug.current, image, description},
        "colours": colours[]->{_id, name, hash}
      }
   }`,
    { slug }
  )
}

export const getSingleProduct = async (slug: string): Promise<Product> => {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      description,
      images,
      "image": images[0].asset->url,
      price,
      old_price,
      details,
      stock,
      sku,
      reviews,
      "brand": brand->{_id, name, "slug": slug.current, image, description},
      "category": category->{_id, name, "slug": slug.current, image, description},
      "colours": colours[]->{_id, name, hash},
   }`,
    { slug }
  )
}

export const getOrders = async (email: string): Promise<Order[]> => {
  return client.fetch(
    groq`*[_type == "order" && email == $email] | order(_createdAt desc){
      order_number,
      email,
      name,
      address,
      phone,
      _id,
      "status": order_status,
      "order_items": order_items[]{_key, name, price, quantity},
      "createdAt": _createdAt,
   }`,
    { email }
  )
}
