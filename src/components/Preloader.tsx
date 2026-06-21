import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 500)
          return 100
        }
        return prev + Math.random() * 12
      })
    }, 80)

    return () => {
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)", transition: { duration: 0.6, ease: "easeInOut" } }}
    >
      <div className="relative flex flex-col items-center justify-center w-full max-w-sm">
        {/* Glow behind the logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex flex-col items-center w-full"
        >
          <motion.img 
            initial={{ scale: 0.9 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            src="/logo.png" 
            alt="BuildRoom Logo" 
            className="h-32 w-auto object-contain mb-10 drop-shadow-2xl" 
          />
          
          <div className="w-48 sm:w-64 h-1.5 bg-surface border border-outline/50 rounded-full overflow-hidden relative shadow-inner">
            <motion.div 
              className="h-full bg-accent rounded-full shadow-[0_0_10px_rgba(var(--color-accent),0.5)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
              layout
            />
          </div>
          
          <div className="mt-4 flex items-center justify-between w-48 sm:w-64 text-xs font-mono text-on-surface-variant uppercase tracking-widest">
            <span>Loading</span>
            <span>{Math.min(Math.round(progress), 100)}%</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
