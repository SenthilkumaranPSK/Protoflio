import { type MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const projects = [
  {
    title: 'AI-Powered Financial Assistant',
    description: [
      'Architected a multi-agent financial intelligence platform integrating Google Gemini, LangChain, and Model Context Protocol (MCP) to automate portfolio analysis, transaction monitoring, and personalized financial recommendations.',
      'Designed intelligent AI agents capable of contextual reasoning, investment analysis, and wealth projection through modular workflows, enabling adaptive decision-making across diverse financial scenarios.',
      'Developed a secure conversational interface using Flask and REST APIs, allowing users to interact with AI-powered financial insights through natural language while supporting scalable backend integration.'
    ],
    tech: ['Google Gemini', 'LangChain', 'MCP', 'Flask', 'REST APIs'],
    image: '/projects/financial.png',
    color: 'from-blue-500/20 to-cyan-500/20',
    github: 'https://github.com/SenthilkumaranPSK',
  },
  {
    title: 'Real-Time Face & Hand Gesture Detection',
    description: [
      'Engineered a real-time computer vision application using MediaPipe landmark detection and OpenCV to simultaneously analyze facial expressions and hand gestures with live visual feedback.',
      'Implemented multi-modal gesture recognition for eye-state detection, smile recognition, and finger-count estimation, enabling intuitive human-computer interaction through real-time visual analytics.',
      'Optimized the vision processing pipeline for sub-100ms inference latency on standard webcam hardware, delivering responsive real-time performance without dedicated GPU acceleration.'
    ],
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Landmark Detection'],
    image: '/projects/gesture.png',
    color: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/SenthilkumaranPSK',
  },
  {
    title: 'Student Malpractice Detection System',
    description: [
      'Developed an AI-powered examination monitoring system using a custom-trained YOLOv8 model to detect suspicious activities under diverse lighting and environmental conditions with robust real-time performance.',
      'Designed a Flask-based monitoring dashboard providing live detection visualization, automated alerts, and behavioral analytics to support intelligent examination surveillance.',
      'Applied custom dataset preparation, data augmentation, and model optimization techniques to improve detection accuracy, generalization, and real-time inference efficiency.'
    ],
    tech: ['Python', 'YOLOv8', 'OpenCV', 'Flask'],
    image: '/projects/malpractice.png',
    color: 'from-purple-500/20 to-pink-500/20',
    github: 'https://github.com/SenthilkumaranPSK',
  },
  {
    title: 'AI-Powered Plant Disease Detection',
    description: [
      'Architected an AI-powered plant disease diagnosis system leveraging transfer learning and convolutional neural networks (CNNs) to accurately classify plant leaf diseases from real-world agricultural images.',
      'Integrated an intelligent treatment recommendation module delivering disease-specific guidance, enabling timely and informed decision-making for agricultural disease management.',
      'Deployed the complete solution as a Flask-based web application, providing an accessible AI-assisted diagnostic platform for farmers and non-technical users.'
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'Transfer Learning', 'Flask'],
    image: '/projects/plant.png',
    color: 'from-green-500/20 to-emerald-500/20',
    github: 'https://github.com/SenthilkumaranPSK',
  },
];

type Project = (typeof projects)[number];

const ProjectCard = ({ project }: { project: Project }) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(-py * 10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div variants={fadeInUp} whileHover={{ y: -12, transition: spring }} style={{ perspective: 1200 }}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: 'preserve-3d' }}
        className="group relative bg-card border border-border rounded-[2rem] overflow-hidden card-glow flex flex-col h-full shadow-2xl shadow-black/50"
      >
        {/* Gradient accent bar */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.color} opacity-80`} />

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
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
              {project.title}
            </h3>
            <ul className="text-muted-foreground text-xs md:text-sm mb-6 space-y-2 leading-relaxed list-disc pl-4 marker:text-primary/60">
              {project.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

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
          <div className="flex items-center justify-end px-2">
            <Button
              variant="ghost"
              className="text-xs font-bold text-primary hover:bg-primary/10 rounded-full px-4 gap-2"
              asChild
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
              >
                <Github size={16} />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-[30rem] h-[30rem] top-6 right-6" />
      <GradientBlob color="primary" className="w-96 h-96 bottom-6 left-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Select<span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

