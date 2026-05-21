'use client'

import React from 'react'
import { CountUp } from '@/components/ui/CountUp'
import { motion } from 'framer-motion'

export function StatsBanner() {
  return (
    <section id="stats" className="relative py-[80px] lg:py-[120px] z-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Separator line */}
        <div className="w-full border-t border-white/[0.08] mb-16 lg:mb-24" />

        {/* Coherent Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut", staggerChildren: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-full"
        >
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="font-display font-bold text-[40px] lg:text-[48px] text-[#00c882] mb-2 leading-none">
              <CountUp end={7} suffix="" />
            </h4>
            <p className="text-[12px] uppercase tracking-[0.15em] text-white/60 font-bold">
              Specialisten
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="font-display font-bold text-[40px] lg:text-[48px] text-[#00c882] mb-2 leading-none">
              <CountUp end={50} suffix="+" />
            </h4>
            <p className="text-[12px] uppercase tracking-[0.15em] text-white/60 font-bold">
              Projecten
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="font-display font-bold text-[40px] lg:text-[48px] text-[#00c882] mb-2 leading-none">
              <CountUp end={30} suffix="" />
            </h4>
            <p className="text-[12px] uppercase tracking-[0.15em] text-white/60 font-bold">
              Dagen
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h4 className="font-display font-bold text-[40px] lg:text-[48px] text-[#00c882] mb-2 leading-none">
              <CountUp end={20000000} suffix="+" />
            </h4>
            <p className="text-[12px] uppercase tracking-[0.15em] text-white/60 font-bold">
              Weergaven
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
