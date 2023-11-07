// import ProductFilters from "./ProductFilters"
import { FilterType } from "@/types"

import { getBrands, getCategories, getColours } from "@/lib/getFunctions"

import ProductFilters from "./ProductFilters"

const Filters = async () => {
  const [categories, brands, colours] = await Promise.all([
    getCategories(),
    getBrands(),
    getColours(),
  ])

  const categoryFilter: FilterType = {
    id: "category",
    name: "Category",
    options: categories.map((category) => ({
      value: category.name,
      label: category.name,
    })),
  }

  const brandFilter: FilterType = {
    id: "brand",
    name: "Brand",
    options: brands.map((brand) => ({ value: brand.name, label: brand.name })),
  }

  const colourFilter: FilterType = {
    id: "colour",
    name: "Colour",
    options: colours
      .map((colour) => ({
        value: colour.name,
        label: colour.name,
      }))
      .reduce((acc: { value: string; label: string }[], curr) => {
        const isAdded = acc.find((item) => item.value === curr.value)
        if (!isAdded) {
          acc.push({ value: curr.value, label: curr.label })
        }
        return acc
      }, []),
  }

  const filters: FilterType[] = [categoryFilter, brandFilter, colourFilter]

  return (
    <div className="w-56">
      <ProductFilters filters={filters} />
    </div>
  )
}

export default Filters
