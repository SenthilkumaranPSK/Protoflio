import { useState, type MouseEvent as ReactMouseEvent, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  ExternalLink, 
  Sparkles, 
  Receipt, 
  BrainCircuit, 
  TrendingUp, 
  Microscope, 
  Layers, 
  Compass, 
  ArrowUpRight, 
  CheckCircle2,
  Terminal,
  Zap,
  ShieldCheck,
  Cpu,
  Database
} from 'lucide-react';
import { Button } from './ui/button';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

type CategoryKey = 'all' | 'production' | 'ai_agents' | 'backend' | 'fullstack' | 'vision_ml';

interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  categories: CategoryKey[];
  badge: string;
  badgeColor: string;
  statusText: string;
  icon: typeof Receipt;
  metricChips: { label: string; icon?: typeof Zap }[];
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  liveLabel?: string;
  accentGradient: string;
  glowColor: string;
}

const projects: ProjectItem[] = [
  {
    id: 'maestro-billing',
    title: 'Maestro-Billing',
    tagline: 'Production GST Billing System & Thermal Engine',
    categories: ['production', 'fullstack', 'backend'],
    badge: 'Production Client',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    statusText: 'In Active Production',
    icon: Receipt,
    metricChips: [
      { label: '18 Zero-Loss Migrations', icon: ShieldCheck },
      { label: 'Integer Currency (Paise)', icon: Zap },
      { label: 'WhatsApp & 80mm ESC/POS', icon: Terminal }
    ],
    highlights: [
      'Shipped a GST-compliant billing system for a photography studio in a single npm monorepo (React 18, Fastify, Prisma, SQLite WAL).',
      'Whole-rupee CGST/SGST tax reconciliation eliminating floating-point calculation errors.',
      'Three automated dispatch pipelines: PDF invoices, 80mm thermal receipts, and WhatsApp API integration.'
    ],
    tech: ['React 18', 'Vite', 'Tailwind', 'Fastify', 'Prisma', 'SQLite (WAL)', 'WhatsApp API'],
    github: 'https://github.com/SenthilkumaranPSK/Maestro-billing',
    accentGradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/20',
    glowColor: 'group-hover:shadow-emerald-500/10'
  },
  {
    id: 'aurexis-ai',
    title: 'AUREXIS AI',
    tagline: 'Cognitive Multi-Agent Financial Intelligence Platform',
    categories: ['production', 'ai_agents', 'backend', 'fullstack'],
    badge: 'IJIRT Published Paper',
    badgeColor: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
    statusText: '1st Author Research (Vol. 12 Issue 12)',
    icon: BrainCircuit,
    metricChips: [
      { label: 'Multi-Agent Orchestration', icon: Cpu },
      { label: 'Local deepseek-v2 (Ollama)', icon: Zap },
      { label: 'Docker Containerized', icon: Terminal }
    ],
    highlights: [
      'FastAPI service coordinating specialized autonomous agents for portfolio analysis, transaction auditing, and risk forecasting.',
      'Published as First Author in IJIRT (May 2026): "A Cognitive AI-based System for Real-Time Financial Analysis".',
      'Local offline LLM inference via Ollama (deepseek-v2) with weighted risk scoring and scenario simulations.'
    ],
    tech: ['Python', 'FastAPI', 'React/Vite', 'Ollama (deepseek-v2)', 'scikit-learn', 'Docker'],
    github: 'https://github.com/SenthilkumaranPSK/AUREXIS_AI',
    live: 'https://aurexis-ai.vercel.app',
    liveLabel: 'Live Demo',
    accentGradient: 'from-cyan-500/20 via-blue-500/10 to-indigo-500/20',
    glowColor: 'group-hover:shadow-cyan-500/10'
  },
  {
    id: 'demand-forecasting',
    title: 'Demand Forecasting Platform',
    tagline: 'Model Registry & High-Throughput Forecast API',
    categories: ['backend', 'production'],
    badge: 'Model Registry & API',
    badgeColor: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    statusText: 'High-Throughput Service',
    icon: TrendingUp,
    metricChips: [
      { label: 'AWS S3 + PostgreSQL Registry', icon: Database },
      { label: '50/80/90% Confidence Intervals', icon: Zap },
      { label: 'Property-Based Testing', icon: ShieldCheck }
    ],
    highlights: [
      'Enterprise model registry storing model artifacts in AWS S3 with versioned schema in PostgreSQL & SQLAlchemy 2.0.',
      'FastAPI service with key-based authentication, per-client rate limiting, and structured JSON telemetry.',
      'Tested with pytest-asyncio, Hypothesis property-based testing, and moto AWS mocking suites.'
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'AWS S3', 'Prophet', 'Hypothesis'],
    github: 'https://github.com/SenthilkumaranPSK/Sales-Demand-Predictor',
    accentGradient: 'from-blue-500/20 via-indigo-500/10 to-violet-500/20',
    glowColor: 'group-hover:shadow-blue-500/10'
  },
  {
    id: 'nuclei-segmentation',
    title: 'Nuclei Instance Segmentation',
    tagline: 'Classical OpenCV vs PyTorch Deep Learning U-Net',
    categories: ['vision_ml', 'ai_agents'],
    badge: 'Medical CV & U-Net',
    badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    statusText: 'BBBC039 Broad Institute Benchmark',
    icon: Microscope,
    metricChips: [
      { label: 'PyTorch U-Net & Watershed', icon: Cpu },
      { label: '16-Bit Percentile Normalization', icon: Zap },
      { label: 'Dice, IoU & Instance F1', icon: ShieldCheck }
    ],
    highlights: [
      'Benchmarked classical OpenCV against a PyTorch U-Net on the BBBC039 dataset (200 fluorescence microscopy images).',
      'Distance-transform seeded watershed and learned boundary channels to cleanly segment overlapping nuclei.',
      'Preserved low-intensity dim nuclei across 16-bit dynamic range; served inference via FastAPI endpoint.'
    ],
    tech: ['Python', 'PyTorch', 'torchvision', 'OpenCV', 'scikit-image', 'FastAPI', 'U-Net'],
    github: 'https://github.com/SenthilkumaranPSK/Biomedical-Image-Analysis',
    accentGradient: 'from-rose-500/20 via-pink-500/10 to-purple-500/20',
    glowColor: 'group-hover:shadow-rose-500/10'
  },
  {
    id: 'rag-assistant',
    title: 'RAG Knowledge Assistant',
    tagline: 'Dense Vector + BM25 with Cross-Encoder Reranking',
    categories: ['ai_agents', 'backend'],
    badge: 'Hybrid Search Engine',
    badgeColor: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
    statusText: 'Hybrid Dense + Sparse RAG',
    icon: Layers,
    metricChips: [
      { label: 'ChromaDB + BM25 Hybrid', icon: Database },
      { label: 'Cross-Encoder Reranking', icon: Zap },
      { label: '100% Local Privacy', icon: ShieldCheck }
    ],
    highlights: [
      'Hybrid retrieval combining dense vector search (sentence-transformers) with BM25 sparse keyword matching.',
      'Sentence-aware overlapping chunking with pdfplumber and query rewriting for high precision document parsing.',
      '100% local, citation-grounded response generation for absolute enterprise data privacy.'
    ],
    tech: ['Python', 'sentence-transformers', 'ChromaDB', 'BM25', 'Cross-Encoder', 'pdfplumber'],
    github: 'https://github.com/SenthilkumaranPSK/RAG-Chatbot',
    accentGradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/20',
    glowColor: 'group-hover:shadow-purple-500/10'
  },
  {
    id: 'travelgenie',
    title: 'TravelGenie — AI Trip Planner',
    tagline: 'Generative Travel Planner with Live Geolocation',
    categories: ['ai_agents', 'fullstack'],
    badge: 'GenAI + Live Maps',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    statusText: 'Context-Aware GenAI Engine',
    icon: Compass,
    metricChips: [
      { label: 'Google Gemini Context Engine', icon: Cpu },
      { label: 'Leaflet & OpenStreetMap', icon: Zap },
      { label: 'Live Overpass & Geocoding', icon: Terminal }
    ],
    highlights: [
      'Generates day-wise itineraries tailored to destination, budget, and travel style with a context-aware Gemini assistant.',
      'Integrated real-time weather, Nominatim geocoding, and venue discovery via Overpass API.',
      'Interactive Leaflet maps with seamless Google Maps handoff for turn-by-turn navigation.'
    ],
    tech: ['Node.js', 'Express', 'React', 'Google Gemini', 'Leaflet', 'OpenStreetMap', 'Vercel'],
    github: 'https://github.com/SenthilkumaranPSK/AI-Smart-Travel-Agent',
    accentGradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/20',
    glowColor: 'group-hover:shadow-amber-500/10'
  }
];

