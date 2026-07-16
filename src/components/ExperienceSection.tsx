import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import { fadeInUp, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const experiences = [
  {
    role: 'AI Developer Intern',
    company: 'Python and Ladder (Uraikathai)',
    location: 'Remote',
    topic: 'AI-Powered Interactive Storytelling Pipeline',
    description: 'Engineered an AI-powered interactive storytelling pipeline integrating SDXL, img2img, and ControlNet to generate context-aware, visually consistent narrative assets, with iterative prompt orchestration and human-in-the-loop evaluation.',
    period: 'Jan 2026 – Present',
  },
  {
    role: 'AI & ML Intern',
    company: 'Apex Seekers Edtech Private Limited',
    location: 'Remote',
    topic: 'End-to-End Machine Learning Pipelines',
    description: 'Designed and implemented end-to-end ML pipelines using Python, Pandas, and Scikit-learn, covering data preprocessing, feature engineering, hyperparameter optimization, and comparative model evaluation for educational solutions.',
    period: 'Jul 2025 – Aug 2025',
  },
  {
    role: 'Data Scientist Intern',
    company: 'Stack Queue',
    location: 'Salem',
    topic: 'European Ski Resort Data Analysis',
    description: 'Performed exploratory data analysis and time-series modeling on European ski-resort tourism datasets, developing executive-level dashboards with Matplotlib and Seaborn to support strategic resource planning.',
    period: 'Aug 2024 – Sep 2024',
  },
];

const education = [
  {
    icon: GraduationCap,
    title: 'B.Tech — Artificial Intelligence & Data Science',
    institution: 'Dhirajlal Gandhi College of Technology',
    location: 'Salem, Tamil Nadu',
    period: 'up to Sem 7',
    score: 'CGPA: 7.4 / 10',
    note: 'Strong foundation in computer science with a specialization in Artificial Intelligence and Data Science.',
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-b from-transparent via-secondary/40 to-transparent relative overflow-hidden">
      <GradientBlob color="primary" className="w-96 h-96 top-10 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Professional experience and internships in AI & data science
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.2)}
          className="max-w-3xl mx-auto"
        >
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                variants={fadeInUp}
                className={`relative flex items-start gap-4 sm:gap-6 mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-8 md:left-1/2 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full border-2 md:border-4 border-background md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-10 sm:ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="bg-card border border-border rounded-xl p-4 md:p-6 card-glow">
                    <div className={`flex items-center gap-2 text-primary text-xs md:text-sm mb-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={12} className="md:hidden" />
                      <Calendar size={14} className="hidden md:block" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <h3 className="text-base md:text-xl font-semibold mb-1">{exp.role}</h3>
                    
                    <div className={`flex items-center gap-1.5 md:gap-2 text-muted-foreground text-xs md:text-sm mb-2 md:mb-3 flex-wrap ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={12} className="md:hidden" />
                      <Briefcase size={14} className="hidden md:block" />
                      <span>{exp.company}</span>
                      <span>•</span>
                      <MapPin size={12} className="md:hidden" />
                      <MapPin size={14} className="hidden md:block" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="text-primary/80 text-xs md:text-sm font-medium mb-2">
                      {exp.topic}
                    </div>

                    <p className="text-muted-foreground text-xs md:text-sm">
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
          className="max-w-3xl mx-auto mt-16 md:mt-20"
        >
          <div className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 justify-center">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Education</h3>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>

          <div className="space-y-4 md:space-y-5">
            {education.map((edu) => (
              <motion.div
                key={edu.title}
                variants={fadeInUp}
                className="bg-card border border-border rounded-xl p-5 md:p-7 card-glow"
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-11 h-11 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <edu.icon size={20} className="text-primary md:hidden" />
                    <edu.icon size={26} className="text-primary hidden md:block" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 text-primary text-xs md:text-sm mb-1.5">
                      <Calendar size={12} className="md:hidden" />
                      <Calendar size={14} className="hidden md:block" />
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-semibold">{edu.score}</span>
                    </div>
                    <h4 className="text-base md:text-xl font-semibold mb-1">
                      {edu.title}
                    </h4>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm mb-3 flex-wrap">
                      <Briefcase size={12} className="md:hidden" />
                      <Briefcase size={14} className="hidden md:block" />
                      <span>{edu.institution}</span>
                      <span>•</span>
                      <MapPin size={12} className="md:hidden" />
                      <MapPin size={14} className="hidden md:block" />
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-muted-foreground text-xs md:text-sm flex items-start gap-2">
                      <Award size={14} className="text-primary mt-0.5 flex-shrink-0" />
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
