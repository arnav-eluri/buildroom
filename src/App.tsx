import { useState } from "react"
import { AnimatePresence } from "framer-motion"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Hero } from "@/app/sections/Hero"
import { Footer } from "@/app/sections/Footer"
import { Preloader } from "@/components/Preloader"
import LenisProvider from "@/components/LenisProvider"
import { ModulesGrid } from "@/components/ModulesGrid"
import { Navbar } from "@/components/Navbar"
import { ModulePage } from "@/pages/ModulePage"

function Home() {
  return (
    <>
      <Hero />
      <ModulesGrid />
    </>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-on-background font-body antialiased pt-20 flex flex-col">
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>

        <LenisProvider />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/module/:id" element={<ModulePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
