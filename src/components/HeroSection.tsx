import { type ReactNode, type MouseEvent as ReactMouseEvent, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, FileText, Sparkles, BookOpen, CheckCircle2, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { fadeInUp, scaleIn, springSnappy, staggerContainer, tapScale } from '@/lib/motion';
import { gsap, SplitText, prefersReducedMotion } from '@/lib/gsap';
import { useGSAP } from '@gsap/react';

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
  const heroRef = useRef<HTMLDivElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const [headlineReady, setHeadlineReady] = useState(false);

  useGSAP(
    () => {
      const h1 = h1Ref.current;
      if (!h1) return;

      if (prefersReducedMotion()) {
        gsap.set(h1, { opacity: 1 });
        setHeadlineReady(true);
        return;
      }

      let split: SplitText | undefined;

      document.fonts.ready.then(() => {
        if (!h1Ref.current) return;
        split = SplitText.create(h1Ref.current, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'hero-line',
        });

        gsap.set(h1Ref.current, { opacity: 1 });
        gsap
          .timeline()
          .from(split.lines, {
            yPercent: 110,
            stagger: 0.08,
            duration: 0.9,
            ease: 'power4.out',
          })
          .add(() => setHeadlineReady(true), '-=0.3');
      });

      return () => split?.revert();
    },
    { scope: heroRef }
  );

  const metrics = [
    { icon: CheckCircle2, label: 'Production Shipped', val: '4+ Systems' },
    { icon: BookOpen, label: 'Published Paper', val: '1st Author (IJIRT)' },
    { icon: Sparkles, label: 'B.Tech Graduate', val: '7.85 CGPA' },
    { icon: Code2, label: 'GitHub Repos', val: '20+ Projects' },
  ];

  return (
    <section ref={heroRef} id="home" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-14 md:pt-36 md:pb-20">
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-1 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Availability Status Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground/90">
              Available for Applied AI &amp; Software Engineering Roles
            </span>
          </motion.div>

          {/* Main Headline */}
          <h1
            ref={h1Ref}
            style={{ opacity: 0 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-5 tracking-tighter"
          >
            Senthil<span className="text-gradient-animated">kumaran</span>&nbsp;P
          </h1>

          <motion.div
            initial="hidden"
            animate={headlineReady ? 'visible' : 'hidden'}
            variants={staggerContainer(0.1)}
            className="w-full flex flex-col items-center"
          >
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 font-medium leading-relaxed max-w-2xl"
            >
              <span className="text-foreground font-semibold">Applied AI &amp; Software Engineer</span> specializing in{' '}
              <span className="text-foreground font-semibold">Generative AI, Multi-Agent Systems, RAG</span>, and robust{' '}
              <span className="text-foreground font-semibold">Full-Stack Architectures</span> shipped to production.
            </motion.p>

            {/* Quick Metrics Ribbon */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl mb-8"
            >
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl border border-border/80 bg-card/50 backdrop-blur-sm card-glow text-center hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1.5 text-primary mb-0.5">
                    <item.icon size={14} />
                    <span className="text-xs sm:text-sm font-bold text-foreground truncate">{item.val}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground font-medium truncate">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8"
            >
              <Magnetic>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-7 py-5 text-sm sm:text-base rounded-xl transition-shadow hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] shadow-lg shadow-primary/20"
                    asChild
                  >
                    <a href="#projects">Explore Projects</a>
                  </Button>
                </motion.div>
              </Magnetic>

              <Magnetic>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 font-bold px-7 py-5 text-sm sm:text-base rounded-xl transition-colors gap-2"
                    asChild
                  >
                    <Link to="/resume">
                      <FileText size={17} />
                      Resume
                    </Link>
                  </Button>
                </motion.div>
              </Magnetic>

              <Magnetic>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="hover:bg-secondary font-bold px-5 py-5 text-sm sm:text-base rounded-xl transition-colors"
                    asChild
                  >
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </motion.div>
              </Magnetic>
            </motion.div>

            {/* Social Channels */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-center gap-6 pt-2"
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/senthilkumaran75", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/SenthilkumaranPSK", label: "GitHub" },
                { icon: Mail, href: "mailto:senthil2005kumaran@gmail.com", label: "Email" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors font-medium"
                  aria-label={`Visit my ${social.label}`}
                >
                  <social.icon size={15} />
                  <span>{social.label}</span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/80 font-bold">Explore</span>
          <a href="#about" className="text-primary/70 hover:text-primary transition-colors">
            <ArrowDown size={15} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

