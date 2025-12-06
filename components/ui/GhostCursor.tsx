import React, { useEffect, useRef } from 'react';

const GhostCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Theme Detection
      const isDark = document.documentElement.classList.contains('dark');

      // Add new point if mouse is within window
      const mouse = mouseRef.current;
      if (mouse.x !== null && mouse.y !== null) {
          pointsRef.current.push({ x: mouse.x, y: mouse.y, age: 0 });

          // --- Draw Pointer Glow (The "Head") ---
          const glowRadius = isDark ? 60 : 40;
          const glowGradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius);
          
          if (isDark) {
            // Dark Mode: Bright Amber Core
            glowGradient.addColorStop(0, 'rgba(251, 191, 36, 0.4)'); 
            glowGradient.addColorStop(1, 'rgba(251, 191, 36, 0)');
          } else {
            // Light Mode: Soft Gold Halo
            glowGradient.addColorStop(0, 'rgba(180, 83, 9, 0.15)'); 
            glowGradient.addColorStop(1, 'rgba(180, 83, 9, 0)');
          }

          ctx.fillStyle = glowGradient;
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
      }

      // Remove old points
      const maxAge = 60; 
      pointsRef.current.forEach(p => p.age++);
      pointsRef.current = pointsRef.current.filter(p => p.age < maxAge);

      // --- Draw Trail ---
      if (pointsRef.current.length > 2) {
        ctx.beginPath();
        // Move to first point
        ctx.moveTo(pointsRef.current[0].x, pointsRef.current[0].y);

        // Curve through the rest
        for (let i = 1; i < pointsRef.current.length - 1; i++) {
            const p1 = pointsRef.current[i];
            const p2 = pointsRef.current[i + 1];
            const xc = (p1.x + p2.x) / 2;
            const yc = (p1.y + p2.y) / 2;
            ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);
        }
        
        if (isDark) {
            // Dark Mode: Luminous Amber/Gold Glow
            ctx.shadowColor = 'rgba(251, 191, 36, 0.8)'; // Amber-400
            ctx.shadowBlur = 30;
            ctx.strokeStyle = 'rgba(251, 191, 36, 0.6)';
        } else {
            // Light Mode: Sophisticated Bronze/Dark Gold
            ctx.shadowColor = 'rgba(180, 83, 9, 0.3)'; // Amber-700
            ctx.shadowBlur = 15;
            ctx.strokeStyle = 'rgba(180, 83, 9, 0.25)';
        }

        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }

      requestAnimationFrame(render);
    };
    
    const rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default GhostCursor;