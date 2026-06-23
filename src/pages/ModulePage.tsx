import { useParams, Link } from "react-router-dom"
import { getModuleById } from "@/data/modules"
import { ArrowLeft } from "lucide-react"
import { TechWordle } from "@/components/games/TechWordle"
import { QuizGame } from "@/components/games/QuizGame"

export function ModulePage() {
  const { id } = useParams()
  const module = getModuleById(id || "")

  if (!module) {
    return (
      <div className="min-h-screen pt-32 px-6 bg-background flex flex-col items-center">
        <h1 className="text-4xl font-heading text-ink mb-4">Module not found</h1>
        <Link to="/" className="text-accent hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-accent transition-colors mb-8 font-mono text-sm uppercase tracking-wider"
        >
          <ArrowLeft size={16} /> Back to Modules
        </Link>
        
        <div className="bg-surface border border-outline rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-4xl md:text-5xl font-heading text-ink mb-6">
            {module.title}
          </h1>
          <p className="text-xl text-on-surface-variant font-body mb-10 border-b border-outline/50 pb-8">
            {module.description}
          </p>
          
          <div className="text-on-surface-variant text-base font-body leading-relaxed">
            {module.expandedContent ? (
              module.expandedContent
            ) : (
              <p className="italic opacity-70">Detailed content coming soon.</p>
            )}
          </div>

          {module.game && (
            <div className="mt-16 pt-12 border-t border-outline/30">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-heading text-ink inline-block relative">
                  Test Your Skills
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/20 rounded-full" />
                </h2>
                <p className="text-on-surface-variant mt-3">Apply what you've learned to solve this challenge.</p>
              </div>

              {module.game.type === 'wordle' && (
                <TechWordle levels={module.game.levels} />
              )}
              {module.game.type === 'quiz' && (
                <QuizGame 
                  question={module.game.question} 
                  options={module.game.options} 
                  correctAnswerIndex={module.game.correctAnswerIndex} 
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
