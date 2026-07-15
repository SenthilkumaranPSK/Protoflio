import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Wrench, Database, Cpu, Eye } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'Generative AI',
    skills: ['LLMs', 'RAG', 'AI Agents', 'LangChain', 'LangGraph', 'CrewAI', 'MCP'],
    className: 'bg-primary/5 border-primary/20',
    iconColor: 'text-primary'
  },
  {
    icon: Code,
    title: 'Programming',
    skills: ['Python', 'SQL'],
    className: '',
    iconColor: 'text-blue-400'
  },
  {
    icon: Cpu,
    title: 'Machine Learning',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'CNNs', 'Transfer Learning'],
    className: '',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    skills: ['YOLOv8', 'OpenCV', 'MediaPipe', 'SDXL', 'ControlNet'],
    className: '',
    iconColor: 'text-rose-400'
  },
  {
    icon: Wrench,
    title: 'Backend',
    skills: ['FastAPI', 'Flask', 'REST APIs'],
    className: '',
    iconColor: 'text-amber-400'
  },
  {
    icon: Database,
    title: 'Data Science',
    skills: ['EDA', 'Feature Engineering', 'Statistical Analysis', 'Matplotlib', 'Seaborn'],
    className: '',
    iconColor: 'text-accent'
  },
  {
    icon: Database,
    title: 'Databases & Tools',
    skills: ['MySQL', 'ChromaDB', 'Git', 'GitHub', 'Microsoft Excel', 'CLI'],
    className: '',
    iconColor: 'text-cyan-400'
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Skill<span className="text-gradient">set</span>
          </h2>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative mb-5 break-inside-avoid p-5 rounded-2xl border border-border bg-card/50 backdrop-blur-sm card-glow overflow-hidden ${category.className}`}
            >
              <div className="relative z-10 flex flex-col">
                <div className="p-3 rounded-xl bg-secondary w-fit mb-4 transition-transform duration-300">
                  <category.icon size={24} className={category.iconColor} />
                </div>

                <h3 className="text-lg font-bold group-hover:text-primary transition-colors tracking-tight mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-bold bg-secondary/80 text-foreground/80 rounded-lg border border-border/50 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

