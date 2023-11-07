import crypto from "crypto"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import { client } from "@/sanity/lib/client"

const secret = process.env.PAYSTACK_SECRET_KEY || "defaultSecret"

export async function POST(req: Request) {
  try {
    const body = await req.text()

    const hash = crypto.createHmac("sha512", secret).update(body).digest("hex")

    if (hash === (headers().get("x-paystack-signature") as string)) {
      const event = JSON.parse(body)

      if (event.event === "charge.success") {
        const paymentData = event.data
        console.log(paymentData)
        if (paymentData?.status === "success") {
          const addressComponents = [
            paymentData?.metadata?.address,
            paymentData?.metadata?.city,
            paymentData?.metadata?.country,
          ]

          const addressString = addressComponents
            .filter((c) => c !== null)
            .join(", ")

          const updatedOrderData = {
            _type: "order",
            isPaid: true,
            payment: "paid",
            address: addressString,
            phone: paymentData?.metadata?.phone,
            order_status: "processing",
          }

          await client
            .patch(paymentData?.metadata?.orderId)
            .set(updatedOrderData)
            .commit()
            .then((res) => console.log("Hook Respond =>", res._id))
        }

        return new NextResponse("Webhook received", { status: 200 })
      } else {
        return new NextResponse("Unsupported event type", { status: 400 })
      }
    } else {
      console.error("Invalid Paystack signature")
      return new NextResponse("Invalid signature", { status: 403 })
    }
  } catch (error) {
    console.error("Error processing webhook:", error)
    return new NextResponse("Internal server error", {
      status: 500,
    })
  }

  //   const signature = headers().get("x-paystack-signature") as string
}
