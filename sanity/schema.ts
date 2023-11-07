import { type SchemaTypeDefinition } from "sanity"

import blockContent from "./schemas/blockContent"
import brand from "./schemas/brand"
import category from "./schemas/category"
import colour from "./schemas/colour"
import order from "./schemas/order"
import product from "./schemas/product"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, brand, category, colour, order, blockContent],
}
