import type { Transition, Variants } from 'framer-motion';

/** Expo-out — the "buttery" premium deceleration curve used across the site. */
export const EASE_BUTTER = [0.16, 1, 0.3, 1] as const;

export const spring: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
  mass: 0.9,
};

export const springSnappy: Transition = {
  type: 'spring',
  stiffness: 420,
  damping: 30,
};

export const tapScale = { scale: 0.96 };

export const viewport = { once: true, margin: '-80px' };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 56 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: EASE_BUTTER },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE_BUTTER },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_BUTTER },
  },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_BUTTER },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.85, ease: EASE_BUTTER },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: EASE_BUTTER },
  },
};

/** Cinematic entrance for hero-level headlines — travel + a soft blur-to-sharp resolve. */
export const fadeInBlur: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(12px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: EASE_BUTTER },
  },
};

/** Wrap with a container using `staggerChildren` and nest `fadeInUp` (or similar) children. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** Per-item delay helper for lists not using a stagger container. */
export const revealTransition = (delay = 0): Transition => ({
  duration: 0.7,
  ease: EASE_BUTTER,
  delay,
});
