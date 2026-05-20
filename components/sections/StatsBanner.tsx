'use client'

import React from 'react'
import { CountUp } from '@/components/ui/CountUp'

export function StatsBanner() {
  const stats = [
    { value: 7, suffix: '', title: 'Specialisten' },
    { value: 50, suffix: '+', title: 'Projecten' },
    { value: 30, suffix: '', title: 'Dagen' },
    { value: 20000000, suffix: '+', title: 'Weergaven' }
  ]

  return (
    <section id="stats" className="relative py-12 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass border border-white/10 rounded-[20px] backdrop-blur-20 py-8 px-4 sm:px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={stat.title} 
              className="flex flex-col items-center text-center px-4 py-6 lg:py-8"
            >
              <h3 className="font-mono font-bold tracking-tight text-brand-gradient bg-brand-gradient bg-clip-text text-transparent mb-2 text-3xl sm:text-4xl lg:text-5xl">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-brand-muted text-xs sm:text-sm font-semibold uppercase tracking-wider font-body">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
