import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Medal, Star } from 'lucide-react';

const certifications = [
  {
    icon: Star,
    title: 'Google Agentic AI Day 2025 Hackathon',
    issuer: 'Shortlisted Participant',
    type: 'achievement',
  },
  {
    icon: Award,
    title: 'Machine Learning Specialization',
    issuer: 'LIVEWIRE',
    type: 'certification',
  },
  {
    icon: Medal,
    title: 'Data Science Foundation',
    issuer: 'Great Learning',
    type: 'certification',
  },
  {
    icon: Trophy,
    title: '2nd Place - Forest Fire Prevention Hackathon',
    issuer: 'District Level Competition, Salem',
    type: 'achievement',
  },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">Certifications & Achievements</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Recognition and continuous learning in the field of data science
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-2xl mx-auto space-y-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="flex items-start sm:items-center gap-3 md:gap-4 bg-card border border-border rounded-xl p-4 md:p-5 card-glow"
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                cert.type === 'achievement' 
                  ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20' 
                  : 'bg-primary/10'
              }`}>
                <cert.icon 
                  size={18} 
                  className={`md:hidden ${cert.type === 'achievement' ? 'text-yellow-500' : 'text-primary'}`} 
                />
                <cert.icon 
                  size={24} 
                  className={`hidden md:block ${cert.type === 'achievement' ? 'text-yellow-500' : 'text-primary'}`} 
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm md:text-base leading-tight">{cert.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-medium whitespace-nowrap flex-shrink-0 ${
                cert.type === 'achievement' 
                  ? 'bg-yellow-500/10 text-yellow-500' 
                  : 'bg-primary/10 text-primary'
              }`}>
                {cert.type === 'achievement' ? 'Achievement' : 'Certified'}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
