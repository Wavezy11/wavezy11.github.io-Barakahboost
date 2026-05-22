'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 lg:py-32 z-10 bg-[#0a1a14] section-animate">
      <div className="max-w-[800px] mx-auto px-6 w-full text-left">
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-8"
        >
          <motion.span variants={fadeUp} className="text-[#4aad73] font-bold text-xs tracking-widest uppercase">
            ✦ De standaard doorbreken
          </motion.span>
          
          <motion.h2 
            variants={fadeUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-[#f0f5f2]"
          >
            De meeste bureaus leveren hetzelfde riedeltje: wat posts, wat ads en een simpele website. 
            <span className="text-[#8aab96]"> Wij bouwen onweerstaanbare merken en converterende systemen.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-[#8aab96] text-lg leading-relaxed mt-4">
            In de huidige markt wint de partij met de sterkste presentatie en de snelste executie. 
            Wij zorgen dat jouw merk niet alleen opvalt, maar ook direct converteert. 
            Geen theoretische plannen, maar harde resultaten binnen 30 dagen.
          </motion.p>

          <motion.div 
            variants={fadeUp}
            className="mt-8 pl-6 border-l-2 border-[#2d7a4f]"
          >
            <p className="text-xl sm:text-2xl font-medium text-[#f0f5f2] italic mb-4 leading-relaxed">
              "BarakahBoost heeft niet alleen onze website gebouwd, maar onze complete digitale uitstraling geprofessionaliseerd. Binnen een paar weken stonden we live met een merk dat autoriteit uitstraalt."
            </p>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-wide">Ibrahim</span>
              <span className="text-[#4aad73] text-sm font-semibold uppercase tracking-wider mt-1">Founder, Nornion</span>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
