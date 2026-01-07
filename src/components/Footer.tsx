import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8 border-t border-border">
      <div className="px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://linkedin.com/in/senthilkumaran75"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/SenthilkumaranPSK"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.instagram.com/senthil_75_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:senthil2005kumaran@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
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
