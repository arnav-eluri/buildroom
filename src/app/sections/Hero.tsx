import { motion } from "framer-motion"
import { GlitchTitle } from "@/components/GlitchTitle"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-background flex flex-col items-center justify-center pt-20"
    >
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-surface-variant)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-20 text-center px-6 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <GlitchTitle text="BUILDROOM" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <p className="mt-8 text-xl md:text-2xl font-body text-ink max-w-2xl mx-auto leading-relaxed text-center">
            A simple learning place consisting of hand-crafted modules to start your journey in tech.
          </p>

          <div className="mt-12 flex items-center justify-center">
            <a
              href="#modules"
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault()
                if ((window as any).lenis) {
                  (window as any).lenis.scrollTo("#modules", { duration: 1.5, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
                } else {
                  document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Start Learning
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

