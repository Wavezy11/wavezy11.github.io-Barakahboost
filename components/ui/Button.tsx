import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "relative rounded-xl px-6 py-3.5 font-semibold transition-all duration-300 overflow-hidden flex items-center justify-center gap-2",
        // Primary
        variant === 'primary' && "bg-brand-gradient text-brand-dark hover:shadow-[0_0_30px_rgba(62,207,178,0.45)] hover:scale-[1.02] active:scale-[0.98]",
        // Secondary
        variant === 'secondary' && "bg-white/5 border border-white/10 text-brand-text hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]",
        // Ghost
        variant === 'ghost' && "bg-transparent text-brand-muted hover:text-brand-accent hover:bg-white/5 hover:scale-[1.02] active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
