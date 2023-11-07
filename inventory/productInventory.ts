import { Image, PortableTextBlock } from "sanity"

interface MyInventoryProduct {
  _id: string
  name: string
  description?: string | null
  images: string[]
  price: number
  details: PortableTextBlock[]
  stock: number
  rating?: number
  reviews?: number
  brand?: Reference
  category?: Reference
  featured?: boolean
  new?: boolean
  trending?: boolean
  priority?: number
  colours?: Colors[]
  _updatedAt?: string
  sku?: string
  _rev?: string

  slug: Slug
  _type?: "product"
}

export interface Reference {
  _ref: string
  _type: "reference"
}

export interface Colors extends Reference {
  _key: string
}

export interface Slug {
  current: string
  _type: "slug"
}

export interface SanityProduct extends Omit<MyInventoryProduct, "images"> {
  _id: string
  _createdAt: Date
  images: Image[]
}

export const productsInventory: MyInventoryProduct[] = [
  // {
  //   category: {
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //     _type: "reference",
  //   },
  //   price: 25,
  //   details: [
  //     {
  //       _key: "0439bd4756d0",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "ebfb450212d50",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c75a86469a6cd490d41eb544d6c40aafaea960ef-640x640.png",
  //   ],
  //   slug: {
  //     current: "12i-case",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //       _type: "reference",
  //       _key: "24925115b34b",
  //     },
  //   ],
  //   stock: 23,
  //   brand: {
  //     _ref: "6d53cc9f-caf6-48f8-a335-4fd1bfff201f",
  //     _type: "reference",
  //   },
  //   _id: "01d3e7dd-dd03-4c26-b727-1205e4ea4a61",
  //   description: "Infinix Hot 12i Case Silicone",
  //   name: "12i Case",
  // },
  // {
  //   price: 4600,
  //   name: "iPhone 11 Pro Max",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The iPhone 11 Pro Max is a larger and more advanced version of the iPhone 11 Pro, released by Apple in 2019. It has a 6.5-inch Super Retina XDR OLED display with a resolution of 1242 x 2688 pixels and is powered by Apple's A13 Bionic chip, which has a hexa-core 2.65 GHz processor and 4GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 11 Pro Max comes in storage options of 64GB, 256GB, or 512GB, and has a non-removable 3969 mAh battery. Other features include Face ID facial recognition, water and dust resistance, Dolby Atmos sound, and support for iOS 13, which can be upgraded to iOS 15. It is available in midnight green, space gray, silver, and gold color options.",
  //           _key: "a6ed832a782a0",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "6090ef6bb806",
  //     },
  //   ],
  //   _id: "0b2df2a9-cc06-43fb-98aa-63e6ca178e2a",
  //   stock: 19,
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "iPhone 11 Pro Max 512GB",
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7af3ee6ef8722153d2ffb8ae07c718183de7afab-940x1112.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c1365963c17092bc2e6a1e1f20450fd6e47ed92c-900x800.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/36bf7a68a5e0a30bd9583f019a3fa409364c4d16-940x1112.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/fc3229c863e8458250b2ddfbace977cb80bd7e80-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/199eef7c806d25879c006ed84191a898ec15219e-940x1112.png",
  //   ],
  //   slug: {
  //     current: "iphone-11-pro-max",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //       _type: "reference",
  //       _key: "af31e03a061d",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "409330dd2251",
  //     },
  //   ],
  // },
  // {
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       _key: "5345d66e6e51",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "ec132dcd880b0",
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 13 Pro is a high-end smartphone released by Apple in 2021. It has a 6.1-inch Super Retina XDR OLED display with a resolution of 1170 x 2532 pixels and is powered by Apple's A15 Bionic chip, which has a hexa-core processor with two high-performance cores and four high-efficiency cores, and 6GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with True Depth technology and 4K video recording. The iPhone 13 Pro comes in storage options of 128GB, 256GB, 512GB, or 1TB, and has a non-removable battery with up to 22 hours of talk time. Other features include Face ID facial recognition, water and dust resistance, MagSafe technology for wireless charging and accessories, and support for iOS 15. It is available in graphite, gold, silver, and sierra blue color options.",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8c15e1e74a4afffffe9b22e659192769206cbd9e-392x392.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/06a65cc7295f984e87742bcdcbe01f74aec14aa7-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/d280172ccf4b723bdbb819e9f3ac41ae64347842-470x556.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/239654a6aaea58a167cc3ab3301910e049f259ff-1960x1568.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e60ebc842fed37f74e10903304a8d658cea6eb2a-470x556.png",
  //   ],
  //   slug: {
  //     _type: "slug",
  //     current: "iphone-13-pro",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "c40dbde3832a",
  //       _ref: "468c4175-ca79-4114-a831-12791bdaf67d",
  //     },
  //     {
  //       _ref: "7de87587-a8f0-403b-bafd-067764c2f998",
  //       _type: "reference",
  //       _key: "33c1d8c7070b",
  //     },
  //     {
  //       _key: "907cfeb36e86",
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //     },
  //     {
  //       _key: "e5abbe79f03b",
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //     },
  //   ],
  //   _id: "0f44ad36-0f25-4b79-a50d-c66fa8f61ff2",
  //   stock: 23,
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "iPhone 13 Pro 1TB",
  //   price: 7400,
  //   name: "iPhone 13 Pro",
  // },
  // {
  //   stock: 150,
  //   details: [
  //     {
  //       children: [
  //         {
  //           marks: [],
  //           text: "Nice earphones for ",
  //           _key: "01e64d0c88a60",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "future generations",
  //           _key: "b3ca62072867",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "b58a2f4cd93b",
  //       markDefs: [],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/d94ff929298f01a3054f89844df3e1a67489b0e8-900x900.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9945618cb6150813c237942a285c0af8597c7718-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c46b11a10e78628ed54e2c31eb58162f8a568050-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/1711120c6aae6a8edd5d35bff5193b1502480d79-900x820.webp",
  //   ],
  //   colours: [
  //     {
  //       _ref: "f52f9cef-69cf-4601-a929-1249e4369945",
  //       _type: "reference",
  //       _key: "b2dea7832481",
  //     },
  //     {
  //       _key: "9abb2b6627d7",
  //       _ref: "456e4e23-fa1e-40e6-a68c-1835f894cd16",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "ff6b3956-ed2e-4814-886d-24f0e3f6d6eb",
  //       _type: "reference",
  //       _key: "c8e1f4057387",
  //     },
  //     {
  //       _ref: "01e7520f-8860-4685-836e-5664efe2ebae",
  //       _type: "reference",
  //       _key: "9a7b36714c0c",
  //     },
  //   ],
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   description: "Keezy Earphone",
  //   category: {
  //     _type: "reference",
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //   },
  //   price: 300,
  //   name: "Earphone",
  //   _id: "215263ae-a7eb-43b8-8c53-78b42b2c0d80",
  //   slug: {
  //     current: "earphone",
  //     _type: "slug",
  //   },
  // },
  // {
  //   slug: {
  //     current: "samsung-case",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _key: "6bb9d9cdca96",
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //       _type: "reference",
  //     },
  //   ],
  //   name: "Samsung Case",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e93a85cf21e59db24c051225724a16fed97436db-595x595.webp",
  //   ],
  //   _id: "232a0893-4450-48d1-8fd7-dac1aa59b5d4",
  //   category: {
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //     _type: "reference",
  //   },
  //   price: 19,
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "da1b6d3988cc0",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "6b12ccd33b15",
  //     },
  //   ],
  //   stock: 99,
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   description: "Samsung Phone cases",
  // },
  // {
  //   description: "Glass Protector for iPad 9th/8th/7th Gen",
  //   category: {
  //     _ref: "388600a8-af92-4567-963f-fe5ef7af0e67",
  //     _type: "reference",
  //   },
  //   price: 30,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8b92f953dba894c819e209d9c5961b68a7dae7f8-1024x1024.webp",
  //   ],
  //   slug: {
  //     current: "glass-protector",
  //     _type: "slug",
  //   },
  //   stock: 25,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   _id: "24fa19ab-e5e3-4daa-a194-b5d06f60406e",
  //   colours: [
  //     {
  //       _ref: "2c27fcf1-f742-4f75-97e1-76f101e6274f",
  //       _type: "reference",
  //       _key: "b97a8405ef20",
  //     },
  //   ],
  //   name: "Glass Protector",
  //   details: [
  //     {
  //       _key: "9ce273272850",
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "Protector your phone screen with this awesome protector ",
  //           _key: "02e6904ea1b00",
  //           _type: "span",
  //           marks: [],
  //         },
  //         {
  //           _key: "65d901e897c5",
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "(10.2inc)",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  // },
  // {
  //   stock: 15,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   description: "iPhone 6 16GB",
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   name: "iPhone 6",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The iPhone 6 is a flagship smartphone released by Apple in 2014. It has a 4.7-inch IPS LCD display with a resolution of 750 x 1334 pixels and is powered by Apple's A8 chip, which has a dual-core 1.4 GHz processor and ",
  //           _key: "7acfb8abe9b70",
  //           _type: "span",
  //           marks: [],
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "1GB of RAM",
  //           _key: "56ef3a775478",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". It has an",
  //           _key: "3aa4720f4ffe",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: " 8-megapixel",
  //           _key: "3044b095da0a",
  //           _type: "span",
  //         },
  //         {
  //           _key: "f4f93c5b4779",
  //           _type: "span",
  //           marks: [],
  //           text: " rear camera with phase detection autofocus and optical image stabilization, as well as a 1.2-megapixel front-facing camera. The iPhone 6 comes in storage options of 16GB, 64GB, or 128GB, and has a non-removable 1810 mAh battery. Other features include Touch ID fingerprint sensor, Apple Pay, and support for iOS 8, which can be upgraded to iOS 12. It is available in space gray, silver, and gold color options.",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "ec81378ad6da",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/37277f0a5dd99932108f57c4f913541b41023860-192x192.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/6e5c6c4a7308c3c1cd86e59c6ba4e82334cb2548-470x360.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/175d6a538a2e1f8c86cc7671a7b4f5ccc7eef603-700x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b6b3d00a5a717fa89aa4e46c597f1ca220f5e7e9-470x556.png",
  //   ],
  //   slug: {
  //     current: "iphone-6",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //       _type: "reference",
  //       _key: "c44d95afd660",
  //     },
  //     {
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //       _key: "6625eddf2872",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "e0a946f8bf42",
  //     },
  //   ],
  //   price: 948,
  //   _id: "27a56be3-51e2-4e9e-8cce-df0c3835030c",
  // },
  // {
  //   stock: 33,
  //   category: {
  //     _type: "reference",
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //   },
  //   details: [
  //     {
  //       _key: "1c3e3494522c",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "6f73b52455d90",
  //           _type: "span",
  //           marks: [],
  //           text: "Rolex is a Swiss luxury watch brand known for producing high-quality, durable, and accurate timepieces. Rolex watches come in a wide variety of styles and models, including the iconic Submariner, Datejust, and Day-Date lines. Rolex watches are made from high-quality materials, including stainless steel, gold, and diamonds, and are often water-resistant and shock-resistant. They are also known for their advanced technologies, such as their Perpetual self-winding movement and the Parachrom hairspring, which offers greater resistance to temperature changes and shocks. Rolex watches are sold through authorized dealers and are typically associated with luxury, status, and high resale value.",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   colours: [
  //     {
  //       _ref: "a645da88-e5e7-4253-88bc-10587ca32573",
  //       _type: "reference",
  //       _key: "c553472b62cc",
  //     },
  //   ],
  //   brand: {
  //     _ref: "0057f75a-82de-4919-9cef-c583f4348fbf",
  //     _type: "reference",
  //   },
  //   description: null,
  //   price: 6000,
  //   name: "Rolex Gold Strip",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8694162585b6bcd212b4c57c5f75972fd26ff6e2-450x450.webp",
  //   ],
  //   _id: "2b976952-944f-4cb8-bd7c-db7251ae3db0",
  //   slug: {
  //     current: "rolex-gold-strip",
  //     _type: "slug",
  //   },
  // },
  // {
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The Samsung Galaxy S21 5G is a high-end smartphone released by Samsung in 2021. It has a 6.2-inch Dynamic AMOLED 2X display with a resolution of 1080 x 2400 pixels and a 120Hz refresh rate, and is powered by Samsung's Exynos 2100 or Qualcomm's Snapdragon 888 chipset, depending on the region. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 10-megapixel front-facing camera with autofocus and 4K video recording. The Samsung Galaxy S21 5G comes in storage options of 128GB or 256GB, and has a non-removable 4000 mAh battery with fast charging and wireless charging capabilities. Other features include 5G connectivity, an under-display fingerprint sensor, water and dust resistance, and support for wireless DeX and Samsung Pay. It runs on Android 11 with Samsung's One UI 3.1, and is available in phantom gray, phantom white, phantom violet, and phantom pink color options.",
  //           _key: "17146a07b8b80",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "5f5c9ae65c2a",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/074a40850207eb24ce384fb292b9a423a4685d1e-650x519.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/42d561da21e1bb3750b85a862b60ac783bf9ba74-720x454.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e447005ed7f2a243914e00cfe9978fe78cadc613-1421x2000.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c8c525f6d34aacc140eda388e66e53abc815e8c1-800x800.png",
  //   ],
  //   _id: "2d990194-2426-415b-890a-aee842f2a7ea",
  //   colours: [
  //     {
  //       _ref: "5fb0c028-3d60-4896-b969-0e120307f8f3",
  //       _type: "reference",
  //       _key: "a87d08e7109f",
  //     },
  //     {
  //       _ref: "99ee3618-2bd0-45a8-92c1-46f85f6a7b7d",
  //       _type: "reference",
  //       _key: "701ef44627e2",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "81b8863fdd52",
  //       _ref: "9701e9b3-f1de-4bac-9caf-edc6ebe2e097",
  //     },
  //     {
  //       _key: "8ee061914748",
  //       _ref: "ba3a8d48-dda1-4bf3-aeba-0850e0b0e3ca",
  //       _type: "reference",
  //     },
  //   ],
  //   stock: 14,
  //   description: "Samsung Galaxy S21 5G 128GB",
  //   price: 2400,
  //   name: "Galaxy S21",
  //   slug: {
  //     current: "galaxy-s21",
  //     _type: "slug",
  //   },
  // },
  // {
  //   category: {
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //     _type: "reference",
  //   },
  //   price: 100,
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "3543ffcaca93",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Use these while working out",
  //           _key: "8e0a8bcf16820",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   slug: {
  //     current: "in-ear-headphones",
  //     _type: "slug",
  //   },
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   description: "Keezy In-ear hehoneadp",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2dcd6804ac04c28574e5bf088348e9459121166e-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/07fd4b12012f56f93ee9c5090a09754b4d8ee9dd-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/18cffd876ecb5abec2d26637bea5dd549928029c-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e080e19ff807ee022d04d04db072d9376d94da36-600x600.webp",
  //   ],
  //   _id: "33feb6d1-f003-49ad-8aaa-61e26e838050",
  //   colours: [
  //     {
  //       _ref: "095d37ad-4eca-4a50-b975-4384f1afe568",
  //       _type: "reference",
  //       _key: "73806d94a312",
  //     },
  //     {
  //       _ref: "a67e84ad-d8fe-436f-975b-500490ab61cd",
  //       _type: "reference",
  //       _key: "f869fb3308a0",
  //     },
  //     {
  //       _ref: "456e4e23-fa1e-40e6-a68c-1835f894cd16",
  //       _type: "reference",
  //       _key: "cc15ae8904e8",
  //     },
  //   ],
  //   stock: 300,
  //   name: "In-ear Headphones",
  // },
  // {
  //   stock: 60,
  //   brand: {
  //     _ref: "84819449-f18d-4310-8ad5-00316029fa75",
  //     _type: "reference",
  //   },
  //   description: "Chupez 2 USB Port Phone Charger",
  //   price: 30,
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "792a8c8f0b23",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "64b3d297fcdc0",
  //           _type: "span",
  //           marks: [],
  //           text: "Charge both iPhones and Samsung phones with this great charger",
  //         },
  //       ],
  //     },
  //   ],
  //   _id: "34c70e9a-fa15-4efe-9820-dc643a17f7b8",
  //   slug: {
  //     _type: "slug",
  //     current: "chupez-charger",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "ab81ad0f2490",
  //       _ref: "456e4e23-fa1e-40e6-a68c-1835f894cd16",
  //     },
  //   ],
  //   category: {
  //     _ref: "87731b9d-6643-431f-bc4c-a5d815d1f21e",
  //     _type: "reference",
  //   },
  //   name: "Chupez Charger",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2996cd4871a3faf940c5748fc10436ba6f9c8b96-1000x1000.png",
  //   ],
  // },
  // {
  //   description: "Samsung Galaxy A33 5G screen Protector",
  //   price: 20,
  //   name: "A33 Protector",
  //   details: [
  //     {
  //       children: [
  //         {
  //           _key: "1501e9fefc150",
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone screen with this awesome protector",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "2e73220ee6fe",
  //       markDefs: [],
  //     },
  //   ],
  //   slug: {
  //     current: "a33-protector",
  //     _type: "slug",
  //   },
  //   stock: 50,
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   _id: "362b5b2a-042c-494f-a2a2-c1101e707dac",
  //   colours: [
  //     {
  //       _ref: "2c27fcf1-f742-4f75-97e1-76f101e6274f",
  //       _type: "reference",
  //       _key: "aff634e7c55e",
  //     },
  //     {
  //       _key: "94ca848de3ef",
  //       _ref: "ac69bb6b-541f-4226-957b-46c89634438e",
  //       _type: "reference",
  //     },
  //   ],
  //   category: {
  //     _ref: "388600a8-af92-4567-963f-fe5ef7af0e67",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/31556e813753b1fe6f414548f86ab6473fda2903-650x519.webp",
  //   ],
  // },
  // {
  //   _id: "363e1363-5ec6-4aac-9236-4c027bfc445f",
  //   slug: {
  //     current: "45w-fast-charger",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "75bd3aba76bd",
  //       _ref: "01e7520f-8860-4685-836e-5664efe2ebae",
  //     },
  //   ],
  //   description: "Samsung 45W Super fast Charger",
  //   category: {
  //     _type: "reference",
  //     _ref: "87731b9d-6643-431f-bc4c-a5d815d1f21e",
  //   },
  //   price: 80,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9c7ab08a478bd7f32f961d3401223bb634e0ce8b-650x519.webp",
  //   ],
  //   stock: 4,
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   name: "45W Fast Charger",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Charger your android phones faster with this C - C cabled charger",
  //           _key: "caf1625877f80",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "828e5afcaa0c",
  //     },
  //   ],
  // },
  // {
  //   stock: 15,
  //   category: {
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //     _type: "reference",
  //   },
  //   name: "Caveman Leather",
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "d09d1a33b718",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The Caveman Watch is a brand of watches known for their unique and rugged design. They are typically made with high-quality materials such as stainless steel and leather, and often feature large watch faces with bold numerals and hands. Some models also incorporate unique features such as compasses or built-in flashlights. The brand offers a range of styles and designs, from more traditional-looking dress watches to sportier options. It is worth noting that the brand has had some controversy surrounding it, with some customers reporting poor quality and customer service experiences.",
  //           _key: "2a9cf40fa4630",
  //           _type: "span",
  //         },
  //       ],
  //     },
  //   ],
  //   slug: {
  //     current: "caveman-leather",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "f27b735f-1b5e-4f9a-bb65-30659d141c4b",
  //       _type: "reference",
  //       _key: "10b1663e2e52",
  //     },
  //     {
  //       _ref: "f948848b-0102-456e-ae8e-8a1ddacf27d3",
  //       _type: "reference",
  //       _key: "7ddfe6bd2218",
  //     },
  //   ],
  //   brand: {
  //     _ref: "6d3a981f-2834-4137-9c1e-06e56ed2fae6",
  //     _type: "reference",
  //   },
  //   description: "Caveman Leather Watch",
  //   price: 2000,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a9f6c7dd3050ae5a90a335dfbc605a2599633281-1157x1279.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/d74d37929da4398d56bbd369f45dac21248036ad-1200x1510.webp",
  //   ],
  //   _id: "37b2ecfa-fd50-40e2-b231-fea799876671",
  // },
  // {
  //   brand: {
  //     _type: "reference",
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //   },
  //   description: "Galaxy S23 Phone Cover",
  //   price: 28,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8b43ca612c0f1e4445d1edae8af9e6dd0532e964-1500x2045.webp",
  //   ],
  //   slug: {
  //     _type: "slug",
  //     current: "s23-cover",
  //   },
  //   colours: [
  //     {
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //       _type: "reference",
  //       _key: "e43b344eb684",
  //     },
  //   ],
  //   stock: 20,
  //   category: {
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //     _type: "reference",
  //   },
  //   name: "S23 Cover",
  //   details: [
  //     {
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "1f0c1430d0d50",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "d5eede08a8f3",
  //       markDefs: [],
  //     },
  //   ],
  //   _id: "3918e17f-52ae-4258-a286-607e83dcafaf",
  // },
  // {
  //   stock: 5,
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   price: 1050,
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "7cabd4b99dbc",
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The MDR-7506 is a staple within the recording, film and live arenas. Due to its low impedance and closed-ear design, these headphones do an outstanding job of cutting down background noise while providing plenty of volume in the studio or in the field. Additionally, the closed design helps eliminate headphone bleed when overdubbing in the studio. The MDR-7506 is an over-ear design and is ideal for use with MIDI workstations, camcorders, or other equipment with less than powerful headphone amplification. The headphone has a foldable design, making it convenient to store or transport, and its coiled cable allows it to stretch and spring back into place whenever you need a bit more reach.",
  //           _key: "25c1c078f17e0",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/47b31e41aa6cd8bdbf2c0f3a6f03ac90c81d5746-900x900.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a526b96131f4da2799071600492f8afbe4de62a3-900x900.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c6f278aa0550e1c5617d26e67944086f8a21a4c8-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f024f1fb4c4048936932a8a391d7d6adc415b288-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a205aaa5ac2c75342801e683c3b78ea2fff8913b-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/82ad0a754a506295f243c53e205a5a47bfd81355-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0ef032c9302fa60035ca21b3763b907c45b64c73-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7779cbf27cbc8125c28234fde710cb4b2bf34ec0-600x600.webp",
  //   ],
  //   slug: {
  //     current: "mdr-7506",
  //     _type: "slug",
  //   },
  //   description: "Keezy Headphone",
  //   category: {
  //     _type: "reference",
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //   },
  //   name: "MDR-7506",
  //   _id: "3d4f8d70-0505-4935-984d-07115ea64d84",
  //   colours: [
  //     {
  //       _ref: "ada82420-c523-4fb6-bbdb-9dba416c4a72",
  //       _type: "reference",
  //       _key: "4ab937888f61",
  //     },
  //     {
  //       _ref: "07d85a20-98d8-4d84-9258-76781caa9a99",
  //       _type: "reference",
  //       _key: "fd7802b111f6",
  //     },
  //     {
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //       _key: "ecc5be888023",
  //     },
  //   ],
  // },
  // {
  //   name: "MacBook Air",
  //   details: [
  //     {
  //       children: [
  //         {
  //           text: "The MacBook Air is a line of lightweight and ultra-portable laptops produced by Apple. The latest MacBook Air model released in 2020 features Apple's M1 chip, which delivers a powerful performance while also being energy efficient. The MacBook Air has a sleek and thin design with a 13.3-inch Retina display and is available in three colors: silver, space gray, and gold. It also has a backlit keyboard and a Force Touch trackpad that supports multi-touch gestures. The MacBook Air features Touch ID, which allows users to easily unlock their laptop and make secure purchases with Apple Pay. It comes with macOS pre-installed and offers a range of productivity and creative tools, including the ability to run iOS apps. The MacBook Air has a battery life of up to 15 hours and supports Wi-Fi 6 for faster wireless connectivity. It also has Thunderbolt 3 ports for connecting to external displays, storage devices, and other peripherals.",
  //           _key: "3c2c7f9dcc840",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "eea88fb5679e",
  //       markDefs: [],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c4de6b7e1fb53f654b1fa52c2f60ce96cca055ba-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2bd758e3406084ed32587cc97a7217e8e23b18bb-1080x1080.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/381cbe7707b0b2f3c3fdc34833c2e3e4795beefe-2384x2272.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/883ff48c78e2d0f62d632ef44190686b29731739-1600x998.webp",
  //   ],
  //   _id: "3dbedfca-0d9a-4d72-ab41-96d1de0fb19e",
  //   slug: {
  //     current: "macbook-air",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _key: "f922e364d041",
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "8fb4d61f99be",
  //     },
  //   ],
  //   description: null,
  //   category: {
  //     _ref: "a81fb437-0b05-4686-8e35-c5a0aeeb46dd",
  //     _type: "reference",
  //   },
  //   price: 9500,
  //   stock: 23,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  // },
  // {
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   price: 1149,
  //   name: "iPhone 6",
  //   details: [
  //     {
  //       _key: "e71f97f7dfb0",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "f8fa56641ce70",
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 6 is a flagship smartphone released by Apple in 2014. ",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //     {
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "9ab73e1ffd64",
  //           _type: "span",
  //           marks: [],
  //           text: "It has a 4.7-inch IPS LCD display with a resolution of 750 x 1334 pixels and is powered by Apple's A8 chip, which has a dual-core 1.4 GHz processor and 1GB of RAM. ",
  //         },
  //       ],
  //       level: 1,
  //       _type: "block",
  //       style: "normal",
  //       _key: "fa28adf90685",
  //     },
  //     {
  //       _key: "cc6dd3e27da4",
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "It has an 8-megapixel rear camera with phase detection autofocus and optical image stabilization, as well as a 1.2-megapixel front-facing camera. ",
  //           _key: "7fd78f8c28c1",
  //           _type: "span",
  //         },
  //       ],
  //       level: 1,
  //       _type: "block",
  //       style: "normal",
  //     },
  //     {
  //       _key: "e9b77926ca72",
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 6 comes in storage options of 16GB, 64GB, or 128GB, and has a non-removable 1810 mAh battery. ",
  //           _key: "b6d3af28d8bc",
  //         },
  //       ],
  //       level: 1,
  //       _type: "block",
  //       style: "normal",
  //     },
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "848c8481c190",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Other features include Touch ID fingerprint sensor, Apple Pay, and support for iOS 8, which can be upgraded to iOS 12. It is available in space gray, silver, and gold color options.",
  //           _key: "abf425135456",
  //         },
  //       ],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/37277f0a5dd99932108f57c4f913541b41023860-192x192.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/6e5c6c4a7308c3c1cd86e59c6ba4e82334cb2548-470x360.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/175d6a538a2e1f8c86cc7671a7b4f5ccc7eef603-700x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b6b3d00a5a717fa89aa4e46c597f1ca220f5e7e9-470x556.png",
  //   ],
  //   stock: 3,
  //   description: "iPhone 6 32GB",
  //   _id: "3e8eb62d-e1f7-451c-9a1a-e86adb1b1200",
  //   slug: {
  //     current: "iphone-6-32gb",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //       _type: "reference",
  //       _key: "c2e6ba79c1fc",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "e80f18564c85",
  //     },
  //     {
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //       _key: "c50e6d76e248",
  //     },
  //   ],
  // },
  // {
  //   category: {
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //     _type: "reference",
  //   },
  //   name: "Caveman Patriot Gold",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0e70d745a5864ee61ba1dc6bf26283e429fd17cf-1000x1000.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e5cac1793278dc89834b2eb5f899b95b9a42d2c8-1000x1000.webp",
  //   ],
  //   _id: "468fd50e-51c5-41cf-90f5-2258ddc729f0",
  //   slug: {
  //     current: "caveman-patriot-gold",
  //     _type: "slug",
  //   },
  //   description: "Watch available for both male and female",
  //   brand: {
  //     _ref: "6d3a981f-2834-4137-9c1e-06e56ed2fae6",
  //     _type: "reference",
  //   },
  //   price: 3000,
  //   details: [
  //     {
  //       children: [
  //         {
  //           text: "The Caveman Watch is a brand of watches known for their unique and rugged design. They are typically made with high-quality materials such as stainless steel and leather, and often feature large watch faces with bold numerals and hands. Some models also incorporate unique features such as compasses or built-in flashlights. The brand offers a range of styles and designs, from more traditional-looking dress watches to sportier options. It is worth noting that the brand has had some controversy surrounding it, with some customers reporting poor quality and customer service experiences.",
  //           _key: "5084f390fde30",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "713fe21e5988",
  //       markDefs: [],
  //     },
  //   ],
  //   colours: [
  //     {
  //       _ref: "f9f948f1-d54a-404f-9ea5-2b8db59d3b71",
  //       _type: "reference",
  //       _key: "72efc7fe163b",
  //     },
  //   ],
  //   stock: 4,
  // },
  // {
  //   stock: 34,
  //   category: {
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //     _type: "reference",
  //   },
  //   price: 24,
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "9349f4c429120",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "27c853484521",
  //     },
  //   ],
  //   _id: "5111c0e1-46bf-4573-821d-c43302826cae",
  //   slug: {
  //     current: "s10-cover",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _key: "7dbaedc1b9d0",
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //       _type: "reference",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //   },
  //   description: "Galaxy S10 Marvel Case",
  //   name: "S10 Cover",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9fe44c948df50e257bbfb6e93f2894de65bb777a-650x519.webp",
  //   ],
  // },
  // {
  //   stock: 15,
  //   brand: {
  //     _ref: "26b1d50e-634b-4722-966f-fc269ec63caf",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "a81fb437-0b05-4686-8e35-c5a0aeeb46dd",
  //     _type: "reference",
  //   },
  //   name: "Hp Laptop 15",
  //   details: [
  //     {
  //       _key: "3f3cd3079486",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The HP Laptop 15 is a series of budget-friendly laptops produced by HP. There are multiple models within the HP Laptop 15 series, each with slightly different specs and features. Generally, these laptops feature a 15.6-inch HD display, an Intel or AMD processor, and up to 8GB of RAM. They also have a variety of storage options, ranging from traditional hard drives to faster solid-state drives (SSDs). The HP Laptop 15 typically comes with Windows 10 pre-installed and offers a range of ports, including USB 3.1, HDMI, and SD card reader. Some models may also feature a DVD drive or a built-in webcam for video conferencing. While the HP Laptop 15 may not offer the same high-end features as some more expensive laptops, it is a good option for those who need a reliable laptop for everyday use, such as browsing the web, streaming videos, and using basic productivity software.",
  //           _key: "eec4cf855e020",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/03ab63f8b3712cd176cc56336e009cc61daa455a-800x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e80ebd1a5cb345952806f5a508b1c5bcbac77c10-800x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a725a61a3a8018b06adab7551a76b12cbd4c23d8-800x600.png",
  //   ],
  //   _id: "5d3fde0b-3e4e-40be-b099-db6b0e134528",
  //   slug: {
  //     _type: "slug",
  //     current: "hp-laptop-15",
  //   },
  //   colours: [
  //     {
  //       _key: "574a86cae0f6",
  //       _ref: "255b6846-0cca-4342-91c7-3f467b05f7c1",
  //       _type: "reference",
  //     },
  //     {
  //       _key: "b128a255888e",
  //       _ref: "a67e84ad-d8fe-436f-975b-500490ab61cd",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "cc52df2c-e53a-4148-85e2-e55d0989d969",
  //       _type: "reference",
  //       _key: "0184d1257a92",
  //     },
  //   ],
  //   description: null,
  //   price: 7000,
  // },
  // {
  //   price: 180,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/727f64b2833c5c8e9774ca324ed715d26403cfc1-838x1000.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/ef87149ad70ceb38eb8d7426e4601eab6c752a30-838x1000.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7b4fd78a9a8097e37b816cb7ff7baa3dfb8a73c8-838x1000.png",
  //   ],
  //   slug: {
  //     current: "mikado",
  //     _type: "slug",
  //   },
  //   description: "Prady Mikado Costmeticos",
  //   category: {
  //     _ref: "b3ccf621-3150-4958-8ca5-83003c4d15a8",
  //     _type: "reference",
  //   },
  //   name: "Mikado",
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "01240a0e6d08",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "e311703d38720",
  //           _type: "span",
  //           marks: [],
  //           text: "Don't just look and smell good, ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "FEEL GOOD!!",
  //           _key: "2b3e554985c2",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   _id: "5e143ff3-696e-4c77-8e83-48082af92505",
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "108a11a3189e",
  //       _ref: "64fde6ae-47c5-48e4-b673-ba0b5dc68cde",
  //     },
  //     {
  //       _ref: "1f5fff35-02dd-441b-b107-0fd2b214cdc2",
  //       _type: "reference",
  //       _key: "cf42de8b1ef0",
  //     },
  //     {
  //       _ref: "046248a3-0642-46cf-8b5e-d8ace96336da",
  //       _type: "reference",
  //       _key: "c56e0593d54c",
  //     },
  //   ],
  //   stock: 23,
  //   brand: {
  //     _ref: "745772f6-e2bf-470a-962c-94fbd24fa9d7",
  //     _type: "reference",
  //   },
  // },
  // {
  //   stock: 3,
  //   description: "Samsung Galaxy S20 FE 5G 256GB",
  //   name: "Galaxy S20",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/489c91a927c3f0910a3eb10f25220b1bdec99985-650x519.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/1bf6a447424e477b614227f9c7c7248f09fd53b9-650x519.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/fb159bdef99c71ad78a4b577d038d339b784b965-700x700.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/518aaafded5ea190d9db8489de99cdadbf98c634-330x330.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e01c309ba09a4d40bd2bb79fa4c83f48919a4a16-400x400.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/ed8b6abbc780b2f4619695579ccfb6169ea44b06-650x519.webp",
  //   ],
  //   slug: {
  //     _type: "slug",
  //     current: "galaxy-s20",
  //   },
  //   colours: [
  //     {
  //       _ref: "0e02e9a4-bc8f-4f75-8071-834c79162885",
  //       _type: "reference",
  //       _key: "d037df7bd6bb",
  //     },
  //     {
  //       _ref: "2c974885-9121-43c2-be0b-7e54a103d332",
  //       _type: "reference",
  //       _key: "f2a0f1e01333",
  //     },
  //     {
  //       _ref: "813cfd61-05c4-43b9-9c9a-1576b610aea6",
  //       _type: "reference",
  //       _key: "e96314d6ec54",
  //     },
  //     {
  //       _ref: "ad44e890-52fc-4eb3-b569-80618e41849f",
  //       _type: "reference",
  //       _key: "cd5bb86a671d",
  //     },
  //     {
  //       _ref: "ff6b3956-ed2e-4814-886d-24f0e3f6d6eb",
  //       _type: "reference",
  //       _key: "ccefadcf4b87",
  //     },
  //   ],
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   price: 3400,
  //   details: [
  //     {
  //       children: [
  //         {
  //           _key: "ae65f75ad6000",
  //           _type: "span",
  //           marks: [],
  //           text: "The Samsung Galaxy S20 FE 5G is a mid-range smartphone released by Samsung in 2020. It has a",
  //         },
  //         {
  //           marks: ["strong", "em"],
  //           text: " 6.5-inch Super AMOLED display",
  //           _key: "5863a8742d5e",
  //           _type: "span",
  //         },
  //         {
  //           _key: "2f1240b10881",
  //           _type: "span",
  //           marks: [],
  //           text: " with a resolution of ",
  //         },
  //         {
  //           marks: ["em"],
  //           text: "1080 x 2400 pixels and a 120Hz refresh rate",
  //           _key: "c4db7eb86d0a",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ", and is powered by ",
  //           _key: "1096379310e0",
  //         },
  //         {
  //           text: "Qualcomm's Snapdragon 865",
  //           _key: "e424855b3bac",
  //           _type: "span",
  //           marks: ["strong"],
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " or Samsung's Exynos 990 chipset, depending on the region. It has a",
  //           _key: "39a642d933bc",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["em"],
  //           text: " triple 12-megapixel rear camera system",
  //           _key: "bc4c37454557",
  //         },
  //         {
  //           _key: "2e7334dde00e",
  //           _type: "span",
  //           marks: [],
  //           text: " with ultra-wide, wide, and telephoto lenses, as well as a 32-megapixel front-facing camera with autofocus and 4K video recording. The Samsung Galaxy S20 FE 5G comes in storage options of 128GB or 256GB, and has a non-removable 4500 mAh battery with fast charging and wireless charging capabilities. Other features include 5G connectivity, an under-display fingerprint sensor, water and dust resistance, and support for Samsung's DeX and Samsung Pay. It runs on Android 10 with Samsung's One UI 2.5, and is available in cloud navy, cloud mint, cloud white, cloud lavender, cloud red, and cloud orange color option",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "219d418b261e",
  //       markDefs: [],
  //     },
  //   ],
  //   _id: "614dc666-f36f-4528-8531-ef49c31573d2",
  // },
  // {
  //   _id: "6170ae59-8d98-4c9b-9996-4373c2ad718c",
  //   slug: {
  //     current: "iphone-12-pro-max-256gb",
  //     _type: "slug",
  //   },
  //   stock: 45,
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f9db980af74f46375b4aae773b64bd787f6c65a9-900x800.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/efc4acc027ed7853c6fead22b755cb5579352c06-1200x1200.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/da36afa20f9e206c9bf04a8890228825e6fffb6e-406x650.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c9996ffab09117d875d533ced4df7e9d755e6106-720x494.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2c4355a18f3313710722e13668ef3b0ea81c8360-609x720.png",
  //   ],
  //   name: "iPhone 12 Pro Max",
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "5c5658cb5b8c",
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The iPhone 12 Pro Max is a high-end smartphone released by Apple in 2020. It has a 6.7-inch Super Retina XDR OLED display with a resolution of 1284 x 2778 pixels and is powered by Apple's A14 Bionic chip, which has a hexa-core 3.1 GHz processor and 6GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 12 Pro Max comes in storage options of 128GB, 256GB, or 512GB, and has a non-removable 3687 mAh battery. Other features include Face ID facial recognition, water and dust resistance, MagSafe technology for wireless charging and accessories, and support for iOS 14, which can be upgraded to iOS 15. It is available in graphite, gold, silver, and pacific blue color options.",
  //           _key: "19159843a4c50",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "cbeae8cde9a6",
  //       _ref: "6c204faa-2f38-4dc0-8a08-44c25f6e2eb8",
  //     },
  //     {
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //       _key: "16eccd565258",
  //     },
  //     {
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //       _key: "5b6a2869e035",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "iPhone 12 pro max 256GB",
  //   price: 5800,
  // },
  // {
  //   _id: "64ed5e03-471b-4dc8-9270-ef9ff1e07257",
  //   slug: {
  //     current: "flor-perfumada",
  //     _type: "slug",
  //   },
  //   stock: 15,
  //   description: "Prady Flor Perfumada",
  //   category: {
  //     _ref: "b3ccf621-3150-4958-8ca5-83003c4d15a8",
  //     _type: "reference",
  //   },
  //   name: "Flor Perfumada",
  //   colours: [
  //     {
  //       _ref: "6efb8095-9ee8-4abe-ab3d-2ac10e979b03",
  //       _type: "reference",
  //       _key: "5dc8b6c0bf47",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "01cd9140e494",
  //       _ref: "64fde6ae-47c5-48e4-b673-ba0b5dc68cde",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "575b55293425",
  //       _ref: "046248a3-0642-46cf-8b5e-d8ace96336da",
  //     },
  //   ],
  //   brand: {
  //     _ref: "745772f6-e2bf-470a-962c-94fbd24fa9d7",
  //     _type: "reference",
  //   },
  //   price: 200,
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "8a34126b2ba2",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "a15fbcf515e00",
  //           _type: "span",
  //           marks: [],
  //           text: "Great Perfume to make you smell good always",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/eb081c6e33950d686156877d28cc37dda2958afe-412x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/25914992e551d8fb40e5c808363e61c033a89932-500x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8116d10fb6b6d241628389ded5dd1d369f00e028-500x500.png",
  //   ],
  // },
  // {
  //   slug: {
  //     current: "tecno-cover",
  //     _type: "slug",
  //   },
  //   stock: 10,
  //   brand: {
  //     _type: "reference",
  //     _ref: "7b803b99-b88f-47ea-a807-61730b35f82d",
  //   },
  //   description: "Tecno Camon Phone Case",
  //   category: {
  //     _type: "reference",
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //   },
  //   name: "Tecno Cover",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f8e31cbb79843726eb35379ae17208febc8e6bcc-800x800.png",
  //   ],
  //   _id: "6507005d-8384-4a4d-a3d5-79295fd39a2e",
  //   price: 29,
  //   details: [
  //     {
  //       children: [
  //         {
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "62d2a8d85cf80",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "632acdba3ba1",
  //       markDefs: [],
  //     },
  //   ],
  //   colours: [
  //     {
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //       _type: "reference",
  //       _key: "8ff4eb2e42ab",
  //     },
  //   ],
  // },
  // {
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Rolex is a Swiss luxury watch brand known for producing high-quality, durable, and accurate timepieces. Rolex watches come in a wide variety of styles and models, including the iconic Submariner, Datejust, and Day-Date lines. Rolex watches are made from high-quality materials, including stainless steel, gold, and diamonds, and are often water-resistant and shock-resistant. They are also known for their advanced technologies, such as their Perpetual self-winding movement and the Parachrom hairspring, which offers greater resistance to temperature changes and shocks. Rolex watches are sold through authorized dealers and are typically associated with luxury, status, and high resale value.",
  //           _key: "a93361ebc33a0",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "86dfb562e46b",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/98ca1e1c92ae12a12fba59fab5840af924554960-450x450.webp",
  //   ],
  //   _id: "6e97544c-2ac5-4876-af29-cea0dce74750",
  //   colours: [
  //     {
  //       _ref: "ed36ba79-2a4c-4372-ab80-2b69e21e33f5",
  //       _type: "reference",
  //       _key: "578c2364b714",
  //     },
  //   ],
  //   stock: 13,
  //   brand: {
  //     _ref: "0057f75a-82de-4919-9cef-c583f4348fbf",
  //     _type: "reference",
  //   },
  //   description: null,
  //   price: 5700,
  //   category: {
  //     _type: "reference",
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //   },
  //   name: "Rolex Diamond",
  //   slug: {
  //     current: "rolex-diamond",
  //     _type: "slug",
  //   },
  // },
  // {
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/634ed790c7b345b51c6956edd77e72215b310b89-458x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/00ce6104a83af5609de2cc2d483261423074ab05-700x700.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a78557904500783ce022f260cd49843ef2df9fe7-800x800.webp",
  //   ],
  //   _id: "6ed28e98-8977-41f0-a650-b73361a10a82",
  //   colours: [
  //     {
  //       _ref: "2003b071-fb9b-4825-942a-8d5ced2e5daf",
  //       _type: "reference",
  //       _key: "9fe6aef01a75",
  //     },
  //     {
  //       _ref: "7ef83cb5-abf7-4e51-8927-d7154dde144b",
  //       _type: "reference",
  //       _key: "2d6fe65d1d97",
  //     },
  //   ],
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   brand: {
  //     _type: "reference",
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //   },
  //   description: "Samsung Galaxy S21 Ultra 5G 512GB",
  //   price: 3000,
  //   name: "Galaxy S21 Ultra",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The Samsung Galaxy S21 Ultra 5G is a high-end smartphone released by Samsung in 2021. It has a 6.8-inch Dynamic AMOLED 2X display with a resolution of 1440 x 3200 pixels and a 120Hz refresh rate, and is powered by Samsung's Exynos 2100 or Qualcomm's Snapdragon 888 chipset, depending on the region. It has a quad 108-megapixel rear camera system with ultra-wide, wide, and two telephoto lenses, as well as a 40-megapixel front-facing camera with autofocus and 4K video recording. The Samsung Galaxy S21 Ultra 5G comes in storage options of 128GB, 256GB, or 512GB, and has a non-removable 5000 mAh battery with fast charging and wireless charging capabilities. Other features include 5G connectivity, an under-display fingerprint sensor, water and dust resistance, and support for Samsung's S Pen stylus, which can be purchased separately. It runs on Android 11 with Samsung's One UI 3.1, and is available in phantom black and phantom silver color options.",
  //           _key: "ce3266289a7a0",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "983973f12ffe",
  //     },
  //   ],
  //   slug: {
  //     _type: "slug",
  //     current: "galaxy-s21-ultra",
  //   },
  //   stock: 20,
  // },
  // {
  //   price: 3500,
  //   name: "Inspiron 15",
  //   slug: {
  //     current: "inspiron-15",
  //     _type: "slug",
  //   },
  //   stock: 39,
  //   description: "Dell Inspiron 15 3000 series",
  //   category: {
  //     _ref: "a81fb437-0b05-4686-8e35-c5a0aeeb46dd",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The Dell Inspiron 15 3000 is a series of budget-friendly laptops designed for everyday use. The latest models feature a 15.6-inch HD display and are powered by an Intel or AMD processor, with up to 8GB of RAM and up to 512GB of SSD storage. The Dell Inspiron 15 3000 also includes a range of ports, including USB 3.2, HDMI, and SD card reader. The laptop comes with Windows 10 pre-installed and includes Dell Mobile Connect, a software that allows you to seamlessly connect your laptop to your smartphone, making it easy to access files, notifications, and calls. While the Dell Inspiron 15 3000 may not offer the same level of performance as some more expensive laptops, it is a good option for those who need a reliable laptop for everyday tasks, such as browsing the web, streaming videos, and using basic productivity software.",
  //           _key: "ffd975a3d1600",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "63b0671595ad",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/d0f4bd70df40cf48921477d6afef43bdc83eeb26-500x326.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/85d563eae4f2d5706d8f38abc606f8eefaad40f4-336x278.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/e9c28c2d67b2c9be1e8f6f4ebd9c93d142dbda39-489x340.png",
  //   ],
  //   _id: "7c16de3e-48fc-4822-b7a6-3560622bd6e6",
  //   colours: [
  //     {
  //       _ref: "07d85a20-98d8-4d84-9258-76781caa9a99",
  //       _type: "reference",
  //       _key: "ef9a53bee1e6",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "df8faadd-77f1-4fb2-9af7-212e091df27e",
  //   },
  // },
  // {
  //   description: "iPhone 12 Mini 64GB",
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   name: "iPhone 12 Mini",
  //   slug: {
  //     current: "iphone-12-mini",
  //     _type: "slug",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/3788a6156eb12ad2b89f7eb796fa1f4c8dd42084-700x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/96eecec45c162fe437e565f8200dc1b68f335b63-496x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a4b676175afc8824a9b6b01d4903035fd2b91a8a-2400x2150.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/29d25837c0764d38af2a0e5f88a6989c087a193c-1000x1000.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/5bcacb1bf27fea1dcf631da89b4d14dc33778991-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/652d3a2a38dc5b9be389e6fe2b8af3cca6185ccf-940x1112.png",
  //   ],
  //   _id: "8db25d17-be11-47e5-9abb-6525f60e5964",
  //   colours: [
  //     {
  //       _ref: "cdb49eba-85ee-4239-90e0-6d9245c1940f",
  //       _type: "reference",
  //       _key: "dc9c1013b9ad",
  //     },
  //     {
  //       _ref: "54140021-82db-492b-b155-2123f3a93c74",
  //       _type: "reference",
  //       _key: "a86025e1d0c2",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "30ece27d28f5",
  //       _ref: "ada82420-c523-4fb6-bbdb-9dba416c4a72",
  //     },
  //     {
  //       _ref: "44dc71b6-96ad-4d96-9fdd-ba589522e322",
  //       _type: "reference",
  //       _key: "b34224744bfe",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "0848bfb73bd7",
  //       _ref: "4ea3ecee-0626-4cd7-90db-04a19c41cedd",
  //     },
  //   ],
  //   stock: 23,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   price: 4000,
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The iPhone 12 mini is a compact smartphone released by Apple in 2020. It has a 5.4-inch Super Retina XDR OLED display with a resolution of 1080 x 2340 pixels and is powered by Apple's A14 Bionic chip, which has a hexa-core 3.1 GHz processor and 4GB of RAM. It has a dual 12-megapixel rear camera system with ultra-wide and wide lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 12 mini comes in storage options of 64GB, 128GB, or 256GB, and has a non-removable 2227 mAh battery. Other features include Face ID facial recognition, water and dust resistance, MagSafe technology for wireless charging and accessories, and support for iOS 14, which can be upgraded to iOS 15. It is available in black, white, red, green, and blue color options.",
  //           _key: "a52b12419e260",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "958ea9097670",
  //     },
  //   ],
  // },
  // {
  //   description: "iPhone 11 Pro 512GB",
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   name: "iPhone 11 Pro",
  //   stock: 60,
  //   price: 3599,
  //   details: [
  //     {
  //       children: [
  //         {
  //           text: "The iPhone 11 Pro is a high-end smartphone released by Apple in 2019. It has a 5.8-inch Super Retina XDR OLED display with a resolution of 1125 x 2436 pixels and is powered by Apple's A13 Bionic chip, which has a hexa-core 2.65 GHz processor and 4GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 11 Pro comes in storage options of 64GB, 256GB, or 512GB, and has a non-removable 3046 mAh battery. Other features include Face ID facial recognition, water and dust resistance, Dolby Atmos sound, and support for iOS 13, which can be upgraded to iOS 15. It is available in midnight green, space gray, silver, and gold color options.",
  //           _key: "a226ab0315a10",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "b4a478017540",
  //       markDefs: [],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f34d30efb9dd8507dad26c3f01bf45a4f474443d-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7c8fbc7f6881dc76eb61dd6eec0a217d6ce2f408-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2af0bb00b8735e3058899413f4c2922ce48f2ae7-552x676.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/13ae7145b272225334d84deac84b4e6472113076-268x450.png",
  //   ],
  //   _id: "9163229f-93bd-46ab-b7ee-de48787718be",
  //   slug: {
  //     current: "iphone-11-pro-512gb",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "d1c16a3b5bf1",
  //     },
  //     {
  //       _key: "fa844cbf2ea7",
  //       _ref: "10e2435f-fcff-4546-b06c-5ccf2180fa5a",
  //       _type: "reference",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "24de22e31e9f",
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //     },
  //     {
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //       _key: "5082cd667c7b",
  //     },
  //   ],
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  // },
  // {
  //   colours: [
  //     {
  //       _ref: "2c27fcf1-f742-4f75-97e1-76f101e6274f",
  //       _type: "reference",
  //       _key: "1cbb180c2bbe",
  //     },
  //     {
  //       _ref: "ac69bb6b-541f-4226-957b-46c89634438e",
  //       _type: "reference",
  //       _key: "1143eb53d64c",
  //     },
  //   ],
  //   stock: 36,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   price: 25,
  //   name: "14 Pro Protector",
  //   _id: "99833888-7d5a-4679-84ed-74a5ec684aff",
  //   slug: {
  //     current: "14-pro-protector",
  //     _type: "slug",
  //   },
  //   description: "iPhone 14 Pro Screen Protector",
  //   category: {
  //     _ref: "388600a8-af92-4567-963f-fe5ef7af0e67",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "691b254c13cd",
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "Protector your phone screen with this awesome protector",
  //           _key: "a062fe613fbe0",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/3483cd0a3d279e1f256811da6eebcaed5539ccb4-460x595.png",
  //   ],
  // },
  // {
  //   colours: [
  //     {
  //       _ref: "ada82420-c523-4fb6-bbdb-9dba416c4a72",
  //       _type: "reference",
  //       _key: "6a8a35a5d08b",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "Apple Magsafe Charger",
  //   category: {
  //     _ref: "87731b9d-6643-431f-bc4c-a5d815d1f21e",
  //     _type: "reference",
  //   },
  //   price: 500,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9b19a1c685a3254def0983f649e8c95dc1e55979-1600x1500.png",
  //   ],
  //   stock: 45,
  //   name: "Magsafe Charger",
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "f2db034411d7",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "A modern way to charge all your portable Apple products",
  //           _key: "513deed745200",
  //           _type: "span",
  //         },
  //       ],
  //     },
  //   ],
  //   _id: "9caa5fc9-45bd-47da-af5b-fce1e033fae4",
  //   slug: {
  //     current: "magsafe-charger",
  //     _type: "slug",
  //   },
  // },
  // {
  //   stock: 30,
  //   description: "iPhone 6s Plus 128GB",
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 6s Plus is a larger and more advanced version of the iPhone 6s, released by Apple in 2015. It has a 5.5-inch Retina IPS LCD display with a resolution of ",
  //           _key: "49262e8f09b8",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: "1080 x 1920 pixels",
  //           _key: "678b9e5cdb92",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " and is powered by Apple's ",
  //           _key: "209e3e4fe70b",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "A9 chip",
  //           _key: "bb4fc857ce99",
  //         },
  //         {
  //           text: ", which has a dual-core ",
  //           _key: "b24cebe106b6",
  //           _type: "span",
  //           marks: [],
  //         },
  //         {
  //           marks: ["strong", "em"],
  //           text: "1.84 GHz processor",
  //           _key: "756ec17d919e",
  //           _type: "span",
  //         },
  //         {
  //           marks: [],
  //           text: " and ",
  //           _key: "b6569152c788",
  //           _type: "span",
  //         },
  //         {
  //           text: "2GB of RAM",
  //           _key: "fa3679f711f7",
  //           _type: "span",
  //           marks: ["strong", "em"],
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". It has a ",
  //           _key: "7f0b65ae09e8",
  //         },
  //         {
  //           text: "12-megapixel rear camera ",
  //           _key: "b27e6233cff3",
  //           _type: "span",
  //           marks: ["strong"],
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "with",
  //           _key: "5ad72f77e7bb",
  //         },
  //         {
  //           marks: ["em"],
  //           text: " phase detection autofocus and optical image stabilization,",
  //           _key: "8084e40a1bad",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " as well as a ",
  //           _key: "52682b84ee57",
  //         },
  //         {
  //           _key: "9b0ed42e1451",
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "5-megapixel front-facing camera with Retina flash",
  //         },
  //         {
  //           marks: [],
  //           text: ". The iPhone 6s Plus comes in storage options of 16GB, 32GB, 64GB, or 128GB, and has a non-removable 2750 mAh battery. Other features include Touch ID fingerprint sensor, 3D Touch, Live Photos, and support for iOS 9, which can be upgraded to iOS 14. It is available in space gray, silver, gold, or rose gold color options.",
  //           _key: "11e1793b781e",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "86abc8f0339d",
  //       markDefs: [],
  //     },
  //   ],
  //   slug: {
  //     current: "iphone-6s-plus-128gb",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "5b52a9eb315e",
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //     },
  //     {
  //       _ref: "d836bb49-f53c-4826-bd24-d624e6ad7b6d",
  //       _type: "reference",
  //       _key: "da07d652a7cd",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "20c594d40586",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   price: 1450,
  //   name: "iPhone 6S Plus",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a789745a6188ea1561ad461b1285603893922e26-544x544.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8949c7a76d4b740732820de247d3dfc8b8c5d037-500x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/4ccf41fec6edba0c05bbc0dedbe807a2aee147da-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/dfcc3eb3bb8247a9e4a7c64068bda4bc414e8ada-430x430.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b07ebfb93c2ab29d92c544a8d465831a2dcb73b1-900x800.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/270d8b9354d2d92b01d341a233545a7c7bc01705-450x450.png",
  //   ],
  //   _id: "9cd83f68-c2b1-4d3a-8aec-de06e269c4cb",
  // },
  // {
  //   description: "iPhone 12 pro max 128GB",
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   price: 5400,
  //   name: "iPhone 12 Pro Max",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/efc4acc027ed7853c6fead22b755cb5579352c06-1200x1200.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/da36afa20f9e206c9bf04a8890228825e6fffb6e-406x650.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/c9996ffab09117d875d533ced4df7e9d755e6106-720x494.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2c4355a18f3313710722e13668ef3b0ea81c8360-609x720.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f9db980af74f46375b4aae773b64bd787f6c65a9-900x800.png",
  //   ],
  //   _id: "a6fb8350-c721-450b-8dc3-7b5df3c97e5c",
  //   stock: 20,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "6cac3900e905",
  //       _ref: "6c204faa-2f38-4dc0-8a08-44c25f6e2eb8",
  //     },
  //     {
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //       _key: "776e85aa2a57",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "befe53d91d8f",
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //     },
  //     {
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //       _key: "a68eb168337a",
  //     },
  //   ],
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "386f9d3834d1",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The iPhone 12 Pro Max is a high-end smartphone released by Apple in 2020. It has a 6.7-inch Super Retina XDR OLED display with a resolution of 1284 x 2778 pixels and is powered by Apple's A14 Bionic chip, which has a hexa-core 3.1 GHz processor and 6GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 12 Pro Max comes in storage options of 128GB, 256GB, or 512GB, and has a non-removable 3687 mAh battery. Other features include Face ID facial recognition, water and dust resistance, MagSafe technology for wireless charging and accessories, and support for iOS 14, which can be upgraded to iOS 15. It is available in graphite, gold, silver, and pacific blue color options.",
  //           _key: "abc06eaf39ee0",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   slug: {
  //     current: "iphone-12-pro-max",
  //     _type: "slug",
  //   },
  // },
  // {
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7d8e11aa468c951095577c0ecada75ad7d66313e-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/157be1e12db1dab55141ee5935f7fe8b8887ced3-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9c6162564225f2fd12c9abd439ce80e5df0986d4-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9fbb62343426e1f157144f26d9b59be1629ef7c1-600x600.webp",
  //   ],
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "d3df85e11b96",
  //       _ref: "01e7520f-8860-4685-836e-5664efe2ebae",
  //     },
  //   ],
  //   stock: 40,
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   description: "Keezy Speaker",
  //   category: {
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //     _type: "reference",
  //   },
  //   price: 560,
  //   name: "Speaker",
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "824376369175",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "9116fce9842e0",
  //           _type: "span",
  //           marks: [],
  //           text: "Immersee in the amazing sounds",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   _id: "a7cc7f59-98d2-4304-a7e8-252192ee1522",
  //   slug: {
  //     _type: "slug",
  //     current: "speaker",
  //   },
  // },
  // {
  //   stock: 35,
  //   name: "Galaxy S21 Plus",
  //   details: [
  //     {
  //       _key: "a37dd942d4b4",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The Samsung Galaxy S21+ 5G is a high-end smartphone released by Samsung in 2021. It has a 6.7-inch Dynamic AMOLED 2X display with a resolution of 1080 x 2400 pixels and a 120Hz refresh rate, and is powered by Samsung's Exynos 2100 or Qualcomm's Snapdragon 888 chipset, depending on the region. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 10-megapixel front-facing camera with autofocus and 4K video recording. The Samsung Galaxy S21+ 5G comes in storage options of 128GB or 256GB, and has a non-removable 4800 mAh battery with fast charging and wireless charging capabilities. Other features include 5G connectivity, an under-display fingerprint sensor, water and dust resistance, and support for Samsung's S Pen stylus, which can be purchased separately. It runs on Android 11 with Samsung's One UI 3.1, and is available in phantom black, phantom silver, and phantom violet color options.",
  //           _key: "66003fd824170",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2abfaeedeee41b79f1e23261793f4d3d2d855a02-330x330.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/3185845a15b89d263da75eb40115d61322890d12-330x330.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7762e0250eadfd4c72c09113fde78bc315532d2d-800x800.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/5875111b32af1e58e2a20da9b734e36b3e9e1809-450x450.png",
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //   },
  //   description: "Samsung Galaxy S21+ 5G 256GB",
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   price: 3299,
  //   _id: "a8f68d7b-d4c1-4601-a3ff-3fe29514c87c",
  //   slug: {
  //     current: "galaxy-s21-plus",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "ba3a8d48-dda1-4bf3-aeba-0850e0b0e3ca",
  //       _type: "reference",
  //       _key: "c2c3e81f9701",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "ee9f62a21928",
  //       _ref: "2003b071-fb9b-4825-942a-8d5ced2e5daf",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "9b5fb4477a69",
  //       _ref: "7ef83cb5-abf7-4e51-8927-d7154dde144b",
  //     },
  //   ],
  // },
  // {
  //   category: {
  //     _ref: "388600a8-af92-4567-963f-fe5ef7af0e67",
  //     _type: "reference",
  //   },
  //   price: 20,
  //   details: [
  //     {
  //       _key: "f846d476d9d3",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone screen with this awesome protector",
  //           _key: "e86e9ac3a9fc0",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   _id: "b403fe2d-5db5-49a7-8147-ded02e141ee9",
  //   colours: [
  //     {
  //       _key: "cf8197e9d6dc",
  //       _ref: "ac69bb6b-541f-4226-957b-46c89634438e",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "2c27fcf1-f742-4f75-97e1-76f101e6274f",
  //       _type: "reference",
  //       _key: "2b6eaa4c7f12",
  //     },
  //   ],
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   description: "Samsung Galaxy A53 5G screen Protector",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/4f8ca9623f7979032e00659fd720cb58dcf55dc6-800x800.webp",
  //   ],
  //   slug: {
  //     _type: "slug",
  //     current: "a53-protector",
  //   },
  //   stock: 45,
  //   name: "A53 Protector",
  // },
  // {
  //   _id: "b85ebef7-5ad6-4690-a316-ebc110231e16",
  //   slug: {
  //     current: "headphone",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "60e6013e-b1e7-437a-a4f3-59a9667862b5",
  //       _type: "reference",
  //       _key: "14b49d2e9a0c",
  //     },
  //     {
  //       _ref: "456e4e23-fa1e-40e6-a68c-1835f894cd16",
  //       _type: "reference",
  //       _key: "79c1e4f92dd7",
  //     },
  //     {
  //       _key: "55e87d092e30",
  //       _ref: "07d85a20-98d8-4d84-9258-76781caa9a99",
  //       _type: "reference",
  //     },
  //     {
  //       _key: "4b7df6a14b54",
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //       _type: "reference",
  //     },
  //   ],
  //   stock: 500,
  //   category: {
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //     _type: "reference",
  //   },
  //   price: 55,
  //   details: [
  //     {
  //       children: [
  //         {
  //           _key: "31c76569885b0",
  //           _type: "span",
  //           marks: [],
  //           text: "A second pair of headphones",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "63b944e2eb7c",
  //       markDefs: [],
  //     },
  //   ],
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   description: "Keezy Headphone",
  //   name: "Headphone",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/04f8a489a3f3b726d8cf0709fbe561ff0ed82fad-900x900.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/058225fc820fe15a1c63697367a905959a5f32a6-555x555.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a099db30fab841ce69c573f7409251824748e490-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/797f8df56017feb72288e218fd6957ef068d7b44-700x700.webp",
  //   ],
  // },
  // {
  //   slug: {
  //     current: "iphone-6s-plus",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "2be44ca4-464a-422a-a10d-92cd36621e46",
  //       _type: "reference",
  //       _key: "abd6bef7c3a2",
  //     },
  //   ],
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   description: "iPhone 6s Plus 64GB",
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   details: [
  //     {
  //       _key: "19ab5b725d00",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "04555f8407c80",
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 6s Plus is a larger and more advanced version of the iPhone 6s, released by Apple in 2015. It has a 5.5-inch Retina IPS LCD display with a resolution of ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "1080 x 1920 pixels",
  //           _key: "2b89473d0569",
  //         },
  //         {
  //           text: " and is powered by Apple's ",
  //           _key: "9d45f1aa9d62",
  //           _type: "span",
  //           marks: [],
  //         },
  //         {
  //           text: "A9 chip",
  //           _key: "e085cff3a195",
  //           _type: "span",
  //           marks: ["strong"],
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ", which has a dual-core ",
  //           _key: "1902e1dc0fdc",
  //         },
  //         {
  //           _key: "d378b176cef8",
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "1.84 GHz processor",
  //         },
  //         {
  //           marks: [],
  //           text: " and ",
  //           _key: "0397a32cd73c",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "2GB of RAM",
  //           _key: "0d1a36ee5567",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". It has a ",
  //           _key: "df81f79421d1",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: "12-megapixel rear camera ",
  //           _key: "7fb4b88ad419",
  //           _type: "span",
  //         },
  //         {
  //           _key: "6025d63306e0",
  //           _type: "span",
  //           marks: [],
  //           text: "with",
  //         },
  //         {
  //           _key: "fc8cc18d6883",
  //           _type: "span",
  //           marks: ["em"],
  //           text: " phase detection autofocus and optical image stabilization,",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " as well as a ",
  //           _key: "e919410b4b78",
  //         },
  //         {
  //           _key: "f43ecfa6f5b6",
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "5-megapixel front-facing camera with Retina flash",
  //         },
  //         {
  //           text: ". The iPhone 6s Plus comes in storage options of 16GB, 32GB, 64GB, or 128GB, and has a non-removable 2750 mAh battery. Other features include Touch ID fingerprint sensor, 3D Touch, Live Photos, and support for iOS 9, which can be upgraded to iOS 14. It is available in space gray, silver, gold, or rose gold color options.",
  //           _key: "6b58dd2071fd",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/270d8b9354d2d92b01d341a233545a7c7bc01705-450x450.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a789745a6188ea1561ad461b1285603893922e26-544x544.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8949c7a76d4b740732820de247d3dfc8b8c5d037-500x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/4ccf41fec6edba0c05bbc0dedbe807a2aee147da-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/dfcc3eb3bb8247a9e4a7c64068bda4bc414e8ada-430x430.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b07ebfb93c2ab29d92c544a8d465831a2dcb73b1-900x800.png",
  //   ],
  //   stock: 13,
  //   price: 1350,
  //   name: "iPhone 6S Plus",
  //   _id: "b9d5d1a6-95ba-43d7-92f9-2998ddba6a3e",
  // },
  // {
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/954854cc9b4ccc11af97ffc75a5c2dd58446811d-1120x1120.png",
  //   ],
  //   _id: "befe1d6c-197e-43c2-a88f-df5c95f6afac",
  //   stock: 90,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "388600a8-af92-4567-963f-fe5ef7af0e67",
  //     _type: "reference",
  //   },
  //   name: "iPhone Privacy Glass",
  //   colours: [
  //     {
  //       _ref: "ac69bb6b-541f-4226-957b-46c89634438e",
  //       _type: "reference",
  //       _key: "af245f76f188",
  //     },
  //   ],
  //   description: "Privacy Glass protector for iPhone 14/13/13 Pro",
  //   price: 15,
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "Protector your phone screen with this awesome protector",
  //           _key: "7e8d989ca5cb0",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "b9ba3605878a",
  //     },
  //   ],
  //   slug: {
  //     current: "iphone-privacy-glass",
  //     _type: "slug",
  //   },
  // },
  // {
  //   stock: 1,
  //   brand: {
  //     _ref: "f84cf5d2-07de-48a0-a3a7-6ec0d5157ee4",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7724463463f5fedaa75e8b5caa89d1f82ba79f46-705x1000.webp",
  //   ],
  //   _id: "bfb774f5-2dd1-458a-88da-9980c4cc5a06",
  //   description: null,
  //   price: 120,
  //   name: "Nokia 105",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "3c268f97ff9b0",
  //           _type: "span",
  //           marks: [],
  //           text: "The Nokia 105 is a basic feature phone designed for those who need a simple and reliable device for calls and texts. The latest model features a ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "1.77-inch color display ",
  //           _key: "6464807b5639",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "and a classic alphanumeric keypad. The phone can store up to ",
  //           _key: "1133ba91d3cb",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["em", "underline", "strong"],
  //           text: "2,000",
  //           _key: "deb81595f921",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " contacts and up to ",
  //           _key: "ebbe7eba731e",
  //         },
  //         {
  //           _key: "682073ae602c",
  //           _type: "span",
  //           marks: ["strong", "underline", "em"],
  //           text: "500",
  //         },
  //         {
  //           _key: "3a673c4ff1c3",
  //           _type: "span",
  //           marks: [],
  //           text: " text messages, and also includes basic features such as a ",
  //         },
  //         {
  //           marks: ["em"],
  //           text: "clock, calendar, calculator, FM radio, and a flashlight",
  //           _key: "fffd3da52f66",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". The Nokia 105 has a long battery life, with up to ",
  //           _key: "7cd05c9c3b9d",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "15 hours",
  //           _key: "d6aea5a8fce3",
  //         },
  //         {
  //           _key: "5eb277f1b45e",
  //           _type: "span",
  //           marks: [],
  //           text: " of talk time and up to ",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: "25 days",
  //           _key: "ca31eea9fc81",
  //           _type: "span",
  //         },
  //         {
  //           _key: "e3f1dffd271d",
  //           _type: "span",
  //           marks: [],
  //           text: " of standby time. The phone is durable and easy to use, making it a great option for those who need a reliable and affordable phone for basic communication needs.",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "cfcd48bf4b7a",
  //     },
  //   ],
  //   slug: {
  //     current: "nokia-105",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "a7aacbbda68b",
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //     },
  //   ],
  // },
  // {
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/5e95f4d3a56565cefec7aea229f4851a6f24f3a0-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9ee67f340d4f7cd19ab535ed550044e49d1e3ce5-940x1112.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0804203eeb32aac11757316fd522531147a03051-450x450.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/40ca77268b15aae3a51057be2e5847bec9dee369-1200x1200.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/a3749590f58a41f721c9970ee5f60a4c59326c41-600x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/3a18abe8db4feab8bb836c84ce276e3acbd60b0f-376x444.png",
  //   ],
  //   _id: "cc89cdc6-764c-45bb-89ab-0062ce950db5",
  //   slug: {
  //     current: "iphone-7-plus",
  //     _type: "slug",
  //   },
  //   stock: 50,
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The iPhone 7 Plus is a flagship smartphone released by Apple in 2016. It has a ",
  //           _key: "c498a8b51f1d0",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "5.5-inch Retina IPS LCD display",
  //           _key: "80dbf4bafcf9",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " with a resolution of 1080 x 1920 pixels and is powered by Apple's ",
  //           _key: "8fb23cf32ed5",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "A10 Fusion chip",
  //           _key: "94a2a992dc43",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ", which has a ",
  //           _key: "580389415b87",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "quad-core 2.34",
  //           _key: "dccd23b94c65",
  //         },
  //         {
  //           marks: [],
  //           text: " GHz processor and ",
  //           _key: "b5f1559263c9",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "3GB of RAM",
  //           _key: "69012345ac19",
  //         },
  //         {
  //           _key: "3a8bbfb37173",
  //           _type: "span",
  //           marks: [],
  //           text: ". It has a ",
  //         },
  //         {
  //           _key: "1c0589a4fb2b",
  //           _type: "span",
  //           marks: ["em"],
  //           text: "dual 12-megapixel rear camera",
  //         },
  //         {
  //           marks: [],
  //           text: " with ",
  //           _key: "4f2dd1847b5a",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["em"],
  //           text: "optical zoom at 2x and up to 10x digital zoom",
  //           _key: "1fc0f4cf5dd7",
  //         },
  //         {
  //           _key: "5fb94a054aff",
  //           _type: "span",
  //           marks: [],
  //           text: ", as well as a ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["em"],
  //           text: "7-megapixel front-facing camera with Retina flash",
  //           _key: "34f64d8cdfc3",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". The iPhone 7 Plus comes in storage options of 32GB, 128GB, or 256GB, and has a non-removable 2900 mAh battery. Other features include Touch ID fingerprint sensor, water and dust resistance, stereo speakers, and support for iOS 10, which can be upgraded to iOS 14. It is available in jet black, black, silver, gold, and rose gold color options.",
  //           _key: "d135cb91103d",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "48d30ea7f7bc",
  //     },
  //   ],
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   price: 1850,
  //   name: "iPhone 7 Plus",
  //   colours: [
  //     {
  //       _key: "ade229a04576",
  //       _ref: "44dc71b6-96ad-4d96-9fdd-ba589522e322",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "f21cf3c8-e06a-479a-b7dd-d6238fb6244d",
  //       _type: "reference",
  //       _key: "698bcd64972a",
  //     },
  //     {
  //       _ref: "4ea3ecee-0626-4cd7-90db-04a19c41cedd",
  //       _type: "reference",
  //       _key: "5b4b2364c6d9",
  //     },
  //     {
  //       _type: "reference",
  //       _key: "683b876883c5",
  //       _ref: "222c868a-1eb5-434f-b485-68186bf58660",
  //     },
  //     {
  //       _ref: "d836bb49-f53c-4826-bd24-d624e6ad7b6d",
  //       _type: "reference",
  //       _key: "a8435e9090a6",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "b24701529d26",
  //     },
  //   ],
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "iPhone 7 Plus 128GB",
  // },
  // {
  //   description: "Samsung S-View Wallet cover for Galaxy S23",
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "9bbe864b2b5e",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Protector your phone with this awesome phone case",
  //           _key: "733031e2b1a10",
  //         },
  //       ],
  //     },
  //   ],
  //   _id: "cee44e90-2766-4d08-928a-7b7f69c5bec6",
  //   colours: [
  //     {
  //       _type: "reference",
  //       _key: "59684a6f74b4",
  //       _ref: "7ceab86b-1e51-4d9c-b2d0-7cd37eda91d9",
  //     },
  //   ],
  //   stock: 38,
  //   brand: {
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //     _type: "reference",
  //   },
  //   category: {
  //     _type: "reference",
  //     _ref: "cc5d1c68-c163-4dd6-bc91-b666e8fe7f3a",
  //   },
  //   price: 30,
  //   name: "Wallet Cover",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b491983158fd5dbb3a4fdac3a4db222b8c3daa7b-1000x1000.webp",
  //   ],
  //   slug: {
  //     current: "wallet-cover",
  //     _type: "slug",
  //   },
  // },
  // {
  //   name: "Hp Pavilion",
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "c64c10e7166c",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The HP Pavilion Gaming Laptop is a mid-range gaming laptop designed for gamers who want a powerful machine without breaking the bank. The latest model features a 15.6-inch full HD IPS display with a 144Hz refresh rate, providing a smooth and fluid gaming experience. The laptop is powered by an Intel or AMD processor and can be configured with up to 16GB of DDR4 RAM and up to 1TB of SSD storage. The HP Pavilion Gaming Laptop also includes an NVIDIA GeForce GTX or AMD Radeon graphics card for fast and responsive gaming graphics. The laptop includes a range of ports, including USB Type-C, USB 3.2, HDMI, and Ethernet, as well as Wi-Fi 6 for fast wireless connectivity. It also includes HP CoolSense, a software that allows you to control the temperature of your laptop to optimize your gaming experience. The HP Pavilion Gaming Laptop is a great option for gamers who want a powerful laptop for gaming, streaming, and other demanding tasks without spending too much money.",
  //           _key: "0090f11088730",
  //         },
  //       ],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/1d7f913a92d0a57b08bdcd6a9fc46011eea44312-800x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/1098436fc5a5dead9eab45b34ccd21809ddc53a1-800x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7a74cf75e9dc58a477fa6299694372c8aa44f9ca-800x600.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0af59d447dc2a59d339ac0e5e64dbf21138e14dc-320x240.png",
  //   ],
  //   colours: [
  //     {
  //       _ref: "a67e84ad-d8fe-436f-975b-500490ab61cd",
  //       _type: "reference",
  //       _key: "79fc35e081d3",
  //     },
  //   ],
  //   stock: 14,
  //   brand: {
  //     _ref: "26b1d50e-634b-4722-966f-fc269ec63caf",
  //     _type: "reference",
  //   },
  //   description: "Hp Pavilion Gaming Laptop",
  //   category: {
  //     _ref: "a81fb437-0b05-4686-8e35-c5a0aeeb46dd",
  //     _type: "reference",
  //   },
  //   price: 14999,
  //   _id: "cf4b51d9-4ade-4f46-9d48-f671b88aee19",
  //   slug: {
  //     current: "hp-pavilion",
  //     _type: "slug",
  //   },
  // },
  // {
  //   _id: "d9e9a1fa-5940-4506-a9ee-881ff69f1624",
  //   stock: 7,
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   description: "iPhone 6 128GB",
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The iPhone 6 is a flagship smartphone released by Apple in 2014. ",
  //           _key: "4c1a23c0564a",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "8b3002d3813b",
  //     },
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "099912fb8cf2",
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "It has a 4.7-inch IPS LCD display with a resolution of 750 x 1334 pixels and is powered by Apple's A8 chip, which has a dual-core 1.4 GHz processor and 1GB of RAM. ",
  //           _key: "30d854fc6232",
  //         },
  //       ],
  //       level: 1,
  //     },
  //     {
  //       level: 1,
  //       _type: "block",
  //       style: "normal",
  //       _key: "35d1e338779e",
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "8c78a5f219c1",
  //           _type: "span",
  //           marks: [],
  //           text: "It has an 8-megapixel rear camera with phase detection autofocus and optical image stabilization, as well as a 1.2-megapixel front-facing camera. ",
  //         },
  //       ],
  //     },
  //     {
  //       listItem: "bullet",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "The iPhone 6 comes in storage options of 16GB, 64GB, or 128GB, and has a non-removable 1810 mAh battery. ",
  //           _key: "68ad692f0199",
  //         },
  //       ],
  //       level: 1,
  //       _type: "block",
  //       style: "normal",
  //       _key: "48ed02012070",
  //     },
  //     {
  //       _key: "c5d7963a8faa",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "Other features include Touch ID fingerprint sensor, Apple Pay, and support for iOS 8, which can be upgraded to iOS 12. It is available in space gray, silver, and gold color options.",
  //           _key: "d3b0fbbe6af3",
  //           _type: "span",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   price: 1200,
  //   name: "iPhone 6",
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b6b3d00a5a717fa89aa4e46c597f1ca220f5e7e9-470x556.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/6e5c6c4a7308c3c1cd86e59c6ba4e82334cb2548-470x360.png",
  //   ],
  //   slug: {
  //     current: "iphone-6-128gb",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "9a2509b56aee",
  //     },
  //   ],
  // },
  // {
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/13ae7145b272225334d84deac84b4e6472113076-268x450.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f34d30efb9dd8507dad26c3f01bf45a4f474443d-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7c8fbc7f6881dc76eb61dd6eec0a217d6ce2f408-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/2af0bb00b8735e3058899413f4c2922ce48f2ae7-552x676.png",
  //   ],
  //   slug: {
  //     current: "iphone-11-pro",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "10e2435f-fcff-4546-b06c-5ccf2180fa5a",
  //       _type: "reference",
  //       _key: "0109b5581e97",
  //     },
  //     {
  //       _ref: "cb5e2e32-137f-4ead-ad7a-5412807eb5f7",
  //       _type: "reference",
  //       _key: "d2f493286028",
  //     },
  //   ],
  //   stock: 29,
  //   category: {
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //     _type: "reference",
  //   },
  //   price: 3000,
  //   name: "iPhone 11 Pro",
  //   details: [
  //     {
  //       _type: "block",
  //       style: "normal",
  //       _key: "09e68092c5dc",
  //       markDefs: [],
  //       children: [
  //         {
  //           marks: [],
  //           text: "The iPhone 11 Pro is a high-end smartphone released by Apple in 2019. It has a 5.8-inch Super Retina XDR OLED display with a resolution of 1125 x 2436 pixels and is powered by Apple's A13 Bionic chip, which has a hexa-core 2.65 GHz processor and 4GB of RAM. It has a triple 12-megapixel rear camera system with ultra-wide, wide, and telephoto lenses, as well as a 12-megapixel front-facing camera with TrueDepth technology and 4K video recording. The iPhone 11 Pro comes in storage options of 64GB, 256GB, or 512GB, and has a non-removable 3046 mAh battery. Other features include Face ID facial recognition, water and dust resistance, Dolby Atmos sound, and support for iOS 13, which can be upgraded to iOS 15. It is available in midnight green, space gray, silver, and gold color options.",
  //           _key: "9890daba3d0d0",
  //           _type: "span",
  //         },
  //       ],
  //     },
  //   ],
  //   _id: "dac92ecf-94cd-42e9-81d3-bbfac8b52a77",
  //   brand: {
  //     _type: "reference",
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //   },
  //   description: "iPhone 11 Pro 64GB",
  // },
  // {
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "f7d2d0fd6d450",
  //           _type: "span",
  //           marks: [],
  //           text: "Charger your phones faster with a ",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: "3.4 max ",
  //           _key: "a2923be5c0de",
  //           _type: "span",
  //         },
  //         {
  //           _key: "416ffc4e94b4",
  //           _type: "span",
  //           marks: [],
  //           text: "Fast charger",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "dd2c046b202b",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/073158c7d1092840eef1dec0920411eea5eab4f8-300x300.webp",
  //   ],
  //   description: "Vention Dual USB Charger",
  //   price: 44,
  //   name: "Dual USB Charger",
  //   _id: "de5cb1aa-b568-48bf-aea9-4fba2b5fd677",
  //   slug: {
  //     current: "dual-usb-charger",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _key: "46374e4fd30a",
  //       _ref: "01e7520f-8860-4685-836e-5664efe2ebae",
  //       _type: "reference",
  //     },
  //   ],
  //   stock: 16,
  //   brand: {
  //     _ref: "c1b973d2-5906-4c50-a079-1ede6102af2f",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "87731b9d-6643-431f-bc4c-a5d815d1f21e",
  //     _type: "reference",
  //   },
  // },
  // {
  //   description: null,
  //   category: {
  //     _type: "reference",
  //     _ref: "68a23e64-d4bc-4115-9063-114399904b96",
  //   },
  //   slug: {
  //     current: "nokia-105",
  //     _type: "slug",
  //   },
  //   _id: "drafts.bfb774f5-2dd1-458a-88da-9980c4cc5a06",
  //   colours: [
  //     {
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //       _key: "a7aacbbda68b",
  //     },
  //   ],
  //   stock: 1,
  //   brand: {
  //     _ref: "f84cf5d2-07de-48a0-a3a7-6ec0d5157ee4",
  //     _type: "reference",
  //   },
  //   price: 120,
  //   name: "Nokia 105",
  //   details: [
  //     {
  //       style: "normal",
  //       _key: "cfcd48bf4b7a",
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "3c268f97ff9b0",
  //           _type: "span",
  //           marks: [],
  //           text: "The Nokia 105 is a basic feature phone designed for those who need a simple and reliable device for calls and texts. The latest model features a ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong", "em"],
  //           text: "1.77-inch color display ",
  //           _key: "6464807b5639",
  //         },
  //         {
  //           text: "and a classic alphanumeric keypad. The phone can store up to ",
  //           _key: "1133ba91d3cb",
  //           _type: "span",
  //           marks: [],
  //         },
  //         {
  //           _type: "span",
  //           marks: ["em", "underline", "strong"],
  //           text: "2,000",
  //           _key: "deb81595f921",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " contacts and up to ",
  //           _key: "ebbe7eba731e",
  //         },
  //         {
  //           marks: ["strong", "underline", "em"],
  //           text: "500",
  //           _key: "682073ae602c",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " text messages, and also includes basic features such as a ",
  //           _key: "3a673c4ff1c3",
  //         },
  //         {
  //           _key: "fffd3da52f66",
  //           _type: "span",
  //           marks: ["em"],
  //           text: "clock, calendar, calculator, FM radio, and a flashlight",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: ". The Nokia 105 has a long battery life, with up to ",
  //           _key: "7cd05c9c3b9d",
  //         },
  //         {
  //           text: "15 hours",
  //           _key: "d6aea5a8fce3",
  //           _type: "span",
  //           marks: ["strong"],
  //         },
  //         {
  //           _key: "5eb277f1b45e",
  //           _type: "span",
  //           marks: [],
  //           text: " of talk time and up to ",
  //         },
  //         {
  //           marks: ["strong"],
  //           text: "25 days",
  //           _key: "ca31eea9fc81",
  //           _type: "span",
  //         },
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: " of standby time. The phone is durable and easy to use, making it a great option for those who need a reliable and affordable phone for basic communication needs.",
  //           _key: "e3f1dffd271d",
  //         },
  //       ],
  //       _type: "block",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/7724463463f5fedaa75e8b5caa89d1f82ba79f46-705x1000.webp",
  //   ],
  // },
  // {
  //   name: "15W Charger",
  //   details: [
  //     {
  //       children: [
  //         {
  //           _key: "0c11a78ec9a30",
  //           _type: "span",
  //           marks: [],
  //           text: "Charger your andriod phones faster with this ",
  //         },
  //         {
  //           _type: "span",
  //           marks: ["strong"],
  //           text: "USB - USB-C charger",
  //           _key: "3be6529d9d72",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "dc8dfa0922bc",
  //       markDefs: [],
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/4286f779dea2f9a31e99587a111e4dc9b71e33d0-736x736.png",
  //   ],
  //   colours: [
  //     {
  //       _ref: "01e7520f-8860-4685-836e-5664efe2ebae",
  //       _type: "reference",
  //       _key: "57525b5000c4",
  //     },
  //   ],
  //   stock: 68,
  //   brand: {
  //     _type: "reference",
  //     _ref: "79e6432c-7808-433e-91cb-0bca14a871f3",
  //   },
  //   description: " Samsung 15W Charger",
  //   category: {
  //     _ref: "87731b9d-6643-431f-bc4c-a5d815d1f21e",
  //     _type: "reference",
  //   },
  //   price: 20,
  //   _id: "e92dc48a-e9d5-4463-9e7a-ae5e574a1f7d",
  //   slug: {
  //     current: "15w-charger",
  //     _type: "slug",
  //   },
  // },
  // {
  //   colours: [
  //     {
  //       _key: "8388130dbd70",
  //       _ref: "839fba85-b114-463a-91c2-91e989b10ed2",
  //       _type: "reference",
  //     },
  //     {
  //       _key: "d0f0986bd49c",
  //       _ref: "fc057205-7f24-44b3-8ba9-b8034cfb350f",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "b57bbb7c-e76a-4fff-911e-247a8b686c61",
  //       _type: "reference",
  //       _key: "0d97eea31baa",
  //     },
  //   ],
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   description: "Keezy Airpods",
  //   category: {
  //     _type: "reference",
  //     _ref: "3ae6c2d0-d1e0-4b0a-81dc-ba385a7624d3",
  //   },
  //   name: "Airpod",
  //   details: [
  //     {
  //       markDefs: [],
  //       children: [
  //         {
  //           _key: "d419c0e3ce780",
  //           _type: "span",
  //           marks: [],
  //           text: "Great airpods to keep",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "72fcc0cee7d0",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9ca9ca6bec7ad7d470791fc847f283baf0cd3530-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0e4c9a275895c4035e56555ccd0652208fb2cda8-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/802165b134fd5c2751b3bf69fa83c67e0b262944-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/17dc1e78143cf6430140d63b3e2544c1b639577a-800x800.webp",
  //   ],
  //   slug: {
  //     current: "airpod",
  //     _type: "slug",
  //   },
  //   stock: 45,
  //   price: 650,
  //   _id: "f04ac2be-1ca5-48cd-8a19-93d602a0f878",
  // },
  // {
  //   colours: [
  //     {
  //       _ref: "839fba85-b114-463a-91c2-91e989b10ed2",
  //       _type: "reference",
  //       _key: "8305c15f584c",
  //     },
  //     {
  //       _ref: "af01df33-fbd8-43a3-8ea5-d9547a797f3a",
  //       _type: "reference",
  //       _key: "0e08f44f099c",
  //     },
  //   ],
  //   stock: 24,
  //   brand: {
  //     _ref: "99e420e5-1754-431a-8f00-6ee5f0e1e242",
  //     _type: "reference",
  //   },
  //   price: 1449,
  //   name: "Bulova Watch",
  //   details: [
  //     {
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Bulova is a well-known and established watch brand that has been around for over a century. The brand is known for its precision timekeeping and elegant designs, which often incorporate high-quality materials such as stainless steel, gold, and leather. Bulova watches come in a variety of styles, including dress watches, sport watches, and chronographs. Some of the notable features of Bulova watches include their proprietary Precisionist movement, which offers accuracy up to 10 times greater than a standard quartz movement, and their signature Accutron technology, which uses a tuning fork to maintain accuracy. The brand also offers a range of women's watches and is known for their classic and timeless designs that have stood the test of time.",
  //           _key: "fe098f5c6b7c0",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "f76af607bd24",
  //       markDefs: [],
  //     },
  //   ],
  //   _id: "f0ca0a40-1457-43b8-9702-e9ca8e9b7b85",
  //   slug: {
  //     _type: "slug",
  //     current: "bulova-watch",
  //   },
  //   description: "Bulova Leather Watch",
  //   category: {
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/0309d981af4fb030a90fdfa12380d87c072d9bca-400x400.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/9b8f0f1e7449d41109188919bcbcaf2bfb513593-400x400.png",
  //   ],
  // },
  // {
  //   _id: "f57df122-649e-400f-bcd4-c42c6fc69e8c",
  //   slug: {
  //     current: "smart-watch",
  //     _type: "slug",
  //   },
  //   stock: 341,
  //   description: "Keezy Smartwatch",
  //   name: "Smart Watch",
  //   details: [
  //     {
  //       _key: "d623a3e51002",
  //       markDefs: [],
  //       children: [
  //         {
  //           _type: "span",
  //           marks: [],
  //           text: "Cool Smartwatch",
  //           _key: "278e463748970",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   colours: [
  //     {
  //       _ref: "2003b071-fb9b-4825-942a-8d5ced2e5daf",
  //       _type: "reference",
  //       _key: "40efc792af1a",
  //     },
  //   ],
  //   brand: {
  //     _ref: "6a3d7df8-a40f-4154-b84c-c2428c783eb7",
  //     _type: "reference",
  //   },
  //   category: {
  //     _type: "reference",
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //   },
  //   price: 2500,
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/432153409f86ef269df797d0ef3091c99f447490-2000x2331.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8aa3c4242c30718c8add3cd373c2945908356f4a-600x600.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/5e577feda12dac0688658c0129498d058121e0f9-800x800.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f4a469d5d0964a219d851f10cf5a58d95533a0f0-600x600.webp",
  //   ],
  // },
  // {
  //   description: "Acer Nitro 5 Gaming Laptop",
  //   price: 12000,
  //   name: "Acer Nitro 5",
  //   details: [
  //     {
  //       children: [
  //         {
  //           _key: "a8aaaa8db6c30",
  //           _type: "span",
  //           marks: [],
  //           text: "The Acer Nitro 5 is a gaming laptop designed for gamers who want a high-performance machine at a more affordable price point. The latest model features a 15.6-inch full HD IPS display with a 144Hz refresh rate, offering a smooth and fluid gaming experience. The laptop is powered by either an AMD Ryzen or Intel Core processor and can be configured with up to 32GB of DDR4 RAM and up to 1TB of SSD storage. The Acer Nitro 5 also features an NVIDIA GeForce GTX graphics card for fast and responsive gaming graphics. The laptop includes a range of ports, including USB Type-C, USB 3.2, HDMI, and Ethernet, as well as Wi-Fi 6 for fast wireless connectivity. It also includes NitroSense, a software that allows you to monitor your system's temperature, fan speed, and other settings to optimize your gaming experience. The Acer Nitro 5 is a great option for gamers who want a powerful laptop without breaking the bank.",
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //       _key: "e18119572eda",
  //       markDefs: [],
  //     },
  //   ],
  //   _id: "fba90089-49e5-469a-b84a-528d7576ef2a",
  //   slug: {
  //     current: "acer-nitro-5",
  //     _type: "slug",
  //   },
  //   colours: [
  //     {
  //       _ref: "b57bbb7c-e76a-4fff-911e-247a8b686c61",
  //       _type: "reference",
  //       _key: "bfaa1616b21a",
  //     },
  //   ],
  //   stock: 3,
  //   brand: {
  //     _ref: "be716198-ceec-4647-8e63-eb302f917e6f",
  //     _type: "reference",
  //   },
  //   category: {
  //     _ref: "a81fb437-0b05-4686-8e35-c5a0aeeb46dd",
  //     _type: "reference",
  //   },
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/75df353a291de075eb40927454fa5db72f6e8133-673x497.webp",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b0c5d9fc9e3a741cf54fea5de6c6d8f8fd3344bf-1080x1080.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/963629f15db49e3cb9fbc373aa175c68b23a3b3a-1834x1200.png",
  //   ],
  // },
  // {
  //   brand: {
  //     _ref: "d44d2338-5607-46cd-8d4d-16c55edd18af",
  //     _type: "reference",
  //   },
  //   description: "Apple Watch Series 7",
  //   _id: "fdd5ca59-6746-4f90-8d11-ecf3b112e4e1",
  //   colours: [
  //     {
  //       _key: "d4aea1f37f7c",
  //       _ref: "095d37ad-4eca-4a50-b975-4384f1afe568",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "5433bf25-ac9f-4ece-8b8b-ceeacd55ad40",
  //       _type: "reference",
  //       _key: "fc82037c826a",
  //     },
  //     {
  //       _key: "f82450610b31",
  //       _ref: "60e6013e-b1e7-437a-a4f3-59a9667862b5",
  //       _type: "reference",
  //     },
  //     {
  //       _key: "60a4e2a1a1d6",
  //       _ref: "8634bf65-f8f7-4540-94b6-0b3ea1e2393c",
  //       _type: "reference",
  //     },
  //     {
  //       _ref: "8fb6b323-8673-4d28-a3c3-9c1c2c3d21b1",
  //       _type: "reference",
  //       _key: "5beaed85fb73",
  //     },
  //   ],
  //   slug: {
  //     current: "series-7",
  //     _type: "slug",
  //   },
  //   stock: 69,
  //   category: {
  //     _ref: "9ef92d1f-e469-4672-984c-aed802ca6c1a",
  //     _type: "reference",
  //   },
  //   price: 2400,
  //   name: "Series 7",
  //   details: [
  //     {
  //       _key: "88381f1a5dca",
  //       markDefs: [],
  //       children: [
  //         {
  //           text: "The Apple Watch Series 7 is the latest smartwatch released by Apple in 2021. It features a larger, always-on Retina display that is 20% larger than the previous model, with thinner borders and rounded edges. The display is also more durable, with a crack-resistant front crystal and IP6X dust resistance. The watch is available in two sizes - 41mm and 45mm - and is powered by an S7 chip with 50% faster charging than the previous model. The Apple Watch Series 7 offers a range of health and fitness features, including an always-on altimeter, ECG and blood oxygen sensors, and the ability to track various workouts such as cycling, swimming, and running. It also has new watch faces and a full QWERTY keyboard for easier messaging. The watch is available in a range of colors, including midnight, starlight, green, and red, and is compatible with all existing Apple Watch bands.",
  //           _key: "9a9a8f1c26ef0",
  //           _type: "span",
  //           marks: [],
  //         },
  //       ],
  //       _type: "block",
  //       style: "normal",
  //     },
  //   ],
  //   images: [
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/eb661382ee1fe84ba757b81ac39ee7a251a6a045-720x982.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/44f1b0d59b5001f756e4f0634576c0122dcc0212-612x918.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/8839bd20138eea0d2c46ea7cb09646dae822d4a4-800x450.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/f7dcf520ec85e2f790800024122e912c4449f25f-1170x650.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/ae8c0a00e569f827266a78f11a421bea62da3291-1280x1588.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/37025e2c61e05185e9b5245120a8f76466478162-500x500.png",
  //     "https://cdn.sanity.io/images/wxq9vw0t/production/b01d7d32e5db212bee6756c684b9321fb6d0f931-220x335.png",
  //   ],
  // },
]
