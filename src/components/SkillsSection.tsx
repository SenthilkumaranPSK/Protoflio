import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Database, Cpu, Eye, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const skillCategories = [
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    skills: ['LLMs', 'RAG Pipelines', 'AI Agents', 'LangChain', 'LangGraph', 'CrewAI', 'MCP', 'SDXL', 'ComfyUI', 'Ollama', 'Gemini API'],
    className: 'bg-primary/10 border-primary/30 sm:col-span-2 lg:col-span-2',
    iconColor: 'text-primary'
  },
  {
    icon: Wrench,
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Fastify (Node/TS)', 'Express', 'Pydantic v2', 'REST APIs', 'Rate Limiting', 'API Key Auth', 'Uvicorn'],
    className: '',
    iconColor: 'text-amber-400'
  },
  {
    icon: Layers,
    title: 'Frontend & Full-Stack',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query / Start', 'Leaflet Maps', 'npm Monorepos'],
    className: '',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Database,
    title: 'Databases & Storage',
    skills: ['PostgreSQL', 'SQLAlchemy 2.0', 'Prisma ORM', 'SQLite (WAL)', 'Amazon S3', 'ChromaDB (Vector)'],
    className: '',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Cpu,
    title: 'Machine Learning & Vision',
    skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'MediaPipe', 'YOLOv8', 'Prophet', 'U-Net'],
    className: '',
    iconColor: 'text-rose-400'
  },
  {
    icon: ShieldCheck,
    title: 'Testing & Infrastructure',
    skills: ['pytest', 'Hypothesis (Property-Based)', 'moto (AWS Mocking)', 'Docker', 'GitHub Actions CI', 'Linux', 'Vercel'],
    className: 'sm:col-span-2 lg:col-span-1',
    iconColor: 'text-blue-400'
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative overflow-hidden">
      <GradientBlob color="primary" className="w-96 h-96 top-6 left-6" />
      <GradientBlob color="secondary" className="w-[28rem] h-[28rem] bottom-6 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Tools, frameworks, and engineering methodologies proven across production deployments and published research.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -5, transition: spring }}
              className={`group relative p-6 rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm card-glow overflow-hidden ${category.className} hover:border-primary/40 transition-all`}
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary/80 border border-border/60 transition-transform duration-300 group-hover:scale-110">
                    <category.icon size={22} className={category.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold bg-secondary/70 text-foreground/90 rounded-lg border border-border/60 group-hover:border-primary/30 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;

