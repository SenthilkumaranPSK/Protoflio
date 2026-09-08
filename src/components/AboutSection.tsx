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

        {/* Bento Grid Architecture */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 max-w-6xl mx-auto"
        >
          
          {/* Card 1: Main Bio & Identity (Spans 2 columns) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 p-6 sm:p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex flex-col justify-between relative overflow-hidden group hover:border-primary/40 transition-all"
          >
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center font-black text-xl text-gradient shadow-md">
                  SP
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    Applied AI &amp; Software Engineer
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2 mt-0.5">
                    <span>Salem, Tamil Nadu, India</span>
                    <span>•</span>
                    <span className="text-primary font-semibold">Available for Roles</span>
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                I am an <span className="text-foreground font-semibold">AI &amp; Data Science graduate</span> (May 2026, <span className="text-foreground font-semibold">CGPA: 7.85 / 10</span>) with proven experience shipping production software to paying clients, designing multi-modal agent workflows, and publishing academic research in cognitive AI architectures.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                My work spans the full engineering lifecycle: from fine-tuning generative diffusion pipelines (SDXL, ControlNet) and building hybrid RAG systems, to delivering fault-tolerant GST billing engines with automated WhatsApp delivery, thermal receipt printing, and integer paise reconciliation.
              </p>
            </div>

            {/* Resume Action Bar inside Bio */}
            <div className="relative z-10 flex flex-wrap gap-3 pt-4 border-t border-border/60">
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
                      Senthilkumaran P — Applied AI Resume
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
                  Download Applied AI Resume
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Card 2: Academic Credentials */}
          <motion.div
            variants={fadeInUp}
            className="p-6 sm:p-7 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex flex-col justify-between hover:border-primary/40 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary mb-4">
                <GraduationCap size={24} />
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/25 inline-block mb-2">
                B.Tech Graduate · May 2026
              </span>

              <h4 className="text-lg font-bold text-foreground mb-1">
                AI &amp; Data Science
              </h4>
              <p className="text-xs text-muted-foreground font-medium mb-3">
                Dhirajlal Gandhi College of Technology, Salem
              </p>

              <div className="p-3 rounded-xl bg-secondary/80 border border-border/60 mb-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Cumulative GPA</span>
                  <span className="font-extrabold text-foreground text-sm">7.85 / 10.0</span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed">
                Specialized in Deep Learning, Multi-Agent Architectures, Computer Vision, and Cloud Machine Learning.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Research Publication Spotlight */}
          <motion.div
            variants={fadeInUp}
            className="p-6 sm:p-7 rounded-3xl border border-primary/30 bg-card/60 backdrop-blur-md card-glow flex flex-col justify-between hover:border-primary/50 transition-all"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary mb-4">
                <Award size={24} />
              </div>

              <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary/20 text-primary border border-primary/30 inline-block mb-2">
                1st Author Published Research
              </span>

              <h4 className="text-base font-bold text-foreground leading-snug mb-2">
                AUREXIS AI: Real-Time Financial Analysis &amp; Decision Support
              </h4>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Published in the <span className="text-foreground font-semibold">International Journal of Innovative Research in Technology (IJIRT)</span>, Vol. 12, Issue 12 (pp. 3521-3529), May 2026.
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
                <span>Read Published Paper</span>
                <ExternalLink size={13} />
              </a>
            </Button>
          </motion.div>

          {/* Card 4: Core Engineering Pillars (Spans 2 columns) */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 p-6 sm:p-7 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-md card-glow flex flex-col justify-between hover:border-primary/40 transition-all"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <Sparkles className="text-primary" size={18} />
                <h4 className="text-base font-bold text-foreground">
                  Core Engineering Competencies &amp; Focus Areas
                </h4>
              </div>

              <p className="text-xs text-muted-foreground mb-4">
                Key architectural capabilities developed across real-world client systems and research pipelines:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-secondary/60 border border-border/60 flex items-start gap-3">
                  <Cpu className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs font-bold text-foreground">Generative AI &amp; Agent Workflows</p>
                    <p className="text-[11px] text-muted-foreground">LangChain, LangGraph, CrewAI, SDXL, ComfyUI, Ollama local inference.</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-secondary/60 border border-border/60 flex items-start gap-3">
                  <Building2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs font-bold text-foreground">Production Client Systems</p>
                    <p className="text-[11px] text-muted-foreground">GST billing engines, thermal printing, WhatsApp automation, zero-loss migrations.</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-secondary/60 border border-border/60 flex items-start gap-3">
                  <Layers className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs font-bold text-foreground">High-Throughput Backend APIs</p>
                    <p className="text-[11px] text-muted-foreground">FastAPI, Fastify, PostgreSQL, Prisma, S3 artifact registries, Hypothesis testing.</p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-secondary/60 border border-border/60 flex items-start gap-3">
                  <Code2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-xs font-bold text-foreground">Computer Vision &amp; Deep Learning</p>
                    <p className="text-[11px] text-muted-foreground">PyTorch U-Net, OpenCV, MediaPipe landmarks, YOLOv8 surveillance engines.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
