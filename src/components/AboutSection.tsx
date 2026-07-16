import { motion } from 'framer-motion';
import { Download, Eye } from 'lucide-react';
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
            {/* Profile Image */}
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
                  className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-primary/15 to-accent/15 flex items-center justify-center border border-border card-glow overflow-hidden"
                  aria-label="Senthilkumaran P"
                  role="img"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_60%)]" />
                  <span className="relative text-gradient text-6xl sm:text-7xl md:text-8xl font-black tracking-tight">
                    SP
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
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                I'm an <span className="text-foreground font-medium">AI & Data Science graduate</span> from Dhirajlal Gandhi College of Technology, Salem, with hands-on experience designing and developing AI-powered applications using{' '}
                <span className="text-foreground font-medium">Generative AI</span>,{' '}
                <span className="text-foreground font-medium">LLMs</span>,{' '}
                <span className="text-foreground font-medium">Machine Learning</span>, and{' '}
                <span className="text-foreground font-medium">Computer Vision</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                I've built end-to-end AI solutions including multi-agent systems, RAG pipelines, and REST APIs using Python, LangChain, LangGraph, CrewAI, Google Gemini, TensorFlow, and FastAPI — delivered through internships, hackathons, and research initiatives.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                Passionate about building scalable AI applications that solve real-world business challenges and continuously exploring emerging AI technologies.
              </p>

              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 gap-2 rounded-xl px-6"
                  >
                    <Eye size={18} />
                    View Resume
                  </Button>
                </DialogTrigger>
                <DialogContent
                  className="max-w-2xl w-[90vw] h-[80vh] p-0 overflow-hidden bg-background border-border rounded-2xl shadow-2xl flex flex-col gap-0"
                  onOpenAutoFocus={(e) => {
                    // Ensures focus is ready for ESC key
                  }}
                >
                  <DialogHeader className="px-4 pr-12 py-2 border-b border-border flex flex-row items-center justify-between space-y-0 min-h-0 bg-secondary/10">
                    <DialogTitle className="text-[10px] font-black tracking-[0.2em] text-foreground/40 uppercase">Resume Preview</DialogTitle>
                    <Button size="sm" className="h-7 px-3 bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 rounded-lg text-[10px] font-bold" asChild>
                      <a href="/resume.pdf" download="Senthilkumaran_Resume.pdf">
                        <Download size={12} />
                        PDF
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
