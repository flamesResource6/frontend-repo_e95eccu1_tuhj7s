import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Diensten' },
    { href: '#pricing', label: 'Prijzen' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow-sm px-4 py-3">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-inner" />
            <span className="text-lg font-semibold tracking-tight text-blue-900">BlueWave Carwash</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-blue-900/80 hover:text-blue-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#booking" className="inline-flex items-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
              Boek nu
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-2xl bg-white/80 backdrop-blur-md border border-white/30 shadow-sm px-4 py-3">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-blue-900/80 hover:text-blue-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#booking" onClick={() => setOpen(false)} className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-700 transition-colors">
                Boek nu
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
