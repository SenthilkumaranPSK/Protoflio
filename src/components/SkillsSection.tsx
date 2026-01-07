import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Brain, Database, Wrench, Sparkles, Cpu, Globe, Zap } from 'lucide-react';

const skillCategories = [
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    skills: ['GenAI', 'Neural Networks', 'Predictive Modeling', 'AI Agents'],
    className: 'md:col-span-2 md:row-span-2 bg-primary/5 border-primary/20',
    iconColor: 'text-primary'
  },
  {
    icon: Code,
    title: 'Development',
    skills: ['Python', 'SQL', 'FastAPI', 'Architecture'],
    className: 'md:col-span-1 md:row-span-1',
    iconColor: 'text-blue-400'
  },
  {
    icon: Database,
    title: 'Data Science',
    skills: ['EDA', 'Preprocessing', 'Data Pipelines'],
    className: 'md:col-span-1 md:row-span-2 bg-accent/5 border-accent/20',
    iconColor: 'text-accent'
  },
  {
    icon: Wrench,
    title: 'Frameworks',
    skills: ['PyTorch', 'TensorFlow', 'OpenCV'],
    className: 'md:col-span-1 md:row-span-1',
    iconColor: 'text-emerald-400'
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-sm card-glow overflow-hidden ${category.className}`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <div className={`p-4 rounded-2xl bg-secondary w-fit mb-6 transition-transform duration-300`}>
                  <category.icon size={32} className={category.iconColor} />
                </div>

                <h3 className="text-2xl font-bold mb-6 group-hover:text-primary transition-colors tracking-tight">
                  {category.title}
                </h3>

                <div className="mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-xs font-bold bg-secondary/80 text-foreground/80 rounded-xl border border-border/50 transition-all"
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

