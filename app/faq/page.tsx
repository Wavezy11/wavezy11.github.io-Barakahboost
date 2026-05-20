'use client'

import React, { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqItems } from '@/lib/data'
import { GlassCard } from '@/components/ui/GlassCard'
import { GradientText } from '@/components/ui/GradientText'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { AmbientBackground } from '@/components/layout/AmbientBackground'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Navbar />
      <AmbientBackground />

      <main className="pt-32 pb-24 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ INFORMATIE</span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-3 mb-6">
              Veelgestelde <GradientText>vragen</GradientText>
            </h1>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
              Heb je een vraag over onze werkwijze, tarieven of oplevertijden? Hier vind je antwoorden op de meest gestelde vragen. Staat je vraag er niet tussen? Neem gerust contact met ons op.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <GlassCard
                  key={index}
                  className="p-6 border-white/5 bg-white/[0.01] rounded-2xl cursor-pointer"
                  hoverEffect={false}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-4">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isOpen ? 'text-brand-accent glow-glow' : 'text-brand-muted'}`} />
                      <h3 className="text-base sm:text-lg font-bold text-brand-text">
                        {item.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-brand-muted shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-brand-muted text-sm sm:text-base leading-relaxed pt-4 pl-9 border-t border-white/5 mt-4 whitespace-pre-line">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlassCard>
              )
            })}
          </div>

          {/* CTA Banner */}
          <GlassCard className="mt-16 p-8 border-white/10 bg-brand-surface2/15 rounded-[24px] text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold font-display text-brand-text mb-2">
              Nog vragen over?
            </h3>
            <p className="text-brand-muted text-sm leading-relaxed mb-6">
              Stuur ons direct een bericht via WhatsApp of e-mail. We reageren doorgaans binnen een paar uur.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:shadow-green-500/20 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}`}
                className="bg-white/5 border border-white/10 hover:bg-white/10 text-brand-text px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>E-mailen</span>
              </a>
            </div>
          </GlassCard>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
