import { redirect } from "next/navigation"
import { auth, currentUser } from "@clerk/nextjs"

import { getOrders } from "@/lib/getFunctions"

import OrderClient from "./components/client"
import { OrderColumn } from "./components/columns"
const OrdersPage = async () => {
  const { userId } = auth()

  const user = await currentUser()

  const email = user?.emailAddresses[0].emailAddress

  if (!userId || !email) {
    redirect("/sign-in")
  }

  const orders = await getOrders(email)

  const formattedOrders: OrderColumn[] =
    orders &&
    orders.map((item) => ({
      id: item._id,
      orderNumber: item.order_number,
      phone: item.phone,
      address: item.address,
      name: item.name,
      status: item.status,
      createdAt: new Date(item.createdAt),
      products: item.order_items.map((orderItem) => orderItem.name).join(", "),
      totalPrice: item.order_items.reduce((total, current) => {
        const currentTotal = current.price * current.quantity
        return currentTotal + total
      }, 0),
    }))

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 px-1 md:p-8 pt-6">
        <OrderClient data={formattedOrders} email={email} />
      </div>
    </div>
  )
}

export default OrdersPage
