import React from "react";
import { Code2 } from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiWordpress,
  SiFigma,
  SiPhp,
  SiShopify,
} from "react-icons/si";

const Technologies = () => {
  // =========================
  // FIRST ROW
  // =========================
  const rowOne = [
    {
      name: "React.js",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
    },
    {
      name: "HTML5",
      icon: SiHtml5,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: Code2,
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#0055FF",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#339933",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "#4479A1",
    },
  ];

  // =========================
  // SECOND ROW
  // =========================
  const rowTwo = [
    {
      name: "Git",
      icon: SiGit,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: SiGithub,
      color: "#FFFFFF",
    },
    {
      name: "Vercel",
      icon: SiVercel,
      color: "#FFFFFF",
    },
    {
      name: "Netlify",
      icon: SiNetlify,
      color: "#00C7B7",
    },
    {
      name: "WordPress",
      icon: SiWordpress,
      color: "#21759B",
    },
    {
      name: "Figma",
      icon: SiFigma,
      color: "#F24E1E",
    },
    {
      name: "PHP",
      icon: SiPhp,
      color: "#777BB4",
    },
    {
      name: "Shopify",
      icon: SiShopify,
      color: "#96BF48",
    },
  ];

  // Duplicate items for seamless infinite animation
  const firstRow = [...rowOne, ...rowOne, ...rowOne];
  const secondRow = [...rowTwo, ...rowTwo, ...rowTwo];

  // =========================
  // TECHNOLOGY ITEM
  // =========================
  const TechItem = ({ item }) => {
    const Icon = item.icon;

    return (
      <div
        className="tech-icon group/item"
        style={{
          "--tech-color": item.color,
        }}
      >
        <Icon className="tech-icon-svg" />

        {/* Tooltip */}
        <span className="tech-tooltip">
          {item.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="technologies"
      className="relative w-full overflow-hidden bg-[#070A0F] py-12 sm:py-16 lg:py-20"
    >
      {/* =========================
          BACKGROUND GLOW
      ========================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />

      {/* =========================
          SECTION HEADER
      ========================= */}
      <div className="relative z-10 mx-auto mb-10 max-w-3xl px-5 text-center sm:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400/80">
          Technologies
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Tech Stack
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/45 sm:text-base">
          Tools I use to build modern, responsive, and interactive digital
          experiences.
        </p>
      </div>

      {/* =========================
          TECH CAROUSELS
      ========================= */}
      <div className="relative space-y-6 sm:space-y-7">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 bg-gradient-to-r from-[#070A0F] to-transparent sm:w-28 lg:w-44" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 bg-gradient-to-l from-[#070A0F] to-transparent sm:w-28 lg:w-44" />

        {/* =========================
            ROW ONE
            LEFT TO RIGHT
        ========================= */}
        <div className="tech-marquee overflow-hidden">
          <div className="tech-track tech-track-left">
            {firstRow.map((item, index) => (
              <TechItem
                key={`row-one-${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>

        {/* =========================
            ROW TWO
            RIGHT TO LEFT
        ========================= */}
        <div className="tech-marquee overflow-hidden">
          <div className="tech-track tech-track-right">
            {secondRow.map((item, index) => (
              <TechItem
                key={`row-two-${item.name}-${index}`}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>

      {/* =========================
          CUSTOM CSS
      ========================= */}
      <style>{`
        /* =========================
           MARQUEE
        ========================= */

        .tech-marquee {
          width: 100%;
          overflow: hidden;
        }

        .tech-track {
          display: flex;
          width: max-content;
          align-items: center;
          gap: 18px;
          will-change: transform;
        }

        /* First row */
        .tech-track-left {
          animation: techScrollLeft 28s linear infinite;
        }

        /* Second row */
        .tech-track-right {
          animation: techScrollRight 32s linear infinite;
        }

        /* =========================
           TECHNOLOGY CARD
        ========================= */

        .tech-icon {
          position: relative;

          width: 72px;
          height: 72px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;

          border: 1px solid rgba(255, 255, 255, 0.06);

          border-radius: 16px;

          background: rgba(255, 255, 255, 0.025);

          color: rgba(255, 255, 255, 0.22);

          transition:
            transform 300ms ease,
            color 300ms ease,
            background 300ms ease,
            border-color 300ms ease,
            box-shadow 300ms ease;
        }

        /* =========================
           ICON
        ========================= */

        .tech-icon-svg {
          width: 30px;
          height: 30px;

          filter: grayscale(1);

          opacity: 0.55;

          transition:
            filter 300ms ease,
            opacity 300ms ease,
            transform 300ms ease;
        }

        /* =========================
           HOVER CARD
        ========================= */

        .tech-icon:hover {
          color: var(--tech-color);

          transform: translateY(-5px) scale(1.08);

          background: rgba(255, 255, 255, 0.055);

          border-color: color-mix(
            in srgb,
            var(--tech-color) 40%,
            transparent
          );

          box-shadow:
            0 0 20px color-mix(
              in srgb,
              var(--tech-color) 20%,
              transparent
            ),
            inset 0 0 18px color-mix(
              in srgb,
              var(--tech-color) 5%,
              transparent
            );
        }

        /* =========================
           HOVER ICON
        ========================= */

        .tech-icon:hover .tech-icon-svg {
          filter:
            grayscale(0)
            drop-shadow(
              0 0 8px color-mix(
                in srgb,
                var(--tech-color) 55%,
                transparent
              )
            );

          opacity: 1;

          transform: scale(1.1);

          color: var(--tech-color);
        }

        /* =========================
           TOOLTIP
        ========================= */

        .tech-tooltip {
          position: absolute;

          left: 50%;
          bottom: -40px;

          transform: translateX(-50%) translateY(5px);

          white-space: nowrap;

          padding: 6px 9px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 7px;

          background: #0B0E13;

          color: rgba(255, 255, 255, 0.8);

          font-size: 10px;
          font-weight: 500;

          opacity: 0;
          visibility: hidden;

          pointer-events: none;

          transition:
            opacity 200ms ease,
            transform 200ms ease;
        }

        /* Show tooltip */
        .tech-icon:hover .tech-tooltip {
          opacity: 1;

          visibility: visible;

          transform: translateX(-50%) translateY(0);
        }

        /* =========================
           INFINITE ANIMATION
        ========================= */

        @keyframes techScrollLeft {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333333%);
          }
        }

        @keyframes techScrollRight {
          from {
            transform: translateX(-33.333333%);
          }

          to {
            transform: translateX(0);
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 640px) {
          .tech-track {
            gap: 12px;
          }

          .tech-icon {
            width: 58px;
            height: 58px;

            border-radius: 13px;
          }

          .tech-icon-svg {
            width: 24px;
            height: 24px;
          }

          .tech-tooltip {
            display: none;
          }

          .tech-track-left {
            animation-duration: 24s;
          }

          .tech-track-right {
            animation-duration: 27s;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .tech-track-left,
          .tech-track-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;