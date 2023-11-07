import Image from "next/image"
import { redirect } from "next/navigation"
import logo from "@/public/logo.png"
import { auth, currentUser } from "@clerk/nextjs"
import { ShoppingCart } from "lucide-react"

import { shimmer, toBase64 } from "@/lib/image"
import CartSummary from "@/components/CartSummary"

export default async function CartSummaryPage() {
  const { userId } = auth()

  const user = await currentUser()

  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <div className="mx-auto my-20 flex min-h-full w-full flex-col items-center justify-center py-12 sm:px-6 lg:px-8">
      <div className="w-full sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center justify-center">
        <div className="flex h-auto w-auto items-center text-slate-900 dark:text-white">
          <Image
            priority
            placeholder="blur"
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(20, 20)
            )}`}
            className="mr-2 rounded-md "
            src={logo}
            width={40}
            height={40}
            alt="logo"
          />
          <h1 className="text-xl font-bold tracking-wider">Keezy Store</h1>
        </div>
        <h2 className="w-full flex items-center justify-center gap-6 text-center text-2xl font-extrabold tracking-wider sm:text-3xl">
          <ShoppingCart className="h-10 w-10" />
          Cart Summary
        </h2>
      </div>
      {user?.emailAddresses[0].emailAddress && (
        <CartSummary userEmail={user.emailAddresses[0].emailAddress} />
      )}
    </div>
  )
}
