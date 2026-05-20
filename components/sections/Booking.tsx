'use client'

import React, { useEffect } from 'react'
import Cal, { getCalApi } from '@calcom/embed-react'
import { GradientText } from '@/components/ui/GradientText'
import { GlassCard } from '@/components/ui/GlassCard'

export function Booking() {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: '15min' });
        cal('ui', {
          styles: { branding: { brandColor: '#071412' } },
          hideEventTypeDetails: false,
          layout: 'month_view',
        });
      } catch (err) {
        console.error('Failed to initialize Cal.com embed:', err);
      }
    })();
  }, []);

  return (
    <section id="boek-gesprek" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ KENNISMAKEN</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight mt-3 mb-4">
            Plan een <GradientText>gratis gesprek</GradientText>
          </h2>
          <p className="text-brand-muted text-base sm:text-lg leading-relaxed">
            Kies een datum en tijd die jou uitkomt om de groeimogelijkheden van jouw onderneming te bespreken.
          </p>
        </div>

        {/* Cal Widget Card */}
        <div className="w-full overflow-hidden rounded-2xl">
          <GlassCard className="p-2 sm:p-6 max-w-4xl mx-auto border-white/10 bg-brand-surface/40 overflow-hidden w-full">
            <Cal
              namespace={process.env.NEXT_PUBLIC_CAL_NAMESPACE || "15min"}
              calLink={process.env.NEXT_PUBLIC_CAL_LINK || "barakahboost/15min"}
              style={{ minWidth: '280px', width: '100%', height: '650px' }}
              config={{ layout: 'month_view' }}
            />
          </GlassCard>
        </div>
      </div>
    </section>
  )
}
