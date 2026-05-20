'use client'

import React from 'react'
import { Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function Testimonials() {
  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Wat onze <GradientText>klanten zeggen</GradientText>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            De resultaten spreken voor zich. Lees de ervaringen van ondernemers die met ons groeien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:overflow-x-auto gap-4"
        >
          {testimonials.map((t) => (
            <GlassCard
              key={t.author}
              variants={fadeUp}
              className="p-6 flex flex-col justify-between relative bg-white/[0.01] border-white/5 w-full lg:min-w-[340px] lg:max-w-[400px] flex-shrink-0 rounded-2xl"
            >
              {/* Quote Mark Icon */}
              <div className="text-brand-accent/20 absolute top-6 right-8">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              {/* Quote Body */}
              <p className="text-brand-text text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-brand-dark text-xs font-bold font-mono">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text">
                    {t.author}
                  </h4>
                  <p className="text-brand-muted text-xs uppercase tracking-wider">
                    {t.company}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
