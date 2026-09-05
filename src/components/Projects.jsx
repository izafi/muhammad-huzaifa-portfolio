import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
} from "lucide-react";

import BorderGlow from "../components/BorderGlow";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Coders Gym",
      category: "Fitness Website",
      description:
        "A modern and responsive gym website built with React.js, Tailwind CSS and Framer Motion. Interactive filtering, animated sections and testimonials.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      live: "https://coders-gym-coral.vercel.app/",
      github: "https://github.com/izafi/coders-gym",
      featured: true,
      number: "01",
    },

    {
      id: 2,
      title: "Shopify",
      category: "E-Commerce",
      description:
        "A modern ecommerce frontend with product API integration, responsive product cards, category browsing and smooth React Router navigation.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "API"],
      live: "https://shopify-ecommerce-store.vercel.app/",
      github: "https://github.com/izafi/shopify-ecommerce-store",
      featured: true,
      number: "02",
    },

    {
      id: 3,
      title: "Portfolio",
      category: "Personal Portfolio",
      description:
        "A modern and responsive personal portfolio website designed to showcase skills, projects, experience, and professional achievements with a clean and engaging interface.",
      tech: ["React.js", "JavaScript", "Tailwind CSS"],
      live: "https://muhammad-huzaifa-portfolio-sage.vercel.app/",
      github: "https://github.com/izafi/muhammad-huzaifa-portfolio",
      featured: true,
      number: "03",
    },
  ];

  // BorderGlow configuration
  const glowProps = {
    edgeSensitivity: 25,
    glowColor: "200 90 65",
    backgroundColor: "#0B0E13",
    borderRadius: 18,
    glowRadius: 25,
    glowIntensity: 0.6,
    coneSpread: 30,
    animated: false,
    colors: ["#2563EB", "#22D3EE", "#3B82F6"],
    fillOpacity: 0.16,
  };

  return (
    <section
      id="projects"
      className="relative bg-[#080A0D] text-white py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-600/5 blur-[120px] rounded-full" />

        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-500/5 blur-[120px] rounded-full" />
      </div>

      {/* ================= CONTAINER ================= */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-cyan-400" />

            <span className="text-cyan-400 text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              Selected Work
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1]">
            Projects that turn

            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              ideas into experiences.
            </span>
          </h2>

          <p className="mt-4 sm:mt-5 text-sm text-white/55 leading-6 max-w-2xl">
            A collection of frontend projects focused on modern interfaces,
            responsive layouts, smooth interactions and real-world web
            development.
          </p>
        </motion.div>

        {/* ================= PROJECT GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-7">

          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              className="h-full"
            >
              <BorderGlow
                {...glowProps}
                className="h-full"
              >
                <article className="group h-full flex flex-col p-3 sm:p-4">

                  {/* ================= PROJECT PREVIEW ================= */}

                  <div className="relative h-44 sm:h-48 lg:h-52 overflow-hidden rounded-[12px] bg-[#0F131A] border border-white/[0.06]">

                    {/* Grid */}

                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />

                    {/* Glow */}

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-cyan-400/20 transition-all duration-500" />

                    {/* Fake Browser Window */}

                    <div className="absolute inset-4 sm:inset-5 rounded-lg border border-white/10 bg-[#0B0E13]/90 backdrop-blur-sm overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">

                      {/* Browser Bar */}

                      <div className="h-7 border-b border-white/10 flex items-center px-2.5 gap-1.5">

                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />

                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />

                        <span className="w-1.5 h-1.5 rounded-full bg-white/20" />

                        <div className="ml-2 h-3 w-20 sm:w-28 rounded bg-white/[0.05]" />

                      </div>

                      {/* Preview Content */}

                      <div className="p-3 sm:p-4">

                        <div className="flex items-center justify-between">

                          <div className="h-2.5 w-14 rounded bg-blue-400/40" />

                          <div className="h-4 w-9 rounded-full bg-white/5" />

                        </div>

                        <div className="mt-4 space-y-1.5">

                          <div className="h-3.5 w-3/4 rounded bg-white/10" />

                          <div className="h-3.5 w-1/2 rounded bg-white/[0.06]" />

                        </div>

                        <div className="mt-4 grid grid-cols-3 gap-1.5">

                          <div className="h-10 rounded-md bg-blue-500/10 border border-blue-400/10" />

                          <div className="h-10 rounded-md bg-cyan-500/10 border border-cyan-400/10" />

                          <div className="h-10 rounded-md bg-white/[0.03] border border-white/5" />

                        </div>

                      </div>
                    </div>

                    {/* Project Number */}

                    <div className="absolute top-2.5 right-3 text-[10px] font-mono text-white/30">
                      {project.number}
                    </div>

                    {/* Category */}

                    <div className="absolute bottom-2.5 left-3">

                      <span className="px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[9px] sm:text-[10px] text-white/65">
                        {project.category}
                      </span>

                    </div>

                  </div>

                  {/* ================= PROJECT CONTENT ================= */}

                  <div className="pt-5 sm:pt-6 flex flex-col flex-1">

                    {/* Title */}

                    <div className="flex items-start justify-between gap-3">

                      <h3 className="text-lg sm:text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>

                      {project.featured && (
                        <span className="shrink-0 text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                          Featured
                        </span>
                      )}

                    </div>

                    {/* Description */}

                    <p className="mt-3 text-xs sm:text-[13px] leading-5.5 text-white/50 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}

                    <div className="flex flex-wrap gap-2 mt-5">

                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-[10px] rounded-full border border-white/[0.08] bg-white/[0.025] text-white/60"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    {/* ================= BUTTONS ================= */}

                    <div className="flex items-center gap-2.5 mt-6 pt-5 border-t border-white/[0.06]">

                      {/* Live Demo */}

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white text-[#080A0D] text-xs font-medium hover:bg-cyan-300 transition-colors duration-300"
                      >
                        Live Demo

                        <ExternalLink
                          size={13}
                          className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>

                      {/* GitHub */}

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/[0.03] text-white/70 text-xs hover:bg-white/[0.07] hover:text-white transition-all duration-300"
                      >
                        <Code2 size={13} />

                        GitHub
                      </a>

                      {/* Arrow */}

                      <div className="ml-auto hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-white/[0.08] text-white/30 group-hover:text-cyan-300 group-hover:border-cyan-400/30 transition-all duration-300">
                        <ArrowUpRight size={15} />
                      </div>

                    </div>

                  </div>

                </article>
              </BorderGlow>
            </motion.div>
          ))}

        </div>

        {/* ================= BOTTOM CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-12"
        >

          <BorderGlow {...glowProps}>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-5 sm:p-6 lg:p-7">

              {/* CTA Content */}

              <div>

                <div className="flex items-center gap-2 text-cyan-300 text-xs uppercase tracking-wider mb-2.5">

                  <Code2 size={14} />

                  More Projects

                </div>

                <h3 className="text-lg sm:text-xl font-semibold">
                  Want to see more of my work?
                </h3>

                <p className="mt-1.5 text-sm text-white/45">
                  Check out my GitHub for more experiments and projects.
                </p>

              </div>

              {/* CTA Button */}

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-500 hover:bg-cyan-400 text-white hover:text-[#080A0D] text-sm font-medium transition-all duration-300"
              >
                View GitHub

                <ArrowUpRight size={16} />
              </a>

            </div>

          </BorderGlow>

        </motion.div>

      </div>
    </section>
  );
};

export default Projects;