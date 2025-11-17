import React, { useEffect } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

const testimonials = [
  {
    name: 'Sanne v.d. Meer',
    car: 'Volkswagen ID.4',
    text: 'Super snel klaar en echt weer showroom-glans. De wax houdt verrassend lang!',
    rating: 5,
  },
  {
    name: 'Mehmet Kaya',
    car: 'BMW 3-serie',
    text: 'Vriendelijk personeel en topresultaat. Velgen waren brandschoon.',
    rating: 5,
  },
  {
    name: 'Lotte Janssen',
    car: 'Volvo XC40',
    text: 'Fijne ervaring, duurzaam en streeploos droog. Aanrader!',
    rating: 5,
  },
  {
    name: 'Bram de Vries',
    car: 'Audi A4',
    text: 'Abonnement genomen. Altijd netjes en snel, ideaal.',
    rating: 5,
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} van 5 sterren`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`h-4 w-4 ${i < count ? 'fill-yellow-400' : 'fill-white/25'}`}>
          <path d="M10 1.5l2.59 5.25 5.81.47-4.35 3.73 1.31 5.68L10 13.9 4.64 16.6l1.31-5.68L1.6 7.22l5.81-.47L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  // Infinite marquee animation
  const x = useMotionValue(0)
  const width = 1200 // approximate track width; motion keeps looping

  // Start looping animation
  useEffect(() => {
    const controls = animate(x, [0, -width], {
      duration: 18,
      ease: 'linear',
      repeat: Infinity,
    })
    return () => controls.stop()
  }, [x])

  // Duplicate list for seamless loop
  const track = [...testimonials, ...testimonials]

  return (
    <section className="relative py-24 bg-gradient-to-b from-blue-800 to-blue-900 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/40 via-blue-600/30 to-blue-900" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center">
          Klanten aan het woord
        </motion.h2>
        <p className="mt-3 text-blue-100 text-center">Echte ervaringen van autorijders zoals jij</p>

        <div className="mt-12 overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6">
            {track.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="min-w-[280px] sm:min-w-[360px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-5">
                <Stars count={t.rating} />
                <p className="mt-3 text-blue-50">“{t.text}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-blue-950 font-bold flex items-center justify-center">
                    {t.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-blue-200">{t.car}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
