import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import WhyUs from './components/WhyUs'

function App() {
  return (
    <div className="min-h-screen bg-blue-900">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <Pricing />
        <CTA />
      </main>
      <footer className="bg-blue-950 text-blue-100 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} BlueWave Carwash. Alle rechten voorbehouden.</p>
          <div className="text-sm flex items-center gap-6">
            <a href="#services" className="hover:text-white">Diensten</a>
            <a href="#pricing" className="hover:text-white">Prijzen</a>
            <a href="#booking" className="hover:text-white">Boeken</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
