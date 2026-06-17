"use client"

import { motion } from "framer-motion"

export function GlitchTitle({ text }: { text: string }) {
  return (
    <div className="relative inline-block">
      <motion.h1 
        className="text-[clamp(4rem,15vw,12rem)] font-heading leading-[0.8] text-ink relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {text}
      </motion.h1>
      
      {/* Glitch layers */}
      <motion.h1 
        className="text-[clamp(4rem,15vw,12rem)] font-heading leading-[0.8] text-accent absolute top-0 left-0 -z-10 opacity-50"
        animate={{
          x: [-2, 2, -1, 0, 1],
          y: [1, -1, 0, 2, -2],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear"
        }}
      >
        {text}
      </motion.h1>
      
      <motion.h1 
        className="text-[clamp(4rem,15vw,12rem)] font-heading leading-[0.8] text-cyan-500 absolute top-0 left-0 -z-20 opacity-30"
        animate={{
          x: [2, -2, 1, 0, -1],
          y: [-1, 1, 0, -2, 2],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.2,
          ease: "linear",
          delay: 0.1
        }}
      >
        {text}
      </motion.h1>
    </div>
  )
}
