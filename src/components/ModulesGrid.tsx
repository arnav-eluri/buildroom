import { ModuleCard } from "./ModuleCard"

const MODULES = [
  {
    id: "01",
    title: "Why Build Robots & AI? Finding Your Spark",
    description: "Before we build anything, let's talk about WHY. Click here to see why creating smart machines is like having a superpower!",
    expandedContent: (
      <>
        <p>
          <strong className="text-ink">1. Bring Ideas to Life:</strong> With hardware and AI, you can build robots that move, think, and solve puzzles. It's like building your own friendly sidekick!
        </p>
        <p>
          <strong className="text-ink">2. Help the World:</strong> Smart machines can explore space, help doctors heal people, or clean up the oceans. The robots you build could change the world.
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
    description: "Learn how Artificial Intelligence works and how computers can learn from patterns just like we do!",
  },
  {
    id: "03",
    title: "Brains & Wires (Hardware 101)",
    description: "Discover microchips, sensors, and motors. Learn how to connect parts to make things move and light up.",
  },
  {
    id: "04",
    title: "Building Your First Smart Bot",
    description: "Combine your hardware and a little bit of code to build a simple robot that can sense its surroundings.",
  },
  {
    id: "05",
    title: "Teaching Computers to See",
    description: "Give your robot 'eyes'! Learn how AI helps machines recognize faces, colors, and objects.",
  },
  {
    id: "06",
    title: "Your Grand Invention",
    description: "Pick your favorite AI tool and hardware parts to invent something totally new. What will you build?",
  }
]

export function ModulesGrid() {
  return (
    <section id="modules" className="w-full py-24 bg-background px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-heading text-ink mb-4">
            AI & Hardware Adventure
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl text-lg">
            Start your journey into the future! These fun, simple steps will teach you how to build smart robots and awesome AI inventions.
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
