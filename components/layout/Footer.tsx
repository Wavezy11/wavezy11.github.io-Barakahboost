'use client'

import React from 'react'
import Link from 'next/link'

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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Diensten', href: '/diensten' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'BarakahLaunch', href: '/barakahlaunch' },
    { name: 'Over Ons', href: '/over-ons' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="relative bg-[#0a1a14] border-t border-white/5 pt-16 pb-8 overflow-hidden z-10">
      
      {/* Main Footer Links */}
      <div className="max-w-[1160px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/5 items-start">
        
        {/* Brand Column */}
        <div className="flex flex-col items-start text-left gap-4">
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-8 h-8 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M42 74L42 42L33 48L50 25L59 34L54 39L54 52L42 74Z" fill="#f0f5f2" />
              <path d="M43 73L54 51L64 37L53 59L43 73Z" fill="#f0f5f2" />
            </svg>
            <span className="text-xl font-bold tracking-tight text-[#f0f5f2]">
              BarakahBoost
            </span>
          </Link>
          <p className="text-[#8aab96] text-[14px] leading-relaxed max-w-xs">
            Wij zijn niet het bureau dat je inschakelt — wij zijn jouw partner in groei. Van strategie tot uitvoering. Binnen 30 dagen live.
          </p>
          <div className="flex items-center gap-5 text-[#8aab96] mt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#4aad73] transition-colors duration-200"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Navigation Column */}
        <div className="flex flex-col items-start text-left">
          <h4 className="text-[#f0f5f2] font-semibold text-[15px] mb-4">Navigatie</h4>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-[#8aab96] hover:text-[#4aad73] text-[15px] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contactgegevens Column */}
        <div className="flex flex-col items-start text-left">
          <h4 className="text-[#f0f5f2] font-semibold text-[15px] mb-4">Contactgegevens</h4>
          <ul className="space-y-3">
            <li>
              <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}`} className="text-[#8aab96] hover:text-[#4aad73] text-[15px] transition-colors duration-200">
                {process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@barakahboost.nl"}
              </a>
            </li>
            <li>
              <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+31685546310"}`} className="text-[#8aab96] hover:text-[#4aad73] text-[15px] transition-colors duration-200">
                {process.env.NEXT_PUBLIC_CONTACT_PHONE || "+31 6 85546310"}
              </a>
            </li>
            <li className="text-[#8aab96] text-[15px]">
              KVK: {process.env.NEXT_PUBLIC_CONTACT_KVK || "65461916"}
            </li>
          </ul>
        </div>

        {/* Kantoor Column */}
        <div className="flex flex-col items-start text-left">
          <h4 className="text-[#f0f5f2] font-semibold text-[15px] mb-4">Kantoor</h4>
          <ul className="space-y-3">
            <li className="text-[#8aab96] text-[15px] leading-relaxed">
              {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_STREET || "Parkweg 226 B"},<br />
              {process.env.NEXT_PUBLIC_CONTACT_ADDRESS_CITY || "3119 CR Schiedam"}
            </li>
            <li className="pt-1">
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_CONTACT_PHONE_WHATSAPP || "31685546310"}?text=Hallo%20BarakahBoost`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[#4aad73] font-semibold text-[15px] hover:text-white transition-colors duration-200"
              >
                Stuur ons een appje →
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1160px] mx-auto px-6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[13px] text-[#8aab96]">
        <p>&copy; {currentYear} BarakahBoost. Alle rechten voorbehouden.</p>
        <p>KVK: {process.env.NEXT_PUBLIC_CONTACT_KVK || "65461916"}</p>
      </div>
    </footer>
  )
}
