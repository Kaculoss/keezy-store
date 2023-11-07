import { brandInventory } from "@/inventory/brandInventory"
import { categoriesInventory } from "@/inventory/categoryInventory"
import { colorInventory } from "@/inventory/colorsInventory"
import { productsInventory } from "@/inventory/productInventory"
import { client } from "@/sanity/lib/client"

export async function seedSanityData() {
  await seedSanityColours()
    .then(() => console.log("Sanity Data seeded"))
    .catch((err) => console.log("Something Went Wrong!"))

  await seedSanityCategories()
    .then(() => console.log("Sanity Data seeded"))
    .catch((err) => console.log("Something Went Wrong!"))

  await seedSanityBrands()
    .then(() => console.log("Sanity Data seeded"))
    .catch((err) => console.log("Something Went Wrong!"))

  await seedSanityProducts()
    .then(() => console.log("Sanity Data seeded"))
    .catch((err) => console.log("Something Went Wrong!"))
}

export async function seedSanityProducts() {
  const transaction = client.transaction()
  productsInventory.forEach((item) => {
    const product = {
      _type: "product",
      _id: item._id,
      name: item.name,
      slug: item.slug,
      description: item.description ? item.description : "",
      price: item.price,
      details: item.details,
      stock: item.stock,
      brand: item.brand,
      category: item.category,
      colours: item.colours,
    }
    transaction.createOrReplace(product)
  })
  await transaction
    .commit()
    .catch((err) => console.log("PRODUCT_SEED_ERROR =>", err))
  await seedSanityProductImages()
  console.log("Sanity Products seeded")
}

export async function seedSanityBrands() {
  const transaction = client.transaction()
  brandInventory.forEach((item) => {
    const product = {
      _type: "brand",
      _id: item._id,
      name: item.name,
      slug: item.slug,
      description: item.description,
      image: item.image,
    }
    transaction.createOrReplace(product)
  })
  await transaction
    .commit()
    .catch((err) => console.log("BRAND_SEED_ERROR =>", err))
  await seedSanityBrandImage()
  console.log("Sanity Brand seeded")
}

export async function seedSanityCategories() {
  const transaction = client.transaction()
  categoriesInventory.forEach((item) => {
    const product = {
      _type: "category",
      _id: item._id,
      name: item.name,
      slug: item.slug,
      description: item.description,
      image: item.image,
    }
    transaction.createOrReplace(product)
  })
  await transaction
    .commit()
    .catch((err) => console.log("CATEGORY_SEED_ERROR =>", err))
  await seedSanityCategoryImage()
  console.log("Sanity Category seeded")
}

export async function seedSanityColours() {
  const transaction = client.transaction()
  colorInventory.forEach((item) => {
    const product = {
      _type: item._type,
      _id: item._id,
      name: item.name,
      hash: item.hash,
    }
    transaction.createOrReplace(product)
  })
  await transaction
    .commit()
    .catch((err) => console.log("COLOUR_SEED_ERROR =>", err))
  console.log("Sanity Colour seeded")
}

async function seedSanityProductImages() {
  productsInventory.forEach(async (item) => {
    let images: any[] = []
    for (const image of item.images) {
      const imageAssetResponse = await fetch(image)
      const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
      const imageAsset = await client.assets.upload(
        "image",
        Buffer.from(imageAssetBuffer)
      )
      images.push({
        _key: imageAsset._id,
        _type: "image",
        asset: {
          _type: "reference",
          _ref: imageAsset._id,
        },
      })
    }
    await client.patch(item._id).set({ images }).commit()
  })
}

async function seedSanityCategoryImage() {
  categoriesInventory.forEach(async (item) => {
    const imageAssetResponse = await fetch(item.image)
    const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
    const imageAsset = await client.assets.upload(
      "image",
      Buffer.from(imageAssetBuffer)
    )

    const image = {
      asset: {
        _ref: imageAsset._id,
        _type: "reference",
      },
      _type: "image",
    }

    await client.patch(item._id).set({ image }).commit()
  })
}

async function seedSanityBrandImage() {
  brandInventory.forEach(async (item) => {
    const imageAssetResponse = await fetch(item.image)
    const imageAssetBuffer = await imageAssetResponse.arrayBuffer()
    const imageAsset = await client.assets.upload(
      "image",
      Buffer.from(imageAssetBuffer)
    )

    const image = {
      asset: {
        _ref: imageAsset._id,
        _type: "reference",
      },
      _type: "image",
    }

    await client.patch(item._id).set({ image }).commit()
  })
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
