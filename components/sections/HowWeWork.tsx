'use client'

import React from 'react'
import { Lightbulb, Video, Scissors, Users } from 'lucide-react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function HowWeWork() {

  const steps = [
    {
      num: '01',
      title: 'Bedenken',
      icon: Lightbulb,
      description: 'Wij bedenken een succesvol concept dat perfect aansluit bij jouw merk en doelgroep.'
    },
    {
      num: '02',
      title: 'Filmen',
      icon: Video,
      description: 'Wij filmen jouw shortform of corporate video met professionele high-end apparatuur.'
    },
    {
      num: '03',
      title: 'Editen',
      icon: Scissors,
      description: 'Wij editen de video tot perfectie met moderne effecten en pakkende storytelling.'
    },
    {
      num: '04',
      title: 'Beheren',
      icon: Users,
      description: 'Wij beheren jouw social media accounts en optimaliseren voor maximaal reach en leads.'
    }
  ]

  return (
    <section id="how-we-work" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mb-4">
            Hoe wij <GradientText>te werk gaan</GradientText>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Van idee tot viral content en meetbare resultaten in 4 eenvoudige stappen.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Connecting line for desktop (visible md+) */}
          <div className="absolute top-[80px] left-[5%] right-[5%] h-[2px] bg-gradient-to-r from-brand-accent/20 via-brand-mid/40 to-brand-deep/20 hidden md:block" />

          {/* Steps Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step) => {
              const Icon = step.icon
              return (
                  <GlassCard
                  key={step.num}
                  variants={fadeUp}
                  className="p-8 flex flex-col items-center text-center relative bg-brand-surface/40 hover:scale-[1.03] transition-transform duration-300 motion-mobile-static"
                >
                  {/* Step Number Badge */}
                  <span className="absolute top-4 right-6 font-mono text-xs font-bold text-brand-accent/40">
                    {step.num}
                  </span>

                  {/* Icon Circle */}
                  <div className="w-16 h-16 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 glow-glow transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold font-display text-brand-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </GlassCard>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
