'use client'

import React, { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

export function Booking() {
  const ref = useScrollAnimation()

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: '15min' });
        cal('ui', {
          styles: { branding: { brandColor: '#0a1a14' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Failed to initialize Cal.com embed:', err);
      }
    })();
  }, []);

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 z-10 bg-[#0a1a14]">
      <div className="max-w-[1160px] mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 
            className="font-bold leading-[1.05] tracking-tight mb-8 text-[#f0f5f2]"
            style={{ fontSize: 'clamp(48px, 8vw, 100px)', letterSpacing: '-0.03em' }}
          >
            Eén visie <br className="sm:hidden"/>om te winnen.
          </h2>
          <p className="text-[#8aab96] text-base sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Kies een datum en tijd die jou uitkomt om de groeimogelijkheden van jouw onderneming te bespreken.
          </p>
        </div>

        {/* Cal Widget Card */}
        <div className="w-full overflow-hidden rounded-2xl" style={{ transitionDelay: '0.2s' }}>
          <div className="p-2 sm:p-6 max-w-4xl mx-auto border border-white/10 bg-[#0f2318] rounded-2xl overflow-hidden w-full">
            <Cal
              namespace={process.env.NEXT_PUBLIC_CAL_NAMESPACE || "15min"}
              calLink={process.env.NEXT_PUBLIC_CAL_LINK || "barakahboost/15min"}
              style={{ minWidth: '280px', width: '100%', height: '650px' }}
              config={{ layout: 'month_view' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
