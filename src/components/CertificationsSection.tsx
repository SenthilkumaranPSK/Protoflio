import { motion } from 'framer-motion';
import { Trophy, Medal, Star, FileCheck2 } from 'lucide-react';
import { EASE_BUTTER, fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const topAccolades = [
  {
    icon: Star,
    title: 'Google Agentic AI Day 2025 Hackathon',
    issuer: 'Google — Shortlisted on National Level',
    type: 'achievement',
    highlight: 'National Shortlist',
  },
  {
    icon: Trophy,
    title: '2nd Place — Forest Fire Prevention Hackathon',
    issuer: 'Tamil Nadu State Planning Commission (Salem District)',
    type: 'achievement',
    highlight: '2nd Prize Winner',
  },
  {
    icon: Medal,
    title: 'AI for Bharat — Amazon Bedrock GenAI Recognition',
    issuer: 'AWS × Hack2Skill — Certificate of Recognition',
    type: 'achievement',
    highlight: 'GenAI Summarizer',
  },
  {
    icon: FileCheck2,
    title: 'NPTEL Design Thinking: A Primer',
    issuer: 'IIT Madras (Elite Score, 2026)',
    type: 'certification',
    highlight: 'IIT Madras Elite',
  },
];

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: EASE_BUTTER } },
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-96 h-96 bottom-6 left-6" />
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center">
              Honors &amp; <span className="text-gradient">Accolades</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            Hackathon achievements and certified technical milestones.
          </p>
        </motion.div>

        {/* Hackathons & Certifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {topAccolades.map((cert) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              whileHover={{ y: -3, transition: spring }}
              className="flex items-center gap-3.5 sm:gap-4 bg-card/60 backdrop-blur-sm border border-border/80 rounded-2xl p-4 sm:p-5 card-glow hover:border-primary/40 transition-all"
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${
                cert.type === 'achievement'
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/25'
                  : 'bg-primary/15 text-primary border border-primary/25'
              }`}>
                <cert.icon size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-foreground leading-tight">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5 truncate">{cert.issuer}</p>
              </div>

              <div className={`px-2.5 py-1 rounded-lg text-[10px] font-bold whitespace-nowrap flex-shrink-0 ${
                cert.type === 'achievement'
                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  : 'bg-primary/10 text-primary border border-primary/20'
              }`}>
                {cert.highlight}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
