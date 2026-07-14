const items = [
  'Interior Detailing',
  'Full Detail',
  'Ceramic Wax Protectant',
  'Iron Decontamination',
  'Seat Shampoo & Extraction',
  'Parts Replacement',
  'Modifications',
  'Customizations',
  'Leather Conditioning',
  'Spot Stain Removal',
]

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="relative overflow-hidden border-y border-night-700 bg-night-900 py-4">
      <div className="animate-marquee flex w-max items-center gap-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 whitespace-nowrap">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-steel-400">
              {item}
            </span>
            <span className="text-ls-yellow-400">✦</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-night-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-night-950 to-transparent" />
    </div>
  )
}
