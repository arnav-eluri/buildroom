import { ModuleCard } from "./ModuleCard"
import { MODULES } from "@/data/modules"

export function ModulesGrid() {
  return (
    <section id="modules" className="w-full py-24 bg-background px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-ink mb-4">
            AI & Software Adventure
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl text-lg">
            Start your journey into the future! These fun, simple steps will teach you how to build smart apps and awesome AI inventions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.filter(mod => mod.expandedContent).map((mod, idx) => (
            <ModuleCard
              key={mod.id}
              index={idx}
              {...mod}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
