

import { Slug } from "./productInventory"

export interface BrandInventory {
  _id: string
  name: string
  slug: Slug
  image: string
  priority?: number
  description?: string
  _type?: "brands" | "categories"
  _updatedAt?: string
  _createdAt?: string
  _rev?: string
}

export const brandInventory: BrandInventory[] = [
  {
    _id: "0057f75a-82de-4919-9cef-c583f4348fbf",
    slug: {
      _type: "slug",
      current: "rolex",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/2ad5619cb6ae20fdbe245bcb6637024571ef12b7-1200x601.png",
    name: "Rolex",
    description: "Rolex watches",
  },
  {
    slug: {
      _type: "slug",
      current: "hp",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/385479912f6d60c568d7feb81f5088c113713255-512x512.png",
    name: "Hp",
    description: "Hp laptops",
    _id: "26b1d50e-634b-4722-966f-fc269ec63caf",
  },
  {
    _id: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
    slug: {
      current: "keezy",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/a64b345016e96adfb8849af5521c8e0ecfe8f027-555x555.webp",
    name: "Keezy",
    description: "Get your best headphones",
  },
  {
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/288f055a9bebad17e12c97b3edef0a6f367a8b05-2171x2016.png",
    name: "Caveman",
    description: "Caveman watches",
    _id: "6d3a981f-2834-4137-9c1e-06e56ed2fae6",
    slug: {
      current: "caveman",
      _type: "slug",
    },
  },
  {
    slug: {
      current: "infinix",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/58972332ee9d8d6df9da84107369803f80aa037c-500x500.png",
    name: "Infinix",
    description: "Infinix phones",
    _id: "6d53cc9f-caf6-48f8-a335-4fd1bfff201f",
  },
  {
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/08f10377a7c909942576daeb0413339412811d14-300x104.webp",
    name: "Prady",
    description: "Prady products",
    _id: "745772f6-e2bf-470a-962c-94fbd24fa9d7",
    slug: {
      current: "prady",
      _type: "slug",
    },
  },
  {
    _id: "79e6432c-7808-433e-91cb-0bca14a871f3",
    slug: {
      current: "samsung",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/f5dea2feb71decbbf05f421cc7cbe1116984001a-1200x630.png",
    name: "Samsung",
    description: "Samsung products",
  },
  {
    _id: "7b803b99-b88f-47ea-a807-61730b35f82d",
    slug: {
      current: "tecno",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/961adfb60337a0a176d5b567b5f02cf5682478ca-605x229.png",
    name: "Tecno",
    description: "Tecno products",
  },
  {
    _id: "84819449-f18d-4310-8ad5-00316029fa75",
    slug: {
      current: "chupez",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/b801d6b4c7ec862bd6d6a6c0afb6de0af740e669-2559x751.png",
    name: "Chupez",
    description: "Chupez products",
  },
  {
    name: "Bulova",
    description: "Bulova watches",
    _id: "99e420e5-1754-431a-8f00-6ee5f0e1e242",
    slug: {
      current: "bulova",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/a71a0f63e76543ecebeaaa0eef3b3d6ee7aecead-300x142.png",
  },
  {
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/4e11a8febc0f49b13a8d94e3b89c0469a15f87f0-2560x687.png",
    name: "Acer",
    description: "Acer laptops",
    _id: "be716198-ceec-4647-8e63-eb302f917e6f",
    slug: {
      current: "acer",
      _type: "slug",
    },
  },
  {
    _id: "c1b973d2-5906-4c50-a079-1ede6102af2f",
    slug: {
      _type: "slug",
      current: "vention",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/9b25e382b5e9f8e900395f11679968fb5f1e7c20-1024x119.png",
    name: "Vention",
    description: "Vention products",
  },
  {
    name: "Apple Inc.",
    description: "Apple products",
    _id: "d44d2338-5607-46cd-8d4d-16c55edd18af",
    slug: {
      current: "apple-inc",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/1990b934007682a9fb7baa99c09e59d09503a8e9-1280x567.png",
  },
  {
    slug: {
      current: "dell",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/c2aa4c9839dff3760904f42e6e0c99ab46a214e4-480x480.png",
    name: "Dell",
    description: "Dell laptops",
    _id: "df8faadd-77f1-4fb2-9af7-212e091df27e",
  },
  {
    slug: {
      current: "nokia",
      _type: "slug",
    },
    image:
      "https://cdn.sanity.io/images/wxq9vw0t/production/b12d275d01f935f3051d7373105d9b667cf8c8b5-3000x2000.png",
    name: "Nokia",
    description: "Nokia phones",
    _id: "f84cf5d2-07de-48a0-a3a7-6ec0d5157ee4",
  },
]
