import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, FileCheck2 } from 'lucide-react';
import { EASE_BUTTER, fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const certifications = [
  {
    icon: Star,
    title: 'Google Agentic AI Day 2025 Hackathon',
    issuer: 'Google — Shortlisted on National Level',
    type: 'achievement',
  },
  {
    icon: Trophy,
    title: '2nd Place — Forest Fire Prevention Hackathon',
    issuer: 'Salem District-Level Competition',
    type: 'achievement',
  },
  {
    icon: Medal,
    title: 'Agentic Website Track',
    issuer: 'Bengaluru AI Hack Day — Participated',
    type: 'achievement',
  },
  {
    icon: Award,
    title: 'National Hackathon on Human-Wildlife Coexistence',
    issuer: 'Ministry of Environment, Govt. of India & Wildlife Institute of India, Dehradun — Participated',
    type: 'achievement',
  },
  {
    icon: FileCheck2,
    title: 'Machine Learning Specialization',
    issuer: 'LIVEWIRE',
    type: 'certification',
  },
  {
    icon: FileCheck2,
    title: 'Master in Data Analysis and Analytics',
    issuer: 'Udemy',
    type: 'certification',
  },
  {
    icon: FileCheck2,
    title: 'GenAI Content Summarizer using Amazon Bedrock',
    issuer: 'AI for Bharat — AWS × Hack2Skill',
    type: 'certification',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE_BUTTER } },
};

const CertificationsSection = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-96 h-96 bottom-6 left-6" />
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
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-center">Certifications & Achievements</h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Recognition, awards, and continuous learning in data science &amp; AI
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.1)}
          className="max-w-2xl mx-auto space-y-4"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ x: 4, transition: spring }}
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
