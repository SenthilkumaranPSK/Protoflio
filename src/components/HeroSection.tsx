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
            duration: 1,
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
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-1" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Availability Status Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-foreground/90">
              Available for Applied AI & Software Engineering Roles
            </span>
          </motion.div>

          <h1
            ref={h1Ref}
            style={{ opacity: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tighter text-center"
          >
            Senthil<span className="text-gradient-animated">kumaran</span>&nbsp;P
          </h1>

          <motion.div
            initial="hidden"
            animate={headlineReady ? 'visible' : 'hidden'}
            variants={staggerContainer(0.12)}
          >
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 font-medium leading-relaxed"
            >
              <span className="text-foreground font-semibold">Applied AI & Software Engineer</span> specializing in{' '}
              <span className="text-foreground font-semibold">Generative AI, Multi-Agent Systems, RAG</span>, and robust{' '}
              <span className="text-foreground font-semibold">Full-Stack / Backend Architectures</span> shipped to production.
            </motion.p>

            {/* Quick Metrics Ticker */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto mb-10"
            >
              {metrics.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 sm:p-4 rounded-2xl border border-border/80 bg-card/40 backdrop-blur-sm card-glow text-center hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1.5 text-primary mb-1">
                    <item.icon size={15} />
                    <span className="text-sm sm:text-base font-bold text-foreground">{item.val}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center mb-12"
            >
              <Magnetic>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-base sm:text-lg rounded-2xl transition-shadow hover:shadow-[0_0_35px_rgba(var(--primary),0.35)] shadow-xl shadow-primary/20 w-full sm:w-auto"
                    asChild
                  >
                    <a href="#projects">Explore Projects</a>
                  </Button>
                </motion.div>
              </Magnetic>

              <Magnetic>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/30 hover:bg-primary/10 font-bold px-8 py-6 text-base sm:text-lg rounded-2xl transition-colors gap-2 w-full sm:w-auto"
                    asChild
                  >
                    <Link to="/resume">
                      <FileText size={18} />
                      View Resume
                    </Link>
                  </Button>
                </motion.div>
              </Magnetic>

              <Magnetic>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={tapScale} transition={springSnappy}>
                  <Button
                    size="lg"
                    variant="ghost"
                    className="hover:bg-secondary font-bold px-6 py-6 text-base sm:text-lg rounded-2xl transition-colors w-full sm:w-auto"
                    asChild
                  >
                    <a href="#contact">Get In Touch</a>
                  </Button>
                </motion.div>
              </Magnetic>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center gap-6 sm:gap-8"
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
                  className="group flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ y: -6, scale: 1.08 }}
                  whileTap={tapScale}
                  transition={springSnappy}
                  aria-label={`Visit my ${social.label}`}
                >
                  <div className="p-3 rounded-2xl bg-secondary/80 group-hover:bg-primary/10 border border-border group-hover:border-primary/40 transition-all shadow-sm">
                    <social.icon size={20} />
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-bold opacity-75 group-hover:opacity-100 transition-opacity">
                    {social.label}
                  </span>
                </motion.a>
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 cursor-pointer z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground/80 font-bold">Scroll</span>
          <a href="#about" className="text-primary/70 hover:text-primary transition-colors">
            <ArrowDown size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

