import { useEffect, useRef } from 'react';

const MouseGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Direct style mutation avoids a React re-render on every mousemove.
      glowRef.current?.style.setProperty('--glow-x', `${e.clientX}px`);
      glowRef.current?.style.setProperty('--glow-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed inset-0 z-30"
      style={{
        background:
          'radial-gradient(600px at var(--glow-x, 50%) var(--glow-y, 50%), hsl(199 89% 48% / 0.08), transparent 80%)',
      }}
    />
  );
};

export default MouseGlow;
