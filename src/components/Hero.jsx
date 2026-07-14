import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Sparkles, Wrench } from 'lucide-react'
import { BUSINESS } from '../config'
import logo from '../assets/logo-transparent.png'
import heroPhoto from '../assets/toyota-clean.jpeg'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.12 * i, ease: 'easeOut' },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* trademark shot as the backdrop */}
      <div className="absolute inset-0">
        {/* source photo is small — the slight blur hides upscale pixelation */}
        <img
          src={heroPhoto}
          alt="Freshly detailed black Toyota Camry at sunset"
          className="h-full w-full scale-[1.02] object-cover object-center blur-[2px]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-night-950 via-night-950/85 to-night-950/30" />
        <div className="absolute inset-0 bg-linear-to-t from-night-950 via-transparent to-night-950/60" />
        <div className="bg-grid absolute inset-0 opacity-60" />
      </div>

      {/* ambient glow blobs */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-ls-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-ls-yellow-500/10 blur-[100px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pb-20 pt-32 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-ls-blue-500/40 bg-ls-blue-500/10 px-4 py-1.5 text-sm font-medium text-ls-blue-300"
          >
            <MapPin className="h-4 w-4" />
            Junction City · Fort Riley · Manhattan, KS
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display text-5xl font-bold italic leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            YOUR CAR,
            <br />
            <span className="text-glow bg-linear-to-r from-ls-blue-300 via-ls-blue-400 to-ls-blue-600 bg-clip-text text-transparent">
              SHOWROOM
            </span>{' '}
            CLEAN.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-steel-300"
          >
            Professional auto detailing, parts replacement, modifications and
            customizations — done with obsessive attention to detail, right here
            in Junction City.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#quote"
              className="group inline-flex items-center gap-2 rounded-full bg-ls-blue-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-ls-blue-500/25 transition-all hover:bg-ls-blue-400 hover:shadow-xl hover:shadow-ls-blue-500/40"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-steel-400/40 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:border-ls-blue-400 hover:bg-ls-blue-500/10"
            >
              See Our Work
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 grid max-w-lg grid-cols-2 gap-4"
          >
            {[
              { icon: Sparkles, title: 'Detailing', desc: 'Interior, mini & full packages' },
              { icon: Wrench, title: 'Custom Work', desc: 'Parts, mods & customization' },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-night-600/60 bg-night-900/60 p-4 backdrop-blur-sm"
              >
                <Icon className="mb-2 h-5 w-5 text-ls-yellow-400" />
                <p className="font-display font-semibold text-white">{title}</p>
                <p className="text-sm text-steel-400">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* floating logo badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: 'easeOut' }}
          className="hidden justify-center lg:flex"
        >
          <div className="animate-float relative">
            <div className="absolute inset-0 scale-90 rounded-full bg-ls-blue-500/30 blur-3xl" />
            <img
              src={logo}
              alt="LS Detailing — bee mascot washing a car"
              className="relative w-80 drop-shadow-[0_20px_50px_rgba(47,127,240,0.35)]"
            />
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-steel-400/50 p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="h-2 w-1.5 rounded-full bg-ls-blue-400"
          />
        </div>
      </motion.div>
    </section>
  )
}
