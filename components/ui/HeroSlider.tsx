'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const heroImages = [
  {
    src: '/portfolio/abu-taymiyyah/hero-edit.jpg',
    alt: 'Abu Tayyimah Event Aftermovie',
    label: 'Event Videografie',
  },
  {
    src: '/portfolio/nuurfades/nuurfades-main.jpg',
    alt: 'Nuurfades Fotografie',
    label: 'Portretfotografie',
  },
  {
    src: '/portfolio/liv-zorg/main-foto.jpg',
    alt: 'Livzorg Fotografie',
    label: 'Zorgfotografie',
  },
]

export function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-full min-h-[350px] lg:min-h-0">
      <div
        className="absolute inset-0 rounded-3xl -z-10 blur-3xl opacity-30 scale-110"
        style={{
          background: 'radial-gradient(ellipse, #2d7d6f 0%, #0a3d35 60%, transparent 100%)'
        }}
      />

      <div 
        className="relative w-full h-full overflow-hidden"
        style={{
          clipPath: 'polygon(0 0, 100% 5%, 100% 90%, 0 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)'
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[current].src}
              alt={heroImages[current].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={current === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-4 left-4 z-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={current}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="glass text-brand-accent text-xs font-semibold px-3 py-1.5
                         rounded-full border border-brand-accent/30 uppercase tracking-wider"
            >
              {heroImages[current].label}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex gap-1.5">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 h-2 bg-brand-accent'
                  : 'w-2 h-2 bg-white/30 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
