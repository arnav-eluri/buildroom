import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(onComplete, 400)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      <div className="flex flex-col items-center">
        <motion.img 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/logo.png" 
          alt="BuildRoom Logo" 
          className="h-32 w-auto mb-8" 
        />
        
        <div className="w-48 h-1 bg-outline rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-accent rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  )
}
