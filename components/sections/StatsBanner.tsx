'use client'

import React from 'react'
import { CountUp } from '@/components/ui/CountUp'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function StatsBanner() {
  const ref = useScrollAnimation()

  return (
    <section id="stats" ref={ref} className="relative z-10 bg-[#0a1a14] stats-section">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="stats-grid">
          
          <div className="stat-item" style={{ transitionDelay: '0s' }}>
            <div className="stat-number">
              <CountUp end={7} suffix="" />
            </div>
            <div className="stat-label">Specialisten</div>
          </div>
          
          <div className="stat-item" style={{ transitionDelay: '0.1s' }}>
            <div className="stat-number">
              <CountUp end={50} suffix="+" />
            </div>
            <div className="stat-label">Projecten</div>
          </div>
          
          <div className="stat-item featured" style={{ transitionDelay: '0.2s' }}>
            <div className="stat-number">
              <CountUp end={30} suffix="" />
            </div>
            <div className="stat-label">Dagen oplevering</div>
          </div>
          
          <div className="stat-item" style={{ transitionDelay: '0.3s' }}>
            <div className="stat-number">
              <CountUp end={20000000} suffix="+" />
            </div>
            <div className="stat-label">Weergaven gegenereerd</div>
          </div>

        </div>
      </div>
    </section>
  )
}
