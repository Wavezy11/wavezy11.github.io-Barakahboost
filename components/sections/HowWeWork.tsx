'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GradientText } from '@/components/ui/GradientText'

const steps = [
  {
    id: '01',
    title: 'Bedenken',
    desc: 'Wij bedenken een succesvol concept dat perfect aansluit bij jouw merk en doelgroep. Geen half werk, maar strategische positionering. We analyseren je concurrenten en vinden de gaten in de markt.'
  },
  {
    id: '02',
    title: 'Filmen',
    desc: 'Wij filmen jouw shortform of corporate video met professionele high-end apparatuur. Cinematografische kwaliteit gegarandeerd. Onze in-house regisseurs zorgen voor de perfecte belichting en audio.'
  },
  {
    id: '03',
    title: 'Editen',
    desc: 'Wij editen de video tot perfectie met moderne effecten en pakkende storytelling om retentie te maximaliseren. Van sounddesign tot color grading, alles wordt tot in de puntjes verzorgd.'
  },
  {
    id: '04',
    title: 'Beheren',
    desc: 'Wij beheren jouw social media accounts en optimaliseren voor maximaal reach en de conversie van kijkers naar klanten. We reageren op comments en bouwen een actieve community rond je merk.'
  }
]

export function HowWeWork() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-we-work" className="relative py-[80px] lg:py-[120px] z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 flex flex-col items-start w-full">
          <span className="section-label mb-6">✦ WERKWIJZE</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-display font-bold leading-[1.1] tracking-tight text-white mb-6">
            Hoe wij <GradientText>te werk gaan</GradientText>
          </h2>
        </div>

        {/* Desktop: Horizontal Tabs */}
        <div className="hidden md:flex flex-col relative min-h-[400px]">
          
          {/* Tabs */}
          <div className="flex gap-4 mb-16 border-b border-white/[0.08] pb-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#00c882] text-black shadow-[0_0_20px_rgba(0,200,130,0.3)]' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {step.id} {step.title}
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <div className="relative flex-grow flex items-center">
            {/* Massive Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[300px] font-display font-black text-[#00c882]/5 leading-none"
                >
                  {steps[activeStep].id}
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl relative z-10 pl-8 border-l-4 border-[#00c882]"
              >
                <h3 className="text-3xl font-bold text-white mb-4">{steps[activeStep].title}</h3>
                <p className="text-lg text-brand-muted leading-relaxed">
                  {steps[activeStep].desc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Vertical Stepper */}
        <div className="md:hidden flex flex-col gap-12 relative">
          <div className="absolute left-[28px] top-0 bottom-0 w-[2px] bg-white/[0.08]" />
          
          {steps.map((step, idx) => (
            <div key={step.id} className="flex gap-6 relative z-10">
              <div className="w-[56px] h-[56px] rounded-full bg-[#071412] border border-[#00c882] flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,200,130,0.2)]">
                <span className="font-bold text-[#00c882]">{step.id}</span>
              </div>
              <div className="pt-3">
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
