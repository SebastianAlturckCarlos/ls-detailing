import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X } from 'lucide-react'
import { BUSINESS } from '../config'
import badge from '../assets/badge.png'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Our Work', href: '#work' },
  { label: 'Get a Quote', href: '#quote' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-night-950/85 backdrop-blur-md border-b border-night-700/60 shadow-lg shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={badge}
            alt="LS Detailing logo"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-ls-blue-500/60"
          />
          <span className="font-display text-lg font-bold italic tracking-wide text-white">
            LS <span className="text-ls-blue-400">DETAILING</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-steel-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={BUSINESS.phoneHref}
            className="group flex items-center gap-2 rounded-full bg-ls-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-ls-blue-400 hover:shadow-lg hover:shadow-ls-blue-500/30"
          >
            <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-b border-night-700 bg-night-950/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-steel-300 transition-colors hover:bg-night-800 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BUSINESS.phoneHref}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-ls-blue-500 px-5 py-3 font-semibold text-white"
              >
                <Phone className="h-4 w-4" /> {BUSINESS.phoneDisplay}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
