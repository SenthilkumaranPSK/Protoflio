import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    role: 'Data Scientist Intern',
    company: 'Stack Queue',
    location: 'Salem',
    topic: 'European Ski Resort Data Analysis',
    description: 'Analyzed trends and patterns in European tourism data to provide actionable insights for optimizing ski resort operations and visitor experiences.',
    period: '2024',
  },
  {
    role: 'Data Analytics Using Python',
    company: 'Mikrosun Technology',
    location: 'Salem',
    topic: 'COVID-19 Data Analysis Using EDA',
    description: 'Conducted EDA on state-wise COVID-19 data using Python, leveraging Pandas, Matplotlib, and Seaborn for insights on case trends and recovery rates.',
    period: '2023',
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-16 md:py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Professional experience and internships in data science
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
