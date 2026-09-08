import { useState, type MouseEvent as ReactMouseEvent, useRef } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles, FolderGit2, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

type CategoryKey = 'all' | 'production' | 'ai_agents' | 'backend' | 'fullstack' | 'vision_ml';

interface ProjectItem {
  title: string;
  subtitle: string;
  categories: CategoryKey[];
  description: string[];
  tech: string[];
  github: string;
  live?: string;
  badge?: string;
  color: string;
}

const projects: ProjectItem[] = [
  {
    title: 'Maestro-Billing',
    subtitle: 'Production GST Billing System for Photography Studio',
    categories: ['production', 'fullstack', 'backend'],
    description: [
      'Built and shipped a GST-compliant billing system for a photography studio in a single npm-workspaces monorepo — React 18/Vite frontend with Fastify & Prisma backend, now in daily production for a paying client.',
      'Implemented integer-based currency handling in paise with CGST/SGST whole-rupee reconciliation, preventing floating-point calculation errors.',
      'Delivered three output paths per bill: PDF invoices, 80mm ESC/POS thermal receipts, and automated WhatsApp delivery with append-only audit logging across 18 zero-loss Prisma migrations.'
    ],
    tech: ['React 18', 'Vite', 'Tailwind', 'Fastify', 'Prisma', 'SQLite (WAL)', 'npm Workspaces', 'WhatsApp API'],
    github: 'https://github.com/SenthilkumaranPSK/Maestro-billing',
    badge: 'Production Client',
    color: 'from-blue-600/30 via-indigo-600/20 to-cyan-600/30',
  },
  {
    title: 'AUREXIS AI',
    subtitle: 'Cognitive Multi-Agent Financial Intelligence Platform',
    categories: ['production', 'ai_agents', 'backend', 'fullstack'],
    description: [
      'Architected a FastAPI service coordinating specialized autonomous agents for portfolio analysis, transaction monitoring, and risk forecasting.',
      'Published as First Author of 7 in IJIRT (Vol. 12 Issue 12, May 2026): "AUREXIS AI: A Cognitive AI-based System for Real-Time Financial Analysis and Decision Support".',
      'Implemented weighted risk scoring and scenario simulations; runs on local offline inference via Ollama (deepseek-v2), containerized with Docker behind GitHub Actions CI.'
    ],
    tech: ['Python', 'FastAPI', 'React/Vite', 'Ollama (deepseek-v2)', 'scikit-learn', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/SenthilkumaranPSK/AUREXIS_AI',
    live: 'https://aurexis-ai.vercel.app',
    badge: 'IJIRT Published Paper',
    color: 'from-cyan-500/30 via-blue-500/20 to-indigo-500/30',
  },
  {
    title: 'Demand Forecasting Platform',
    subtitle: 'Model Registry & High-Throughput Forecast API',
    categories: ['backend', 'production'],
    description: [
      'Built an enterprise model registry storing artifacts in Amazon S3 with versioned metadata in PostgreSQL & SQLAlchemy 2.0, supporting multi-model comparison per product.',
      'Served forecasts with 50/80/90% confidence intervals over a FastAPI service, secured with key-based authentication, per-client rate limiting, and structured JSON logging.',
      'Tested with pytest-asyncio, Hypothesis property-based testing, and moto AWS mocking across unit, integration, and performance suites.'
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'AWS S3', 'Prophet', 'statsmodels', 'Hypothesis'],
    github: 'https://github.com/SenthilkumaranPSK/Sales-Demand-Predictor',
    badge: 'Model Registry & API',
    color: 'from-emerald-500/30 via-teal-500/20 to-cyan-500/30',
  },
  {
    title: 'Nuclei Instance Segmentation',
    subtitle: 'Classical Computer Vision vs Deep Learning U-Net',
    categories: ['vision_ml', 'ai_agents'],
    description: [
      'Benchmarked a classical OpenCV pipeline against a PyTorch U-Net on the BBBC039 dataset (Broad Institute, 200 fluorescence microscopy images, official split).',
      'Separated touching nuclei using distance-transform seeded watershed and a learned boundary channel, evaluated on Dice, IoU, and instance-level F1 scores.',
      'Applied percentile normalization over min-max scaling to preserve dim nuclei across 16-bit dynamic range; served inference through a FastAPI endpoint.'
    ],
    tech: ['Python', 'PyTorch', 'torchvision', 'OpenCV', 'scikit-image', 'FastAPI', 'U-Net'],
    github: 'https://github.com/SenthilkumaranPSK/Biomedical-Image-Analysis',
    badge: 'Medical CV & U-Net',
    color: 'from-rose-500/30 via-pink-500/20 to-red-500/30',
  },
  {
    title: 'RAG Knowledge Assistant',
    subtitle: 'Hybrid Dense + Sparse Retrieval with Cross-Encoder Reranking',
    categories: ['ai_agents', 'backend'],
    description: [
      'Built a hybrid retrieval pipeline blending dense vector search (sentence-transformers & ChromaDB) with BM25 keyword matching, followed by cross-encoder reranking.',
      'Added query rewriting and sentence-aware overlapping chunking with pdfplumber to improve recall across complex documents.',
      'Grounded every answer in cited source passages; runs fully locally for complete data privacy.'
    ],
    tech: ['Python', 'sentence-transformers', 'ChromaDB', 'BM25', 'Cross-Encoder', 'pdfplumber'],
    github: 'https://github.com/SenthilkumaranPSK/RAG-Chatbot',
    badge: 'Hybrid RAG Pipeline',
    color: 'from-purple-500/30 via-violet-500/20 to-blue-500/30',
  },
  {
    title: 'TravelGenie — AI Trip Planner',
    subtitle: 'Context-Aware Generative Travel Planner with Live Maps',
    categories: ['ai_agents', 'fullstack'],
    description: [
      'Built and deployed a trip planner generating day-wise itineraries from destination, budget, and travel style, with a context-aware Google Gemini assistant.',
      'Integrated live third-party services including real-time weather, Nominatim geocoding, and geolocation-based nearby venues via the Overpass API.',
      'Rendered interactive Leaflet maps with instant Google Maps handoff for turn-by-turn navigation.'
    ],
    tech: ['Node.js', 'Express', 'React', 'Google Gemini', 'Leaflet', 'OpenStreetMap', 'Nominatim', 'Vercel'],
    github: 'https://github.com/SenthilkumaranPSK/AI-Smart-Travel-Agent',
    badge: 'GenAI + Live Maps',
    color: 'from-amber-500/30 via-orange-500/20 to-yellow-500/30',
  },
  {
    title: 'Industrial Mind OS',
    subtitle: 'Multimodal OCR & Technical Blueprint Copilot',
    categories: ['ai_agents', 'vision_ml'],
    description: [
      'Built a copilot for plant technicians that turns engineering manuals, blueprints, and maintenance logs into queryable diagnostic guidance.',
      'Extracted valve labels, measurements, and structural metadata from P&IDs and scanned drawings using Groq llama-4-scout multimodal OCR.',
      'Ingested PDF, DOCX, PPTX, CSV, and image formats, and synchronized enterprise Confluence workspaces into a queryable index.'
    ],
    tech: ['JavaScript', 'Groq llama-4-scout', 'Multimodal OCR', 'Confluence Sync', 'Document Intelligence'],
    github: 'https://github.com/SenthilkumaranPSK/Industrial-Mind-OS',
    badge: 'Multimodal OCR',
    color: 'from-teal-500/30 via-cyan-500/20 to-blue-500/30',
  },
  {
    title: 'Match-IQ',
    subtitle: 'Live Candidate & Skill Matching Analytics Engine',
    categories: ['fullstack'],
    description: [
      'Architected a real-time talent scoring and match analytics interface with interactive filtering and dynamic metric visualizations.',
      'Optimized client-side rendering with Tailwind CSS and TanStack state handling, deployed live on Vercel.'
    ],
    tech: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/SenthilkumaranPSK/Match-IQ',
    live: 'https://match-iq-iota.vercel.app',
    badge: 'Live App',
    color: 'from-indigo-500/30 via-purple-500/20 to-pink-500/30',
  },
  {
    title: 'The Maestro Studios Website',
    subtitle: 'Production Company Website for IT & Photography Studio',
    categories: ['production', 'fullstack'],
    description: [
      'Engineered and launched an end-to-end bespoke website for a creative photography studio and IT services firm.',
      'Delivered fluid responsive UI, high-resolution media galleries, and streamlined customer booking inquiry forms.'
    ],
    tech: ['TypeScript', 'React', 'Tailwind CSS', 'Vite', 'Vercel'],
    github: 'https://github.com/SenthilkumaranPSK/Website-1',
    live: 'https://themaestrostudios.vercel.app',
    badge: 'Live Client Website',
    color: 'from-blue-500/30 via-cyan-500/20 to-teal-500/30',
  },
  {
    title: 'Student Malpractice Detection',
    subtitle: 'YOLOv8 Automated Exam Surveillance Dashboard',
    categories: ['vision_ml'],
    description: [
      'Developed an AI examination surveillance engine using a custom-trained YOLOv8 model to detect suspicious behavior in real-time video streams.',
      'Designed a Flask monitoring dashboard providing live detection visualization, bounding boxes, and event logging.'
    ],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Flask', 'Computer Vision'],
    github: 'https://github.com/SenthilkumaranPSK/Student-Malpractice-Detection',
    badge: 'YOLOv8 Real-Time',
    color: 'from-red-500/30 via-orange-500/20 to-amber-500/30',
  },
  {
    title: 'Real-Time Face & Gesture Detection',
    subtitle: 'Sub-100ms CPU Multimodal Vision Analytics',
    categories: ['vision_ml'],
    description: [
      'Engineered a computer vision application using MediaPipe landmark detection and OpenCV to analyze facial expressions and hand gestures concurrently.',
      'Optimized pipeline for sub-100ms inference on standard hardware with zero dedicated GPU overhead.'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Landmark Tracking'],
    github: 'https://github.com/SenthilkumaranPSK/Face-and-Hand-Recognition',
    badge: 'MediaPipe CV',
    color: 'from-amber-500/30 via-yellow-500/20 to-rose-500/30',
  },
  {
    title: 'Legis-Synapse',
    subtitle: 'Legal Document Intelligence & Statutory Clause Reasoning',
    categories: ['ai_agents'],
    description: [
      'Engineered an LLM-powered legal research and clause summarization copilot designed to rapidly parse statutory texts and contractual documents.'
    ],
    tech: ['Python', 'LangChain', 'FastAPI', 'Legal NLP'],
    github: 'https://github.com/SenthilkumaranPSK/Legis-Synapse',
    badge: 'Legal NLP Copilot',
    color: 'from-blue-500/30 via-indigo-500/20 to-violet-500/30',
  }
];

const additionalRepos = [
  { name: 'FinBot', lang: 'JavaScript', desc: 'Financial advisory chatbot with natural language portfolio insights', url: 'https://github.com/SenthilkumaranPSK/FinBot' },
  { name: 'Nexus-AI-Synthesizer', lang: 'JavaScript', desc: 'AI synthesis engine orchestrating multi-modal generative prompts', url: 'https://github.com/SenthilkumaranPSK/Nexus-AI-Synthesizer' },
  { name: 'Finance-Chatbot-with-MCP', lang: 'Python', desc: 'Finance Assistant integrating Google Gemini and Model Context Protocol (MCP)', url: 'https://github.com/SenthilkumaranPSK/Finance-Chatbot-with-MCP' },
  { name: 'PentAIGen', lang: 'Python', desc: 'Autonomous generative AI agent workflow framework', url: 'https://github.com/SenthilkumaranPSK/PentAIGen' },
  { name: 'FinanceBuddy-Mini', lang: 'Python', desc: 'Lightweight financial transaction parser and budget forecasting script', url: 'https://github.com/SenthilkumaranPSK/FinanceBuddy-Mini' },
  { name: 'Forecasting-Modules', lang: 'TypeScript', desc: 'Modular statistical and machine learning time-series forecasting library', url: 'https://github.com/SenthilkumaranPSK/Forecasting-Modules' },
  { name: 'USB-Display-Bridge', lang: 'Rust', desc: 'High-performance Rust bridge for USB frame buffering and display peripherals', url: 'https://github.com/SenthilkumaranPSK/USB-Display-Bridge' },
  { name: 'own_llm', lang: 'Python', desc: 'Experimental from-scratch neural network & transformer architecture training code', url: 'https://github.com/SenthilkumaranPSK/own_llm' },
  { name: 'WhatsApp-Auto-message', lang: 'HTML/JS', desc: 'Automated WhatsApp messaging protocol dispatcher and templating utility', url: 'https://github.com/SenthilkumaranPSK/WhatsApp-Auto-message' },
];

const categoriesList: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All Projects' },
  { key: 'production', label: 'Production & Client Work' },
  { key: 'ai_agents', label: 'AI & GenAI / Agents' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'fullstack', label: 'Full-Stack / Web' },
  { key: 'vision_ml', label: 'Computer Vision & ML' },
];

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 8);
    rotateX.set(-py * 8);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      layout
      variants={fadeInUp}
      whileHover={{ y: -8, transition: spring }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
        className="group relative bg-card/60 backdrop-blur-md border border-border/80 rounded-[2rem] p-6 sm:p-8 card-glow flex flex-col h-full shadow-2xl shadow-black/40 hover:border-primary/40 transition-all overflow-hidden"
      >
        {/* Top Gradient Background */}
        <div className={`absolute top-0 inset-x-0 h-36 bg-gradient-to-b ${project.color} opacity-40 pointer-events-none`} />

        {/* Card Header */}
        <div className="relative z-10 flex items-start justify-between gap-3 mb-3">
          <div>
            {project.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 mb-2">
                <Sparkles size={10} />
                {project.badge}
              </span>
            )}
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-primary/90 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description List */}
        <div className="relative z-10 flex-grow my-4">
          <ul className="text-muted-foreground text-xs sm:text-sm space-y-2 leading-relaxed list-disc pl-4 marker:text-primary/70">
            {project.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 mb-6 pt-2 border-t border-border/50">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-[11px] font-semibold bg-secondary/80 text-foreground/80 rounded-md border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex items-center gap-3 pt-2 mt-auto">
          <Button
            size="sm"
            className="flex-1 bg-secondary hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/40 text-foreground font-semibold rounded-xl text-xs gap-1.5 transition-all"
            asChild
          >
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
            >
              <Github size={15} />
              GitHub Repo
            </a>
          </Button>

          {project.live && (
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl text-xs gap-1.5 shadow-md shadow-primary/20"
              asChild
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
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

  const flagships = [projects[0], projects[1]]; // Maestro-Billing and AUREXIS AI

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-28 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-[32rem] h-[32rem] top-6 right-6" />
      <GradientBlob color="primary" className="w-96 h-96 bottom-6 left-6" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Production systems shipped for paying clients, published AI research, and high-performance engineering repositories.
          </p>
        </motion.div>

        {/* Flagship Production & Research Spotlight (Bento 2-Column) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto mb-16"
        >
          {flagships.map((flagship) => (
            <motion.div
              key={`flagship-${flagship.title}`}
              variants={fadeInUp}
              className="relative p-7 sm:p-9 rounded-[2.2rem] border border-primary/40 bg-card/70 backdrop-blur-xl card-glow shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-primary/60 transition-all"
            >
              <div className={`absolute top-0 inset-x-0 h-44 bg-gradient-to-b ${flagship.color} opacity-40 pointer-events-none`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-primary/25 text-primary border border-primary/40 shadow-sm">
                    <Sparkles size={12} />
                    {flagship.badge}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground font-semibold">Flagship System</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors mb-1.5">
                  {flagship.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-primary/95 mb-4">
                  {flagship.subtitle}
                </p>

                <ul className="text-muted-foreground text-xs sm:text-sm space-y-2.5 leading-relaxed list-disc pl-4 marker:text-primary mb-6">
                  {flagship.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 pt-4 border-t border-border/70">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                  {flagship.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[11px] font-semibold bg-secondary/90 text-foreground/90 rounded-lg border border-border/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-secondary hover:bg-primary/20 hover:text-primary border border-border hover:border-primary/40 text-foreground font-bold rounded-xl text-xs gap-1.5 py-5 transition-all"
                    asChild
                  >
                    <a href={flagship.github} target="_blank" rel="noopener noreferrer">
                      <Github size={15} />
                      GitHub Repository
                    </a>
                  </Button>

                  {flagship.live && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-xs gap-1.5 py-5 px-5 shadow-lg shadow-primary/25"
                      asChild
                    >
                      <a href={flagship.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Sub-Divider for Complete Catalog */}
        <div className="flex items-center justify-center gap-3 max-w-md mx-auto mb-10">
          <div className="h-[1px] flex-1 bg-border/80" />
          <span className="text-xs uppercase tracking-widest font-extrabold text-muted-foreground">Engineering Catalog</span>
          <div className="h-[1px] flex-1 bg-border/80" />
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 px-2 overflow-x-auto no-scrollbar">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-secondary/60 border border-border/80 backdrop-blur-md">
            {categoriesList.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat.key
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-primary shadow-lg shadow-primary/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Projects Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full GitHub Repositories Explorer Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="max-w-6xl mx-auto pt-8 border-t border-border/60"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-secondary border border-border">
                <FolderGit2 className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                  Additional Open-Source Repositories
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Explore specialized utilities, experiments, and systems on GitHub.
                </p>
              </div>
            </div>

            <Button
              className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 rounded-xl px-5 font-bold text-xs gap-2"
              asChild
            >
              <a
                href="https://github.com/SenthilkumaranPSK?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                View All Repos on GitHub
                <ArrowUpRight size={14} />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalRepos.map((repo) => (
              <motion.a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group p-4 rounded-2xl border border-border/80 bg-card/40 hover:bg-card/70 hover:border-primary/40 backdrop-blur-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                      {repo.name}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-secondary text-foreground/70 border border-border/50">
                      {repo.lang}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {repo.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity mt-3">
                  <span>Explore code</span>
                  <ArrowUpRight size={13} />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;

