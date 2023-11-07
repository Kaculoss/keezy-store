"use client"

import { Toaster } from "@/components/ui/toaster"

import TailwindIndicator from "./tailwind-indicator"
import { ThemeProvider } from "./theme-provider"

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <Toaster />
      {children}
      <TailwindIndicator />
    </ThemeProvider>
  )
}
