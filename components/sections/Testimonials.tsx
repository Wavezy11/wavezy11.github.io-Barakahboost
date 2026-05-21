'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { testimonials } from '@/lib/data'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'

const getLogoForCompany = (companyName: string) => {
  const normalized = companyName.toLowerCase().replace(/[^a-z0-9]/g, '')
  if (normalized.includes('spaolivia')) return '/clients/spaolivia.png'
  if (normalized.includes('systematex')) return '/clients/systematex.jpg'
  if (normalized.includes('ziya')) return '/clients/ziyaclothing.jpeg'
  return null
}

export function Testimonials() {
  return (
    <section className="relative py-[80px] lg:py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 lg:mb-24 w-full">
          <span className="section-label mb-6">✦ KLANTENVERHALEN</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6">
            Wat onze <GradientText>klanten zeggen</GradientText>
          </h2>
          <p className="text-brand-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
            De resultaten spreken voor zich. Lees de ervaringen van ondernemers die met ons groeien.
          </p>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => {
            const logoPath = getLogoForCompany(t.company)
            
            return (
              <motion.div
                key={t.author}
                variants={fadeUp}
                className="relative flex flex-col justify-between"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: '16px',
                  padding: '32px'
                }}
              >
                {/* Decorative Quote */}
                <div 
                  className="mb-4"
                  style={{
                    content: '"\\201D"',
                    fontSize: '64px',
                    lineHeight: 1,
                    color: 'rgba(0,200,130,0.3)',
                    fontFamily: 'Georgia, serif',
                    display: 'block'
                  }}
                >
                  "
                </div>

                {/* Quote Body */}
                <p className="text-white/80 text-[15px] leading-relaxed italic mb-8 relative z-10">
                  {t.quote}
                </p>

                {/* Author / Company Logo */}
                <div className="flex items-center gap-4 mt-auto">
                  {logoPath ? (
                    <div className="relative w-12 h-12">
                      <Image
                        src={logoPath}
                        alt={t.company}
                        fill
                        className="object-contain"
                        style={{ opacity: 0.9, borderRadius: '8px' }}
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center font-bold text-white/50">
                      {t.author.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {t.author}
                    </h4>
                    <p className="text-[#00c882] text-xs font-bold uppercase tracking-widest mt-1">
                      {t.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
