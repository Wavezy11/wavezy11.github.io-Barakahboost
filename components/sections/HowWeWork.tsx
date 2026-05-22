'use client'

import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

const steps = [
  {
    title: 'Strategie & Concept',
    description: 'Geen aannames. We analyseren je markt en bouwen een ijzersterke blauwdruk voor je merk.'
  },
  {
    title: 'Creatie & Ontwerp',
    description: 'Van premium webdesign tot high-end videografie. We creëren assets die je concurrentie wegblazen.'
  },
  {
    title: 'Groei & Opschalen',
    description: 'We lanceren je campagnes, beheren je kanalen en sturen 100% op ROI en schaalbaarheid.'
  }
]

export function HowWeWork() {
  const ref = useScrollAnimation()

  return (
    <section id="how-we-work" ref={ref} className="relative py-24 lg:py-32 z-10 bg-[#0f2318]">
      <div className="max-w-[1160px] mx-auto px-6 w-full">
        
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20 w-full">
          <span className="text-[#4aad73] font-bold text-xs tracking-widest uppercase mb-4">✦ Werkwijze</span>
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-[1.1] tracking-tight text-[#f0f5f2] max-w-2xl">
            Snel, transparant en <span className="text-[#8aab96]">bizar effectief.</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="process-step" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="process-step-number">0{index + 1}</div>
              <h4 className="process-step-title">{step.title}</h4>
              <p className="process-step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        {/* BarakahLaunch Feature Box */}
        <div className="process-feature-box mt-12" style={{ transitionDelay: '0.4s' }}>
          <div>
            <span className="barakahlaunch-badge">BarakahLaunch Programma</span>
            <h3>Liever alles in één keer geregeld?</h3>
            <p>Ons signature 30-dagen programma pakt alles tegelijk aan. Van complete rebranding tot een nieuwe website en je eerste marketing funnel.</p>
          </div>
          <div>
            <h4>Wat je krijgt:</h4>
            <ul>
              <li>Complete merkstrategie & identiteit</li>
              <li>High-performance webshop of website</li>
              <li>Social media content playbook</li>
              <li>Klaar om te schalen binnen 4 weken</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
