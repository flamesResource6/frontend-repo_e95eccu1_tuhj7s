import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Car, Mail, Phone, Clock } from 'lucide-react'

const packages = [
  { id: 'basic', name: 'Basic Wash', duration: '15 min', price: 12 },
  { id: 'premium', name: 'Premium Wash', duration: '25 min', price: 20 },
  { id: 'ultimate', name: 'Ultimate Detail', duration: '45 min', price: 35 },
]

export default function Booking() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    license: '',
    pkg: 'premium',
    date: '',
    time: '',
  })

  const selected = packages.find(p => p.id === form.pkg)

  function onChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      alert('Boeking ontvangen! We bevestigen per e-mail/telefoon.')
      setForm({ name: '', phone: '', email: '', license: '', pkg: 'premium', date: '', time: '' })
    } catch (err) {
      alert('Kon niet boeken. Probeer opnieuw.')
    }
  }

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/40 via-blue-700/40 to-blue-950" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl font-bold text-center">
          Boek je wasbeurt
        </motion.h2>
        <p className="mt-3 text-blue-100 text-center">Kies je pakket en gewenste tijd. Wij regelen de rest.</p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form onSubmit={onSubmit} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2 grid grid-cols-3 gap-2 rounded-2xl bg-white/10 border border-white/20 p-2">
              {packages.map(p => (
                <label key={p.id} className={`flex flex-col items-start rounded-xl p-3 cursor-pointer transition-all ${form.pkg === p.id ? 'bg-white/10 ring-2 ring-cyan-300' : ''}`}>
                  <input type="radio" name="pkg" value={p.id} checked={form.pkg === p.id} onChange={onChange} className="hidden" />
                  <span className="text-sm font-semibold">{p.name}</span>
                  <span className="text-xs text-blue-200 flex items-center gap-1"><Clock size={14} />{p.duration}</span>
                  <span className="mt-1 text-lg font-extrabold">€{p.price}</span>
                </label>
              ))}
            </div>

            <div className="relative">
              <input name="name" value={form.name} onChange={onChange} required placeholder="Naam" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
              <span className="pointer-events-none absolute right-3 top-3 opacity-70"><Mail size={18} /></span>
            </div>
            <div className="relative">
              <input name="phone" value={form.phone} onChange={onChange} required type="tel" placeholder="Telefoon" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
              <span className="pointer-events-none absolute right-3 top-3 opacity-70"><Phone size={18} /></span>
            </div>
            <input name="email" value={form.email} onChange={onChange} type="email" placeholder="E-mail (optioneel)" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
            <div className="relative">
              <input name="license" value={form.license} onChange={onChange} placeholder="Kenteken" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 placeholder:text-blue-200/70 focus:outline-none focus:ring-cyan-300" />
              <span className="pointer-events-none absolute right-3 top-3 opacity-70"><Car size={18} /></span>
            </div>

            <input name="date" value={form.date} onChange={onChange} required type="date" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 text-blue-50 focus:outline-none focus:ring-cyan-300" />
            <input name="time" value={form.time} onChange={onChange} required type="time" className="w-full rounded-xl bg-white/10 px-4 py-3 ring-1 ring-white/20 text-blue-50 focus:outline-none focus:ring-cyan-300" />

            <button type="submit" className="sm:col-span-2 rounded-xl bg-cyan-400 px-6 py-3 text-blue-900 font-semibold shadow-lg hover:translate-y-[-2px] hover:shadow-xl transition-all">
              Bevestig boeking
            </button>
          </form>

          <div className="rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-6">
            <h3 className="text-lg font-semibold">Jouw keuze</h3>
            <p className="mt-2 text-blue-100">Pakket: <span className="text-white font-medium">{selected.name}</span></p>
            <p className="text-blue-100">Duur: <span className="text-white font-medium">{selected.duration}</span></p>
            <p className="text-blue-100">Prijs: <span className="text-white font-medium">€{selected.price}</span></p>
            <div className="mt-4 h-px bg-white/10" />
            <p className="mt-4 text-sm text-blue-200">We sturen een bevestiging en een herinnering voor je afspraak.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
