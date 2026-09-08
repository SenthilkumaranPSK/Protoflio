import { motion } from 'framer-motion';
import { Download, Eye, GraduationCap, Award, Building2 } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { fadeInRight, fadeInUp, scaleIn, viewport } from '@/lib/motion';
import GradientBlob from './GradientBlob';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      <GradientBlob color="secondary" className="w-96 h-96 top-6 right-6" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Profile Image / Initials Shield */}
            <motion.div
              variants={scaleIn}
              className="md:col-span-2"
            >
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-primary/25"
                />
                <div
                  className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/15 flex flex-col items-center justify-center border border-border card-glow overflow-hidden"
                  aria-label="Senthilkumaran P"
                  role="img"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.25),transparent_60%)]" />
                  <span className="relative text-gradient text-6xl sm:text-7xl md:text-8xl font-black tracking-tight">
                    SP
                  </span>
                  <span className="relative text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground font-bold mt-1">
                    Salem, India
                  </span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-[2.5rem] blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={fadeInRight}
              className="md:col-span-3"
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-5">
                I'm an <span className="text-foreground font-semibold">AI & Data Science graduate</span> (May 2026, <span className="text-foreground font-semibold">CGPA: 7.85 / 10</span>) from Dhirajlal Gandhi College of Technology, Salem, with hands-on production experience engineering{' '}
                <span className="text-foreground font-semibold">Generative AI systems, Multi-Agent frameworks, and Full-Stack / Backend architectures</span>.
              </p>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-5">
                I build software that runs in active production for paying clients — such as <span className="text-foreground font-semibold">Maestro-Billing</span> (a GST-compliant photography studio system with thermal receipts and automated WhatsApp dispatch) — alongside authoring first-author published research in <span className="text-foreground font-semibold">IJIRT</span> on cognitive AI financial architectures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-secondary/50 border border-border/80 flex items-center gap-3">
                  <GraduationCap className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold text-foreground">B.Tech in AI &amp; Data Science</p>
                    <p className="text-[11px] text-muted-foreground">DGCT · Graduated May 2026 (7.85 CGPA)</p>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-secondary/50 border border-border/80 flex items-center gap-3">
                  <Award className="text-primary flex-shrink-0" size={20} />
                  <div>
                    <p className="text-xs font-bold text-foreground">Published Research Author</p>
                    <p className="text-[11px] text-muted-foreground">1st Author of 7 in IJIRT (May 2026)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 items-center">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-primary/40 hover:bg-primary/10 gap-2 rounded-xl px-6 py-5 font-semibold text-sm"
                    >
                      <Eye size={18} />
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
                  className="bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 gap-2 rounded-xl px-6 py-5 font-semibold text-sm"
                  asChild
                >
                  <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                    <Download size={16} />
                    Download PDF
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
