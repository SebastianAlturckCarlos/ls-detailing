import { motion } from 'framer-motion'
import { Check, Star, Wrench, Cog, PaintBucket, ArrowRight } from 'lucide-react'

const packages = [
  {
    name: 'Interior Detail',
    sedan: 75,
    suv: 110,
    tagline: 'A deep reset for your cabin',
    features: [
      'Deep vacuum cleaning',
      'All major surfaces wiped down & protected',
      'Carpet / rubber floor mats cleaned',
      'Interior windows cleaned',
    ],
    addons: [
      { label: 'Spot stain removal', price: 20 },
      { label: 'Cloth seats shampooed & extracted', price: 20 },
      { label: 'Leather seat conditioning', price: 15 },
      { label: 'Carpets shampooed & extracted', price: 20 },
    ],
  },
  {
    name: 'Mini Detail',
    sedan: 150,
    suv: 200,
    tagline: 'Inside & out, the essentials done right',
    features: [
      'Foam wash & hand wash',
      'Wheels and tires cleaned',
      'Door jambs cleaned and wiped down',
      'Spray wax / sealant',
      'Interior wipe down of all major surfaces',
      'Floor mats cleaned (rubber / carpet)',
      'Deep interior vacuum',
      'Interior and exterior windows cleaned',
    ],
  },
  {
    name: 'Full Detail',
    sedan: 250,
    suv: 300,
    tagline: 'The complete showroom treatment',
    featured: true,
    features: [
      'Everything in the Mini Detail',
      'Tar removal',
      'Iron decontamination',
      'Cloth seats shampooed',
      'Spot stain removal (interior)',
      'Leather seat conditioning & protectant',
      'Ceramic wax protectant — up to 90 days',
    ],
  },
]

const customWork = [
  {
    icon: Wrench,
    title: 'Parts Replacement',
    desc: 'Worn or broken parts swapped out with quality components.',
  },
  {
    icon: Cog,
    title: 'Modifications',
    desc: 'Performance and appearance mods installed the right way.',
  },
  {
    icon: PaintBucket,
    title: 'Customizations',
    desc: 'Make it yours — interior and exterior custom touches.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-ls-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ls-yellow-400">
            Packages & Pricing
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold italic text-white sm:text-5xl">
            PICK YOUR <span className="text-ls-blue-400">DETAIL</span>
          </h2>
          <p className="mt-4 text-steel-400">
            Straightforward pricing for sedans and SUVs, trucks & vans. Every
            package is done by hand — no shortcuts.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl border p-7 transition-transform duration-300 hover:-translate-y-2 ${
                pkg.featured
                  ? 'card-glow border-ls-blue-500/50 bg-linear-to-b from-night-700/80 to-night-800'
                  : 'border-night-600/60 bg-night-800/70 hover:border-ls-blue-500/40'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-ls-yellow-400 px-4 py-1 text-xs font-bold uppercase tracking-wider text-night-950">
                  <Star className="h-3.5 w-3.5 fill-night-950" /> Most Popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold italic text-white">
                {pkg.name.toUpperCase()}
              </h3>
              <p className="mt-1 text-sm text-steel-400">{pkg.tagline}</p>

              <div className="mt-5 flex items-end gap-6 border-b border-night-600/60 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-wider text-steel-400">Sedans</p>
                  <p className="font-display text-4xl font-bold text-white">
                    ${pkg.sedan}
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-steel-400">
                    SUV / Truck / Van
                  </p>
                  <p className="font-display text-4xl font-bold text-ls-blue-400">
                    ${pkg.suv}
                  </p>
                </div>
              </div>

              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-ls-blue-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {pkg.addons && (
                <div className="mt-5 rounded-2xl bg-night-900/70 p-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-ls-yellow-400">
                    Add-ons
                  </p>
                  <ul className="space-y-1.5">
                    {pkg.addons.map((a) => (
                      <li
                        key={a.label}
                        className="flex justify-between gap-2 text-sm text-steel-300"
                      >
                        <span>{a.label}</span>
                        <span className="font-semibold text-white">+${a.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <a
                href="#quote"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-full py-3 font-semibold transition-all ${
                  pkg.featured
                    ? 'bg-ls-blue-500 text-white hover:bg-ls-blue-400 hover:shadow-lg hover:shadow-ls-blue-500/30'
                    : 'border border-steel-400/40 text-white hover:border-ls-blue-400 hover:bg-ls-blue-500/10'
                }`}
              >
                Book This Package <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* beyond detailing */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          id="about"
          className="mt-20 overflow-hidden rounded-3xl border border-night-600/60 bg-linear-to-r from-night-800 via-night-700/60 to-night-800 p-8 sm:p-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ls-yellow-400">
                More Than Detailing
              </p>
              <h3 className="mt-3 font-display text-3xl font-bold italic text-white">
                PARTS, MODS &<br />
                <span className="text-ls-blue-400">CUSTOM WORK</span>
              </h3>
              <p className="mt-4 text-steel-400">
                Detailing is just the start. We also handle parts replacements,
                modifications and full customizations — tell us what you're
                dreaming up and we'll make it happen.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {customWork.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-night-600/50 bg-night-900/60 p-5 transition-colors hover:border-ls-blue-500/40"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-ls-blue-500/15">
                    <Icon className="h-5 w-5 text-ls-blue-400" />
                  </div>
                  <p className="font-display font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-steel-400">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
