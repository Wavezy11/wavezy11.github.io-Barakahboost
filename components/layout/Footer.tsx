'use client'

import React from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Building } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/barakahboost.nl/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@barakahboost.nl',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.525.02c1.31-.03 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.19 1.12 1.25 2.7 2.02 4.35 2.19v3.8c-1.42-.09-2.8-.62-3.95-1.5-.78-.59-1.42-1.37-1.84-2.27-.08 1.94-.03 3.88-.05 5.82-.09 3.01-1.21 6.01-3.47 8.04-2.42 2.13-5.88 2.91-8.99 2.13-3.29-.86-6.05-3.6-6.92-6.92-1.01-3.83.6-8.15 3.99-10.22 2.1-1.26 4.67-1.57 6.99-.87v3.91c-1.42-.48-3.05-.18-4.18.79-.99.88-1.44 2.27-1.19 3.56.27 1.54 1.54 2.8 3.1 3.05 1.59.27 3.32-.51 4.01-1.99.37-.77.49-1.64.46-2.5V.02z" />
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/barakahboost/',
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9H7.12v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7h-3.56V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29z" />
        </svg>
      )
    }
  ]

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'BarakahLaunch', href: '/barakahlaunch' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative bg-brand-dark border-t border-white/5 pt-20 pb-8 overflow-hidden z-10">
      {/* Background glow overlay */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-20"
        style={{ 
          background: 'radial-gradient(ellipse at 50% 100%, rgba(62,207,178,0.15) 0%, transparent 70%)' 
        }} 
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-16">
        {/* Brand Column */}
        <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
          <Link href="/" className="flex items-center gap-3 justify-center sm:justify-start">
            <svg className="w-8 h-8 animate-glow-pulse" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 74L42 42L33 48L50 25L59 34L54 39L54 52L42 74Z" fill="white" />
              <path d="M43 73L54 51L64 37L53 59L43 73Z" fill="white" />
            </svg>
            <span className="text-xl font-bold text-brand-gradient bg-brand-gradient bg-clip-text text-transparent">
              BarakahBoost
            </span>
          </Link>
          <p className="text-brand-muted text-sm max-w-xs leading-relaxed">
            Wij zijn niet het bureau dat je inschakelt — wij zijn jouw partner in groei. Van strategie tot uitvoering. Binnen 30 dagen live.
          </p>
          <div className="flex items-center gap-4 text-brand-muted">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-accent transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="text-brand-text font-semibold uppercase tracking-wider text-sm">Navigatie</h4>
          <ul className="space-y-3 flex flex-col items-center md:items-start">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-brand-muted hover:text-brand-accent text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info Column */}
        <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="text-brand-text font-semibold uppercase tracking-wider text-sm">Contactgegevens</h4>
          <ul className="space-y-4 flex flex-col items-center md:items-start">
            <li className="flex items-center gap-3 text-sm text-brand-muted">
              <Mail className="w-5 h-5 text-brand-accent shrink-0" />
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}`} className="hover:text-brand-accent transition-colors">
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-muted">
              <Phone className="w-5 h-5 text-brand-accent shrink-0" />
              <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+31685546310"}`} className="hover:text-brand-accent transition-colors">
                {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+31 6 85546310"}
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-brand-muted">
              <Building className="w-5 h-5 text-brand-accent shrink-0" />
              <span>KVK: {process.env.NEXT_PUBLIC_CONTACT_KVK || "65461916"}</span>
            </li>
          </ul>
        </div>

        {/* Location / Address Column */}
        <div className="space-y-6 flex flex-col items-center text-center md:items-start md:text-left">
          <h4 className="text-brand-text font-semibold uppercase tracking-wider text-sm">Kantoor</h4>
          <ul className="space-y-4 flex flex-col items-center md:items-start">
            <li className="flex items-start gap-3 text-sm text-brand-muted leading-relaxed">
              <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
              <span>
                {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET || "Parkweg 226 B"},<br />
                {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_CITY || "3119 CR Schiedam"}
              </span>
            </li>
            <li className="pt-2">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300"
              >
                <span>Stuur ons een appje</span>
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/10 text-center text-xs text-brand-muted">
        <p>&copy; {currentYear} BarakahBoost. Alle rechten voorbehouden.</p>
        <p>Gemaakt met passie voor groei.</p>
      </div>
    </footer>
  )
}
