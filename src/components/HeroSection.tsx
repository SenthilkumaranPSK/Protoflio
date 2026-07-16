import { type ReactNode, type MouseEvent as ReactMouseEvent } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';
import { fadeInBlur, fadeInUp, scaleIn, springSnappy, staggerContainer, tapScale } from '@/lib/motion';

/** Subtly pulls toward the cursor within its bounds, springs back on leave. */
const Magnetic = ({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.4 });

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x: springX, y: springY }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0">
      {/* Dynamic AI Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-1" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer(0.14, 0.1)}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-primary font-bold mb-4 text-xs md:text-sm uppercase tracking-[0.3em]"
          >
            Generative AI Application Developer
          </motion.p>

          <motion.h1
            variants={fadeInBlur}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-8 tracking-tighter text-center"
          >
            Senthil<span className="text-gradient-animated">kumaran</span>&nbsp;P
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-medium leading-tight"
          >
            AI & Data Science graduate building AI-powered applications with
            <span className="text-foreground"> Generative AI, LLMs, and Computer Vision</span>.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Magnetic>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={tapScale} transition={springSnappy}>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base sm:px-12 sm:py-8 sm:text-xl rounded-2xl transition-shadow hover:shadow-[0_0_40px_rgba(var(--primary),0.4)] shadow-xl shadow-primary/20 w-full sm:w-auto"
                  asChild
                >
                  <a href="#projects">Recent Work</a>
                </Button>
              </motion.div>
            </Magnetic>
            <Magnetic>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={tapScale} transition={springSnappy}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 hover:bg-primary/5 font-bold px-8 py-6 text-base sm:px-12 sm:py-8 sm:text-xl rounded-2xl transition-colors w-full sm:w-auto"
                  asChild
                >
                  <a href="#contact">Contact</a>
                </Button>
              </motion.div>
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-8"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/senthilkumaran75", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/SenthilkumaranPSK", label: "GitHub" },
              { icon: Mail, href: "mailto:senthil2005kumaran@gmail.com", label: "Email" },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -8, scale: 1.1 }}
                whileTap={tapScale}
                transition={springSnappy}
                aria-label={`Visit my ${social.label}`}
              >
                <div className="p-3 rounded-full bg-secondary group-hover:bg-primary/10 border border-border group-hover:border-primary/30 transition-all">
                  <social.icon size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-tighter font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
          <a href="#about" className="text-primary/70 hover:text-primary transition-colors">
            <ArrowDown size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

