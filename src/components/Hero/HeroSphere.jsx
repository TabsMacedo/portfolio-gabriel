import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

export default function HeroSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Distribui os pontos pela superfície de uma esfera.
    const particles = Array.from({ length: 650 }, (_, index) => {
      const y = 1 - (index / 649) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      return { x: Math.cos(angle) * radius, y, z: Math.sin(angle) * radius };
    });

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let size = 0;
    let rotation = 0;
    let influence = 0;
    let targetInfluence = 0;
    let frameId = null;
    let lastTime = null;
    let visible = true;

    function draw() {
      context.clearRect(0, 0, size, size);
      const center = size / 2;
      const radius = size * 0.34;
      const hue = 185 + influence * 90;
      const glow = context.createRadialGradient(center, center, 0, center, center, size * 0.48);
      glow.addColorStop(0, `hsla(${hue}, 90%, 60%, 0.16)`);
      glow.addColorStop(1, `hsla(${hue}, 90%, 60%, 0)`);
      context.fillStyle = glow;
      context.fillRect(0, 0, size, size);

      const rotatedParticles = particles.map((particle) => ({
        x: particle.x * Math.cos(rotation) + particle.z * Math.sin(rotation),
        y: particle.y,
        z: particle.z * Math.cos(rotation) - particle.x * Math.sin(rotation),
      })).sort((first, second) => first.z - second.z);

      for (const particle of rotatedParticles) {
        const depth = (particle.z + 1) / 2;
        const perspective = 2.8 / (2.8 - particle.z * 0.35);
        context.beginPath();
        context.arc(
          center + particle.x * radius * perspective,
          center + particle.y * radius * perspective,
          0.6 + depth * 1.6,
          0,
          Math.PI * 2,
        );
        context.fillStyle = `hsla(${hue}, 90%, ${55 + depth * 25}%, ${0.18 + depth * 0.82})`;
        context.fill();
      }
    }

    function animate(time) {
      const elapsed = lastTime === null ? 0 : Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;
      rotation += elapsed * 0.18;
      influence += (targetInfluence - influence) * (1 - Math.exp(-elapsed * 4));
      draw();
      frameId = window.requestAnimationFrame(animate);
    }

    function updateAnimation() {
      window.cancelAnimationFrame(frameId);
      frameId = null;
      lastTime = null;
      if (visible && !document.hidden && !reducedMotion.matches) {
        frameId = window.requestAnimationFrame(animate);
      } else {
        draw();
      }
    }

    function resize() {
      size = canvas.getBoundingClientRect().width;
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(size * pixelRatio);
      canvas.height = Math.round(size * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      draw();
    }

    function movePointer(event) {
      if (reducedMotion.matches || event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      const distance = Math.hypot(event.clientX - bounds.left - size / 2, event.clientY - bounds.top - size / 2);
      targetInfluence = Math.max(0, 1 - distance / (size * 0.6));
    }

    function resetPointer() {
      targetInfluence = 0;
    }

    const resizeObserver = new ResizeObserver(resize);
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateAnimation();
    });
    resizeObserver.observe(canvas);
    visibilityObserver.observe(canvas);
    canvas.addEventListener('pointermove', movePointer);
    canvas.addEventListener('pointerleave', resetPointer);
    reducedMotion.addEventListener('change', updateAnimation);
    document.addEventListener('visibilitychange', updateAnimation);
    resize();
    updateAnimation();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      canvas.removeEventListener('pointermove', movePointer);
      canvas.removeEventListener('pointerleave', resetPointer);
      reducedMotion.removeEventListener('change', updateAnimation);
      document.removeEventListener('visibilitychange', updateAnimation);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles['hero__sphere-canvas']} aria-hidden="true" />;
}
