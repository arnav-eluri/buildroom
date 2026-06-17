import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Hero } from "@/app/sections/Hero"
import { Footer } from "@/app/sections/Footer"
import { Preloader } from "@/components/Preloader"
import LenisProvider from "@/components/LenisProvider"
import { ModulesGrid } from "@/components/ModulesGrid"
import { Navbar } from "@/components/Navbar"

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="min-h-screen bg-background text-on-background font-body antialiased pt-20">
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <LenisProvider />
      <Navbar />
      <main>
        <Hero />
        <ModulesGrid />
        <Footer />
      </main>
    </div>
  )
}

export default App
