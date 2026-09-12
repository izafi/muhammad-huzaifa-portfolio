import React, { useEffect, useRef } from "react";

const GlowCursor = () => {
  const cursorGlow = useRef(null);

  useEffect(() => {
    const glow = cursorGlow.current;

    let mouseX = -300;
    let mouseY = -300;

    let glowX = -300;
    let glowY = -300;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth glow movement
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      glow.style.transform = `
        translate3d(${glowX}px, ${glowY}px, 0)
      `;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* =========================
          GLOW CURSOR
      ========================= */}

      <div
        ref={cursorGlow}
        className="glow-cursor"
      />

      <style>{`
        /* =========================
           GLOW CURSOR
        ========================= */

        .glow-cursor {
          position: fixed;

          top: 0;
          left: 0;

          width: 300px;
          height: 300px;

          margin-left: -150px;
          margin-top: -150px;

          border-radius: 50%;

          pointer-events: none;

          z-index: 99998;

          background:
            radial-gradient(
              circle,
              rgba(81, 204, 255, 0.14) 0%,
              rgba(67, 136, 212, 0.10) 24%,
              rgba(67, 136, 212, 0.055) 42%,
              rgba(12, 23, 39, 0.025) 58%,
              transparent 72%
            );

          filter: blur(12px);

          opacity: 0.9;

          will-change: transform;

          transition: opacity 200ms ease;
        }

        /* =========================
           HIDE ON TOUCH DEVICES
        ========================= */

        @media (hover: none) and (pointer: coarse) {
          .glow-cursor {
            display: none;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .glow-cursor {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default GlowCursor;