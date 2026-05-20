'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { GlassCard } from '@/components/ui/GlassCard'

export function BarakahLaunchTeaser() {
  const pills = [
    'Branding',
    'Website',
    'Positionering',
    'Content',
    'Marketingstrategie',
    'Lead Generatie',
  ]

  return (
    <section className="relative py-24 bg-brand-surface2/25 border-y border-white/5 overflow-hidden z-10">
      {/* Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] rounded-full blur-[100px] pointer-events-none opacity-20"
        style={{ 
          background: 'radial-gradient(circle, rgba(62,207,178,0.2) 0%, transparent 70%)' 
        }} 
      />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Exclusive Badge */}
        <div className="flex justify-center mb-6">
          <Badge className="border-brand-accent/20 text-brand-accent px-4 py-1.5 text-xs font-bold font-mono">
            ✦ EXCLUSIEF TRAJECT
          </Badge>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
          Van nul naar professioneel.<br />
          In <GradientText>30 dagen</GradientText>.
        </h2>

        {/* Description */}
        <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          BarakahLaunch is ons complete positioneringstraject voor bedrijven die serieus willen groeien. Wij bouwen jouw branding, custom website, marketingstrategie, content en lead generatie — alles volledig live binnen één maand.
        </p>

        {/* Pills Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto mb-12">
          {pills.map((pill) => (
            <span
              key={pill}
              className="glass border border-white/5 bg-white/[0.02] text-brand-text/90 px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide whitespace-nowrap"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="flex justify-center">
          <Link href="/barakahlaunch">
            <Button className="px-10 py-4 uppercase text-xs tracking-wider font-bold text-brand-dark">
              Ontdek BarakahLaunch &rarr;
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
