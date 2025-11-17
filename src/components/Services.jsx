import { motion } from 'framer-motion'
import { Sparkles, Droplets, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Sparkles,
    title: 'Snel & Stralend',
    desc: 'Binnen 15 minuten weer als nieuw. Perfect voor tussendoor.',
  },
  {
    icon: Droplets,
    title: 'Diepte Reiniging',
    desc: 'Grondige wasbeurt met extra aandacht voor details en velgen.',
  },
  {
    icon: ShieldCheck,
    title: 'Coating Protect',
    desc: 'Langdurige bescherming met onze premium lakverzegeling.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-blue-700 to-blue-800">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-300/40 via-blue-400/30 to-blue-900/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Onze Diensten
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 text-white hover:translate-y-[-4px] transition-transform">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/30">
                  <s.icon className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="text-blue-100 text-sm mt-1">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
