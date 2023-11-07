"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { redirect, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useForm } from "react-hook-form"
import { AiOutlineShopping } from "react-icons/ai"
import * as z from "zod"

import { formatter } from "@/lib/utils"
import useCart from "@/hooks/use-cart"

import CartItem from "./CartItem"
import { Button } from "./ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { useToast } from "./ui/use-toast"

const formSchema = z.object({
  fullName: z.string().min(1),
  phone: z.coerce.number().min(5),
  country: z.string().min(1),
  city: z.string().min(1),
  address: z.string().min(1),
})

type SummaryFormValues = z.infer<typeof formSchema>

interface CartSummaryProps {
  userEmail: string
}

const CartSummary = ({ userEmail }: CartSummaryProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const { toast } = useToast()
  const removeAll = useCart((state) => state.removeAll)
  const items = useCart((state) => state.items)
  const searchParams = useSearchParams()

  const totalQty = items.reduce((current, item) => {
    return (current += item.quantity)
  }, 0)

  const totalPrice = items.reduce((current, item) => {
    return (current += item.quantity * item.price)
  }, 0)

  const form = useForm<SummaryFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      // phone: "",
      country: "",
      city: "",
      address: "",
    },
  })

  function clearCartItems() {
    removeAll()
    toast({
      title: `Cart Items Cleared`,
      description: "All Products removed from cart",
      variant: "destructive",
    })
  }
  const sortedItems = items.sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime()
    const dateB = new Date(b.createdAt).getTime()
    return dateA - dateB
  })

  useEffect(() => {
    if (searchParams.get("success")) {
      toast({ description: "Payment completed." })
      removeAll()
      redirect("/orders")
    }

    if (searchParams.get("cancelled")) {
      toast({
        description: "Payment was not successfull.",
        variant: "destructive",
      })
    }
  }, [removeAll, searchParams])

  const onSubmit = async (data: SummaryFormValues) => {
    try {
      setIsLoading(true)
      const response = await axios.post(`api/checkout`, {
        items,
        ...data,
        email: userEmail,
      })
      console.log("response =>", response)
      window.location = response.data.data.authorization_url
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast({
          description: error.response?.data,
          variant: "destructive",
          title: "Something went wrong",
        })
      } else {
        toast({ description: "Something went wrong.", variant: "destructive" })
      }
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="w-full px-4 py-8 shadow-xl sm:rounded-lg sm:px-10">
      <div className="flex w-full items-center justify-between gap-2">
        <button
          type="button"
          onClick={clearCartItems}
          className="cursor-pointer border border-red-600 bg-transparent p-2 text-sm font-medium text-red-600 transition hover:border-red-400 hover:text-red-400 "
        >
          Clear Cart
        </button>
      </div>

      <div className="mt-3 flex-1 overflow-y-auto px-2 py-5 lg:mt-4">
        {items.length < 1 ? (
          <div className="flex h-full w-full flex-col   items-center  justify-center text-slate-700 dark:text-slate-400">
            <AiOutlineShopping size={150} />
            <h3>Your shopping bag is empty</h3>
            <Link
              href="/products"
              className="w-max-[400px] mt-4 cursor-pointer rounded-xl border-none bg-red-600 p-3 text-lg uppercase text-slate-100"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {sortedItems.map((value) => (
              <CartItem key={value.id} product={value} />
            ))}
            <div className="mt-2 flex w-full flex-col border-t border-slate-200 px-4 lg:px-16 py-3 text-slate-500 dark:border-slate-200/5">
              <div className="mb-2 flex w-full flex-col items-end justify-start gap-3  ">
                <h3 className="text-base font-medium">
                  Subtotal: {formatter.format(totalPrice)}
                </h3>
                <h3 className="fornt-normal text-sm">
                  Shipping Estimate: {formatter.format(10)}
                </h3>
                <h3 className="mt-4 text-lg font-semibold text-sky-500 dark:text-sky-400">
                  Order Total
                </h3>
                <h3>
                  <span className="text-lg font-semibold text-sky-500 dark:text-sky-400">
                    {formatter.format(totalPrice + 10)}
                  </span>
                </h3>
              </div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="w-full max-w-lg mt-12 text-slate-900 dark:text-white"
                >
                  <h2 className="text-xl text-slate-900 dark:text-white font-bold text-center">
                    Address
                  </h2>
                  <div className="w-full mt-2 space-y-3">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isLoading || items.length < 1}
                              placeholder="Full Name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type="tel"
                              disabled={isLoading || items.length < 1}
                              placeholder="Phone Number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isLoading || items.length < 1}
                              placeholder="Country"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isLoading || items.length < 1}
                              placeholder="City"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              disabled={isLoading || items.length < 1}
                              placeholder="Address"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    disabled={isLoading || items.length < 1}
                    className="w-full mt-6 bg-sky-600 text-white hover:opacity-80"
                    type="submit"
                  >
                    {isLoading && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    {isLoading ? "Loading..." : "Proceed To Checkout"}
                  </Button>
                </form>
              </Form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default CartSummary
