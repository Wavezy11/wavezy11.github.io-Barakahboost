'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { GradientText } from '@/components/ui/GradientText'

export function Contact() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '7e58df24-a212-4217-91a5-cfb89094191c',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Nieuwe aanvraag van ${formData.name}`,
          from_name: 'BarakahBoost Contact Form',
        }),
      })

      const result = await response.json()
      if (result.success) {
        // Redirect to bedankt page
        router.push('/bedankt')
      } else {
        alert('Er is iets misgegaan bij het verzenden. Probeer het opnieuw.')
      }
    } catch (error) {
      console.error('Submit error:', error)
      alert('Er is een netwerkfout opgetreden. Probeer het opnieuw.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        
        {/* Left Column: Contact details */}
        <div className="space-y-8 flex flex-col justify-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-brand-accent font-bold font-mono">✦ CONTACT</span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold leading-tight">
              Kom in <GradientText>contact</GradientText>
            </h2>
            <p className="text-brand-muted text-base sm:text-lg leading-relaxed max-w-md">
              Heb je een vraag, wil je sparren over jouw strategie, of wil je direct starten? Stuur ons een bericht en we nemen zo snel mogelijk contact met je op.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 glow-glow">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-muted mb-1">Stuur ons een mail</h4>
                <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}`} className="text-base sm:text-lg text-brand-text font-semibold hover:text-brand-accent transition-colors">
                  {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}
                </a>
              </div>
            </div>

            {/* Tel */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 glow-glow">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-muted mb-1">Bel of app ons direct</h4>
                <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+31685546310"}`} className="text-base sm:text-lg text-brand-text font-semibold hover:text-brand-accent transition-colors">
                  {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+31 6 85546310"}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent shrink-0 glow-glow">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-brand-muted mb-1">Bezoek ons kantoor</h4>
                <p className="text-base sm:text-lg text-brand-text font-semibold leading-relaxed">
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET || "Parkweg 226 B"},<br />
                  {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_CITY || "3119 CR Schiedam"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact form */}
        <GlassCard className="p-8 sm:p-10 border-white/10 bg-brand-surface2/20 rounded-[28px]">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-wider font-bold text-brand-muted">
                Volledige naam
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Bijv. John Doe"
                className="w-full bg-brand-surface/60 border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-white/20 focus:border-brand-accent focus:outline-none transition-colors"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs uppercase tracking-wider font-bold text-brand-muted">
                  E-mailadres
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Bijv. john@example.com"
                  className="w-full bg-brand-surface/60 border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-white/20 focus:border-brand-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-wider font-bold text-brand-muted">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Bijv. +31 6 12345678"
                  className="w-full bg-brand-surface/60 border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-white/20 focus:border-brand-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-xs uppercase tracking-wider font-bold text-brand-muted">
                Jouw bericht of vraag
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Wat kunnen we voor je betekenen?"
                className="w-full bg-brand-surface/60 border border-white/10 rounded-xl px-5 py-4 text-brand-text placeholder-white/20 focus:border-brand-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full py-4 uppercase text-xs tracking-wider font-bold text-brand-dark flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verzenden...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Verzend bericht</span>
                </>
              )}
            </Button>
          </form>
        </GlassCard>
      </div>
    </section>
  )
}
