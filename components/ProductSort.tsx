"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Filter } from "lucide-react"

import useWeb from "@/hooks/use-web"

import ToolTip from "./ToolTip"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const sortOptions = [
  { name: "Newest", sortKey: "date", sortValue: "desc" },
  { name: "Oldest", sortKey: "date", sortValue: "asc" },
  { name: "Price, low to high", sortKey: "price", sortValue: "asc" },
  { name: "Price, high to low", sortKey: "price", sortValue: "desc" },
  { name: "Name, A - Z", sortKey: "name", sortValue: "asc" },
  { name: "Name, Z - A", sortKey: "name", sortValue: "desc" },
]

export default function ProductSort() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { setMiniFilterTrue } = useWeb()

  const handleValueChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    const isPrice = params.has("price")
    const isDate = params.has("date")
    const isName = params.has("name")
    if (isPrice) {
      params.delete("price")
    }
    if (isDate) {
      params.delete("date")
    }
    if (isName) {
      params.delete("name")
    }

    const selectedItem = sortOptions.find((option) => option.name === value)
    if (selectedItem) {
      params.set(selectedItem.sortKey, selectedItem.sortValue)
      router.replace(`/products?${params.toString()}`)
    }
  }

  return (
    <div className="flex items-center">
      <Select onValueChange={(value) => handleValueChange(value)}>
        <SelectTrigger className="sm:w-[180px]">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          {sortOptions.map((option) => (
            <SelectItem key={option.name} value={option.name}>
              {option.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <ToolTip position="top" tooltip="Filter">
        <div
          onClick={setMiniFilterTrue}
          className="-m-2 ml-4 cursor-pointer p-2 text-gray-400 hover:text-gray-500 sm:ml-6 xl:hidden"
        >
          <span className="sr-only">Filters</span>
          <Filter className="h-5 w-5" aria-hidden="true" />
        </div>
      </ToolTip>
    </div>
  )
}
