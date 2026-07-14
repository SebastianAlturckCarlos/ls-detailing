import { Phone, MapPin } from 'lucide-react'
import { BUSINESS } from '../config'
import badge from '../assets/badge.png'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.78-3.91 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-night-700 bg-night-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={badge}
                alt="LS Detailing logo"
                className="h-12 w-12 rounded-full object-cover ring-2 ring-ls-blue-500/60"
              />
              <span className="font-display text-lg font-bold italic text-white">
                LS <span className="text-ls-blue-400">DETAILING</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-steel-400">
              Auto detailing, parts replacement, modifications & customizations
              serving Junction City, Fort Riley and Manhattan, Kansas.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={BUSINESS.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook — Luis Detailing"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-night-600 text-steel-300 transition-colors hover:border-ls-blue-400 hover:text-ls-blue-400"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-night-600 text-steel-300 transition-colors hover:border-ls-blue-400 hover:text-ls-blue-400"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display font-semibold uppercase tracking-wider text-white">
              Contact
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2.5 text-steel-300 transition-colors hover:text-ls-blue-400"
              >
                <Phone className="h-4 w-4 text-ls-blue-400" />
                {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-steel-300 transition-colors hover:text-ls-blue-400"
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ls-blue-400" />
                <span>
                  {BUSINESS.address}
                  <br />
                  {BUSINESS.cityStateZip}
                </span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-night-600/60">
            <iframe
              title="LS Detailing location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${BUSINESS.address}, ${BUSINESS.cityStateZip}`
              )}&z=13&output=embed`}
              className="h-48 w-full grayscale-[40%] invert-[90%] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-night-700 pt-6 text-xs text-steel-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p>Junction City · Fort Riley · Manhattan, KS</p>
        </div>
      </div>
    </footer>
  )
}
