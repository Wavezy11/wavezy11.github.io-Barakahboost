'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { HeroSlider } from '@/components/ui/HeroSlider'

export function Hero() {

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-start lg:justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 lg:pt-0 lg:min-h-[100dvh] gap-8 lg:gap-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full z-10">
        
        {/* Left: Text & CTAs */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-5 sm:gap-6 text-center lg:text-left items-center lg:items-start"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-bold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          >
            Groei die<br />
            <GradientText>resultaten</GradientText><br />
            levert.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-base sm:text-lg md:text-xl max-w-xl leading-relaxed font-body mx-auto lg:mx-0"
          >
            Wij zijn niet het bureau dat je inschakelt — wij zijn jouw partner in groei. Van strategie tot uitvoering. Binnen 30 dagen live.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none sm:w-auto items-center justify-center lg:justify-start mt-2"
          >
            <Link href="#boek-gesprek" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 uppercase text-xs tracking-wider font-bold text-brand-dark">
                Start jouw groei &rarr;
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 uppercase text-xs tracking-wider font-bold">
                Bekijk ons werk
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Slider */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[400px] mx-auto aspect-[4/5] lg:aspect-auto lg:h-[460px]">
          <HeroSlider />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 cursor-pointer z-10"
        onClick={() => document.getElementById('stats')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] uppercase tracking-widest text-brand-muted font-bold font-mono">Scroll naar beneden</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-brand-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
