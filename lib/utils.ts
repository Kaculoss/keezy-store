import crypto from "crypto"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatter = new Intl.NumberFormat("en-GH", {
  style: "currency",
  currency: "GHS",
})

export function getPercentDiff(newPrice: number, oldPrice: number) {
  return Math.ceil(((oldPrice - newPrice) / oldPrice) * 100)
}

export const generateOrderNumber = (identifier: string) => {
  const hashedValue = crypto
    .createHash("sha256")
    .update(identifier)
    .digest("hex")

  const startPosition = Math.floor(Math.random() * (hashedValue.length - 12))
  const randomOrderNumber = hashedValue.slice(startPosition, startPosition + 12)

  return randomOrderNumber.toUpperCase()
}


