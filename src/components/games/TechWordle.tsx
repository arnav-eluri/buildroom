import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TechWordleLevel {
  word: string
  hint?: string
}

interface TechWordleProps {
  levels: TechWordleLevel[]
}

const MAX_GUESSES = 6
const WORD_LENGTH = 5

export function TechWordle({ levels }: TechWordleProps) {
  const [currentLevelIndex, setCurrentLevelIndex] = useState(0)
  const [guesses, setGuesses] = useState<string[]>([])
  const [currentGuess, setCurrentGuess] = useState("")
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing')

  const currentLevel = levels[currentLevelIndex]
  const word = currentLevel.word.toUpperCase()
  const hint = currentLevel.hint
  const isLastLevel = currentLevelIndex === levels.length - 1

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (gameStatus !== 'playing') return

      if (e.key === 'Enter') {
        submitGuess()
      } else if (e.key === 'Backspace') {
        setCurrentGuess(prev => prev.slice(0, -1))
      } else if (/^[a-zA-Z]$/.test(e.key) && currentGuess.length < WORD_LENGTH) {
        setCurrentGuess(prev => (prev + e.key).toUpperCase())
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentGuess, gameStatus, currentLevelIndex])

  const submitGuess = () => {
    if (currentGuess.length !== WORD_LENGTH) return
    
    const newGuesses = [...guesses, currentGuess]
    setGuesses(newGuesses)
    setCurrentGuess("")

    if (currentGuess === word) {
      setGameStatus('won')
    } else if (newGuesses.length >= MAX_GUESSES) {
      setGameStatus('lost')
    }
  }

  const handleNextLevel = () => {
    if (!isLastLevel) {
      setCurrentLevelIndex(prev => prev + 1)
      resetGame()
    }
  }

  const resetGame = () => {
    setGuesses([])
    setCurrentGuess("")
    setGameStatus('playing')
  }

  // Keyboard array for rendering
  const keyboardRows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER', 'DEL']
  ]

  const handleKeyClick = (key: string) => {
    if (gameStatus !== 'playing') return
    if (key === 'ENTER') submitGuess()
    else if (key === 'DEL') setCurrentGuess(prev => prev.slice(0, -1))
    else if (currentGuess.length < WORD_LENGTH) setCurrentGuess(prev => prev + key)
  }

  // function to get letter status
  const getLetterStatus = (letter: string, i: number) => {
    if (word[i] === letter) return 'correct'
    if (word.includes(letter)) return 'present'
    return 'absent'
  }

  const getKeyStatus = (key: string) => {
    let status = 'default'
    for (const guess of guesses) {
      for (let i = 0; i < WORD_LENGTH; i++) {
        if (guess[i] === key) {
          const letterStatus = getLetterStatus(key, i)
          if (letterStatus === 'correct') return 'correct'
          if (letterStatus === 'present' && status !== 'correct') status = 'present'
          if (letterStatus === 'absent' && status === 'default') status = 'absent'
        }
      }
    }
    return status
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto py-8 bg-surface/30 p-6 rounded-3xl border border-outline/10 shadow-sm relative">
      <div className="flex w-full items-center justify-between mb-4">
        <h3 className="text-3xl font-heading text-ink">Techle</h3>
        <span className="bg-accent/10 text-accent font-semibold px-3 py-1 rounded-full text-sm">
          Level {currentLevelIndex + 1}/{levels.length}
        </span>
      </div>
      
      {hint && <p className="text-on-surface-variant text-sm mb-6 font-mono text-center">Hint: {hint}</p>}
      
      <div className="grid gap-2 mb-8 relative">
        {Array.from({ length: MAX_GUESSES }).map((_, rowIndex) => {
          const guess = guesses[rowIndex]
          const isCurrentRow = rowIndex === guesses.length
          const currentGuessChars = isCurrentRow ? currentGuess.padEnd(WORD_LENGTH, ' ') : ''

          return (
            <div key={rowIndex} className="flex gap-2">
              {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
                const char = guess ? guess[colIndex] : (isCurrentRow ? currentGuessChars[colIndex] : '')
                let bgClass = "bg-surface/50 border-outline/30"
                
                if (guess) {
                  const status = getLetterStatus(char, colIndex)
                  if (status === 'correct') bgClass = "bg-[#10b981]/20 text-[#10b981] border-[#10b981]/50"
                  else if (status === 'present') bgClass = "bg-[#f59e0b]/20 text-[#f59e0b] border-[#f59e0b]/50"
                  else bgClass = "bg-surface text-on-surface-variant border-outline/10"
                } else if (char.trim()) {
                  bgClass = "bg-surface border-accent/50 text-ink shadow-sm"
                }

                return (
                  <motion.div
                    key={`${currentLevelIndex}-${rowIndex}-${colIndex}`}
                    initial={guess ? { rotateX: 90 } : false}
                    animate={guess ? { rotateX: 0 } : false}
                    transition={{ delay: colIndex * 0.1 }}
                    className={`w-12 h-12 md:w-14 md:h-14 border-2 flex items-center justify-center rounded-xl font-bold text-xl md:text-2xl uppercase ${bgClass}`}
                  >
                    {char}
                  </motion.div>
                )
              })}
            </div>
          )
        })}
      </div>

      <AnimatePresence>
        {gameStatus !== 'playing' && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm rounded-3xl"
          >
            <div className="bg-surface border border-outline/20 p-8 rounded-2xl shadow-xl text-center max-w-[80%]">
              <p className="text-2xl font-bold mb-4 text-ink">
                {gameStatus === 'won' ? '🎉 Great job!' : `Game Over!`}
              </p>
              {gameStatus === 'lost' && (
                <p className="text-on-surface-variant mb-6">The word was <strong className="text-ink">{word}</strong></p>
              )}
              
              <div className="flex flex-col gap-3">
                {gameStatus === 'won' && !isLastLevel && (
                  <button 
                    onClick={handleNextLevel}
                    className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors shadow-md shadow-accent/20"
                  >
                    Next Level →
                  </button>
                )}
                
                {(gameStatus === 'lost' || isLastLevel) && (
                  <button 
                    onClick={resetGame}
                    className="px-8 py-3 bg-accent text-white rounded-full font-medium hover:bg-accent/90 transition-colors shadow-md shadow-accent/20"
                  >
                    Play Again
                  </button>
                )}
                
                {gameStatus === 'won' && isLastLevel && (
                  <p className="text-sm text-[#10b981] font-semibold mt-2">You beat all levels!</p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="w-full flex flex-col gap-2 mt-auto relative z-0">
        {keyboardRows.map((row, i) => (
          <div key={i} className="flex justify-center gap-1 sm:gap-2">
            {row.map(key => {
              const status = getKeyStatus(key)
              let keyBg = "bg-surface text-ink hover:bg-surface/80 border border-outline/10"
              if (status === 'correct') keyBg = "bg-[#10b981] text-white border-transparent"
              else if (status === 'present') keyBg = "bg-[#f59e0b] text-white border-transparent"
              else if (status === 'absent') keyBg = "bg-background text-on-surface-variant opacity-50 border-transparent"

              return (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className={`h-12 flex-1 min-w-[2rem] sm:min-w-[2.5rem] rounded-lg font-semibold text-xs sm:text-sm transition-colors ${keyBg}`}
                >
                  {key}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
