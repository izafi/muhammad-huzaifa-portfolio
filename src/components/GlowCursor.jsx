import React, { useEffect, useRef } from "react";

const GlowCursor = () => {
  const cursorDot = useRef(null);
  const cursorGlow = useRef(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const glow = cursorGlow.current;

    let mouseX = -100;
    let mouseY = -100;

    let glowX = -100;
    let glowY = -100;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small cursor dot
      dot.style.transform = `
        translate3d(${mouseX}px, ${mouseY}px, 0)
      `;
    };

    const animate = () => {
      // Smooth trailing glow
      glowX += (mouseX - glowX) * 0.10;
      glowY += (mouseY - glowY) * 0.10;

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
          CURSOR DOT
      ========================= */}

      <div
        ref={cursorDot}
        className="glow-cursor-dot"
      />

      {/* =========================
          CURSOR GLOW
      ========================= */}

      <div
        ref={cursorGlow}
        className="glow-cursor-glow"
      />

      <style>{`
        /* =========================
           SMALL CURSOR DOT
        ========================= */

        .glow-cursor-dot {
          position: fixed;

          top: 0;
          left: 0;

          width: 7px;
          height: 7px;

          margin-left: -3.5px;
          margin-top: -3.5px;

          border-radius: 50%;

          background: #51CCFF;

          box-shadow:
            0 0 6px rgba(81, 204, 255, 0.9),
            0 0 14px rgba(81, 204, 255, 0.75),
            0 0 24px rgba(67, 136, 212, 0.45);

          pointer-events: none;

          z-index: 99999;

          will-change: transform;
        }

        /* =========================
           OUTER GLOW
        ========================= */

        .glow-cursor-glow {
          position: fixed;

          top: 0;
          left: 0;

          width: 280px;
          height: 280px;

          margin-left: -140px;
          margin-top: -140px;

          border-radius: 50%;

          pointer-events: none;

          z-index: 99998;

          background:
            radial-gradient(
              circle,
              rgba(81, 204, 255, 0.13) 0%,
              rgba(67, 136, 212, 0.10) 25%,
              rgba(67, 136, 212, 0.055) 42%,
              rgba(12, 23, 39, 0.025) 58%,
              transparent 72%
            );

          filter: blur(10px);

          opacity: 0.95;

          will-change: transform;
        }

        /* =========================
           DARK THEME BLEND
        ========================= */

        body {
          cursor: default;
        }

        /* =========================
           HIDE ON TOUCH DEVICES
        ========================= */

        @media (hover: none) and (pointer: coarse) {
          .glow-cursor-dot,
          .glow-cursor-glow {
            display: none;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .glow-cursor-glow {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default GlowCursor;