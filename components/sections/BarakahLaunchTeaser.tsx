'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, Rocket } from 'lucide-react'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp } from '@/lib/animations'

const featuresLeft = ['Branding', 'Website', 'Positionering', 'Content']
const featuresRight = ['Marketingstrategie', 'Lead Generatie', 'Social Media', 'Copywriting']

export function BarakahLaunchTeaser() {
  return (
    <section 
      id="barakahlaunch" 
      className="relative py-[80px] lg:py-[120px] z-10"
      style={{
        background: 'rgba(0,200,130,0.04)',
        borderTop: '1px solid rgba(0,200,130,0.15)',
        borderBottom: '1px solid rgba(0,200,130,0.15)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col items-start"
          >
            <span className="section-label mb-6">✦ EXCLUSIEF TRAJECT</span>
            
            <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight mb-6">
              Het ultieme <br/> <GradientText>groeisysteem</GradientText>
            </h2>
            
            <p className="text-brand-muted text-lg leading-relaxed mb-8 max-w-lg">
              Geen losse diensten, maar één krachtig ecosysteem. Wij bouwen je complete online aanwezigheid en schalen je omzet.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-10" style={{ background: 'rgba(0,200,130,0.15)', border: '1px solid rgba(0,200,130,0.3)' }}>
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00c882] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00c882]"></span>
              </span>
              <span className="text-[#00c882] text-xs font-bold uppercase tracking-widest">
                Nog 2 plekken beschikbaar deze maand
              </span>
            </div>

            <Link href="/barakahlaunch" className="w-full">
              <button 
                className="transition-transform hover:translate-y-[-2px] flex items-center justify-center gap-2"
                style={{
                  padding: '16px 32px',
                  background: '#00c882',
                  color: '#000',
                  fontWeight: 700,
                  borderRadius: '8px',
                  width: '100%',
                  maxWidth: '320px',
                  fontSize: '16px'
                }}
              >
                <Rocket className="w-5 h-5" />
                Ontdek BarakahLaunch
              </button>
            </Link>
          </motion.div>

          {/* Right Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div 
              className="p-8 lg:p-12 rounded-[24px]"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Wat is inbegrepen:</h3>
              <div className="flex gap-8 lg:gap-16">
                <ul className="flex flex-col gap-6 w-1/2">
                  {featuresLeft.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(0,200,130,0.15)] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#00c882]" />
                      </div>
                      <span className="text-white/90 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-6 w-1/2">
                  {featuresRight.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[rgba(0,200,130,0.15)] flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 text-[#00c882]" />
                      </div>
                      <span className="text-white/90 font-medium">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
