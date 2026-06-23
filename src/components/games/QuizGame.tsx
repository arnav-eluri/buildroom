import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface QuizGameProps {
  question: string
  options: string[]
  correctAnswerIndex: number
}

export function QuizGame({ question, options, correctAnswerIndex }: QuizGameProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    if (selectedOption !== null) setIsSubmitted(true)
  }

  const handleReset = () => {
    setSelectedOption(null)
    setIsSubmitted(false)
  }

  return (
    <div className="w-full max-w-2xl mx-auto py-8">
      <div className="bg-surface/30 border border-outline/20 p-8 md:p-10 rounded-3xl shadow-sm relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <h3 className="text-2xl md:text-3xl font-heading text-ink mb-8 leading-tight">{question}</h3>
        
        <div className="flex flex-col gap-3 mb-10">
          {options.map((option, index) => {
            const isSelected = selectedOption === index
            const isCorrect = index === correctAnswerIndex

            let bgClass = "bg-background border-outline/20 hover:border-accent/40 text-ink"
            
            if (isSubmitted) {
              if (isCorrect) bgClass = "bg-[#10b981]/10 border-[#10b981] text-[#10b981] font-medium shadow-sm"
              else if (isSelected && !isCorrect) bgClass = "bg-red-500/10 border-red-500 text-red-600"
              else bgClass = "bg-background border-outline/10 text-on-surface-variant opacity-50"
            } else if (isSelected) {
              bgClass = "bg-accent/10 border-accent text-accent font-medium shadow-sm shadow-accent/5"
            }

            return (
              <button
                key={index}
                onClick={() => !isSubmitted && setSelectedOption(index)}
                disabled={isSubmitted}
                className={`p-5 rounded-2xl border-2 text-left transition-all duration-300 relative overflow-hidden group ${bgClass}`}
              >
                {!isSubmitted && (
                  <div className={`absolute inset-0 bg-accent/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ${isSelected ? 'opacity-0' : 'opacity-100'}`} />
                )}
                <div className="flex items-center gap-4 relative z-10">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${isSubmitted ? (isCorrect ? 'border-[#10b981] bg-[#10b981]' : (isSelected ? 'border-red-500 bg-red-500' : 'border-outline/20')) : (isSelected ? 'border-accent bg-accent' : 'border-outline/30 group-hover:border-accent/50')}`}>
                    {(isSubmitted && isCorrect) && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    )}
                    {(isSubmitted && !isCorrect && isSelected) && (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    )}
                    {(!isSubmitted && isSelected) && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-base md:text-lg">{option}</span>
                </div>
              </button>
            )
          })}
        </div>

        <div className="flex justify-end">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.button
                key="submit"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className="px-10 py-4 bg-accent text-white rounded-full font-medium text-lg hover:bg-accent/90 transition-all shadow-lg shadow-accent/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
              >
                Submit Answer
              </motion.button>
            ) : (
              <motion.div 
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-6"
              >
                <span className={`text-xl font-semibold ${selectedOption === correctAnswerIndex ? 'text-[#10b981]' : 'text-red-500'}`}>
                  {selectedOption === correctAnswerIndex ? '🎉 Correct!' : '🤔 Not quite.'}
                </span>
                <button
                  onClick={handleReset}
                  className="px-8 py-3 border-2 border-outline/20 text-ink rounded-full font-medium hover:border-accent hover:text-accent transition-colors"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
