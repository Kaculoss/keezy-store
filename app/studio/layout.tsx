import { siteConfig } from "@/lib/config"

import "@/styles/globals.css"

import { Metadata } from "next"
import {
  JetBrains_Mono as FontMono,
  Plus_Jakarta_Sans as FontSans,
} from "next/font/google"

const fontMono = FontMono({
  subsets: ["latin"],
  display: "swap",
  variable: "--fontMono",
})
const fontSans = FontSans({
  subsets: ["latin"],
  display: "swap",
  variable: "--fontSans",
})

export const metadata: Metadata = {
  title: siteConfig.studioName,
  description: siteConfig.description,
  icons: { icon: "/favicon.ico" },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fontMono.variable} ${fontSans.variable}`}>
      <body>{children}</body>
    </html>
  )
}
