import img1 from "../assets/img-1.png"
import img2 from "../assets/img-2.png"
import img3 from "../assets/img-3.png"
import chefImg from "../assets/confused_chef.png"
import bakerImg from "../assets/baker_cookies.png"
import designFlowImg from "../assets/design_flow.png"
import React from "react"

export type GameData = 
  | { type: 'wordle'; levels: { word: string; hint?: string }[] }
  | { type: 'quiz'; question: string; options: string[]; correctAnswerIndex: number; explanation?: string };

export interface ModuleData {
  id: string
  title: string
  description: string
  expandedContent?: React.ReactNode
  game?: GameData
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
    ),
    game: {
      type: 'quiz',
      question: 'What makes building software and AI like having a "superpower"?',
      options: ['It makes you invisible', 'You can bring ideas to life and help the world', 'It lets you fly', 'You never make mistakes'],
      correctAnswerIndex: 1
    }
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
    ),
    game: {
      type: 'wordle',
      levels: [
        { word: 'MODEL', hint: 'This stores the knowledge learned during training' },
        { word: 'TRAIN', hint: 'The process of giving data to AI so it can learn' },
        { word: 'LEARN', hint: 'What AI does to recognize patterns in data' },
        { word: 'BRAIN', hint: 'Deep learning simulates how the human _____ is built' }
      ]
    }
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
    ),
    game: {
      type: 'wordle',
      levels: [
        { word: 'DEBUG', hint: 'Fixing errors in your code' },
        { word: 'ARRAY', hint: 'A list of items stored in code' },
        { word: 'LOOPS', hint: 'Doing the same thing over and over' },
        { word: 'STATE', hint: 'Memory of an app at a given moment' }
      ]
    }
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

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Network-Based Attacks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Denial of Service (DoS):</strong> Floods a system with traffic, making it unavailable to legitimate users.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Distributed Denial of Service (DDoS):</strong> Works like a DoS attack but uses multiple compromised devices simultaneously.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Man-in-the-Middle (MITM):</strong> Occurs when an attacker secretly intercepts communication between two parties.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Packet Sniffing:</strong> Captures network traffic to obtain sensitive information.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Spoofing:</strong> Pretending to be a trusted user, device, or website to gain access or information.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Cloud Security Risks</h4>
          <p className="mb-4">
            Cloud computing provides flexibility and convenience but also introduces risks such as data breaches, weak access controls, misconfigured settings, and attacks on SaaS applications.
          </p>
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink">Software as a Service (SaaS):</strong> Applications delivered over the internet, such as cloud storage platforms and online email services.</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Insider Threats and API Risks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Insider Threats:</strong> Not all threats come from outside an organization. These originate from employees, contractors, or other individuals who have legitimate access to systems.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">API Risks:</strong> Organizations face risks through APIs and third-party integrations, which can expose data if poorly secured or vulnerable to attacks.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Cybersecurity Actors and Attack Lifecycle</h4>
          
          <div className="space-y-3">
            <p><strong className="text-ink">Threat Actors:</strong> The individuals or groups responsible for cyber attacks, including cybercriminals, hacktivists, nation-state attackers, and malicious insiders.</p>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink mb-2">A typical cyber attack follows several stages:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Reconnaissance</li>
                <li>Initial Access</li>
                <li>Exploitation</li>
                <li>Privilege Escalation</li>
                <li>Lateral Movement</li>
                <li>Data Theft or Damage</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">MITRE ATT&CK Framework</h4>
          <p>
            The <strong className="text-ink">MITRE ATT&CK Framework</strong> is a globally recognized knowledge base that documents how attackers operate. It helps organizations understand attacker tactics, techniques, and procedures (TTPs) so they can better detect and defend against threats.
          </p>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Security Frameworks and Standards</h4>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">NIST CSF:</strong> Provides cybersecurity best practices and risk management guidelines.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">ISO 27001:</strong> International standard for information security management.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">GDPR:</strong> Protects personal data and privacy within the European Union.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">HIPAA:</strong> Safeguards healthcare information.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">PCI DSS:</strong> Protects payment card information.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Zero Trust Security</h4>
          
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p className="font-semibold text-ink mb-2">"Never Trust, Always Verify"</p>
            <p>
              Modern cybersecurity follows the principle of <strong className="text-ink">Zero Trust</strong>, which requires every user, device, and application to continuously verify their identity before gaining access to resources.
            </p>
            <p className="mt-2">
              The concept of <strong className="text-ink">Least Privilege</strong> supports this model by granting users only the minimum level of access required to perform their tasks.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Artificial Intelligence in Cybersecurity</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Defensive AI:</strong> AI and Machine Learning are widely used for threat detection, malware analysis, fraud detection, and automated incident response.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Offensive AI:</strong> Attackers also use AI to enhance phishing attacks, automate password guessing, create sophisticated malware, and improve social engineering techniques.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">SOAR</h4>
          <p>
            <strong className="text-ink">Security Orchestration, Automation, and Response (SOAR)</strong> helps organizations automate repetitive security tasks, improve incident response times, and reduce manual effort.
          </p>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Defense in Depth</h4>
          <p className="mb-4">
            No single security measure can completely protect an organization. Therefore, cybersecurity relies on a strategy called <strong className="text-ink">Defense in Depth</strong>, which uses multiple layers of security controls.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Strong passwords</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Multi-Factor Authentication (MFA)</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Firewalls</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Antivirus software</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Encryption</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Monitoring and logging</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Employee security awareness training</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Conclusion:</strong> Cybersecurity is not just about technology—it is also about people, processes, and continuous learning. Since attackers constantly develop new techniques, organizations must remain vigilant and adaptable. Understanding what needs protection, following the principle of "Never Trust, Always Verify," and implementing multiple layers of defense are essential for maintaining strong security. Cybersecurity is an ongoing journey, and staying curious and informed is one of the best defenses against evolving threats.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'You notice your company\'s website is receiving thousands of requests per second from devices around the world, making it completely unresponsive to legitimate users. What type of attack is this?',
      options: ['Phishing attack', 'DDoS attack', 'MITM attack', 'SQL injection'],
      correctAnswerIndex: 1,
      explanation: 'This is a Distributed Denial of Service (DDoS) attack. It targets the Availability pillar of the CIA Triad by overwhelming systems with traffic. Defense in Depth strategies help mitigate this through firewalls, rate limiting, and traffic analysis.'
    }
  },
  {
    id: "08",
    title: "Building a College FAQ Chatbot using Gemini API",
    description: "Build a simple AI chatbot that answers college-related questions using Gemini API.",
    expandedContent: (
      <div className="space-y-6 text-on-surface-variant font-body">
        <div>
          <h4 className="text-ink font-heading text-2xl mb-4">How the Chatbot Works</h4>
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">User Input:</strong> Student asks a question (e.g., “What is the attendance requirement?”).</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Context:</strong> The chatbot is given college information such as attendance rules, library timings, and placement details.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Response Generation:</strong> Gemini reads the question + context and generates a human-like answer.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-ink font-heading text-2xl mb-4">Steps to Build</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Create a <strong className="text-ink">Google AI Studio</strong> account.</li>
            <li>Generate a Gemini API Key.</li>
            <li>Install Python and the Gemini SDK.</li>
            <li>Store your college FAQs in a text file or dictionary.</li>
            <li>Send the student’s question along with the FAQ data to Gemini.</li>
            <li>Display the AI-generated answer.</li>
          </ol>
        </div>

        <div>
          <h4 className="text-ink font-heading text-2xl mb-4">Example Workflow</h4>
          <div className="flex flex-col gap-2 p-6 bg-surface/40 rounded-xl border border-outline/10">
            <div className="w-full relative transition-transform duration-500 hover:scale-[1.02]" style={{ borderRadius: '12px' }}>
              <img src={img3} alt="College Chatbot Workflow" className="w-full h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong className="text-accent">Outcome:</strong> By completing this module, students learn AI fundamentals, prompt engineering, API integration, and chatbot development while building a practical College FAQ Assistant.
        </div>

        <div className="pt-2">
          <a href="https://github.com/arnav-eluri/buildroomprojects/tree/main/smartchatbot" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-outline/20 rounded-lg text-ink hover:bg-surface/80 transition-colors">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-on-surface-variant"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span className="font-semibold">View Source Code on GitHub</span>
          </a>
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'In the chatbot workflow, what information does Gemini need to read to generate a proper human-like answer?',
      options: ['Only the student\'s question', 'The student\'s question + context (FAQ Data)', 'The college website URL', 'A dictionary of all English words'],
      correctAnswerIndex: 1
    }
  },
  {
    id: "09",
    title: "Cybersecurity Threats & Defense",
    description: "Explore network attacks, security frameworks, and defense strategies to protect systems.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Cybersecurity</strong> is the practice of protecting computers, networks, devices, applications, and data from unauthorized access, attacks, theft, or damage. As our lives become increasingly dependent on technology and the internet, cybersecurity plays a vital role in safeguarding personal information, business operations, and online services.
        </p>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Network-Based Attacks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Denial of Service (DoS):</strong> Floods a system with traffic, making it unavailable to legitimate users.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Distributed Denial of Service (DDoS):</strong> Works like a DoS attack but uses multiple compromised devices simultaneously.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Man-in-the-Middle (MITM):</strong> Occurs when an attacker secretly intercepts communication between two parties.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Packet Sniffing:</strong> Captures network traffic to obtain sensitive information.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Spoofing:</strong> Pretending to be a trusted user, device, or website to gain access or information.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Cloud Security Risks</h4>
          <p className="mb-4">
            Cloud computing provides flexibility and convenience but also introduces risks such as data breaches, weak access controls, misconfigured settings, and attacks on SaaS applications.
          </p>
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink">Software as a Service (SaaS):</strong> Applications delivered over the internet, such as cloud storage platforms and online email services.</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Insider Threats and API Risks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Insider Threats:</strong> Not all threats come from outside an organization. These originate from employees, contractors, or other individuals who have legitimate access to systems.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">API Risks:</strong> Organizations face risks through APIs and third-party integrations, which can expose data if poorly secured or vulnerable to attacks.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Cybersecurity Actors and Attack Lifecycle</h4>
          
          <div className="space-y-3">
            <p><strong className="text-ink">Threat Actors:</strong> The individuals or groups responsible for cyber attacks, including cybercriminals, hacktivists, nation-state attackers, and malicious insiders.</p>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink mb-2">A typical cyber attack follows several stages:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>Reconnaissance</li>
                <li>Initial Access</li>
                <li>Exploitation</li>
                <li>Privilege Escalation</li>
                <li>Lateral Movement</li>
                <li>Data Theft or Damage</li>
              </ol>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">MITRE ATT&CK Framework</h4>
          <p>
            The <strong className="text-ink">MITRE ATT&CK Framework</strong> is a globally recognized knowledge base that documents how attackers operate. It helps organizations understand attacker tactics, techniques, and procedures (TTPs) so they can better detect and defend against threats.
          </p>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Security Frameworks and Standards</h4>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">NIST CSF:</strong> Provides cybersecurity best practices and risk management guidelines.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">ISO 27001:</strong> International standard for information security management.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">GDPR:</strong> Protects personal data and privacy within the European Union.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">HIPAA:</strong> Safeguards healthcare information.</p>
            </div>
            
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">PCI DSS:</strong> Protects payment card information.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Zero Trust Security</h4>
          
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p className="font-semibold text-ink mb-2">"Never Trust, Always Verify"</p>
            <p>
              Modern cybersecurity follows the principle of <strong className="text-ink">Zero Trust</strong>, which requires every user, device, and application to continuously verify their identity before gaining access to resources.
            </p>
            <p className="mt-2">
              The concept of <strong className="text-ink">Least Privilege</strong> supports this model by granting users only the minimum level of access required to perform their tasks.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Artificial Intelligence in Cybersecurity</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Defensive AI:</strong> AI and Machine Learning are widely used for threat detection, malware analysis, fraud detection, and automated incident response.</p>
            </div>
            
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Offensive AI:</strong> Attackers also use AI to enhance phishing attacks, automate password guessing, create sophisticated malware, and improve social engineering techniques.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">SOAR</h4>
          <p>
            <strong className="text-ink">Security Orchestration, Automation, and Response (SOAR)</strong> helps organizations automate repetitive security tasks, improve incident response times, and reduce manual effort.
          </p>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Defense in Depth</h4>
          <p className="mb-4">
            No single security measure can completely protect an organization. Therefore, cybersecurity relies on a strategy called <strong className="text-ink">Defense in Depth</strong>, which uses multiple layers of security controls.
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Strong passwords</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Multi-Factor Authentication (MFA)</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Firewalls</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Antivirus software</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Encryption</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Monitoring and logging</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p>Employee security awareness training</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Conclusion:</strong> Cybersecurity is not just about technology—it is also about people, processes, and continuous learning. Since attackers constantly develop new techniques, organizations must remain vigilant and adaptable. Understanding what needs protection, following the principle of "Never Trust, Always Verify," and implementing multiple layers of defense are essential for maintaining strong security. Cybersecurity is an ongoing journey, and staying curious and informed is one of the best defenses against evolving threats.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'Your company\'s website is receiving thousands of requests per second from devices around the world, making it completely unresponsive to legitimate users. What type of attack is this?',
      options: ['Phishing attack', 'DDoS attack', 'MITM attack', 'SQL injection'],
      correctAnswerIndex: 1,
      explanation: 'This is a Distributed Denial of Service (DDoS) attack. It targets the Availability pillar of the CIA Triad by overwhelming systems with traffic. Defense in Depth strategies help mitigate this through firewalls, rate limiting, and traffic analysis.'
    }
  },
  {
    id: "10",
    title: "The CIA Triad: Foundation of Cybersecurity",
    description: "Learn about Confidentiality, Integrity, and Availability—the three pillars that support all cybersecurity.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">The CIA Triad</strong> is a simple framework that helps us understand what it means to keep information secure. Every security system, whether it protects a personal laptop, a bank's database, or a government network, is designed around these three principles.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-surface p-4 rounded-lg border border-outline/10 text-center">
            <p className="text-4xl mb-2"></p>
            <p className="font-heading text-xl text-ink">Confidentiality</p>
            <p className="text-sm mt-1">Keeping information private</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-outline/10 text-center">
            <p className="text-4xl mb-2"></p>
            <p className="font-heading text-xl text-ink">Integrity</p>
            <p className="text-sm mt-1">Keeping information accurate</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-outline/10 text-center">
            <p className="text-4xl mb-2"></p>
            <p className="font-heading text-xl text-ink">Availability</p>
            <p className="text-sm mt-1">Keeping systems accessible</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Why is the CIA Triad Important?</h4>
          <p className="mb-4">
            The CIA Triad provides a simple way to understand the main objectives of cybersecurity. Instead of focusing only on preventing hackers, cybersecurity asks three important questions:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Who is allowed to access the information?</li>
            <li>Can the information be trusted?</li>
            <li>Will the information be available when it is needed?</li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">1. Confidentiality</h4>
          
          <p className="mb-3">
            <strong className="text-ink">Confidentiality</strong> means keeping information private and ensuring that only authorized people can access it. The right information should only be seen by the right people.
          </p>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10 mb-3">
            <p className="font-semibold text-ink mb-2">Everyday Example:</p>
            <p>Most people lock their phones using a PIN, password, fingerprint, or Face ID. This prevents strangers from accessing photos, messages, emails, or banking applications.</p>
          </div>
          
          <p className="font-semibold text-ink mb-2">How is Confidentiality Protected?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-ink">Strong Passwords:</strong> Make it difficult for attackers to guess or crack accounts</li>
            <li><strong className="text-ink">Multi-Factor Authentication (MFA):</strong> Users verify identity using OTP, fingerprint, or other methods</li>
            <li><strong className="text-ink">Encryption:</strong> Converts readable information into unreadable code</li>
            <li><strong className="text-ink">Access Control:</strong> Employees receive access only to information they need</li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">2. Integrity</h4>
          
          <p className="mb-3">
            <strong className="text-ink">Integrity</strong> means ensuring that information remains accurate, complete, and trustworthy throughout its entire life. Data should not be changed unless an authorized person intentionally updates it.
          </p>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10 mb-3">
            <p className="font-semibold text-ink mb-2">Everyday Example:</p>
            <p>If your university uploads your examination results and someone illegally changes your marks from 92 to 42, the information is still available but no longer correct. This is a failure of integrity.</p>
          </div>
          
          <p className="font-semibold text-ink mb-2">How is Integrity Protected?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-ink">Hashing:</strong> Acts like a digital fingerprint; even small changes produce different hash values</li>
            <li><strong className="text-ink">Digital Signatures:</strong> Verify information comes from a trusted sender</li>
            <li><strong className="text-ink">Backups:</strong> Allow restoration of original versions if files are modified</li>
            <li><strong className="text-ink">Access Permissions:</strong> Only authorized users can edit or delete information</li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">3. Availability</h4>
          
          <p className="mb-3">
            <strong className="text-ink">Availability</strong> means ensuring that systems, applications, and data remain accessible whenever authorized users need them. A secure system is of little use if users cannot access it during important moments.
          </p>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10 mb-3">
            <p className="font-semibold text-ink mb-2">Everyday Example:</p>
            <p>If your college portal crashes on the last day for submitting assignments, your data is secure but you cannot submit your work. The service is unavailable when needed.</p>
          </div>
          
          <p className="font-semibold text-ink mb-2">How is Availability Protected?</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-ink">Backup servers:</strong> Take over if the main server fails</li>
            <li><strong className="text-ink">Regular maintenance:</strong> Reduces unexpected failures</li>
            <li><strong className="text-ink">Disaster recovery plans:</strong> Recover from cyberattacks or hardware failures</li>
            <li><strong className="text-ink">DoS/DDoS protection:</strong> Prevents systems from being overloaded</li>
            <li><strong className="text-ink">Backup power supplies:</strong> Generators and UPS systems keep services running</li>
          </ul>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">How the Three Principles Work Together</h4>
          
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p className="font-semibold text-ink mb-2">Consider online banking:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-ink">Confidentiality:</strong> Your password and OTP ensure only you can access your account</li>
              <li><strong className="text-ink">Integrity:</strong> The bank ensures your balance and transaction history remain accurate</li>
              <li><strong className="text-ink">Availability:</strong> The banking system remains available whenever you need to transfer money</li>
            </ul>
            <p className="mt-3">If any one of these principles fails, the overall security of the banking system is weakened.</p>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong className="text-accent">Key Takeaways:</strong> The CIA Triad forms the foundation of cybersecurity. Every cybersecurity technology—from passwords and encryption to firewalls and cloud security—is designed to support one or more of these principles. Understanding the CIA Triad is the first step toward understanding cybersecurity itself.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'You notice that someone has illegally changed your examination marks from 92 to 42 on the university portal. The marks are still available to view, but they are incorrect. Which pillar of the CIA Triad has been compromised?',
      options: ['Confidentiality', 'Integrity', 'Availability', 'Authentication'],
      correctAnswerIndex: 1,
      explanation: 'This is a failure of Integrity. Integrity ensures information remains accurate and trustworthy. Even though the information is still available (Availability) and no unauthorized person necessarily viewed it (Confidentiality), the data itself has been altered without authorization.'
    }
  },
  {
    id: "04",
    title: "Building Your First Smart App",
    description: "Combine your coding skills and a little bit of AI to build a simple app that can understand what you type.",
    game: {
      type: 'quiz',
      question: 'When you build an app that understands what you type, what are you mainly combining?',
      options: ['Just a keyboard and screen', 'Coding skills and a little bit of AI', 'Magic and luck', 'Paint and canvas'],
      correctAnswerIndex: 1
    }
  },
  {
    id: "05",
    title: "Teaching Computers to See",
    description: "Give your app 'eyes'! Learn how AI helps machines recognize faces, colors, and objects.",
    game: {
      type: 'wordle',
      levels: [
        { word: 'FACES', hint: 'AI helps machines recognize these on people' },
        { word: 'COLOR', hint: 'AI helps machines recognize faces, ____s, and objects' },
        { word: 'SIGHT', hint: 'Giving your app "eyes" gives it this sense' },
        { word: 'LEARN', hint: 'What we want the AI to do with images' }
      ]
    }
  },
  {
    id: "06",
    title: "Your Grand Invention",
    description: "Pick your favorite AI tool and coding skills to invent something totally new. What will you build?",
    game: {
      type: 'quiz',
      question: 'According to the module, what do you need to pick to invent something totally new?',
      options: ['Just a very fast computer', 'Your favorite AI tool and coding skills', 'A lot of money', 'Every single programming language'],
      correctAnswerIndex: 1
    }
  },
  {
    id: "15",
    title: "The Art of Context & Constraints",
    description: "Learn how to control AI outputs using well-structured prompts and improve response quality from LLMs through practical interaction.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          Imagine you walk into a bustling restaurant, sit down, and simply tell the chef, "Make me something good." The chef gets to work and brings out a beautifully plated, extra-spicy seafood curry. The only problem? You are severely allergic to seafood and can't handle spicy food! The chef isn't a bad cook; they just didn't have the context they needed to serve you properly.
        </p>
        <p>
          Working with an AI is exactly like talking to that chef. When you give a simple command without any background information, the AI has to guess what you want. Sometimes it guesses right, but often, it serves you a "spicy seafood curry" when you really wanted a simple grilled cheese sandwich. Adding context—the <strong className="text-ink">who</strong>, <strong className="text-ink">what</strong>, <strong className="text-ink">why</strong>, and <strong className="text-ink">where</strong>—transforms a guessing game into a precise, tailored response.
        </p>

        <div className="w-full relative transition-transform duration-500 hover:scale-[1.02] my-4" style={{ borderRadius: '12px' }}>
          <img src={chefImg} alt="Confused chef with spicy curry" className="w-full max-w-md mx-auto h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
        </div>

        <div className="bg-surface p-4 rounded-lg border border-outline/10 mt-6">
          <h4 className="text-ink font-heading text-xl mb-2">Brain Teaser 1</h4>
          <p className="mb-2">
            You are a baker trying to come up with a new cookie recipe to sell at a school bake sale. You ask the AI: <span className="italic">"Give me a cookie recipe."</span>
          </p>
          <p className="mb-4">
            The AI gives you a complicated French macaron recipe that takes 6 hours and uses expensive almond flour. <strong>How would you rewrite your request to get a recipe that actually works for a school bake sale?</strong>
          </p>
          <p className="text-sm italic text-ink/70 mb-4">(Take a second to think before reading on...)</p>
          <p>
            If you thought about adding details like "easy," "cheap," and "nut-free," you are on the exact right track! A much better prompt would be: <strong className="text-ink">"I am baking for a school bake sale. Give me a simple, cheap, and nut-free cookie recipe that can be made in large batches."</strong> By setting the scene, the AI knows exactly what constraints it needs to work within.
          </p>
          
          <div className="w-full relative transition-transform duration-500 hover:scale-[1.02] mt-4" style={{ borderRadius: '12px' }}>
            <img src={bakerImg} alt="Baker with simple plain cookies" className="w-full max-w-md mx-auto h-auto object-cover relative z-10 shadow-lg shadow-black/20" style={{ borderRadius: '12px' }} />
          </div>
        </div>

        <p className="pt-4">
          This brings us to the second half of the secret recipe: <strong className="text-ink">Constraints</strong>. Constraints are the boundaries you set for the AI. They are the "do nots" and the specific rules it must follow. If context is giving the chef your flavor preferences, constraints are telling the chef about your allergies.
        </p>
        <p>
          When you leave out constraints, the AI might give you an answer that is too long, too complex, or uses words you don't understand. You have the power to put a leash on the AI's creativity. You can tell it to use only words a 5th grader would understand, limit the response to three sentences, or forbid it from using the letter 'e' (though that last one is just for fun!).
        </p>

        <div className="bg-surface p-4 rounded-lg border border-outline/10 mt-6">
          <h4 className="text-ink font-heading text-xl mb-2">Brain Teaser 2</h4>
          <p className="mb-2">
            You are writing an email to your very strict, no-nonsense boss asking for a deadline extension. You ask the AI to draft the email, and it starts with: <span className="italic">"Hey there! I'm super swamped and need a solid solid, can we push the deadline back?"</span>
          </p>
          <p className="mb-4">
            <strong>Oh no! What constraint did you forget to give the AI?</strong>
          </p>
          <p className="text-sm italic text-ink/70 mb-4">(Think about the boundaries...)</p>
          <p>
            You forgot to set the tone and length constraints! To fix this, you would add constraints like: <strong className="text-ink">"Do not use slang. Keep it strictly professional, under 50 words, and do not make excuses. Simply ask for the extension politely."</strong>
          </p>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg mt-6">
          As you venture further into prompt engineering, remember that you are the director of a play, and the AI is your lead actor. The actor has all the talent in the world, but without your stage directions (context) and script boundaries (constraints), they might just start improvising a comedy during your serious drama. The next time you sit down to prompt, ask yourself: <strong>Have I told the AI the whole story?</strong>
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'Which of the following is an example of a constraint in a prompt?',
      options: ['I am a student learning to code.', 'Explain this to me.', 'Do not use any technical jargon.', 'I want to build a website.'],
      correctAnswerIndex: 2
    }
  },
  {
    id: "11",
    title: "Reading Between the Lines with OCR",
    description: "Learn how computers can read text from images using Optical Character Recognition (OCR) and Tesseract.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <div className="bg-surface/40 p-4 border border-outline/10" style={{ borderRadius: '16px' }}>
          <p className="mb-3">
            <strong className="text-ink">What is OCR?</strong><br />
            <strong className="text-ink">Optical Character Recognition (OCR)</strong> is a technology that allows computers to "read" text inside images. To a computer, a photo of a book page is just a grid of colored pixels. OCR acts as the bridge that translates those pixels back into real, editable text (just like the text you type on a keyboard).
          </p>
          <p>
            <strong className="text-ink">Why is it helpful for you?</strong><br />
            As humans, we easily look at a sign and read the words, but we really dislike manually typing out a 50-page printed document. OCR saves us from tedious manual data entry. For beginners learning to build apps, OCR is an amazing first step into Artificial Intelligence. It is highly visual, easy to understand, and immediately useful. You can quickly build impressive projects—like apps that split the bill from a picture of a receipt, digitize old handwritten family recipes, or read license plates—without needing to be an expert!
          </p>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Meet Tesseract</h4>
          <p>
            <strong className="text-ink">Tesseract</strong> is one of the most popular and powerful open-source OCR engines available. Originally developed by Hewlett-Packard and now maintained by Google, it can recognize over 100 languages out of the box.
          </p>
        </div>

        <div className="bg-surface p-4 rounded-lg border border-outline/10 mt-6">
          <h4 className="text-ink font-heading text-xl mb-4">Steps to Install Tesseract</h4>
          <ol className="list-decimal pl-5 space-y-2">
            <li><strong className="text-ink">Windows:</strong> Download the installer from the UB-Mannheim Tesseract GitHub page and run it. Don't forget to add the installation path to your system's Environment Variables!</li>
            <li><strong className="text-ink">macOS:</strong> Open your terminal and run <code className="bg-background/50 px-1 py-0.5 rounded text-ink">brew install tesseract</code> using Homebrew.</li>
            <li><strong className="text-ink">Linux:</strong> Run <code className="bg-background/50 px-1 py-0.5 rounded text-ink">sudo apt install tesseract-ocr</code> in your terminal.</li>
            <li><strong className="text-ink">Python:</strong> To use it in your code, you usually install the wrapper by running <code className="bg-background/50 px-1 py-0.5 rounded text-ink">pip install pytesseract</code>.</li>
          </ol>
        </div>

        <div className="bg-surface p-4 rounded-lg border border-outline/10 mt-6">
          <h4 className="text-ink font-heading text-xl mb-2">Brain Teaser</h4>
          <p className="mb-2">
            You are building an app to read license plates for a parking garage. The OCR engine keeps misreading the letter <strong>'O'</strong> as the number <strong>'0'</strong>, and the letter <strong>'I'</strong> as the number <strong>'1'</strong>.
          </p>
          <p className="mb-4">
            <strong>Without changing the OCR engine itself, how could you solve this problem using simple coding logic?</strong>
          </p>
          <p className="text-sm italic text-ink/70 mb-4">(Take a second to think before reading on...)</p>
          <p>
            If you thought about <strong className="text-ink">context and validation</strong>, you are correct! License plates often follow specific formats (like 3 letters followed by 4 numbers). You can write code that checks the position of the character. If the character is in a "letter" spot but is read as a '0', you programmatically change it to 'O'. You could also use a whitelist configuration in Tesseract to only allow certain characters in specific areas!
          </p>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg mt-6">
          With OCR, your apps can finally "read" the physical world. Just remember that image quality, lighting, and contrast play a huge role in how accurately Tesseract can extract the text!
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'Which of the following describes what Optical Character Recognition (OCR) does?',
      options: ['Generates realistic images from text prompts.', 'Extracts and understands text from images or scanned documents.', 'Translates languages in real-time.', 'Optimizes code for faster performance.'],
      correctAnswerIndex: 1
    }
  },
  {
    id: "12",
    title: "Zero-Day Vulnerabilities: Hidden Threats",
    description: "Discover the most dangerous cybersecurity threats—unknown flaws that attackers exploit before developers can fix them.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Zero-Day Vulnerabilities</strong> are hidden security flaws in software that are unknown to the developer. Because nobody knows the vulnerability exists, there is no security patch available to fix it.
        </p>
        <p className="italic text-ink/70">
          The name "Zero-Day" means developers have had zero days to identify, investigate, and repair the vulnerability before attackers begin exploiting it.
        </p>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Understanding the Difference</h4>
          
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink mb-2">Vulnerability</p>
              <p className="text-sm">The actual flaw or weakness in the software—a hidden crack that nobody has noticed yet.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink mb-2">Exploit</p>
              <p className="text-sm">The method, program, or code created by an attacker to take advantage of the weakness.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink mb-2">Attack</p>
              <p className="text-sm">The actual action of using the exploit to compromise a computer, network, or application.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">A Simple Analogy</h4>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
            <p>Imagine your house has a secret door that even the builder forgot about.</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-ink">The hidden door</strong> = The vulnerability</li>
              <li><strong className="text-ink">The lock-picking tools</strong> = The exploit</li>
              <li><strong className="text-ink">The burglary itself</strong> = The attack</li>
            </ul>
            <p className="mt-2">Only after the theft does the homeowner discover the secret entrance and install proper protection.</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Why Are Zero-Days So Dangerous?</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p>Since nobody knows the vulnerability exists, there is no official fix available.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p>Attackers can steal confidential information, install malware, or gain complete control of a computer.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p>Traditional antivirus software may not recognize the attack since it has never been seen before.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p>The longer a zero-day remains undiscovered, the greater the potential damage.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">How a Zero-Day Attack Works</h4>
          
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong className="text-ink">A Software Bug Exists:</strong> While developing software, programmers accidentally introduce a security flaw.</li>
            <li><strong className="text-ink">Someone Discovers the Weakness:</strong> Either a security researcher (who reports it) or a cybercriminal (who exploits it).</li>
            <li><strong className="text-ink">An Exploit is Developed:</strong> The attacker creates code to use the vulnerability.</li>
            <li><strong className="text-ink">Systems Are Attacked:</strong> Before any update is available, attackers begin targeting users.</li>
            <li><strong className="text-ink">The Vulnerability is Discovered:</strong> Unusual behavior is noticed and investigated.</li>
            <li><strong className="text-ink">A Patch is Released:</strong> The software company develops a security update.</li>
          </ol>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Who Uses Zero-Days?</h4>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Cybercriminals:</strong> Financial gain through data theft and ransomware.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Nation-State Attackers:</strong> Cyber espionage and intelligence gathering.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Hacktivists:</strong> Promoting political causes by disrupting organizations.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Advanced Persistent Threats (APTs):</strong> Highly organized groups that remain hidden while stealing data.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">How to Defend Against Zero-Days</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Install Updates Quickly:</strong> Once a patch becomes available, install it immediately.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Use Modern Endpoint Security:</strong> Advanced antivirus and EDR solutions monitor suspicious behavior.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Follow Least Privilege:</strong> Users should have only minimum permissions necessary.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Monitor Network Activity:</strong> Detect unusual behavior that may indicate an attack.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Maintain Regular Backups:</strong> Restore data if attackers encrypt or damage files.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Train Employees:</strong> Many zero-day attacks begin with phishing emails.</p>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent/30">
            <h4 className="text-ink font-heading text-xl mb-3 flex items-center gap-2">
              <span></span> Brain Teaser
            </h4>
            <p className="text-on-surface-variant font-body mb-4">
              A security researcher discovers a critical flaw in a popular web browser that allows attackers to run malicious code just by having users visit a specially crafted website. No one, including the browser developer, knows about this vulnerability yet.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-ink">What stage of the zero-day process is this? Is this a vulnerability, an exploit, or an attack?</p>
              <p className="text-sm text-ink/70">Think about: The definition of each term and whether the code has been used yet.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Key Takeaway:</strong> In cybersecurity, it is impossible to eliminate every vulnerability. The goal is to discover and respond to them faster than attackers can exploit them.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'A security researcher discovers a critical flaw in a popular web browser that allows attackers to run malicious code just by having users visit a specially crafted website. No one knows about this vulnerability yet. What is this called?',
      options: ['A zero-day vulnerability', 'A known vulnerability', 'A zero-day exploit', 'A zero-day attack'],
      correctAnswerIndex: 0,
      explanation: 'This is a zero-day vulnerability—the hidden weakness itself. It becomes a zero-day exploit when an attacker creates code to use the vulnerability, and it becomes a zero-day attack when that exploit is actually used against victims. Since the flaw exists but no one is using it yet, it is a vulnerability.'
    }
  },
  {
    id: "13",
    title: "Cloud Security and SaaS",
    description: "Learn how to protect data, applications, and services in cloud computing environments.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Cloud computing</strong> is the delivery of computing services—including servers, storage, databases, networking, software, and analytics—over the internet instead of using local computers or personal servers.
        </p>
        <p>
          When you upload a file to Google Drive or send an email through Gmail, the file is stored on Google's cloud servers, allowing you to access it from any device with an internet connection.
        </p>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Common Cloud Services</h4>
          
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-surface p-3 rounded-lg border border-outline/10 text-center">
              <p className="text-2xl mb-1"></p>
              <p className="text-sm">Storage</p>
              <p className="text-xs text-ink/70">Google Drive, Dropbox</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10 text-center">
              <p className="text-2xl mb-1"></p>
              <p className="text-sm">Email</p>
              <p className="text-xs text-ink/70">Gmail, Outlook</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10 text-center">
              <p className="text-2xl mb-1"></p>
              <p className="text-sm">Collaboration</p>
              <p className="text-xs text-ink/70">Teams, Google Docs</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">What is SaaS?</h4>
          
          <p className="mb-3">
            <strong className="text-ink">Software as a Service (SaaS)</strong> is a cloud computing model where software is delivered over the internet instead of being installed on your computer. You simply open a web browser, log in, and start using the application.
          </p>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
            <p className="font-semibold text-ink mb-2">Examples of SaaS:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Gmail, Google Docs, Microsoft 365</li>
              <li>Zoom, Slack, Canva</li>
              <li>Netflix, Salesforce, Dropbox</li>
            </ul>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Why Organizations Use Cloud Services</h4>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink">Cost Savings</p>
              <p className="text-sm">No need to purchase expensive servers or maintain data centers.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink">Easy Access</p>
              <p className="text-sm">Access applications and files from anywhere with internet.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink">Scalability</p>
              <p className="text-sm">Increase or decrease computing resources depending on demand.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-semibold text-ink">Automatic Updates</p>
              <p className="text-sm">Cloud providers regularly update software automatically.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Cloud Security Risks</h4>
          
          <div className="space-y-3">
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Data Breaches:</strong> Unauthorized access to confidential information stored in the cloud.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Misconfigured Settings:</strong> Accidentally making cloud storage publicly accessible.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Weak Access Controls:</strong> Users having more permissions than necessary for their work.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Insecure APIs:</strong> Poorly designed APIs that attackers exploit to access data.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Account Hijacking:</strong> Attackers stealing credentials through phishing to gain full access.</p>
            </div>
            <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Insider Threats:</strong> Employees or contractors intentionally or accidentally exposing data.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">How to Secure Cloud Environments</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Strong Passwords:</strong> Create long, unique passwords that are difficult to guess.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Multi-Factor Authentication (MFA):</strong> Even if attackers steal a password, they cannot log in without the second factor.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Encryption:</strong> Encrypt sensitive data both at rest and in transit.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Access Control:</strong> Follow the Principle of Least Privilege—users get only necessary permissions.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Regular Updates:</strong> Keep applications and devices updated with security patches.</p>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Continuous Monitoring:</strong> Monitor cloud activity for unusual behavior or unauthorized access.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Shared Responsibility Model</h4>
          
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p className="mb-3">Cloud security is a shared responsibility between the cloud provider and the customer:</p>
            
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              <div className="bg-surface p-3 rounded-lg border border-outline/10">
                <p className="font-semibold text-ink">Cloud Provider Responsible For:</p>
                <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                  <li>Physical security of data centers</li>
                  <li>Server hardware</li>
                  <li>Network infrastructure</li>
                  <li>Cloud platform availability</li>
                </ul>
              </div>
              <div className="bg-surface p-3 rounded-lg border border-outline/10">
                <p className="font-semibold text-ink">Customer Responsible For:</p>
                <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                  <li>Creating strong passwords</li>
                  <li>Managing user accounts</li>
                  <li>Configuring security settings</li>
                  <li>Protecting uploaded data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6">
          <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent/30">
            <h4 className="text-ink font-heading text-xl mb-3 flex items-center gap-2">
              <span></span> Brain Teaser
            </h4>
            <p className="text-on-surface-variant font-body mb-4">
              A company stores all employee salary records on a cloud platform. An employee accidentally discovers that by guessing a URL, they can view confidential salary information that belongs to other employees. The cloud provider's servers are secure, but the company had misconfigured the storage folder's permissions.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-ink">What cloud security risk is this, and which party is responsible for fixing it?</p>
              <p className="text-sm text-ink/70">Think about: The Shared Responsibility Model and common configuration problems.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Key Takeaway:</strong> Cloud providers secure the infrastructure, but customers are responsible for protecting their accounts, configuring security settings correctly, and safeguarding their own data. Understanding the Shared Responsibility Model is essential for every cybersecurity professional.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'A company stores confidential employee records on a cloud platform. Due to a misconfiguration, anyone with the link can access these files. The cloud provider\'s infrastructure is secure, but the company set incorrect permissions. Which cloud security risk is this and who is responsible?',
      options: ['Data breach caused by misconfigured settings; the customer is responsible', 'Data breach caused by insecure APIs; the cloud provider is responsible', 'Account hijacking; the employee is responsible', 'Hardware failure; the cloud provider is responsible'],
      correctAnswerIndex: 0,
      explanation: 'This is a data breach caused by misconfigured cloud settings. Under the Shared Responsibility Model, the cloud provider secures the infrastructure, but the customer is responsible for configuring security settings correctly. The company accidentally made the storage folder accessible when it should have been private.'
    }
  },
  {
    id: "14",
    title: "Cyber Attack Surface",
    description: "Understand where cyber attacks can happen—digital, physical, and human entry points.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          <strong className="text-ink">Cyber Attack Surface</strong> is the collection of all possible entry points where an attacker can attempt to enter, attack, or steal information from a system.
        </p>
        <p className="italic text-ink/70">
          Every device, application, user account, cloud service, and network connection adds another part to the attack surface.
        </p>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Why Understanding the Attack Surface Matters</h4>
          
          <div className="bg-surface/40 p-4 rounded-lg border border-outline/10">
            <p>Imagine two houses:</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              <div>
                <p className="font-semibold text-ink">House 1 (Secure)</p>
                <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                  <li>One door with strong lock</li>
                  <li>One window</li>
                  <li>Security cameras</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-ink">House 2 (Vulnerable)</p>
                <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                  <li>Five doors</li>
                  <li>Twenty windows</li>
                  <li>Open garage, broken fence</li>
                </ul>
              </div>
            </div>
            <p className="mt-2">The second house has many more entry points, making it easier to break into. Computer systems work the same way.</p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Three Types of Attack Surfaces</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink">1. Digital Attack Surface</p>
              <p className="text-sm mt-1">Everything connected to a network or internet:</p>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                <li>Websites, mobile applications, cloud storage</li>
                <li>Email servers, databases, APIs</li>
                <li>User accounts, Wi-Fi networks, software</li>
              </ul>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink">2. Physical Attack Surface</p>
              <p className="text-sm mt-1">Actual hardware and equipment:</p>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                <li>Laptops, desktop computers, servers</li>
                <li>USB drives, hard disks, routers</li>
                <li>Security cameras, employee ID cards</li>
              </ul>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink">3. Human Attack Surface</p>
              <p className="text-sm mt-1">People who interact with the system:</p>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                <li>Employees, contractors, users, customers</li>
                <li>Targets of phishing, social engineering</li>
                <li>People who click suspicious links</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Common Entry Points Used by Attackers</h4>
          
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Weak Passwords</strong></p>
              <p className="text-sm">Simple passwords like 123456 are easy to guess.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Outdated Software</strong></p>
              <p className="text-sm">Older applications contain known vulnerabilities.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Phishing Emails</strong></p>
              <p className="text-sm">Users tricked into revealing credentials.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Public Wi-Fi</strong></p>
              <p className="text-sm">Attackers intercept network traffic.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Misconfigured Cloud</strong></p>
              <p className="text-sm">Storage accidentally left publicly accessible.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">USB Devices</strong></p>
              <p className="text-sm">Infected drives auto-install malware.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Unsecured APIs</strong></p>
              <p className="text-sm">Poorly protected interfaces expose data.</p>
            </div>
            <div className="bg-surface/40 p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">IoT Devices</strong></p>
              <p className="text-sm">Smart devices often have weak security.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Real-World Example</h4>
          
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <p>A company with 500 employees has:</p>
            <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
              <li>500 laptops and 600 employee accounts</li>
              <li>Website, mobile app, cloud storage</li>
              <li>Email servers, Wi-Fi, security cameras</li>
              <li>APIs connected to payment systems</li>
            </ul>
            <p className="mt-2">One employee clicks a phishing email and enters their password on a fake login page. The attacker uses those credentials to access cloud storage.</p>
            <p className="mt-1"><strong>The servers were secure, but the attacker entered through the human attack surface.</strong></p>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">How to Reduce the Attack Surface</h4>
          
          <div className="space-y-3">
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Remove Unnecessary Software:</strong> Uninstall applications that are not used—they add potential vulnerabilities.</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Keep Systems Updated:</strong> Install security patches to close known vulnerabilities.</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Use Strong Authentication:</strong> Passwords combined with MFA make unauthorized access difficult.</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Limit User Permissions:</strong> Follow Principle of Least Privilege—users access only what they need.</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Secure Cloud Resources:</strong> Configure storage, databases, and APIs correctly.</p>
            </div>
            <div className="bg-surface p-3 rounded-lg border border-outline/10">
              <p><strong className="text-ink">Employee Training:</strong> Teach staff to identify phishing and social engineering.</p>
            </div>
          </div>
        </div>

        <div className="pt-4">
          <h4 className="text-ink font-heading text-2xl mb-4">Attack Surface vs Vulnerability</h4>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink">Attack Surface</p>
              <p className="text-sm mt-1">All possible entry points into a system:</p>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                <li>Devices, applications, users, networks, cloud services</li>
              </ul>
            </div>
            <div className="bg-surface p-4 rounded-lg border border-outline/10">
              <p className="font-heading text-lg text-ink">Vulnerability</p>
              <p className="text-sm mt-1">A specific weakness within an entry point:</p>
              <ul className="list-disc pl-4 text-sm mt-1 space-y-1">
                <li>Weak passwords, outdated software, programming bugs</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 bg-surface/20 p-3 rounded-lg border border-outline/10">
            <p className="text-sm"><strong>Analogy:</strong> Doors and windows = attack surface. An unlocked window = vulnerability. The attacker chooses a window (attack surface) and notices it is unlocked (vulnerability).</p>
          </div>
        </div>

        <div className="pt-6">
          <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent/30">
            <h4 className="text-ink font-heading text-xl mb-3 flex items-center gap-2">
              <span></span> Brain Teaser
            </h4>
            <p className="text-on-surface-variant font-body mb-4">
              A hospital has recently installed smart medical devices, allowed remote work for all staff, adopted three new cloud services, and enabled patients to book appointments through a mobile app. The IT team notices that cyber attacks have increased significantly.
            </p>
            <div className="space-y-2">
              <p className="font-semibold text-ink">Which type of attack surface has expanded the most, and what should the hospital do to reduce its risk?</p>
              <p className="text-sm text-ink/70">Think about: How each new technology affects the attack surface.</p>
            </div>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Key Takeaway:</strong> Before you can protect a system, you must first understand where it can be attacked. The larger the attack surface, the more opportunities attackers have. Reducing the attack surface by removing unnecessary technology, applying updates, limiting permissions, and training employees makes it significantly harder for cybercriminals to find weaknesses.
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'A hospital recently installed smart medical devices, enabled remote work, adopted cloud services, and launched a patient mobile app. Cyber attacks increased significantly. Which attack surface expanded the most and what should the hospital do?',
      options: ['Physical attack surface; replace all smart devices', 'Digital attack surface; reduce technology use and secure remaining systems', 'Human attack surface; fire employees who click phishing emails', 'All attack surfaces expanded; implement defense-in-depth'],
      correctAnswerIndex: 3,
    }
  },
  {
    id: "16",
    title: "Design Flow",
    description: "Understand the journey of a product from Input to Output, exploring everything that happens in between.",
    expandedContent: (
      <div className="space-y-4 text-on-surface-variant font-body">
        <p>
          Designing a product is like solving a puzzle where you guide data from its raw form to a polished result. In this module, we explore the core lifecycle:
        </p>

        <div className="w-full flex justify-center py-4">
          <div className="w-full max-w-2xl relative transition-transform duration-500 hover:scale-[1.02]" style={{ borderRadius: '16px' }}>
            <div className="absolute inset-0 bg-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl rounded-2xl"></div>
            <img src={designFlowImg} alt="Design Flow Illustration" className="w-full h-auto object-cover relative z-10 shadow-xl shadow-black/30 rounded-2xl border border-outline/20" />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink text-lg">1. Input</strong></p>
            <p>Where the data originates (e.g., user clicks, typed text, uploaded images).</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink text-lg">2. Processing (The "In-Between")</strong></p>
            <p>Where the magic happens. Data is transformed, analyzed, or stored (e.g., AI models generating a response, algorithms sorting data).</p>
          </div>
          <div className="bg-surface p-4 rounded-lg border border-outline/10">
            <p><strong className="text-ink text-lg">3. Output</strong></p>
            <p>The final result presented to the user (e.g., a visual dashboard, a chat reply, an alert).</p>
          </div>
        </div>

        <div className="pt-4 p-4 bg-accent/10 text-ink font-medium border border-accent/20 rounded-lg">
          <strong>Key Takeaway:</strong> Every app you use is constantly cycling through Input, Processing, and Output. Mastering this flow is the key to designing great software!
        </div>
      </div>
    ),
    game: {
      type: 'quiz',
      question: 'Imagine you are building a smart doorbell. The camera captures a video feed of a visitor. Which stage of the Design Flow is this?',
      options: ['Input', 'Processing', 'Output', 'Storage'],
      correctAnswerIndex: 0,
      explanation: 'Capturing the video feed is gathering raw data, which makes it the Input stage. Processing would be analyzing the face, and Output would be playing a greeting sound.'
    }
  }
]

export function getModuleById(id: string) {
  return MODULES.find(mod => mod.id === id)
}
