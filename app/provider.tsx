"use client"

import * as React from "react"

type ThemeProviderProps = {
  children: React.ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  React.useEffect(() => {
    const root = document.documentElement

    root.classList.add("dark")
    root.style.colorScheme = "dark"

    return () => {
      root.classList.remove("dark")
      root.style.removeProperty("color-scheme")
    }
  }, [])

  return <>{children}</>
}
