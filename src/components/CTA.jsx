import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="booking" className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/40 via-blue-700/40 to-blue-950" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold">
          Klaar voor een blauwe glans?
        </motion.h2>
        <p className="mt-3 text-blue-100">
          Laat je gegevens achter en we nemen direct contact met je op voor een afspraak.
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input required placeholder="Naam" className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
          <input required type="tel" placeholder="Telefoon" className="rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
          <button type="submit" className="rounded-xl bg-cyan-400 px-6 py-3 text-blue-900 font-semibold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all">
            Verstuur
          </button>
        </form>
      </div>
    </section>
  )
}
