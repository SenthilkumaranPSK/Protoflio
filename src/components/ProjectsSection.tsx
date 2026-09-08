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
      'Built and shipped a GST-compliant billing system for a photography studio in a single npm-workspaces monorepo — React 18/Vite frontend with Fastify & Prisma backend, in daily production for a paying client.',
      'Implemented integer-based currency handling in paise with CGST/SGST whole-rupee reconciliation, preventing floating-point calculation errors.',
      'Delivered three output paths: PDF invoices, 80mm ESC/POS thermal receipts, and automated WhatsApp delivery with append-only audit logging across 18 zero-loss Prisma migrations.'
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
      'Published as First Author in IJIRT (Vol. 12 Issue 12, May 2026): "AUREXIS AI: A Cognitive AI-based System for Real-Time Financial Analysis and Decision Support".',
      'Implemented weighted risk scoring and scenario simulations; runs on local offline inference via Ollama (deepseek-v2), containerized with Docker.'
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
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy 2.0', 'AWS S3', 'Prophet', 'Hypothesis'],
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
      'Integrated live third-party services including real-time weather, Nominatim geocoding, and geolocation-based nearby venues via Overpass API.',
      'Rendered interactive Leaflet maps with instant Google Maps handoff for turn-by-turn navigation.'
    ],
    tech: ['Node.js', 'Express', 'React', 'Google Gemini', 'Leaflet', 'OpenStreetMap', 'Vercel'],
    github: 'https://github.com/SenthilkumaranPSK/AI-Smart-Travel-Agent',
    badge: 'GenAI + Live Maps',
    color: 'from-amber-500/30 via-orange-500/20 to-yellow-500/30',
  }
];

const categoriesList: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'production', label: 'Production & Client' },
  { key: 'ai_agents', label: 'AI & GenAI' },
  { key: 'backend', label: 'Backend & APIs' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'vision_ml', label: 'Vision & ML' },
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
      whileHover={{ y: -6, transition: spring }}
      style={{ perspective: 1200 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
        className="group relative bg-card/60 backdrop-blur-md border border-border/80 rounded-3xl p-6 sm:p-7 card-glow flex flex-col h-full shadow-xl shadow-black/30 hover:border-primary/40 transition-all overflow-hidden"
      >
        {/* Top Gradient Background */}
        <div className={`absolute top-0 inset-x-0 h-32 bg-gradient-to-b ${project.color} opacity-30 pointer-events-none`} />

        {/* Card Header */}
        <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
          <div>
            {project.badge && (
              <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30 mb-2">
                <Sparkles size={10} />
                {project.badge}
              </span>
            )}
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-primary/90 font-medium mt-0.5">
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Description List */}
        <div className="relative z-10 flex-grow my-3">
          <ul className="text-muted-foreground text-xs space-y-2 leading-relaxed list-disc pl-4 marker:text-primary/70">
            {project.description.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="relative z-10 flex flex-wrap gap-1.5 mb-5 pt-2 border-t border-border/50">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-semibold bg-secondary/80 text-foreground/80 rounded-md border border-border/60"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="relative z-10 flex items-center gap-2.5 pt-1 mt-auto">
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
              <Github size={14} />
              GitHub
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
                <ExternalLink size={13} />
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
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Curated production systems shipped for paying clients, published AI research, and high-performance applications.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 px-2 overflow-x-auto no-scrollbar">
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-secondary/60 border border-border/80 backdrop-blur-md">
            {categoriesList.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat.key
                    ? 'text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 rounded-xl bg-primary shadow-md shadow-primary/25"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
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
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimalist GitHub Callout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="max-w-2xl mx-auto text-center p-6 rounded-3xl border border-border/80 bg-card/40 backdrop-blur-sm card-glow flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-foreground">
              Looking for more projects?
            </h4>
            <p className="text-xs text-muted-foreground mt-0.5">
              Explore 20+ open-source repositories and tools on GitHub.
            </p>
          </div>

          <Button
            className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 rounded-xl px-5 font-bold text-xs gap-1.5 whitespace-nowrap"
            asChild
          >
            <a
              href="https://github.com/SenthilkumaranPSK?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={15} />
              View All on GitHub
              <ArrowUpRight size={13} />
            </a>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default ProjectsSection;

