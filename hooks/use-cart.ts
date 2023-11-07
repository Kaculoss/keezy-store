import { CartProduct } from "@/types"
import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

interface CartStore {
  items: CartProduct[]
  addItem: (product: CartProduct) => void
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (product: CartProduct) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === product.id)

        if (existingItem) {
          const updateItem = {
            ...existingItem,
            quantity: (existingItem.quantity += product.quantity),
          }
          return set({
            items: [
              ...get().items.filter((item) => item.id !== product.id),
              updateItem,
            ],
          })
        }
        set({ items: [...currentItems, product] })
      },
      increaseQuantity: (id: string) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === id)

        if (!existingItem) return

        const updateItem = {
          ...existingItem,
          quantity: (existingItem.quantity += 1),
        }
        set({
          items: [...get().items.filter((item) => item.id !== id), updateItem],
        })
      },
      decreaseQuantity: (id: string) => {
        const currentItems = get().items
        const existingItem = currentItems.find((item) => item.id === id)

        if (!existingItem) return

        const updateItem = {
          ...existingItem,
          quantity: (existingItem.quantity -= 1),
        }
        set({
          items: [...get().items.filter((item) => item.id !== id), updateItem],
        })
      },
      removeItem: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] })
      },
      removeAll: () => set({ items: [] }),
    }),
    { name: "cart-storage", storage: createJSONStorage(() => localStorage) }
  )
)

export default useCart
