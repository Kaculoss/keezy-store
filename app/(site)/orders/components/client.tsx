"use client"

import { DataTable } from "@/components/ui/data-table"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"

import { columns, OrderColumn } from "./columns"

interface OrderClientProps {
  data: OrderColumn[]
  email: string
}

const OrderClient = ({ data, email }: OrderClientProps) => {
  return (
    <>
      <Heading title={`Orders (${data.length})`} description={`For ${email}`} />
      <Separator />
      <DataTable columns={columns} data={data} />
    </>
  )
}

export default OrderClient
