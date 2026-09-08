import { motion } from 'framer-motion';
import { Download, Eye, GraduationCap, Award, Building2, Code2, Sparkles, Cpu, Layers, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { fadeInUp, spring, staggerContainer, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-96 h-96 top-6 right-6" />
      <GradientBlob color="primary" className="w-80 h-80 bottom-6 left-6" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="text-center mb-14 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3">
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
              About <span className="text-gradient">Senthilkumaran</span>
            </h2>
            <div className="w-6 md:w-12 h-[1px] bg-primary" />
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto px-2">
            AI &amp; Data Science graduate specializing in applied Generative AI, multi-agent frameworks, and production full-stack engineering.
          </p>
        </motion.div>

        {/* Bento Grid Architecture (Clean 2-Column Layout) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl mx-auto"
        >
          
          {/* Card 1: Main Bio & Identity (Spans 7 cols) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex flex-col justify-between group hover:border-primary/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center font-black text-lg text-gradient shadow-md">
                  SP
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    Applied AI &amp; Software Engineer
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-2 mt-0.5">
                    <span>Salem, Tamil Nadu, India</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">Available for Roles</span>
                  </p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                I am an <span className="text-foreground font-semibold">AI &amp; Data Science graduate</span> (May 2026, <span className="text-foreground font-semibold">CGPA: 7.85 / 10</span>) with hands-on experience shipping production software to paying clients, engineering multi-modal agent workflows, and publishing academic research in cognitive AI systems.
              </p>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                My core expertise spans <span className="text-foreground font-semibold">Generative AI, LangChain/LangGraph, RAG pipelines</span>, and high-performance backend &amp; full-stack architectures (<span className="text-foreground font-semibold">FastAPI, Fastify, React 18, PostgreSQL</span>).
              </p>
            </div>

            {/* Resume Action Bar inside Bio */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-border/60">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-primary/40 hover:bg-primary/10 gap-2 rounded-xl px-5 py-5 font-bold text-xs"
                  >
                    <Eye size={16} />
                    Preview Resume
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-3xl w-[92vw] h-[85vh] p-0 overflow-hidden bg-background border-border rounded-2xl shadow-2xl flex flex-col gap-0"
                >
                  <DialogHeader className="px-5 pr-12 py-3 border-b border-border flex flex-row items-center justify-between space-y-0 min-h-0 bg-secondary/20">
                    <DialogTitle className="text-xs font-bold tracking-wider text-foreground/70 uppercase">
                      Senthilkumaran P — Resume
                    </DialogTitle>
                    <Button size="sm" className="h-8 px-3.5 bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 rounded-lg text-xs font-bold" asChild>
                      <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                        <Download size={14} />
                        Download PDF
                      </a>
                    </Button>
                  </DialogHeader>
                  <div className="flex-grow h-full w-full bg-muted">
                    <iframe
                      src="/resume.pdf#toolbar=0"
                      className="w-full h-full border-none"
                      title="Resume Preview"
                    />
                  </div>
                </DialogContent>
              </Dialog>

              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-xl px-5 py-5 font-bold text-xs shadow-md shadow-primary/20"
                asChild
              >
                <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                  <Download size={16} />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Credentials & Publication (Spans 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5 justify-between">
            {/* Academic Credentials Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex-1 flex flex-col justify-between hover:border-primary/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/25">
                    B.Tech · May 2026 Grad
                  </span>
                  <span className="text-xs font-extrabold text-foreground bg-secondary/80 px-2.5 py-0.5 rounded-md border border-border/60">
                    7.85 / 10.0 CGPA
                  </span>
                </div>

                <h4 className="text-base font-bold text-foreground mb-1">
                  AI &amp; Data Science
                </h4>
                <p className="text-xs text-muted-foreground">
                  Dhirajlal Gandhi College of Technology, Salem
                </p>
              </div>
            </motion.div>

            {/* Research Publication Card */}
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-md card-glow flex-1 flex flex-col justify-between hover:border-primary/50 transition-all"
            >
              <div>
                <div className="flex items-center gap-1.5 text-primary mb-2">
                  <Award size={16} />
                  <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-md bg-primary/20 text-primary border border-primary/30">
                    1st Author Published Research
                  </span>
                </div>

                <h4 className="text-sm font-bold text-foreground leading-snug mb-1.5">
                  AUREXIS AI: Real-Time Financial Decision Support
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  Published in the <span className="text-foreground font-semibold">IJIRT</span>, Vol. 12 Issue 12 (pp. 3521-3529), May 2026.
                </p>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 text-primary font-bold text-xs gap-1.5 rounded-xl"
                asChild
              >
                <a
                  href="https://ijirt.org/article?manuscript=200876"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Read Paper</span>
                  <ExternalLink size={13} />
                </a>
              </Button>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
