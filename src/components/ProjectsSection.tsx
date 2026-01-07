import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Sparkles, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'AI-Powered Financial Assistant',
    description: 'Autonomous agent leveraging LLMs for real-time market analysis and portfolio optimization.',
    tech: ['Gemini LLM', 'Python', 'Streamlit'],
    image: '/projects/financial.png',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Malpractice Detection System',
    description: 'High-precision computer vision model for identifying suspicious behavior in proctored environments.',
    tech: ['OpenCV', 'MediaPipe', 'PyTorch'],
    image: '/projects/malpractice.png',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Gesture Recognition Engine',
    description: 'Deep learning based human-computer interaction system for touchless interface control.',
    tech: ['TensorFlow', 'OpenCV', 'Python'],
    image: '/projects/gesture.png',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Plant Disease Diagnostic AI',
    description: 'Neural network architecture for real-time leaf pathology classification and treatment advice.',
    tech: ['CNN', 'Transfer Learning', 'Python'],
    image: '/projects/plant.png',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'NLP Sentiment Analytics',
    description: 'Enterprise-grade NLP pipeline for large-scale social sentiment tracking and visualization.',
    tech: ['Scikit-Learn', 'Flask', 'NLTK'],
    image: '/projects/sentiment.png',
    color: 'from-indigo-500/20 to-violet-500/20',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Select<span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card border border-border rounded-[2rem] overflow-hidden card-glow flex flex-col h-full shadow-2xl shadow-black/50"
            >
              {/* Project Image Container */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60" />

                {/* Float Badge */}
                <div className="absolute top-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 pt-0 -mt-12 relative z-10 flex flex-col flex-grow">
                <div className="bg-card/80 backdrop-blur-xl border border-border/50 p-6 rounded-3xl mb-4 group-hover:border-primary/30 transition-colors shadow-xl flex-grow">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-[10px] uppercase tracking-wider font-extrabold bg-secondary/50 text-foreground/60 rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between px-2">
                  <div className="flex gap-4">
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                  <Button variant="ghost" className="text-xs font-bold text-primary hover:bg-primary/10 rounded-full px-4">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

