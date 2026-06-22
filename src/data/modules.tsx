import img1 from "../assets/img-1.png"
import img2 from "../assets/img-2.png"
import React from "react"

export interface ModuleData {
  id: string
  title: string
  description: string
  expandedContent?: React.ReactNode
}

export const MODULES: ModuleData[] = [
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
                <img src={img1} alt="How AI is Different" className="w-full h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
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
              <img src={img2} alt="Machine Learning vs Deep Learning" className="w-full h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
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
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          Every application whether it is an app like Spotify or a game is built using code. Code is a set of instructions that tells what the computer should do. To develop such software, developers use programming languages such as Python, Javascript, Java, C++ which help humans communicate with computers in a structured way.
        </p>

        <p className="font-semibold text-ink">
          The foundation of every programming language lies on these three topics:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Variables</li>
          <li>Loops</li>
          <li>Functions</li>
        </ul>

        <div className="bg-surface/40 p-4 border border-outline/10" style={{ borderRadius: '16px' }}>
          <p className="font-semibold text-ink mb-2">For Example</p>
          <p>
            When you login to an app the username stored is called as a variable. The notifications which pop up follow the principles of loops and A function is used to handle logins and usage. Mastering these principles provides the essential framework for comprehending software architecture, empowering you to create everything from web platforms and mobile applications to advanced AI, gaming environments, and automated solutions.
          </p>
        </div>

        <div className="space-y-4 pt-2">
          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink">Variables:</strong> Serve as fundamental components for storing data or information. This stored content is utilized by computers during processing to produce results tailored to specific user settings and requirements.</p>
            <p className="mt-2 font-semibold">Example:</p>
            <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mt-1">
              <code>{`name = "Spotify"\nusers = 100000`}</code>
            </pre>
          </div>

          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink">Loops:</strong> Are blocks of code designed to execute the same set of tasks repeatedly until a specific objective or output is reached.</p>
            <p className="mt-2 font-semibold">Example:</p>
            <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mt-1">
              <code>{`for i in range(5):\n    print("Hello")`}</code>
            </pre>
            <p className="mt-2 font-semibold">Output:</p>
            <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mt-1">
              <code>{`Hello\nHello\nHello\nHello\nHello`}</code>
            </pre>
          </div>

          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink">Functions:</strong> Are modular, repeatable segments of code designed to execute specific operations, allowing them to be utilized throughout a program whenever needed. Functions help make code cleaner and easier to maintain.</p>
            <p className="mt-2 font-semibold">Example:</p>
            <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mt-1">
              <code>{`def greet(name):\n    print("Hey! ", name)\n\ngreet("Spotify")`}</code>
            </pre>
            <p className="mt-2 font-semibold">Output:</p>
            <pre className="bg-background/50 p-3 rounded-md text-sm font-mono overflow-x-auto text-ink border border-outline/5 mt-1">
              <code>{`Hey! Spotify`}</code>
            </pre>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Languages worth Learning in 2026</h4>
          <ul className="space-y-2">
            <li><strong className="text-ink">Python (Ideal for Beginners):</strong> Artificial Intelligence & Large Language Models, Data Science & Analytics, Process Automation, Cybersecurity Operations, and Server-Side Development</li>
            <li><strong className="text-ink">JavaScript:</strong> Web Platform Engineering, Frontend User Interfaces, and Full-Stack Application Design</li>
            <li><strong className="text-ink">TypeScript:</strong> Complex Web Systems and Industry-Standard Enterprise Apps</li>
            <li><strong className="text-ink">Java:</strong> Corporate Software Solutions, Android Mobile Ecosystem, and Technical Interview Standard</li>
            <li><strong className="text-ink">Go (Golang):</strong> Cloud Infrastructure, DevOps Engineering, and Optimized Backend Performance</li>
            <li><strong className="text-ink">SQL:</strong> Database Management</li>
          </ul>
        </div>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold text-ink text-lg mb-2">Python Official Tutorial</h5>
            <ul className="space-y-1 text-base text-accent">
              <li><a href="#" className="hover:underline">Automate the Boring Stuff with Python</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-ink text-lg mb-2">AI & LLMs</h5>
            <ul className="space-y-1 text-base text-accent">
              <li><a href="#" className="hover:underline">Kaggle Learn</a></li>
              <li><a href="#" className="hover:underline">DeepLearning.AI</a></li>
              <li><a href="#" className="hover:underline">Hugging Face Course</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-ink text-lg mb-2">Coding Practice</h5>
            <ul className="space-y-1 text-base text-accent">
              <li><a href="#" className="hover:underline">LeetCode</a></li>
              <li><a href="#" className="hover:underline">HackerRank</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-ink text-lg mb-2">Version Control</h5>
            <ul className="space-y-1 text-base text-accent">
              <li><a href="#" className="hover:underline">GitHub Skills</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
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
  },
  {
    id: "07",
    title: "Introduction to Cybersecurity",
    description: "Learn how to protect systems, networks, and data from digital attacks and unauthorized access.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Cybersecurity</strong> is the practice of protecting computers, networks, devices, applications, and data from unauthorized access, attacks, theft, or damage. As our lives become increasingly dependent on technology and the internet, cybersecurity plays a vital role in safeguarding personal information, business operations, and online services.
        </p>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">The CIA Triad</h4>
          <p className="mb-4">The foundation of cybersecurity is based on three key principles known as the CIA Triad:</p>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Confidentiality</strong> ensures that information is accessible only to authorized individuals.</p>
              <p className="mt-1 text-sm text-ink/70">Example: Passwords protect your email account from unauthorized access.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Integrity</strong> ensures that data remains accurate and unaltered.</p>
              <p className="mt-1 text-sm text-ink/70">Example: Bank records should not be modified without proper authorization.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Availability</strong> ensures that systems and data are accessible whenever users need them.</p>
              <p className="mt-1 text-sm text-ink/70">Example: Online banking services should be accessible at any time.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Basic Security Concepts</h4>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Asset:</strong> Anything valuable that needs protection, such as computers, servers, databases, or sensitive information.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Threat:</strong> Anything capable of causing harm to an asset, including hackers, malware, or natural disasters.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Vulnerability:</strong> A weakness that attackers can exploit, such as weak passwords or outdated software.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Risk:</strong> The possibility that a threat may exploit a vulnerability and cause damage.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Common Cyber Attacks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Social Engineering:</strong> Attackers manipulate people into revealing sensitive information.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Phishing:</strong> Uses fake emails, messages, or websites to steal passwords and personal information.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Malware:</strong> Malicious software designed to damage systems or gain unauthorized access. Types include viruses, worms, trojans, spyware, and ransomware.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Ransomware:</strong> Encrypts a victim's files and demands payment to restore access.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Password Cracking & Credential Theft:</strong> Methods to gain unauthorized access to accounts.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Zero-Day Attack:</strong> Exploits a software vulnerability before developers have released a fix.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Supply Chain Attack:</strong> Targets trusted software providers or vendors to compromise their customers.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">AI-Powered Attacks:</strong> Attackers use Artificial Intelligence to create convincing phishing campaigns, automate attacks, and evade security systems.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          Understanding these concepts is the first step toward building secure systems and protecting yourself and others in the digital world.
        </div>
      </div>
    )
  }
]

export function getModuleById(id: string) {
  return MODULES.find(mod => mod.id === id)
}
