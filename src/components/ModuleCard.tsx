import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

interface ModuleCardProps {
  id: string
  title: string
  description: string
  level?: string
  index: number
  expandedContent?: React.ReactNode
}

export function ModuleCard({ id, title, description, index, expandedContent }: ModuleCardProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (expandedContent) {
      navigate(`/module/${id}`)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className={`bg-surface border border-outline hover:border-accent p-8 flex flex-col group rounded-xl shadow-sm hover:shadow-md cursor-pointer`}
    >
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-heading mb-4 text-ink group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>
      
      <p className="text-on-surface-variant font-body leading-relaxed flex-grow">
        {description}
      </p>
      
      <div className="flex items-center justify-end mt-8 pt-4 border-t border-outline">
        <span className="text-accent font-mono text-sm uppercase opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0 duration-300 flex items-center gap-2">
          Start Learning <span className="text-lg leading-none">→</span>
        </span>
      </div>
    </motion.div>
  )
}

