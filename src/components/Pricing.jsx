import { motion } from 'framer-motion'

const plans = [
  { name: 'Basic Wash', price: '€12', features: ['Buiten wassen', 'Sneldrogen', 'Velgen schoon'] },
  { name: 'Premium Wash', price: '€20', features: ['Alles van Basic', 'Handdroog', 'Wax laag'] },
  { name: 'Ultimate Detail', price: '€35', features: ['Alles van Premium', 'Interieur schoon', 'Lak bescherming'] },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-blue-800 to-blue-900">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-white text-center">
          Pakketten & Prijzen
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div key={p.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={`rounded-2xl p-6 backdrop-blur-md border border-white/20 text-white ${i === 1 ? 'bg-white/15 ring-2 ring-cyan-300' : 'bg-white/10'}`}>
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-4xl font-extrabold">{p.price}</p>
              <ul className="mt-4 space-y-2 text-blue-100">
                {p.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#booking" className="mt-6 inline-flex items-center justify-center rounded-xl bg-cyan-400 px-5 py-2.5 text-blue-900 font-semibold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all w-full">
                Kies dit pakket
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
