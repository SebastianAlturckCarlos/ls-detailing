import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, MessageSquare, MapPin, CheckCircle2, LoaderCircle } from 'lucide-react'
import { BUSINESS, isQuoteEmailConfigured } from '../config'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const services = [
  'Interior Detail',
  'Mini Detail',
  'Full Detail',
  'Parts Replacement',
  'Modification / Customization',
  'Not sure yet',
]

const inputCls =
  'w-full rounded-xl border border-night-600/70 bg-night-900/80 px-4 py-3 text-white placeholder-steel-400/60 outline-none transition-colors focus:border-ls-blue-400 focus:ring-2 focus:ring-ls-blue-500/20'

// native selects add their own indent — strip it and draw our own chevron
const selectCls = `${inputCls} appearance-none pr-10 bg-no-repeat`
const selectStyle = {
  backgroundImage:
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236f81a3' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
  backgroundPosition: 'right 0.9rem center',
}

export default function Quote() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))

    const summary =
      `New quote request — LS Detailing\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Phone: ${data.phone}\nEmail: ${data.email}\n` +
      `Vehicle: ${data.vehicle}\nType: ${data.vehicleType}\n` +
      `Service: ${data.service}\nNotes: ${data.message || '—'}`

    if (!isQuoteEmailConfigured()) {
      // no email wired up yet — open a pre-filled text to the shop phone instead
      window.location.href = `${BUSINESS.smsHref}?&body=${encodeURIComponent(summary)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${BUSINESS.quoteEmail}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New quote request from ${data.firstName} ${data.lastName}`,
          _template: 'table',
          ...data,
        }),
      })
      if (!res.ok) throw new Error('send failed')
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="relative py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-ls-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* contact sidebar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ls-yellow-400">
              Get a Free Quote
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold italic text-white sm:text-5xl">
              LET'S GET YOUR CAR{' '}
              <span className="text-glow text-ls-blue-400">RIGHT.</span>
            </h2>
            <p className="mt-4 max-w-md text-steel-400">
              Tell us about your vehicle and what you need — we'll get back to
              you fast with a quote. Prefer to talk? Call or text any time.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-4 rounded-2xl border border-night-600/60 bg-night-800/70 p-4 transition-colors hover:border-ls-blue-500/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ls-blue-500/15">
                  <Phone className="h-5 w-5 text-ls-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-steel-400">Call us</p>
                  <p className="font-semibold text-white">{BUSINESS.phoneDisplay}</p>
                </div>
              </a>
              <a
                href={BUSINESS.smsHref}
                className="flex items-center gap-4 rounded-2xl border border-night-600/60 bg-night-800/70 p-4 transition-colors hover:border-ls-blue-500/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ls-blue-500/15">
                  <MessageSquare className="h-5 w-5 text-ls-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-steel-400">Text us</p>
                  <p className="font-semibold text-white">Fastest way to reach us</p>
                </div>
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-night-600/60 bg-night-800/70 p-4 transition-colors hover:border-ls-blue-500/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ls-blue-500/15">
                  <MapPin className="h-5 w-5 text-ls-blue-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-steel-400">Find us</p>
                  <p className="font-semibold text-white">
                    {BUSINESS.address}, {BUSINESS.cityStateZip}
                  </p>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-steel-400">
                Proudly serving
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {BUSINESS.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-ls-blue-500/30 bg-ls-blue-500/10 px-3.5 py-1.5 text-sm text-ls-blue-300"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* quote form — opacity-only animation and no backdrop-filter here:
              transforms/filters on an ancestor misplace native <select> popups on mobile */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="card-glow rounded-3xl border border-ls-blue-500/30 bg-night-800/90 p-7 sm:p-9"
          >
            {status === 'sent' ? (
              <div className="flex h-full min-h-96 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-16 w-16 text-ls-blue-400" />
                <h3 className="mt-5 font-display text-2xl font-bold italic text-white">
                  REQUEST SENT!
                </h3>
                <p className="mt-2 max-w-sm text-steel-400">
                  Thanks for reaching out — we'll get back to you with a quote
                  as soon as possible. Need it faster? Call or text{' '}
                  <a href={BUSINESS.phoneHref} className="font-semibold text-ls-blue-400">
                    {BUSINESS.phoneDisplay}
                  </a>
                  .
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 rounded-full border border-steel-400/40 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-ls-blue-400"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      First Name *
                    </label>
                    <input name="firstName" required placeholder="First name" className={inputCls} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      Last Name *
                    </label>
                    <input name="lastName" required placeholder="Last name" className={inputCls} />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 555-5555"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="you@email.com"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-steel-300">
                    Vehicle — Make / Model / Year / Color *
                  </label>
                  <input
                    name="vehicle"
                    required
                    placeholder="e.g. Toyota Camry 2025, Black"
                    className={inputCls}
                  />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      Vehicle Type *
                    </label>
                    <select name="vehicleType" required className={selectCls} style={selectStyle} defaultValue="">
                      <option value="" disabled>
                        Select type…
                      </option>
                      <option>Sedan</option>
                      <option>SUV / Truck / Van</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-steel-300">
                      Service *
                    </label>
                    <select name="service" required className={selectCls} style={selectStyle} defaultValue="">
                      <option value="" disabled>
                        Select service…
                      </option>
                      {services.map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-steel-300">
                    Anything else we should know?
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Pet hair, stains, add-ons, custom work ideas…"
                    className={inputCls}
                  />
                </div>

                {status === 'error' && (
                  <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    Something went wrong sending your request. Please call or
                    text us at {BUSINESS.phoneDisplay} instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-ls-blue-500 py-4 font-semibold text-white shadow-lg shadow-ls-blue-500/25 transition-all hover:bg-ls-blue-400 hover:shadow-xl hover:shadow-ls-blue-500/40 disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      <LoaderCircle className="h-5 w-5 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Get A FREE Quote Today
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-steel-400/80">
                  We only use your info to respond to your quote — no spam, ever.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
