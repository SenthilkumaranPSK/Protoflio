import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, User, Eye } from 'lucide-react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-16 md:py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <div className="w-8 md:w-12 h-[1px] bg-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Me</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              className="md:col-span-2"
            >
              <div className="relative">
                <div
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border card-glow"
                  aria-label="Profile image of Senthilkumaran P"
                  role="img"
                >
                  <User size={60} className="text-primary/50 sm:hidden" />
                  <User size={80} className="text-primary/50 hidden sm:block" />
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl -z-10" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="md:col-span-3"
            >
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Passionate Data Science Engineer with strong expertise in{' '}
                <span className="text-foreground font-medium">Python</span>,{' '}
                <span className="text-foreground font-medium">Machine Learning</span>, and{' '}
                <span className="text-foreground font-medium">Deep Learning</span>.
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 md:mb-6">
                Experienced in building real-time AI applications, including computer vision
                systems and AI-powered financial assistants. Skilled in data preprocessing,
                EDA, predictive modeling, and delivering actionable insights through hands-on
                projects, hackathons, and internships.
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                Currently focused on developing intelligent solutions that bridge the gap
                between complex data and meaningful business outcomes.
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
