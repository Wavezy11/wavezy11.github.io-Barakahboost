'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils' // Let's write a simple utils helper for cn

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass border border-white/10 rounded-[20px] backdrop-blur-[20px] saturate-[180%] bg-white/5",
        hoverEffect && "hover:bg-brand-accent/[0.06] hover:border-brand-accent/20 hover:shadow-[0_0_40px_rgba(62,207,178,0.08),0_20px_60px_rgba(0,0,0,0.3)] hover:-translate-y-1 transition-all duration-300 ease-out",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
