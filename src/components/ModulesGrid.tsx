import { ModuleCard } from "./ModuleCard"

const MODULES = [
  {
    id: "01",
    title: "Why Build Apps & AI? Finding Your Spark",
    description: "Before we build anything, let's talk about WHY. Click here to see why creating smart apps is like having a superpower!",
    expandedContent: (
      <>
        <p>
          <strong className="text-ink">1. Bring Ideas to Life:</strong> With software and AI, you can build apps that think, talk, and solve puzzles. It's like building your own smart assistant!
        </p>
        <p>
          <strong className="text-ink">2. Help the World:</strong> Smart apps can help doctors heal people, teach us new things, or protect the planet. The software you build could change the world.
        </p>
        <p>
          <strong className="text-ink">3. Never Give Up:</strong> Wires will cross and code might break on the first try. That's totally okay! It's just like a fun puzzle. Keep trying, ask for help, and have fun figuring it out.
        </p>
        <p className="text-accent font-mono uppercase tracking-wider text-sm pt-2">
          Every expert inventor was once a beginner. You can do this!
        </p>
      </>
    )
  },
  {
    id: "02",
    title: "How Computers 'Think' (Intro to AI)",
    description: "Learn how Artificial Intelligence works",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Artificial Intelligence</strong> refers to the capability of computers to execute tasks typically handled by human intellect. Basically it’s how you teach a computer to make decisions on its own.
        </p>
        <div className="bg-surface p-4 rounded-lg border border-outline/10">
          <p className="font-semibold text-ink mb-2">A normal program follows exact instructions.</p>
          <p className="mb-2">Example:</p>
          <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mb-3">
            <code>{`age = 20\nif age >= 18:\n    print("Adult")\nelse:\n    print("Minor")`}</code>
          </pre>
          <p className="italic text-sm">
            Here, the programmer writes all the rules and Computer = "Tell me exactly what to do."
          </p>
        </div>
        
        <div className="pt-4 flex flex-col gap-3">
          <div>
            <h4 className="text-ink font-heading text-3xl mb-0">How is AI Different -</h4>
            <div className="flex flex-col sm:flex-row gap-3 items-center bg-surface/40 p-4 border border-outline/10 hover:bg-surface/60 transition-colors group" style={{ borderRadius: '16px' }}>
              <div className="flex-1 text-md sm:text-base">
                <p className="mb-1">
                  Instead of writing rules we give examples and teach them. Consider the task of teaching a child to identify cats. You don't say - Cats have exactly 123 hairs - Cats have ears at a specific angle.
                </p>
                <p>
                  Instead, you show many pictures of cats and dogs. Eventually the child learns the patterns. Similarly AI systems analyze and learn from data and identify patterns.
                </p>
              </div>
              <div className="w-32 sm:w-40 shrink-0 relative transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2" style={{ borderRadius: '12px' }}>
                <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ borderRadius: '12px' }}></div>
                <img src="/img-1.png" alt="How AI is Different" className="w-full h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
              </div>
            </div>
          </div>

          <div className="bg-surface/20 p-4 border border-outline/5" style={{ borderRadius: '16px' }}>
            <p>
              <strong className="text-ink">Machine Learning</strong> is a subset of AI and is a process used in learning patterns from data. The data is given during training, to learn and recognize patterns in them. For example, an AI might see that students who study more tend to get higher scores and learn that study time affects performance. The model learns the knowledge during training and this knowledge is stored in the model and the model can then be used to make predictions on new data that it has never seen before.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row-reverse gap-5 items-center bg-surface/40 p-4 border border-outline/10 hover:bg-surface/60 transition-colors group" style={{ borderRadius: '16px' }}>
            <div className="flex-1 text-sm sm:text-base">
              <p>
                As AI systems improve they often use a technique known as <strong className="text-ink">Deep Learning</strong>. This is based on neural networks that simulate how the human brain is built. These networks are made up of interconnected layers that process information and learn more complex patterns. Deep learning powers many of the technologies we depend on today, such as image recognition, speech assistants and self-driving cars. The most prominent application of deep learning has been the development of Large Language Models (LLMs) such as ChatGPT.
              </p>
            </div>
            <div className="w-32 sm:w-40 shrink-0 relative transition-transform duration-500 group-hover:scale-105 group-hover:rotate-2" style={{ borderRadius: '12px' }}>
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" style={{ borderRadius: '12px' }}></div>
              <img src="/img-2.png" alt="Machine Learning vs Deep Learning" className="w-full h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
            </div>
          </div>

          <p className="p-4 bg-accent/10 text-ink font-medium border border-accent/20" style={{ borderRadius: '16px' }}>
            The quality and quantity of data, combined with effective training, determine how well the AI performs, making data-driven learning the foundation of modern artificial intelligence.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "03",
    title: "Code & Logic (Software 101)",
    description: "Discover variables, loops, and functions. Learn how to write code to make your apps come to life.",
  },
  {
    id: "04",
    title: "Building Your First Smart App",
    description: "Combine your coding skills and a little bit of AI to build a simple app that can understand what you type.",
  },
  {
    id: "05",
    title: "Teaching Computers to See",
    description: "Give your app 'eyes'! Learn how AI helps machines recognize faces, colors, and objects.",
  },
  {
    id: "06",
    title: "Your Grand Invention",
    description: "Pick your favorite AI tool and coding skills to invent something totally new. What will you build?",
  }
]

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
          {MODULES.map((mod, idx) => (
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
