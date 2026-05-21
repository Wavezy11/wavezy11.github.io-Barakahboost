'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, staggerContainer } from '@/lib/animations'

const points = [
  {
    title: 'Focus op keiharde ROI',
    desc: 'Geen vanity metrics zoals likes of impressies zonder conversie. Wij bouwen systemen die direct bijdragen aan je bottom line.'
  },
  {
    title: 'In-house productie',
    desc: 'Van videografie tot copywriting, alles wordt in-house geproduceerd door ons eigen team van specialisten voor maximale kwaliteitscontrole.'
  },
  {
    title: 'Snelheid & Executie',
    desc: 'In de huidige markt wint de snelste. Wij lanceren complete campagnes en websites binnen 30 dagen, zonder in te leveren op kwaliteit.'
  },
  {
    title: 'Data-gedreven beslissingen',
    desc: 'Onderbuikgevoel is leuk, maar data liegt niet. Wij baseren al onze iteraties en optimalisaties op harde data uit de markt.'
  }
]

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-[80px] lg:py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="w-full lg:w-1/2">
            <div className="sticky top-40">
              <span className="section-label mb-6">✦ WAAROM BARAKAHBOOST</span>
              <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6">
                Wij leveren geen diensten.<br />
                <span className="text-brand-muted">Wij leveren resultaten.</span>
              </h2>
            </div>
          </div>

          {/* Right Column - Points */}
          <div className="w-full lg:w-1/2 pt-4 lg:pt-12">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-10 border-l-2 pl-8 relative"
              style={{ borderColor: 'rgba(0,200,130,0.3)' }}
            >
              {points.map((point, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeUp}
                  className="flex gap-4 relative"
                >
                  {/* Decorative dot on the border line */}
                  <div className="absolute left-[-39px] top-1 w-[10px] h-[10px] rounded-full bg-[#00c882] shadow-[0_0_10px_#00c882]" />
                  
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full bg-[rgba(0,200,130,0.15)] flex items-center justify-center">
                      <Check className="w-3.5 h-3.5 text-[#00c882]" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[18px] font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-[13px] text-brand-muted leading-relaxed max-w-md">
                      {point.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
