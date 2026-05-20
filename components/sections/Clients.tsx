'use client'

import React from 'react'
import Image from 'next/image'
import { clients } from '@/lib/data'
import { GradientText } from '@/components/ui/GradientText'

export function Clients() {
  // Duplicate logo array to ensure gapless infinite loop scroll
  const marqueeItems = [...clients, ...clients, ...clients, ...clients]

  return (
    <section className="relative py-20 bg-brand-surface/40 border-y border-white/5 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-semibold uppercase tracking-widest text-brand-muted">
          Vertrouwd door toonaangevende merken
        </h3>
      </div>

      {/* Marquee Wrapper */}
      <div className="relative w-full flex items-center overflow-hidden py-4 select-none">
        {/* Left & Right Shadow Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />

        {/* Scrolling Inner Container */}
        <div className="flex gap-16 min-w-full shrink-0 animate-marquee items-center justify-around">
          {marqueeItems.map((client, idx) => (
            <div 
              key={`${client.name}-${idx}`} 
              className="relative w-32 h-14 shrink-0 transition-opacity duration-300 opacity-40 hover:opacity-100 flex items-center justify-center filter brightness-100 contrast-100"
            >
              <Image
                src={client.logoPath}
                alt={client.name}
                fill
                sizes="128px"
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
