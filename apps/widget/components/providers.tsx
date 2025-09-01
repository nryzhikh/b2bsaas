"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConvexProvider, ConvexReactClient } from "convex/react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

/**
 * Wraps the application subtree with Convex and next-themes providers.
 *
 * This component supplies a Convex client context (using the `convex` instance)
 * and configures theme management via `next-themes` (class attribute, system
 * default, system preference enabled, transitions disabled on change, and
 * color-scheme support).
 *
 * @param children - React node(s) to render inside the providers
 * @returns The given children wrapped with ConvexProvider and NextThemesProvider
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      enableColorScheme
    >
      {children}
    </NextThemesProvider>

    </ConvexProvider>
    
  )
}
