import React, { useEffect, useRef } from "react";

const GlowCursor = () => {
  const cursorDot = useRef(null);
  const cursorGlow = useRef(null);

  useEffect(() => {
    const dot = cursorDot.current;
    const glow = cursorGlow.current;

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Small center dot
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const animate = () => {
      // Smooth trailing effect
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

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
      {/* Center Cursor */}
      <div
        ref={cursorDot}
        className="glow-cursor-dot"
      />

      {/* Large Glow */}
      <div
        ref={cursorGlow}
        className="glow-cursor-glow"
      />

      <style>{`
        /* =========================
           CURSOR DOT
        ========================= */

        .glow-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;

          width: 7px;
          height: 7px;

          border-radius: 9999px;

          background: #C084FC;

          box-shadow:
            0 0 8px #C084FC,
            0 0 16px rgba(192, 132, 252, 0.8);

          pointer-events: none;

          z-index: 99999;

          transform: translate3d(-100px, -100px, 0);

          will-change: transform;
        }

        /* =========================
           CURSOR GLOW
        ========================= */

        .glow-cursor-glow {
          position: fixed;

          top: 0;
          left: 0;

          width: 260px;
          height: 260px;

          margin-left: -130px;
          margin-top: -130px;

          border-radius: 50%;

          pointer-events: none;

          z-index: 99998;

          background:
            radial-gradient(
              circle,
              rgba(168, 85, 247, 0.16) 0%,
              rgba(168, 85, 247, 0.09) 25%,
              rgba(56, 189, 248, 0.045) 45%,
              transparent 70%
            );

          filter: blur(8px);

          opacity: 0.9;

          will-change: transform;
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