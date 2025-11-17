import { motion } from 'framer-motion'
import { Sparkles, Clock, ShieldCheck, Recycle, Gauge, Droplets } from 'lucide-react'

const reasons = [
  {
    icon: Sparkles,
    title: 'Showroom Shine',
    desc: 'Diepe glans met lakvriendelijke producten en veilige wasstraten.'
  },
  {
    icon: Clock,
    title: 'Snel Klaar',
    desc: 'Binnen 10–20 minuten weer onderweg met een perfect schone auto.'
  },
  {
    icon: Recycle,
    title: 'Duurzame Wassing',
    desc: 'Water- en milieubesparend systeem met verantwoorde chemicaliën.'
  },
  {
    icon: ShieldCheck,
    title: 'Bescherming',
    desc: 'Lakverzegeling en waxopties die maandenlang meegaan.'
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative py-24 bg-gradient-to-b from-blue-700 to-blue-800 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-25 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-cyan-300/40 via-blue-500/30 to-blue-900/30" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold">Waarom Kiezen Voor Ons</h2>
          <p className="mt-3 text-blue-100 max-w-2xl mx-auto">Premium wasbeurten, moderne apparatuur en vriendelijke service. Alles voor die frisse, blauwe glans.</p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:translate-y-[-4px] transition-transform">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/30">
                <item.icon className="text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-blue-100">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Stat icon={Droplets} value="100%" label="Vlekvrij drogen" />
          <Stat icon={Gauge} value="10–20m" label="Gem. doorlooptijd" />
          <Stat icon={ShieldCheck} value="+6 mnd" label="Lakbescherming" />
          <Stat icon={Clock} value="7/7" label="Ruime openingstijden" />
        </div>
      </div>
    </section>
  )
}

function Stat({ icon: Icon, value, label }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-5 flex items-center gap-4">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center ring-1 ring-white/30">
        <Icon className="text-white" size={18} />
      </div>
      <div>
        <p className="text-xl font-extrabold">{value}</p>
        <p className="text-blue-100 text-sm">{label}</p>
      </div>
    </motion.div>
  )
}
