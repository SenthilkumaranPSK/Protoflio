import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';
const LAG = 0.18;

/** Two-part cursor: instant dot + lagging ring that expands over interactive elements. Desktop-only. */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dotRef.current?.style.setProperty(
        'transform',
        `translate3d(${mouseX}px, ${mouseY}px, 0)`
      );
    };

    const tick = () => {
      ringX += (mouseX - ringX) * LAG;
      ringY += (mouseY - ringY) * LAG;
      ringRef.current?.style.setProperty('transform', `translate3d(${ringX}px, ${ringY}px, 0)`);
      raf = requestAnimationFrame(tick);
    };

    const isInteractive = (target: EventTarget | null) =>
      target instanceof Element && !!target.closest(INTERACTIVE_SELECTOR);

    const onOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) ringRef.current?.classList.add('cursor-hover');
    };
    const onOut = (e: MouseEvent) => {
      if (isInteractive(e.target)) ringRef.current?.classList.remove('cursor-hover');
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -ml-1 -mt-1 w-2 h-2 rounded-full bg-primary z-[9999] pointer-events-none"
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 -ml-[18px] -mt-[18px] w-9 h-9 rounded-full border border-primary/60 z-[9999] pointer-events-none transition-[width,height,margin,background-color] duration-300 ease-out"
        aria-hidden="true"
      />
    </>
  );
};

export default CustomCursor;
