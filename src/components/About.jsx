import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Code2,
  Download,
  Calendar,
  MapPin,
  ChevronRight,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiFramer,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiWordpress,
} from "react-icons/si";

import BorderGlow from "./BorderGlow";

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

  const skills = [
    { name: "React.js", level: "Advanced", icon: SiReact, color: "#61DAFB" },
    { name: "JavaScript", level: "Advanced", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Tailwind CSS", level: "Advanced", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "HTML5", level: "Advanced", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", level: "Advanced", icon: SiCss, color: "#1572B6" },
    { name: "Framer Motion", level: "Intermediate", icon: SiFramer, color: "#C084FC" },
    { name: "Git", level: "Intermediate", icon: SiGit, color: "#F05032" },
    { name: "GitHub", level: "Intermediate", icon: SiGithub, color: "#E5E7EB" },
    { name: "Vercel", level: "Intermediate", icon: SiVercel, color: "#FFFFFF" },
    { name: "Netlify", level: "Intermediate", icon: SiNetlify, color: "#00C7B7" },
    { name: "WordPress", level: "Intermediate", icon: SiWordpress, color: "#4285F4" },
  ];

  const whatIDo = [
    "Responsive Websites",
    "React Applications",
    "Landing Pages",
    "UI/UX Implementation",
  ];

  const tabContent = {
    /* ================= EDUCATION ================= */
    education: (
      <motion.div
        key="education"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        {/* Log entry: degree */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#0A090D"
          borderRadius={20}
          glowRadius={45}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={["#22d3ee", "#a855f7", "#38bdf8"]}
        >
          <div className="relative p-6 sm:p-7">
            {/* Left rail marker */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-cyan-400/30
                    bg-cyan-400/10
                    text-cyan-300
                  "
                >
                  <GraduationCap size={20} />
                </div>
                <span className="mt-2 h-full w-px bg-gradient-to-b from-cyan-400/30 to-transparent" />
              </div>

              <div className="flex-1 pb-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      BS Software Engineering
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      University of Sargodha
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    In Progress
                  </span>
                </div>

                <div className="mt-3 flex flex-wrap gap-4 font-mono text-xs text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} />
                    2024 — 2028
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} />
                    Sargodha, Pakistan
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-400 sm:max-w-md">
                  Building a strong foundation in programming, software
                  development, databases, algorithms, and modern web
                  technologies.
                </p>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Quiet footnote, not another card */}
        <div className="mt-6 border-l-2 border-purple-500/30 pl-5">
          <p className="text-sm font-semibold text-white">
            Continuous learning
          </p>
          <p className="mt-1.5 text-sm leading-6 text-gray-400">
            Alongside formal study, I sharpen my frontend skills by building
            real-world projects — exploring modern React.js patterns,
            responsive design, animation, and performance.
          </p>
        </div>
      </motion.div>
    ),

    /* ================= EXPERIENCE ================= */
    experience: (
      <motion.div
        key="experience"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
      >
        {/* Log entry: role */}
        <BorderGlow
          edgeSensitivity={30}
          glowColor="40 80 80"
          backgroundColor="#0A090D"
          borderRadius={20}
          glowRadius={45}
          glowIntensity={1}
          coneSpread={25}
          animated={false}
          colors={["#a855f7", "#f472b6", "#38bdf8"]}
        >
          <div className="p-6 sm:p-7">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-full
                    border border-purple-400/30
                    bg-purple-400/10
                    text-purple-300
                  "
                >
                  <Briefcase size={20} />
                </div>
                <span className="mt-2 h-full w-px bg-gradient-to-b from-purple-400/30 to-transparent" />
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Frontend Developer
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      Freelance / Personal Projects
                    </p>
                  </div>

                  <span className="flex items-center gap-2 text-xs font-medium text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Present
                  </span>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-400 sm:max-w-md">
                  Building modern, responsive, and interactive websites with
                  React.js, JavaScript, Tailwind CSS, and Framer Motion —
                  focused on clean UI, reusable components, and smooth
                  user experience.
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {["React.js", "JavaScript", "Tailwind CSS", "Framer Motion"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="
                          rounded-md
                          border border-white/10
                          bg-white/5
                          px-2.5 py-1
                          font-mono
                          text-[11px]
                          text-gray-300
                        "
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </BorderGlow>

        {/* Capabilities, styled in the developer's own vocabulary */}
        <div className="mt-6 border-l-2 border-cyan-400/30 pl-5">
          <p className="text-sm font-semibold text-white">What I do</p>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {whatIDo.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 text-sm text-gray-400"
              >
                <ChevronRight size={14} className="shrink-0 text-purple-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    ),

    /* ================= SKILLS ================= */
    skills: (
      <motion.div
        key="skills"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.35 }}
        className="grid grid-cols-2 gap-4 sm:grid-cols-3"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.04,
              duration: 0.3,
            }}
            className="h-full"
          >
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={20}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={["#c084fc", "#f472b6", "#38bdf8"]}
            >
              <div
                className="
                  group
                  flex min-h-[150px]
                  h-full
                  flex-col
                  items-center
                  justify-center
                  p-5
                  text-center
                  cursor-pointer
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-xl
                    transition-all duration-300
                    group-hover:scale-110
                  "
                  style={{
                    backgroundColor: `${skill.color}1A`,
                    color: skill.color,
                  }}
                >
                  <skill.icon size={21} />
                </div>

                {/* Skill Name */}
                <h3
                  className="
                    mt-4
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {skill.name}
                </h3>

                {/* Level */}
                <p className="mt-1 text-xs text-gray-500">
                  {skill.level}
                </p>
              </div>
            </BorderGlow>
          </motion.div>
        ))}
      </motion.div>
    ),
  };

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-black
        px-5
        py-24
        sm:px-6
        md:px-8
        lg:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-purple-600/10
          blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">

        {/* ================= HEADING ================= */}
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="
              font-mono
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              text-cyan-300
            "
          >
            Get To Know Me
          </p>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            About{" "}
            <span className="text-purple-400">
              Me
            </span>
          </h2>

          <p
            className="
              mt-5
              text-sm
              leading-7
              text-gray-400
              sm:text-base
            "
          >
            I'm a Frontend Web Developer passionate about building modern,
            responsive, and user-friendly web experiences with React.js and
            modern web technologies.
          </p>
        </div>

        {/* ================= TABS ================= */}
        <div
          className="
            mx-auto
            mt-12
            flex
            max-w-xl
            flex-wrap
            justify-center
            gap-2
            rounded-2xl
            border border-white/10
            bg-white/[0.03]
            p-2
          "
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative
                  flex
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  cursor-pointer
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }
                `}
              >
                {/* Active Background */}
                {isActive && (
                  <motion.div
                    layoutId="activeAboutTab"
                    className="
                      absolute
                      inset-0
                      rounded-xl
                      bg-purple-500/15
                    "
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                <Icon
                  size={17}
                  className="relative z-10"
                />

                <span className="relative z-10">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ================= TAB CONTENT ================= */}
        <div className="mx-auto mt-8 max-w-4xl">
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>

        {/* ================= RESUME BUTTON ================= */}
        <div className="mt-10 flex justify-center">
          <a
            href="/Muhammad-Huzaifa-Resume.pdf"
            download
            className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-purple-500
              px-7
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-purple-600
              hover:shadow-lg
              hover:shadow-purple-500/20
            "
          >
            <Download
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-y-0.5
              "
            />

            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;