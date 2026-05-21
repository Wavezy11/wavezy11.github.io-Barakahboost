'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-center pt-32 lg:pt-40 pb-16 px-6">
      {/* Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,200,130,0.07) 0%, transparent 70%)' }}
      />
      
      <div className="max-w-7xl mx-auto w-full z-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">
        {/* Left: Text Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="flex flex-col gap-6 lg:gap-8 w-full lg:w-1/2"
        >
          <motion.div variants={fadeUp} className="overflow-visible">
            <h1 className="font-display font-bold text-6xl sm:text-7xl md:text-8xl lg:text-[100px] leading-[0.9] tracking-tighter text-white">
              Groei die<br />
              <GradientText>resultaten</GradientText><br />
              levert.
            </h1>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-lg sm:text-xl max-w-lg leading-relaxed font-body mt-2"
          >
            Wij zijn jouw partner in exponentiële groei. Van high-end videografie tot schaalbare social strategieën. Binnen 30 dagen live.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mt-6"
          >
            <Link href="#boek-gesprek">
              <Button className="w-full sm:w-auto px-10 py-4 uppercase text-sm tracking-widest font-bold text-brand-dark bg-[#00c882] hover:bg-[#00b070] border-none">
                Start jouw groei
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button variant="secondary" className="w-full sm:w-auto px-10 py-4 uppercase text-sm tracking-widest font-bold backdrop-blur-md">
                Bekijk ons werk
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Video Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 relative"
        >
          <div 
            className="w-full aspect-[4/5] lg:aspect-square relative overflow-hidden"
            style={{ 
              borderRadius: '16px', 
              boxShadow: '0 0 60px rgba(0, 200, 130, 0.15)' 
            }}
          >
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/Recap-Abu%20Taymiyyah%20event.mp4"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-brand-muted">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-[#00c882] opacity-70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
