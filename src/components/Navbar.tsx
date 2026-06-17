import { motion } from "framer-motion"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-outline">
      <div className="max-w-6xl mx-auto px-6 h-28 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center"
        >
          <img src="/logo.png" alt="BuildRoom Logo" className="h-24 w-auto" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-8"
        >
          <a
            href="#modules"
            className="text-on-surface-variant hover:text-accent transition-colors font-body text-sm"
            onClick={(e) => {
              e.preventDefault()
              if ((window as any).lenis) {
                (window as any).lenis.scrollTo("#modules", { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
              } else {
                document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Modules
          </a>
        </motion.div>
      </div>
    </nav>
  )
}
