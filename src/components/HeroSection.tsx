import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import ParticleBackground from './ParticleBackground';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 md:pt-0 md:pb-0">
      {/* Dynamic AI Background */}
      <ParticleBackground />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-1" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-bold mb-4 text-xs md:text-sm uppercase tracking-[0.3em]"
          >
            AI & Data Science Engineer
          </motion.p>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-8 tracking-tighter text-center w-full"
          >
            Senthil<span className="text-gradient">kumaran</span>&nbsp;P
          </motion.h1>



          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-xl mx-auto mb-12 font-medium leading-tight"
          >
            Architecting <span className="text-foreground">Intelligent Systems</span> through data-driven innovation.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-12 py-8 text-xl rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] shadow-xl shadow-primary/20"
              asChild
            >
              <a href="#projects">Recent Work</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/20 hover:bg-primary/5 font-bold px-12 py-8 text-xl rounded-2xl transition-all"
              asChild
            >
              <a href="#contact">Contact</a>
            </Button>
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="flex justify-center gap-8"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/senthilkumaran75", label: "LinkedIn" },
              { icon: Github, href: "https://github.com/SenthilkumaranPSK", label: "GitHub" },
              { icon: Mail, href: "mailto:senthil2005kumaran@gmail.com", label: "Email" },
              { icon: Instagram, href: "https://www.instagram.com/senthil_75_", label: "Instagram" }
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ y: -5 }}
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
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Scroll</span>
        <a href="#about" className="text-primary/70 hover:text-primary transition-colors">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;

