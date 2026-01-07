import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      animate={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, hsl(199 89% 48% / 0.08), transparent 80%)`,
      }}
      transition={{ type: 'tween', ease: 'linear', duration: 0.1 }}
    />
  );
};

export default MouseGlow;
