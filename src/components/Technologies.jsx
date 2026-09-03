import React from "react";

import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
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
      name: "CSS3",
      icon: SiCss3,
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

  // Duplicate items for seamless infinite scrolling
  const firstRow = [...rowOne, ...rowOne, ...rowOne];
  const secondRow = [...rowTwo, ...rowTwo, ...rowTwo];

  return (
    <section
      id="technologies"
      className="relative overflow-hidden bg-[#080A0D] py-20 sm:py-24 lg:py-28"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-blue-500/[0.04] blur-[120px]" />

        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative">

        {/* ================= HEADER ================= */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-14">

          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Tech Stack
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Tools I use to build
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              modern experiences.
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-white/45 max-w-2xl leading-6">
            Technologies and tools I use to design, develop and deploy
            responsive web applications.
          </p>

        </div>

        {/* ================= CAROUSELS ================= */}

        <div className="relative space-y-8">

          {/* Left fade */}

          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none bg-gradient-to-r from-[#080A0D] to-transparent" />

          {/* Right fade */}

          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 z-20 pointer-events-none bg-gradient-to-l from-[#080A0D] to-transparent" />

          {/* ================= ROW ONE ================= */}

          <div className="overflow-hidden">

            <div className="tech-track tech-track-left flex items-center w-max">

              {firstRow.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={`row-one-${tech.name}-${index}`}
                    className="tech-icon group"
                    style={{
                      "--tech-color": tech.color,
                    }}
                  >
                    <Icon className="tech-icon-svg" />

                    <span className="tech-tooltip">
                      {tech.name}
                    </span>
                  </div>
                );
              })}

            </div>

          </div>

          {/* ================= ROW TWO ================= */}

          <div className="overflow-hidden">

            <div className="tech-track tech-track-right flex items-center w-max">

              {secondRow.map((tech, index) => {
                const Icon = tech.icon;

                return (
                  <div
                    key={`row-two-${tech.name}-${index}`}
                    className="tech-icon group"
                    style={{
                      "--tech-color": tech.color,
                    }}
                  >
                    <Icon className="tech-icon-svg" />

                    <span className="tech-tooltip">
                      {tech.name}
                    </span>
                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>

      {/* ================= STYLES ================= */}

      <style>{`
        .tech-track {
          gap: 22px;
        }

        .tech-track-left {
          animation: techScrollLeft 28s linear infinite;
        }

        .tech-track-right {
          animation: techScrollRight 32s linear infinite;
        }

        .tech-icon {
          position: relative;
          width: 72px;
          height: 72px;

          flex-shrink: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 16px;

          color: rgba(255, 255, 255, 0.22);

          border: 1px solid rgba(255, 255, 255, 0.04);

          background: rgba(255, 255, 255, 0.015);

          transition:
            color 350ms ease,
            transform 350ms ease,
            border-color 350ms ease,
            background 350ms ease,
            box-shadow 350ms ease;
        }

        .tech-icon-svg {
          width: 31px;
          height: 31px;

          filter: grayscale(1);

          transition:
            filter 350ms ease,
            color 350ms ease,
            transform 350ms ease;
        }

        .tech-icon:hover {
          color: var(--tech-color);

          transform: translateY(-5px) scale(1.08);

          border-color: color-mix(
            in srgb,
            var(--tech-color) 35%,
            transparent
          );

          background: color-mix(
            in srgb,
            var(--tech-color) 6%,
            transparent
          );

          box-shadow:
            0 0 20px color-mix(
              in srgb,
              var(--tech-color) 18%,
              transparent
            ),
            0 0 45px color-mix(
              in srgb,
              var(--tech-color) 8%,
              transparent
            );
        }

        .tech-icon:hover .tech-icon-svg {
          filter: grayscale(0);

          color: var(--tech-color);

          transform: scale(1.12);

          filter:
            drop-shadow(
              0 0 8px color-mix(
                in srgb,
                var(--tech-color) 45%,
                transparent
              )
            );
        }

        .tech-tooltip {
          position: absolute;

          left: 50%;
          bottom: -34px;

          transform: translateX(-50%) translateY(-4px);

          padding: 5px 9px;

          border-radius: 6px;

          background: #11151C;

          border: 1px solid rgba(255, 255, 255, 0.08);

          color: rgba(255, 255, 255, 0.75);

          font-size: 10px;

          white-space: nowrap;

          opacity: 0;

          pointer-events: none;

          transition:
            opacity 250ms ease,
            transform 250ms ease;

          z-index: 50;
        }

        .tech-icon:hover .tech-tooltip {
          opacity: 1;

          transform: translateX(-50%) translateY(0);
        }

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

        @media (max-width: 640px) {
          .tech-track {
            gap: 14px;
          }

          .tech-icon {
            width: 60px;
            height: 60px;

            border-radius: 13px;
          }

          .tech-icon-svg {
            width: 26px;
            height: 26px;
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

        @media (prefers-reduced-motion: reduce) {
          .tech-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Technologies;