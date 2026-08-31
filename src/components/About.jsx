import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Download,
  Calendar,
  MapPin,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    {
      id: "education",
      label: "Education",
      icon: GraduationCap,
    },
    {
      id: "experience",
      label: "Experience",
      icon: Briefcase,
    },
    {
      id: "skills",
      label: "Skills",
      icon: Code2,
    },
  ];

  const tabContent = {
    education: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Education Card */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-purple-400">
                <GraduationCap size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  BS Software Engineering
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  University of Sargodha
                </p>

                <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    2024 — 2028
                  </span>

                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    Sargodha, Pakistan
                  </span>
                </div>
              </div>
            </div>

            <span className="w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              In Progress
            </span>
          </div>

          <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-6 text-gray-400">
            Currently pursuing a Bachelor's degree in Software Engineering,
            developing a strong foundation in programming, software
            development, databases, algorithms, and modern web technologies.
          </p>
        </div>

        {/* Learning Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-base font-semibold text-white">
            What I'm Learning
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Continuously improving my frontend development skills by building
            real-world projects and exploring modern React.js patterns,
            animations, responsive design, and performance optimization.
          </p>
        </div>
      </motion.div>
    ),

    experience: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        {/* Experience Card */}
        <div className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
              <Briefcase size={23} />
            </div>

            <div className="flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Frontend Developer
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    Freelance / Personal Projects
                  </p>
                </div>

                <span className="flex w-fit items-center gap-1.5 rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-xs text-purple-300">
                  <Calendar size={13} />
                  Present
                </span>
              </div>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                Building modern and responsive websites using React.js,
                JavaScript, Tailwind CSS, and Framer Motion. Focused on
                creating clean interfaces, reusable components, smooth
                animations, and excellent user experiences.
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "React.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "Framer Motion",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What I Do */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="text-base font-semibold text-white">
            What I Do
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Responsive Websites",
              "React Applications",
              "Landing Pages",
              "UI/UX Implementation",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-black/20 p-3 text-sm text-gray-400"
              >
                <span className="mr-2 text-purple-400">✦</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    ),

    skills: (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
      >
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            { name: "React.js", level: "Advanced" },
            { name: "JavaScript", level: "Advanced" },
            { name: "Tailwind CSS", level: "Advanced" },
            { name: "HTML5", level: "Advanced" },
            { name: "CSS3", level: "Advanced" },
            { name: "Framer Motion", level: "Intermediate" },
            { name: "Bootstrap", level: "Intermediate" },
            { name: "Git", level: "Intermediate" },
            { name: "GitHub", level: "Intermediate" },
            { name: "Vercel", level: "Intermediate" },
            { name: "Netlify", level: "Intermediate" },
            { name: "WordPress", level: "Intermediate" },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.04 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/[0.05]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
                <Code2 size={20} />
              </div>

              <h3 className="mt-4 text-sm font-semibold text-white">
                {skill.name}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {skill.level}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    ),
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 sm:px-6 md:px-8 lg:py-32"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Get To Know Me
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            About <span className="text-purple-400">Me</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
            I'm a Frontend Web Developer passionate about building modern,
            responsive, and user-friendly web experiences with React.js and
            modern web technologies.
          </p>
        </div>

        {/* Tabs */}
        <div className="mx-auto mt-12 flex max-w-xl flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-300"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-xl bg-purple-500/15"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <Icon size={17} className="relative z-10" />

                <span className="relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>

        {/* Resume Button */}
        <div className="mt-10 flex justify-center">
          <a
            href="/Muhammad-Huzaifa-Resume.pdf"
            download
            className="group flex items-center gap-2 rounded-full bg-purple-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-purple-600 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <Download
              size={18}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />

            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;