import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '@/lib/gsap';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  color: string;
  alpha: number;
}

/**
 * Modern Interactive Neural Constellation & Precision Cyber Grid.
 * Replaces the hazy smoke/cloud shader with a crisp, intelligent AI neural network
 * featuring synaptic connections, mouse gravity, and a subtle radial dot-grid matrix.
 */
const AmbientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const reduced = prefersReducedMotion();
    let animationFrameId = 0;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (normalized and pixel)
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 160,
    };

    // Color palette: Cyan, Indigo, Violet accent glows
    const colors = [
      'rgba(14, 165, 233, ',   // Cyan (Primary)
      'rgba(99, 102, 241, ',   // Indigo
      'rgba(139, 92, 246, ',   // Purple
      'rgba(56, 189, 248, ',   // Sky Blue
    ];

    // Responsive particle count
    const particleCount = Math.min(Math.floor((width * height) / 18000), 75);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const radius = Math.random() * 1.6 + 1.2;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (reduced ? 0 : 0.35),
        vy: (Math.random() - 0.5) * (reduced ? 0 : 0.35),
        radius,
        baseRadius: radius,
        color,
        alpha: Math.random() * 0.4 + 0.3,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const connectionDistance = 130;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle ambient cybernetic dot-grid in the background
      const gridSize = 48;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
      for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // 2. Update & Draw Neural Particles & Connections
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Move particles
        if (!reduced) {
          p1.x += p1.vx;
          p1.y += p1.vy;

          // Bounce off screen boundaries smoothly
          if (p1.x < 0 || p1.x > width) p1.vx *= -1;
          if (p1.y < 0 || p1.y > height) p1.vy *= -1;

          // Mouse proximity reaction (gentle repulsion/attraction)
          const dxMouse = mouse.x - p1.x;
          const dyMouse = mouse.y - p1.y;
          const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

          if (distMouse < mouse.radius) {
            const angle = Math.atan2(dyMouse, dxMouse);
            const force = (mouse.radius - distMouse) / mouse.radius;
            p1.x -= Math.cos(angle) * force * 1.2;
            p1.y -= Math.sin(angle) * force * 1.2;
            p1.radius = p1.baseRadius + force * 1.5;
          } else {
            p1.radius = p1.baseRadius;
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p1.color}${p1.alpha})`;
        ctx.fill();

        // Connect nearby nodes with synaptic edges
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect node to mouse if nearby
        if (mouse.x > 0) {
          const dxM = p1.x - mouse.x;
          const dyM = p1.y - mouse.y;
          const distM = Math.sqrt(dxM * dxM + dyM * dyM);

          if (distM < mouse.radius) {
            const lineAlpha = (1 - distM / mouse.radius) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!reduced) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default AmbientBackground;
