"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

type RevealOptions = {
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
}

export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {},
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        options.from || { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: options.trigger || el,
            start: options.start || "top 85%",
            end: options.end || "top 40%",
            scrub: options.scrub ?? false,
            markers: options.markers ?? false,
          },
          ...options.to,
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return ref
}
