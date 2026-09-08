import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { spring, tapScale } from '@/lib/motion';
import { useLenis } from '@/hooks/use-lenis';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  const lenis = useLenis();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsVisible(latest > 800);
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ y: -3, transition: spring }}
          whileTap={tapScale}
          onClick={() => (lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0, behavior: 'smooth' }))}
          className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 p-3 rounded-full bg-background/80 backdrop-blur-xl border border-primary/30 text-primary shadow-2xl shadow-black/50 hover:border-primary/60 hover:shadow-primary/20 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
