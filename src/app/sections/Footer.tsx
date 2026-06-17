import { Reveal } from "@/components/Reveal"

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative py-20 px-6 border-t border-outline bg-background"
    >
      <div className="max-w-6xl mx-auto w-full">
        <Reveal>
          <div className="grid md:grid-cols-3 gap-16">
            <div>
              <div className="flex items-center gap-0">
                <img src="/logo.png" alt="BuildRoom Logo" className="h-16 w-auto" />
                <span className="text-3xl font-heading text-ink tracking-tight uppercase">
                  BUILDROOM
                </span>
              </div>
              <p className="mt-6 text-sm font-body text-on-surface-variant leading-relaxed max-w-xs">
                A simple learning place consisting of hand-crafted modules to start your journey in tech.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs text-muted-technical uppercase tracking-widest mb-6">Explore</h4>
              <ul className="space-y-4">
                {[
                  ["Modules", "#modules"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-body text-lg text-ink/70 hover:text-accent transition-colors duration-300"
                      onClick={(e) => {
                        e.preventDefault()
                        document
                          .getElementById(href.slice(1))
                          ?.scrollIntoView({ behavior: "smooth" })
                      }}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs text-muted-technical uppercase tracking-widest mb-6">Connect</h4>
              <ul className="space-y-4">
                {["Twitter", "GitHub", "Discord"].map((label) => (
                  <li key={label}>
                    <span className="font-body text-lg text-ink/40 cursor-not-allowed">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-24 pt-8 border-t border-outline flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-mono text-xs text-muted-technical uppercase tracking-widest">
              &copy; {new Date().getFullYear()} BuildRoom
            </p>
            <div className="flex items-center gap-6 font-mono text-xs text-accent/60 tracking-[0.1em] uppercase">
              <span>Learn</span>
              <div className="w-1 h-1 bg-outline rounded-full" />
              <span>Build</span>
              <div className="w-1 h-1 bg-outline rounded-full" />
              <span>Grow</span>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
