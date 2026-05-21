'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cases } from '@/lib/data'
import { GradientText } from '@/components/ui/GradientText'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from '@/lib/animations'

export function Portfolio() {
  // We expect 3 cases for this specific layout.
  // Left large card (index 0)
  // Right stacked cards (index 1 and 2)
  const leftCase = cases[0]
  const topCase = cases[1]
  const bottomCase = cases[2]

  if (!leftCase || !topCase || !bottomCase) return null; // Fallback if data is missing

  return (
    <section id="portfolio" className="relative py-[80px] lg:py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16 lg:mb-24 w-full">
          <span className="section-label mb-6">✦ PORTFOLIO</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6 text-white">
            Geselecteerd <br/><GradientText>werk</GradientText>
          </h2>
          <p className="text-brand-muted text-[15px] sm:text-base leading-relaxed max-w-xl">
            Geen theoretische plannen, maar tastbaar resultaat. Bekijk de impact die we creëren voor premium merken.
          </p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="flex flex-col lg:flex-row gap-6 w-full">
          
          {/* Left Large Card */}
          <Link href={leftCase.projectLink || '#'} className="w-full lg:w-1/2 block">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="w-full h-[400px] lg:h-[520px] relative group overflow-hidden rounded-[16px]"
            >
            <Image
              src={leftCase.image}
              alt={leftCase.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              style={{ objectPosition: leftCase.imagePosition || 'center' }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            
            {/* Content Absolute Bottom */}
            <div className="absolute bottom-0 left-0 w-full p-8 lg:p-10 flex flex-col items-start">
              <span className="mb-4" style={{
                background: 'rgba(0,200,130,0.15)',
                border: '1px solid rgba(0,200,130,0.3)',
                color: '#00c882',
                fontSize: '11px',
                padding: '4px 10px',
                borderRadius: '20px',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>
                {leftCase.stat}
              </span>
              
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">
                {leftCase.title}
              </h3>
              
              <p className="text-white/70 text-sm max-w-md line-clamp-2 mb-6">
                {leftCase.shortDescription}
              </p>

              <div 
                className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              >
                <div className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold">
                  Case bekijken <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            </motion.div>
          </Link>

          {/* Right Stacked Cards */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            
            {/* Top Right Card */}
            <Link href={topCase.projectLink || '#'} className="w-full block">
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative group overflow-hidden rounded-[16px] h-[248px] w-full"
              >
              <Image
                src={topCase.image}
                alt={topCase.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: topCase.imagePosition || 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col items-start">
                <div className="flex justify-between w-full items-end">
                  <div>
                    <span className="mb-3 block w-fit" style={{
                      background: 'rgba(0,200,130,0.15)', border: '1px solid rgba(0,200,130,0.3)', color: '#00c882', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700
                    }}>
                      {topCase.stat}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{topCase.title}</h3>
                  </div>
                  
                  <div 
                    className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">
                      Case bekijken
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            </Link>

            {/* Bottom Right Card */}
            <Link href={bottomCase.projectLink || '#'} className="w-full block">
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative group overflow-hidden rounded-[16px] h-[248px] w-full"
              >
              <Image
                src={bottomCase.image}
                alt={bottomCase.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                style={{ objectPosition: bottomCase.imagePosition || 'center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.4)] to-transparent transition-opacity duration-500 group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col items-start">
                <div className="flex justify-between w-full items-end">
                  <div>
                    <span className="mb-3 block w-fit" style={{
                      background: 'rgba(0,200,130,0.15)', border: '1px solid rgba(0,200,130,0.3)', color: '#00c882', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700
                    }}>
                      {bottomCase.stat}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{bottomCase.title}</h3>
                  </div>
                  
                  <div 
                    className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                  >
                    <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap">
                      Case bekijken
                    </div>
                  </div>
                </div>
              </div>
              </motion.div>
            </Link>

          </div>
        </div>

      </div>
    </section>
  )
}
