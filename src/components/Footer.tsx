import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-muted-foreground order-2 md:order-1"
          >
            © {currentYear} Senthilkumaran P — Crafted with{' '}
            <Heart size={14} className="inline-block text-primary align-text-bottom mx-0.5" />
            using React, Tailwind &amp; Framer Motion.
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4 order-1 md:order-2"
          >
            <a
              href="https://linkedin.com/in/senthilkumaran75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/SenthilkumaranPSK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:senthil2005kumaran@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
