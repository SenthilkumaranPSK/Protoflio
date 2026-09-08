import { motion } from 'framer-motion';
import { Code, Brain, Wrench, Database, Cpu, Eye, ShieldCheck, Layers, Terminal } from 'lucide-react';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const skillCategories = [
  {
    icon: Brain,
    title: 'Generative AI & Agents',
    skills: ['LangChain', 'LangGraph', 'CrewAI', 'RAG Pipelines', 'Ollama Local LLMs', 'SDXL / ComfyUI', 'Gemini API', 'MCP Protocol'],
    iconColor: 'text-primary'
  },
  {
    icon: Wrench,
    title: 'Backend Systems & APIs',
    skills: ['FastAPI (Python)', 'Fastify (Node/TS)', 'PostgreSQL', 'SQLAlchemy 2.0', 'Prisma ORM', 'SQLite (WAL)', 'Amazon S3', 'REST & Auth'],
    iconColor: 'text-amber-400'
  },
  {
    icon: Layers,
    title: 'Frontend & Full-Stack',
    skills: ['React 18', 'TypeScript', 'Tailwind CSS', 'Vite', 'TanStack Query', 'Leaflet Maps', 'npm Monorepos', 'Vercel Deployment'],
    iconColor: 'text-cyan-400'
  },
  {
    icon: Cpu,
    title: 'Machine Learning & Vision',
    skills: ['PyTorch (U-Net)', 'Computer Vision (OpenCV)', 'MediaPipe Landmarks', 'YOLOv8 Real-Time', 'scikit-learn', 'pytest & Hypothesis'],
    iconColor: 'text-rose-400'
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
          className="text-center mb-12 md:mb-14"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Technical <span className="text-gradient">Proficiency</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
            Core engineering stack and tools proven across production client systems and published research.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              whileHover={{ y: -4, transition: spring }}
              className="group relative p-6 rounded-3xl border border-border/80 bg-card/50 backdrop-blur-sm card-glow overflow-hidden hover:border-primary/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-secondary/80 border border-border/60 transition-transform duration-300 group-hover:scale-105">
                    <category.icon size={20} className={category.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors tracking-tight text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-semibold bg-secondary/80 text-foreground/90 rounded-lg border border-border/60 group-hover:border-primary/30 transition-all"
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

