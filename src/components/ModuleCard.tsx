import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ModuleCardProps {
  id: string
  title: string
  description: string
  level?: string
  index: number
  expandedContent?: React.ReactNode
}

export function ModuleCard({ title, description, index, expandedContent }: ModuleCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    if (expandedContent) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={expandedContent ? undefined : { y: -5 }}
      whileTap={expandedContent ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className={`bg-surface border border-outline hover:border-accent p-8 flex flex-col group rounded-xl shadow-sm hover:shadow-md ${expandedContent ? "cursor-pointer md:col-span-2 lg:col-span-3" : "cursor-pointer"}`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-heading mb-4 text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>
        {expandedContent && (
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            className="text-accent text-xl"
          >
            ▼
          </motion.div>
        )}
      </div>
      
      <p className="text-on-surface-variant font-body leading-relaxed flex-grow">
        {description}
      </p>
      
      <AnimatePresence>
        {isExpanded && expandedContent && (
          <motion.div
            initial={{ height: 0, opacity: 0, marginTop: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 24 }}
            exit={{ height: 0, opacity: 0, marginTop: 0 }}
            className="overflow-hidden border-t border-outline/50 pt-6 text-on-surface-variant text-base font-body leading-relaxed space-y-4"
          >
            {expandedContent}
          </motion.div>
        )}
      </AnimatePresence>
      
      {!expandedContent && (
        <div className="flex items-center justify-end mt-8 pt-4 border-t border-outline">
          <span className="text-accent font-mono text-sm uppercase opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 flex items-center gap-2">
            Start Learning <span className="text-lg leading-none">→</span>
          </span>
        </div>
      )}
    </motion.div>
  )
}

