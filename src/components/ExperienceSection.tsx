import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const experiences = [
  {
    role: 'Web & Software Developer',
    company: 'Freelance',
    location: 'Salem, Tamil Nadu',
    badge: 'Production Client',
    topic: 'Production GST Billing System & Enterprise Web Systems',
    description: 'Built and shipped Maestro-Billing, a GST-compliant billing system for a photography studio in active daily production for a paying client (React 18, Fastify, Prisma, SQLite WAL), featuring 80mm thermal receipts, automated WhatsApp delivery, and 18 zero-loss schema migrations. Also deployed a custom company website for an IT services client.',
    period: 'Jun 2026 – Present',
  },
  {
    role: 'AI Developer Intern',
    company: 'Python and Ladder (Uraikathai)',
    location: 'Salem, Tamil Nadu',
    badge: 'GenAI & Cloud GPUs',
    topic: 'AI-Powered Generative Image & Video Pipelines',
    description: 'Built AI-assisted image and video generation pipelines using SDXL, img2img, and ControlNet, running latent-diffusion workflows in ComfyUI on RunPod cloud GPUs. Contributed frontend interactive fiction platform development and human-in-the-loop evaluation frameworks.',
    period: 'Jan 2026 – Jun 2026',
  },
  {
    role: 'AI & ML Intern',
    company: 'Apex Seekers Edtech Pvt Ltd',
    location: 'Salem, Tamil Nadu',
    badge: 'ML Pipelines',
    topic: 'End-to-End Machine Learning & Optimization',
    description: 'Designed and implemented end-to-end ML pipelines using Python, pandas, and scikit-learn, covering data preprocessing, feature engineering, hyperparameter optimization, and comparative model evaluation for educational applications.',
    period: 'Jul 2025 – Aug 2025',
  },
  {
    role: 'Data Analyst Intern',
    company: 'Stack Queue',
    location: 'Salem, Tamil Nadu',
    badge: 'Analytics & EDA',
    topic: 'European Ski Resort Data Profiling & Modeling',
    description: 'Profiled a 376-resort European ski dataset across 18 infrastructure and pricing features, quantifying distribution skew to flag outlier variables and creating automated distribution-analysis routines with Matplotlib and Seaborn.',
    period: 'Aug 2024 – Sep 2024',
  },
];

const education = [
  {
    icon: GraduationCap,
    title: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Dhirajlal Gandhi College of Technology',
    location: 'Salem, Tamil Nadu',
    period: 'Graduated May 2026',
    score: 'CGPA: 7.85 / 10',
    note: 'Specialized in Artificial Intelligence, Machine Learning, and Data Engineering with hands-on production application delivery.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-gradient-to-b from-transparent via-secondary/30 to-transparent relative overflow-hidden">
      <GradientBlob color="primary" className="w-96 h-96 top-10 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-14 md:mb-20"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Engineering software shipped to paying clients, cloud generative pipelines, and applied machine learning systems.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.15)}
          className="max-w-4xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeInUp}
                className={`relative flex items-start gap-4 sm:gap-6 mb-10 md:mb-14 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 w-3.5 h-3.5 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background md:-translate-x-1/2 z-10 shadow-[0_0_12px_rgba(var(--primary),0.6)]" />

                {/* Content */}
                <div className={`ml-10 sm:ml-20 md:ml-0 md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-5 md:p-6 card-glow hover:border-primary/40 transition-colors">
                    
                    <div className={`flex items-center gap-2 text-primary text-xs md:text-sm font-semibold mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={13} />
                      <span>{exp.period}</span>
                      {exp.badge && (
                        <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/25 ml-1">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                    
                    <div className={`flex items-center gap-1.5 text-muted-foreground text-xs md:text-sm mb-3 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={13} />
                      <span className="font-semibold text-foreground/90">{exp.company}</span>
                      <span>•</span>
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>

                    <div className="text-primary font-semibold text-xs md:text-sm mb-2">
                      {exp.topic}
                    </div>

                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="max-w-4xl mx-auto mt-16 md:mt-24"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 justify-center">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Education</h3>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>

          <div className="space-y-4 md:space-y-5">
            {education.map((edu) => (
              <motion.div
                key={edu.title}
                variants={fadeInUp}
                className="bg-card/70 backdrop-blur-md border border-border/80 rounded-2xl p-6 md:p-8 card-glow hover:border-primary/40 transition-colors"
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0 text-primary">
                    <edu.icon size={26} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-primary text-xs md:text-sm mb-1.5 font-semibold">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="px-2 py-0.5 rounded-md bg-primary/20 text-primary font-bold border border-primary/30">{edu.score}</span>
                    </div>
                    <h4 className="text-lg md:text-2xl font-bold text-foreground mb-1">
                      {edu.title}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm mb-3 flex-wrap">
                      <Briefcase size={13} />
                      <span className="font-semibold text-foreground/90">{edu.institution}</span>
                      <span>•</span>
                      <MapPin size={13} />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-2 leading-relaxed">
                      <Award size={15} className="text-primary mt-0.5 flex-shrink-0" />
                      <span>{edu.note}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
