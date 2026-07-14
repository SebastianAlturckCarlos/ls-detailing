import { motion } from 'framer-motion'
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from 'react-compare-slider'
import { MoveHorizontal } from 'lucide-react'
import dirtyRed from '../assets/dirty-red.png'
import cleanRed from '../assets/clean-red.png'
import dirtySuv from '../assets/dirty-suv.png'
import cleanSuv from '../assets/clean-suv.png'

const jobs = [
  {
    title: 'Full Interior Restoration',
    desc: 'Carpet stripped, shampooed and extracted — from years of buildup to like-new.',
    before: dirtyRed,
    after: cleanRed,
  },
  {
    title: 'Deep Interior Detail',
    desc: 'Seats out, every inch vacuumed, shampooed and protected.',
    before: dirtySuv,
    after: cleanSuv,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

function Badge({ children, side }) {
  return (
    <span
      className={`pointer-events-none absolute top-4 z-10 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${
        side === 'left'
          ? 'left-4 bg-night-950/80 text-steel-300'
          : 'right-4 bg-ls-blue-500/90 text-white'
      }`}
    >
      {children}
    </span>
  )
}

export default function BeforeAfter() {
  return (
    <section id="work" className="relative py-24">
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-ls-blue-600/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ls-yellow-400">
            Real Results
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold italic text-white sm:text-5xl">
            BEFORE <span className="text-ls-blue-400">&</span> AFTER
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-steel-400">
            <MoveHorizontal className="h-4 w-4 text-ls-blue-400" />
            Drag the slider to see the transformation
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {jobs.map((job, i) => (
            <motion.figure
              key={job.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.12 }}
              className="group overflow-hidden rounded-3xl border border-night-600/60 bg-night-800/70 transition-colors hover:border-ls-blue-500/40"
            >
              <div className="relative">
                <Badge side="left">Before</Badge>
                <Badge side="right">After</Badge>
                <ReactCompareSlider
                  position={35}
                  className="aspect-[4/5] w-full sm:aspect-[3/3.2]"
                  handle={
                    <ReactCompareSliderHandle
                      buttonStyle={{
                        border: '2px solid #4a9aff',
                        backdropFilter: 'blur(6px)',
                        background: 'rgba(9, 12, 20, 0.7)',
                        color: '#4a9aff',
                        width: 48,
                        height: 48,
                      }}
                      linesStyle={{ color: '#4a9aff', width: 2 }}
                    />
                  }
                  itemOne={
                    <ReactCompareSliderImage
                      src={job.before}
                      alt={`${job.title} — before`}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={job.after}
                      alt={`${job.title} — after`}
                    />
                  }
                />
              </div>
              <figcaption className="p-6">
                <p className="font-display text-xl font-bold italic text-white">
                  {job.title.toUpperCase()}
                </p>
                <p className="mt-1 text-sm text-steel-400">{job.desc}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-10 text-center text-steel-400"
        >
          Want to see more? Check out our latest work on{' '}
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-ls-blue-400 underline-offset-4 hover:underline"
          >
            Instagram
          </a>
          .
        </motion.p>
      </div>
    </section>
  )
}
