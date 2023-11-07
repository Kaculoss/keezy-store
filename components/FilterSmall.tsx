"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FilterType } from "@/types"
import clsx from "clsx"
import { X } from "lucide-react"

import useWeb from "@/hooks/use-web"

import ToolTip from "./ToolTip"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion"
import { Checkbox } from "./ui/checkbox"

interface IProps {
  filters: FilterType[]
}

const FilterSmall = ({ filters }: IProps) => {
  const { miniFilter, setMiniFilterFalse } = useWeb()
  const searchParams = useSearchParams()
  const router = useRouter()
  const searchValues = Array.from(searchParams.entries())
  const pathname = usePathname()

  return (
    <div
      className={clsx(
        " fixed inset-y-0  z-40   gap-4 overflow-y-auto border bg-background p-6 shadow-lg",
        miniFilter
          ? `right-0 block h-full w-[300px] max-w-[calc(100%-3rem)] opacity-100 animate-in slide-in-from-right duration-300 xl:hidden ${
              pathname === "/products"
                ? " top-[155.375px] sm:top-[109.6px]"
                : "top-[106px]"
            } `
          : "hidden"
      )}
    >
      <div className="flex flex-col space-y-2 text-center sm:text-left">
        <p className="text-lg font-semibold text-foreground">Categories</p>
        <p className="text-sm text-muted-foreground">
          Narrow your product search using the options below.
        </p>
      </div>
      <form className="sticky top-20 mb-10">
        <h3 className="sr-only">Categories</h3>

        {filters.map((section, i) => (
          <Accordion key={i} type="single" collapsible>
            <AccordionItem value={`item-${i}`}>
              <AccordionTrigger>
                <span>
                  {section.name}{" "}
                  <span className="ml-1 text-xs font-extrabold uppercase text-gray-400">
                    {searchParams.get(section.id)
                      ? `(${searchParams.get(section.id)})`
                      : ""}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <div className="mb-8 space-y-4">
                  {section.options.map((option, index) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <Checkbox
                        id={`filter-${section.id}-${index}`}
                        checked={searchValues.some(
                          ([key, value]) =>
                            key === section.id && value === option.value
                        )}
                        onClick={(event) => {
                          const params = new URLSearchParams(
                            searchParams.toString()
                          )
                          const checked =
                            event.currentTarget.dataset.state === "checked"
                          checked
                            ? params.delete(section.id)
                            : params.set(section.id, option.value)
                          router.replace(`/products?${params.toString()}`)
                        }}
                      />
                      <label
                        htmlFor={`filter-${section.id}-${index}`}
                        className="text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </form>
      <div
        onClick={setMiniFilterFalse}
        className="absolute right-4 top-4 cursor-pointer rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
      >
        <ToolTip position="left" tooltip="Close">
          <X className="h-6 w-6" />
          <span className="sr-only">Close</span>
        </ToolTip>
      </div>
    </div>
  )
}

export default FilterSmall
