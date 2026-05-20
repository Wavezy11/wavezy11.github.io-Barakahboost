'use client'

import React from 'react'
import { Sparkles, Trophy, Eye, HeartHandshake } from 'lucide-react'
import { motion } from 'framer-motion'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function WhyUs() {

  const points = [
    {
      icon: Sparkles,
      text: 'Geen standaard templates. Altijd custom.',
      description: 'Elke website, strategie en campagne is vanaf nul voor jou ontworpen.'
    },
    {
      icon: Trophy,
      text: '7 specialisten, één visie: jouw groei.',
      description: 'Experts in design, copywriting, ads en video bundelen hun krachten.'
    },
    {
      icon: Eye,
      text: 'Transparant, snel en resultaatgericht.',
      description: 'Geen loze beloftes. Wel duidelijke cijfers en wekelijkse updates.'
    },
    {
      icon: HeartHandshake,
      text: 'Jouw partner, niet een leverancier.',
      description: 'Wij denken proactief met je mee en vieren jouw successen samen.'
    }
  ]

  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Heading Statement */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 flex flex-col items-center text-center lg:items-start lg:text-left motion-mobile-static"
        >
          <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ WAAROM BARAKAHBOOST</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Wij leveren geen diensten.<br />
            Wij leveren <GradientText>resultaten</GradientText>.
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-xl">
            In een wereld van marketingbureaus die templates verkopen en beloftes doen, focussen wij ons op wat écht telt: de groei van jouw onderneming. Met passie, toewijding en bewezen strategieën.
          </p>
        </motion.div>

        {/* Right Column: Stacked Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {points.map((point) => {
            const Icon = point.icon
            return (
              <GlassCard
                key={point.text}
                variants={fadeUp}
                className="p-6 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left gap-5 border border-white/5 bg-white/[0.02] motion-mobile-static"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 glow-glow">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <h4 className="text-base font-bold text-brand-text mb-1">
                    {point.text}
                  </h4>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </GlassCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
