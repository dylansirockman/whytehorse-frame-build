import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border-2 border-gray-300 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:border-construction-green focus-visible:ring-2 focus-visible:ring-construction-green/20 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors duration-200",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