const categoriesList: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'production', label: 'Production & Client' },
  { key: 'ai_agents', label: 'AI & GenAI' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'vision_ml', label: 'Vision & ML' },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 220, damping: 22 });
  const springRotateY = useSpring(rotateY, { stiffness: 220, damping: 22 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 7);
    rotateX.set(-py * 7);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  const IconComponent = project.icon;

  return (
    <motion.div
      layout
      variants={fadeInUp}
      whileHover={{ y: -6, transition: spring }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
        className={`group relative bg-card/75 backdrop-blur-xl border border-border/80 rounded-3xl p-6 sm:p-7 flex flex-col h-full shadow-2xl shadow-black/40 hover:border-primary/50 transition-all duration-300 overflow-hidden ${project.glowColor}`}
      >
        {/* Subtle Ambient Radial Glow */}
        <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${project.accentGradient} opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none`} />

        {/* Top Simulated IDE / Telemetry Status Bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 pb-4 mb-4 border-b border-border/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-[10px] font-mono text-muted-foreground ml-2 font-medium tracking-wide">
              {project.statusText}
            </span>
          </div>

          <span className={`inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${project.badgeColor}`}>
            <Sparkles size={10} />
            {project.badge}
          </span>
        </div>

        {/* Card Title & Icon Header */}
        <div className="relative z-10 flex items-start gap-3.5 mb-3">
          <div className="w-11 h-11 rounded-2xl bg-secondary/90 border border-border/80 flex items-center justify-center shrink-0 text-primary shadow-inner group-hover:scale-105 group-hover:border-primary/40 transition-all">
            <IconComponent size={22} />
          </div>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground font-medium mt-0.5 leading-snug">
              {project.tagline}
            </p>
          </div>
        </div>

        {/* Key Architectural Metric Chips */}
        <div className="relative z-10 flex flex-wrap gap-1.5 my-3">
          {project.metricChips.map((chip, idx) => {
            const ChipIcon = chip.icon || Zap;
            return (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold bg-secondary/60 hover:bg-secondary text-foreground/90 rounded-lg border border-border/70 transition-colors"
              >
                <ChipIcon size={12} className="text-primary shrink-0" />
                {chip.label}
              </span>
            );
          })}
        </div>

        {/* Structured Engineering Highlights */}
        <div className="relative z-10 flex-grow my-3 space-y-2">
          {project.highlights.map((bullet, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground/95 leading-relaxed">
              <CheckCircle2 size={13} className="text-primary/80 shrink-0 mt-0.5" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="relative z-10 flex flex-wrap gap-1.5 pt-3 pb-5 border-t border-border/50">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-mono font-medium bg-background/80 text-foreground/80 rounded-md border border-border/70"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom CTA Buttons */}
        <div className="relative z-10 flex items-center gap-2.5 pt-1 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-secondary/90 hover:bg-primary/20 hover:text-primary border border-border/80 hover:border-primary/40 text-foreground font-semibold rounded-xl text-xs gap-1.5 transition-all shadow-sm"
            asChild
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={14} />
              View Source
            </a>
          </Button>

          {project.live && (
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-xs gap-1.5 shadow-md shadow-primary/25 hover:shadow-primary/40 transition-all"
              asChild
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.title}`}
              >
                <ExternalLink size={13} />
                {project.liveLabel || 'Live Demo'}
              </a>
            </Button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('all');
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'all' ? true : project.categories.includes(activeCategory)
  );

  const getCategoryCount = (catKey: CategoryKey) => {
    if (catKey === 'all') return projects.length;
    return projects.filter((p) => p.categories.includes(catKey)).length;
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-[36rem] h-[36rem] top-6 right-6 opacity-40" />
      <GradientBlob color="primary" className="w-[30rem] h-[30rem] bottom-6 left-6 opacity-35" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Engineering <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Production systems shipped for paying clients, published AI research papers, high-throughput APIs, and deep learning models.
          </p>
        </motion.div>

        {/* Category Filter Tabs with Item Counts */}
        <div className="flex justify-center mb-10 px-2 overflow-x-auto no-scrollbar">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-secondary/70 border border-border/80 backdrop-blur-md shadow-lg shadow-black/20">
            {categoriesList.map((cat) => {
              const count = getCategoryCount(cat.key);
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategoryPill"
                      className="absolute inset-0 rounded-xl bg-primary shadow-md shadow-primary/25"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                  <span
                    className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full font-mono transition-colors ${
                      isActive
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-background/60 text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist GitHub Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center p-6 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-black/30"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-foreground">
              Looking for more repositories?
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Explore 20+ open-source AI models, backend APIs, and full-stack projects on GitHub.
            </p>
          </div>

          <Button
            className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 rounded-xl px-5 font-bold text-xs gap-1.5 whitespace-nowrap shadow-sm hover:scale-[1.02] transition-transform"
            asChild
          >
            <a
              href="https://github.com/SenthilkumaranPSK?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
              View 20+ Repos
              <ArrowUpRight size={13} />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;
