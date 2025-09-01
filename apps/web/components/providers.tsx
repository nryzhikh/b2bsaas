"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ConvexProvider, ConvexReactClient } from "convex/react"

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

/**
 * Root providers wrapper that supplies Convex client context and theme management to its children.
 *
 * Wraps descendants with a ConvexProvider (for Convex React client access) and NextThemesProvider
 * configured to use class-based theming with system default, system detection enabled, transitions
 * disabled on theme change, and color-scheme support.
 *
 * @param children - React node(s) to be rendered within the providers.
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
