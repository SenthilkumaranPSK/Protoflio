import { type ReactNode, type MouseEvent as ReactMouseEvent, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles, BookOpen, CheckCircle2, Code2, Terminal, Cpu, Database, Activity, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { fadeInUp, scaleIn, springSnappy, staggerContainer, tapScale } from '@/lib/motion';
import { gsap, SplitText, prefersReducedMotion } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

/** Subtly pulls toward the cursor within its bounds, springs back on leave. */
const Magnetic = ({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [headlineReady, setHeadlineReady] = useState(false);
  const [activeTab, setActiveTab] = useState<'pipelines' | 'stack' | 'metrics'>('pipelines');

  useGSAP(
    () => {
      const h1 = h1Ref.current;
      if (!h1) return;

      if (prefersReducedMotion()) {
        gsap.set(h1, { opacity: 1 });
        setHeadlineReady(true);
        return;
      }

      let split: SplitText | undefined;

      document.fonts.ready.then(() => {
        if (!h1Ref.current) return;
        split = SplitText.create(h1Ref.current, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'hero-line',
        });

        gsap.set(h1Ref.current, { opacity: 1 });
        gsap
          .timeline()
          .from(split.lines, {
            yPercent: 110,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power4.out',
          })
          .add(() => setHeadlineReady(true), '-=0.3');
      });

      return () => split?.revert();
    },
    { scope: heroRef }
  );

  const metrics = [
    { icon: CheckCircle2, label: 'Production Shipped', val: '4+ Systems' },
    { icon: BookOpen, label: 'Published Paper', val: '1st Author (IJIRT)' },
    { icon: Sparkles, label: 'B.Tech Graduate', val: '7.85 CGPA' },
    { icon: Code2, label: 'GitHub Repos', val: '20+ Projects' },
  ];

  return (
    <section ref={heroRef} id="home" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-1 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Core Identity & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Availability Status Badge */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-5 shadow-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-foreground/90">
                Available for Applied AI &amp; Software Engineering Roles
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1
              ref={h1Ref}
              style={{ opacity: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tighter"
            >
              Senthil<span className="text-gradient-animated">kumaran</span>&nbsp;P
            </h1>

            <motion.div
              initial="hidden"
              animate={headlineReady ? 'visible' : 'hidden'}
              variants={staggerContainer(0.1)}
              className="w-full"
            >
              <motion.p
                variants={fadeInUp}
                className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 font-medium leading-relaxed max-w-2xl"
              >
                <span className="text-foreground font-semibold">Applied AI &amp; Software Engineer</span> specializing in{' '}
                <span className="text-foreground font-semibold">Generative AI, Multi-Agent Systems, RAG</span>, and robust{' '}
                <span className="text-foreground font-semibold">Full-Stack / Backend Architectures</span> shipped to production.
              </motion.p>

              {/* Quick Metrics Ticker */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full mb-8"
              >
                {metrics.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm card-glow text-left hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-1.5 text-primary mb-1">
                      <item.icon size={14} />
                      <span className="text-xs sm:text-sm font-bold text-foreground truncate">{item.val}</span>
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium truncate">{item.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8"
              >
                <Magnetic>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                    <Button
                      size="lg"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-5 text-sm sm:text-base rounded-xl transition-shadow hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] shadow-lg shadow-primary/20"
                      asChild
                    >
                      <a href="#projects">Explore Projects</a>
                    </Button>
                  </motion.div>
                </Magnetic>

                <Magnetic>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 font-bold px-7 py-5 text-sm sm:text-base rounded-xl transition-colors gap-2"
                      asChild
                    >
                      <Link to="/resume">
                        <FileText size={17} />
                        View Resume
                      </Link>
                    </Button>
                  </motion.div>
                </Magnetic>

                <Magnetic>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                    <Button
                      size="lg"
                      variant="ghost"
                      className="hover:bg-secondary font-bold px-5 py-5 text-sm sm:text-base rounded-xl transition-colors"
                      asChild
                    >
                      <a href="#contact">Get In Touch</a>
                    </Button>
                  </motion.div>
                </Magnetic>
              </motion.div>

              {/* Social Channels */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-2 border-t border-border/60"
              >
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Connect:</span>
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/senthilkumaran75", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/SenthilkumaranPSK", label: "GitHub" },
                  { icon: Mail, href: "mailto:senthil2005kumaran@gmail.com", label: "Email" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                    aria-label={`Visit my ${social.label}`}
                  >
                    <social.icon size={15} />
                    <span>{social.label}</span>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Engineering Telemetry & System Status HUD */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative rounded-3xl border border-border/90 bg-card/80 backdrop-blur-xl shadow-2xl shadow-black/50 overflow-hidden card-glow">
              
              {/* Terminal Title Bar */}
              <div className="px-4 py-3 bg-secondary/70 border-b border-border/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[11px] font-mono text-muted-foreground">senthil@ai-core:~$</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <Activity size={10} className="animate-pulse" />
                  <span>ONLINE · v2.6</span>
                </div>
              </div>

              {/* HUD Tabs */}
              <div className="flex border-b border-border/60 bg-muted/30 px-3 pt-2 gap-1.5">
                {[
                  { id: 'pipelines', label: 'Active Pipelines', icon: Cpu },
                  { id: 'stack', label: 'Core Stack', icon: Database },
                  { id: 'metrics', label: 'Credentials', icon: Server },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg text-xs font-semibold transition-all ${
                      activeTab === tab.id
                        ? 'bg-card text-primary border-t border-x border-border/80 font-bold'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    <tab.icon size={12} />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* HUD Content Area */}
              <div className="p-5 font-mono text-xs space-y-3.5 min-h-[290px] flex flex-col justify-between">
                {activeTab === 'pipelines' && (
                  <motion.div
                    key="pipelines"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-3"
                  >
                    <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-foreground font-bold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          AUREXIS Multi-Agent OS
                        </span>
                        <span className="text-[10px] text-primary px-1.5 py-0.5 rounded bg-primary/10">IJIRT Published</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-sans">
                        FastAPI + Ollama (deepseek-v2) offline inference &amp; weighted risk scoring engine.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-foreground font-bold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                          Maestro-Billing Engine
                        </span>
                        <span className="text-[10px] text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10">Client Shipped</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-sans">
                        React 18 + Fastify + Prisma SQLite WAL with automated WhatsApp &amp; thermal printing.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-foreground font-bold flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400"></span>
                          Hybrid RAG + Dense/BM25
                        </span>
                        <span className="text-[10px] text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-500/10">Vector DB</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground font-sans">
                        ChromaDB + sentence-transformers + cross-encoder reranking over enterprise docs.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'stack' && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2.5 font-sans"
                  >
                    {[
                      { area: 'Generative AI & LLMs', tools: 'LangChain, LangGraph, CrewAI, SDXL, Ollama, Gemini', level: 'Production' },
                      { area: 'Backend & High-Throughput', tools: 'FastAPI, Fastify, PostgreSQL, Prisma, AWS S3', level: 'Production' },
                      { area: 'Frontend & Architecture', tools: 'React 18, TypeScript, Tailwind, Vite, Monorepos', level: 'Production' },
                      { area: 'Vision & Deep Learning', tools: 'PyTorch U-Net, OpenCV, MediaPipe, YOLOv8', level: 'Research' },
                    ].map((item, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-secondary/50 border border-border/60">
                        <div className="flex justify-between items-center mb-1 text-xs">
                          <span className="font-bold text-foreground">{item.area}</span>
                          <span className="text-[10px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">{item.level}</span>
                        </div>
                        <p className="text-[11px] text-muted-foreground font-mono">{item.tools}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === 'metrics' && (
                  <motion.div
                    key="metrics"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2.5 font-sans"
                  >
                    <div className="p-3 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="text-xs font-bold text-foreground">B.Tech Degree &amp; Academics</div>
                      <div className="text-[11px] text-primary font-semibold mt-0.5">CGPA: 7.85 / 10.0 · Graduated May 2026</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Dhirajlal Gandhi College of Technology, Salem</div>
                    </div>

                    <div className="p-3 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="text-xs font-bold text-foreground">1st Author Research Paper</div>
                      <div className="text-[11px] text-primary font-semibold mt-0.5">IJIRT Vol. 12 Issue 12 (pp. 3521-3529)</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Title: AUREXIS AI: Cognitive AI Decision Support</div>
                    </div>

                    <div className="p-3 rounded-xl bg-secondary/50 border border-border/60">
                      <div className="text-xs font-bold text-foreground">National Hackathon Accolades</div>
                      <div className="text-[11px] text-muted-foreground mt-0.5">Google Agentic AI Day Shortlist · 2nd Prize TN State Planning</div>
                    </div>
                  </motion.div>
                )}

                {/* Console Footer */}
                <div className="pt-2 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Terminal size={12} className="text-primary" />
                    <span>Location: Salem, TN, India</span>
                  </span>
                  <a
                    href="#projects"
                    className="text-primary hover:underline font-bold"
                  >
                    View Systems &rarr;
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/80 font-bold">Explore</span>
          <a href="#about" className="text-primary/70 hover:text-primary transition-colors">
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

