import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-80">
        <Spline scene="https://prod.spline.design/poZi6bJ4-Htwt04i/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/40 to-blue-900/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20 backdrop-blur-md">
            Premium carwash in jouw buurt
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
            Laat je auto stralen met onze blauwe perfectie
          </h1>
          <p className="mt-4 text-blue-100 text-lg">
            Snelle, duurzame en zorgvuldige wasbeurten met oog voor detail. Kies uit onze pakketten en boek direct online.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#booking" className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-blue-900 font-semibold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all">
              Boek nu
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition-all">
              Bekijk diensten
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-700 to-transparent" />
    </section>
  )
}
