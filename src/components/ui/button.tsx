import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-construction-green focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "btn-primary-modern text-white rounded-lg min-h-[48px]",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg",
        outline:
          "btn-secondary-modern text-construction-green hover:text-construction-green-dark rounded-lg min-h-[48px]",
        secondary:
          "btn-secondary-modern text-construction-green hover:text-construction-green-dark rounded-lg min-h-[48px]",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-lg",
        link: "text-construction-green underline-offset-4 hover:underline",
        hero: "btn-primary-modern text-white rounded-xl font-semibold uppercase tracking-wide min-h-[48px]",
        cta: "btn-primary-modern text-white rounded-lg font-semibold min-h-[48px]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 py-2",
        lg: "h-14 rounded-xl px-8 py-4 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
