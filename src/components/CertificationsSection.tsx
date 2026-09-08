import { motion } from 'framer-motion';
import { Award, Trophy, Medal, Star, FileCheck2, BookOpen, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { EASE_BUTTER, fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';
import { Button } from './ui/button';

const achievementsAndCerts = [
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
    icon: Medal,
    title: 'Agentic Website Track',
    issuer: 'Bengaluru AI Hack Day — Participated',
    type: 'achievement',
    highlight: 'Hackathon Finalist',
  },
  {
    icon: Award,
    title: 'National Hackathon on Human-Wildlife Coexistence',
    issuer: 'Ministry of Environment, Govt. of India & WII Dehradun',
    type: 'achievement',
    highlight: 'National Hackathon',
  },
  {
    icon: FileCheck2,
    title: 'NPTEL Design Thinking: A Primer',
    issuer: 'IIT Madras (Elite Score, 2026)',
    type: 'certification',
    highlight: 'IIT Madras Elite',
  },
  {
    icon: FileCheck2,
    title: 'Google Cloud Skill Badge: Multimodal Gemini RAG',
    issuer: 'Google Cloud — Inspect Rich Documents with Gemini',
    type: 'certification',
    highlight: 'Google Cloud',
  },
  {
    icon: FileCheck2,
    title: 'Machine Learning Specialization',
    issuer: 'LIVEWIRE (Sep 2024 – Mar 2025)',
    type: 'certification',
    highlight: 'Specialization',
  },
  {
    icon: FileCheck2,
    title: 'Master in Data Analysis and Analytics',
    issuer: 'Udemy — Comprehensive Data Science Certification',
    type: 'certification',
    highlight: 'Analytics Mastery',
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
          className="text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center">
              Publications &amp; <span className="text-gradient">Recognition</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            First-author academic research, hackathon accolades, and industry-certified technical skills.
          </p>
        </motion.div>

        {/* Featured Research Publication Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="relative p-6 sm:p-8 rounded-3xl border border-primary/40 bg-card/60 backdrop-blur-md card-glow shadow-2xl overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0 text-primary">
                  <BookOpen size={28} />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                      <Sparkles size={11} />
                      First Author Publication (1 of 7)
                    </span>
                    <span className="text-xs text-muted-foreground font-semibold">
                      IJIRT · Vol. 12, Issue 12 · May 2026
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    AUREXIS AI: A Cognitive AI-based System for Real-Time Financial Analysis and Decision Support
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                    Coordinated autonomous multi-agent architecture for financial data ingestion, weighted risk scoring, and time-series simulations published in the International Journal of Innovative Research in Technology (pp. 3521–3529).
                  </p>
                </div>
              </div>

              <div className="flex-shrink-0 w-full md:w-auto">
                <Button
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl text-xs gap-2 px-5 py-5 shadow-lg shadow-primary/20"
                  asChild
                >
                  <a
                    href="https://ijirt.org/article?manuscript=200876"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Read Paper</span>
                    <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Hackathons & Certifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {achievementsAndCerts.map((cert) => (
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
