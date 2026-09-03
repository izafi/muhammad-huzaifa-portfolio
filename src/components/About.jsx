import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Wrench,
  Calendar,
  MapPin,
  Download,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiFramer,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
  SiWordpress,
  SiFigma,
  SiNodedotjs,
  SiMysql,
} from "react-icons/si";

import BorderGlow from "../components/BorderGlow";

const tabs = [
  {
    id: "education",
    label: "Education",
    icon: GraduationCap,
  },
  {
    id: "experience",
    label: "Work Experience",
    icon: BriefcaseBusiness,
  },
  {
    id: "skills",
    label: "Skills",
    icon: Code2,
  },
  {
    id: "tools",
    label: "Tools & Technologies",
    icon: Wrench,
  },
];

const skills = [
  {
    name: "React.js",
    level: "Advanced",
    percentage: 90,
    icon: SiReact,
  },
  {
    name: "JavaScript",
    level: "Advanced",
    percentage: 88,
    icon: SiJavascript,
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    percentage: 92,
    icon: SiTailwindcss,
  },
  {
    name: "HTML5",
    level: "Advanced",
    percentage: 95,
    icon: SiHtml5,
  },
  {
    name: "Framer Motion",
    level: "Intermediate",
    percentage: 78,
    icon: SiFramer,
  },
  {
    name: "Git",
    level: "Intermediate",
    percentage: 80,
    icon: SiGit,
  },
];

const tools = [
  {
    name: "React.js",
    category: "Frontend",
    icon: SiReact,
  },
  {
    name: "JavaScript",
    category: "Language",
    icon: SiJavascript,
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: SiTailwindcss,
  },
  {
    name: "Framer Motion",
    category: "Animation",
    icon: SiFramer,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: SiNodedotjs,
  },
  {
    name: "MySQL",
    category: "Database",
    icon: SiMysql,
  },
  {
    name: "Git",
    category: "Version Control",
    icon: SiGit,
  },
  {
    name: "GitHub",
    category: "Repository",
    icon: SiGithub,
  },
  {
    name: "Vercel",
    category: "Deployment",
    icon: SiVercel,
  },
  {
    name: "Netlify",
    category: "Deployment",
    icon: SiNetlify,
  },
  {
    name: "WordPress",
    category: "CMS",
    icon: SiWordpress,
  },
  {
    name: "Figma",
    category: "Design",
    icon: SiFigma,
  },
];

const contentVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },

  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
    },
  },
};

const glowProps = {
  edgeSensitivity: 25,
  glowColor: "200 90 65",
  backgroundColor: "#0B0E13",
  borderRadius: 18,
  glowRadius: 30,
  glowIntensity: 0.7,
  coneSpread: 30,
  animated: false,
  colors: ["#2563EB", "#22D3EE", "#3B82F6"],
  fillOpacity: 0.25,
};

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#08090B]
        px-5
        py-24
        text-white
        sm:px-6
        sm:py-28
        lg:px-8
        lg:py-32
      "
    >
      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          h-[350px]
          w-[350px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[120px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div
            className="
              mx-auto
              mb-4
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-blue-400/20
              bg-blue-500/[0.06]
              px-3
              py-1.5
              font-mono
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-blue-300
            "
          >
            <Code2 size={13} />

            About Me
          </div>

          <h2
            className="
              text-3xl
              font-bold
              tracking-tight
              text-white
              sm:text-4xl
              md:text-5xl
            "
          >
            Building with{" "}
            <span
              className="
                bg-gradient-to-r
                from-blue-400
                to-cyan-300
                bg-clip-text
                text-transparent
              "
            >
              purpose.
            </span>
          </h2>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            I'm a Frontend Developer and Software Engineering student
            passionate about creating modern, responsive, and interactive
            web experiences.
          </p>
        </motion.div>

        {/* =========================
            MAIN GRID
        ========================== */}

        <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-10">

          {/* =========================
              LEFT PROFILE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <BorderGlow
              {...glowProps}
              className="w-full"
            >
              <div
                className="
                  rounded-[17px]
                  bg-[#0B0E13]
                  p-5
                "
              >
                {/* Avatar */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-28
                    w-28
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-blue-400/20
                    bg-blue-500/[0.08]
                    sm:h-32
                    sm:w-32
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-blue-500/20
                      via-transparent
                      to-cyan-400/10
                    "
                  />

                  <img src="/muhammad huzaifa.png" alt="" />
                </div>

                <div className="mt-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    Muhammad Huzaifa
                  </h3>

                  <p className="mt-1 font-mono text-xs text-cyan-400">
                    Frontend Developer
                  </p>
                </div>

                <div
                  className="
                    mt-5
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-xs
                    text-slate-500
                  "
                >
                  <MapPin
                    size={14}
                    className="text-blue-400"
                  />

                  Pakistan
                </div>

                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <p className="text-center text-xs leading-6 text-slate-500">
                    Focused on building clean UI, scalable React
                    applications, responsive websites, and engaging
                    digital experiences.
                  </p>
                </div>

                <a
                  href="/Muhammad-Huzaifa-Resume.pdf"
                  download
                  className="
                    group
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-blue-500
                    px-4
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-600
                  "
                >
                  <Download size={16} />

                  Download Resume
                </a>
              </div>
            </BorderGlow>
          </motion.div>

          {/* =========================
              RIGHT SIDE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >

            {/* =========================
                TABS
            ========================== */}

            <div
              className="
                mb-8
                overflow-x-auto
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-1.5
              "
            >
              <div className="flex min-w-max gap-1">

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
                        items-center
                        gap-2
                        rounded-lg
                        px-3
                        py-2.5
                        text-xs
                        font-medium
                        transition-all
                        duration-300
                        sm:px-4
                        sm:text-sm
                        ${
                          isActive
                            ? "text-white"
                            : "text-slate-500 hover:text-slate-200"
                        }
                      `}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="about-tab"
                          className="
                            absolute
                            inset-0
                            rounded-lg
                            border
                            border-blue-400/20
                            bg-blue-500/10
                          "
                        />
                      )}

                      <Icon
                        size={15}
                        className={`
                          relative
                          z-10
                          ${
                            isActive
                              ? "text-cyan-400"
                              : "text-slate-500"
                          }
                        `}
                      />

                      <span className="relative cursor-pointer z-10">
                        {tab.label}
                      </span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* =========================
                TAB CONTENT
            ========================== */}

            <div className="min-h-[430px]">

              <AnimatePresence mode="wait">

                {/* =====================
                    EDUCATION
                ====================== */}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <BorderGlow
                      {...glowProps}
                      animated={true}
                      className="w-full"
                    >
                      <div
                        className="
                          rounded-[17px]
                          bg-[#0B0E13]
                          p-6
                          sm:p-8
                        "
                      >

                        <div
                          className="
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-start
                            sm:justify-between
                          "
                        >

                          <div>

                            <div
                              className="
                                mb-4
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-blue-400/20
                                bg-blue-500/10
                                text-blue-300
                              "
                            >
                              <GraduationCap size={22} />
                            </div>

                            <h3
                              className="
                                text-xl
                                font-semibold
                                text-white
                                sm:text-2xl
                              "
                            >
                              BS Software Engineering
                            </h3>

                            <p className="mt-2 text-sm font-medium text-cyan-400">
                              University of Sargodha
                            </p>

                          </div>

                          <div
                            className="
                              flex
                              w-fit
                              items-center
                              gap-2
                              rounded-md
                              border
                              border-white/[0.08]
                              bg-white/[0.03]
                              px-3
                              py-1.5
                              font-mono
                              text-xs
                              text-slate-400
                            "
                          >
                            <Calendar size={13} />

                            2024 — 2028
                          </div>

                        </div>

                        <div className="mt-7 grid gap-4 sm:grid-cols-2">

                          <div
                            className="
                              rounded-xl
                              border
                              border-white/[0.07]
                              bg-black/20
                              p-4
                            "
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                              Location
                            </p>

                            <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                              <MapPin
                                size={14}
                                className="text-blue-400"
                              />

                              Sargodha, Pakistan
                            </p>
                          </div>

                          <div
                            className="
                              rounded-xl
                              border
                              border-white/[0.07]
                              bg-black/20
                              p-4
                            "
                          >
                            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-600">
                              Status
                            </p>

                            <p className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                              <CheckCircle2
                                size={14}
                                className="text-cyan-400"
                              />

                              Currently Studying
                            </p>
                          </div>

                        </div>

                        <p className="mt-7 text-sm leading-7 text-slate-400 sm:text-base">
                          Currently pursuing a Bachelor's degree in
                          Software Engineering with a strong interest in
                          frontend development, software architecture,
                          databases, algorithms, and modern web
                          technologies.
                        </p>

                        <div className="mt-7 border-t border-white/[0.07] pt-6">

                          <p className="font-mono text-xs uppercase tracking-wider text-slate-600">
                            Current Focus
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">

                            {[
                              "React.js",
                              "JavaScript",
                              "Frontend Development",
                              "UI/UX",
                              "Web Applications",
                            ].map((item) => (
                              <span
                                key={item}
                                className="
                                  rounded-md
                                  border
                                  border-blue-400/10
                                  bg-blue-500/[0.05]
                                  px-3
                                  py-1.5
                                  text-xs
                                  text-slate-400
                                "
                              >
                                {item}
                              </span>
                            ))}

                          </div>

                        </div>

                      </div>
                    </BorderGlow>
                  </motion.div>
                )}

                {/* =====================
                    EXPERIENCE
                ====================== */}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <BorderGlow
                      {...glowProps}
                      animated={true}
                      className="w-full"
                    >
                      <div
                        className="
                          rounded-[17px]
                          bg-[#0B0E13]
                          p-6
                          sm:p-8
                        "
                      >

                        <div className="flex items-start gap-4">

                          <div
                            className="
                              flex
                              h-11
                              w-11
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-cyan-400/20
                              bg-cyan-400/10
                              text-cyan-300
                            "
                          >
                            <BriefcaseBusiness size={21} />
                          </div>

                          <div className="flex-1">

                            <div
                              className="
                                flex
                                flex-col
                                justify-between
                                gap-2
                                sm:flex-row
                              "
                            >

                              <div>

                                <h3 className="text-xl font-semibold text-white">
                                  Frontend Developer
                                </h3>

                                <p className="mt-1 text-sm text-cyan-400">
                                  Freelance & Personal Projects
                                </p>

                              </div>

                              <span
                                className="
                                  flex
                                  h-fit
                                  w-fit
                                  items-center
                                  gap-2
                                  rounded-md
                                  border
                                  border-white/[0.08]
                                  bg-white/[0.03]
                                  px-3
                                  py-1.5
                                  font-mono
                                  text-xs
                                  text-slate-500
                                "
                              >
                                <Calendar size={13} />

                                Present
                              </span>

                            </div>

                          </div>

                        </div>

                        <div className="mt-7 border-t border-white/[0.07] pt-6">

                          <p className="text-sm leading-7 text-slate-400 sm:text-base">
                            Developing modern and responsive websites and
                            web applications with a strong focus on clean
                            UI, reusable components, performance, and user
                            experience.
                          </p>

                          <div className="mt-7 grid gap-3 sm:grid-cols-2">

                            {[
                              "Responsive Websites",
                              "React Applications",
                              "Landing Pages",
                              "UI/UX Implementation",
                              "API Integration",
                              "Interactive Interfaces",
                            ].map((item) => (
                              <div
                                key={item}
                                className="
                                  flex
                                  items-center
                                  gap-3
                                  rounded-lg
                                  border
                                  border-white/[0.07]
                                  bg-black/20
                                  px-4
                                  py-3
                                "
                              >
                                <CheckCircle2
                                  size={15}
                                  className="shrink-0 text-blue-400"
                                />

                                <span className="text-sm text-slate-300">
                                  {item}
                                </span>
                              </div>
                            ))}

                          </div>

                          <div className="mt-7">

                            <p className="font-mono text-xs uppercase tracking-wider text-slate-600">
                              Technologies Used
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">

                              {[
                                "React.js",
                                "JavaScript",
                                "Tailwind CSS",
                                "Framer Motion",
                                "Git",
                                "REST APIs",
                              ].map((tech) => (
                                <span
                                  key={tech}
                                  className="
                                    rounded-md
                                    border
                                    border-cyan-400/10
                                    bg-cyan-400/[0.04]
                                    px-3
                                    py-1.5
                                    font-mono
                                    text-[11px]
                                    text-slate-400
                                  "
                                >
                                  {tech}
                                </span>
                              ))}

                            </div>

                          </div>

                        </div>

                      </div>
                    </BorderGlow>
                  </motion.div>
                )}

                {/* =====================
                    SKILLS
                ====================== */}

                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >

                    <div className="grid gap-4 sm:grid-cols-2">

                      {skills.map((skill) => {
                        const Icon = skill.icon;

                        return (
                          <BorderGlow
                            key={skill.name}
                            {...glowProps}
                            glowRadius={25}
                            borderRadius={16}
                            glowIntensity={0.65}
                            colors={[
                              "#2563EB",
                              "#22D3EE",
                              "#3B82F6",
                            ]}
                            className="w-full"
                          >
                            <div
                              className="
                                rounded-[15px]
                                bg-[#0B0E13]
                                p-5
                              "
                            >

                              <div className="flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                  <div
                                    className="
                                      flex
                                      h-10
                                      w-10
                                      items-center
                                      justify-center
                                      rounded-lg
                                      border
                                      border-blue-400/10
                                      bg-blue-500/[0.06]
                                    "
                                  >
                                    <Icon
                                      size={19}
                                      className="text-blue-400"
                                    />
                                  </div>

                                  <div>

                                    <h4 className="text-sm font-medium text-white">
                                      {skill.name}
                                    </h4>

                                    <p className="mt-0.5 text-[10px] text-slate-600">
                                      {skill.level}
                                    </p>

                                  </div>

                                </div>

                                <span className="font-mono text-xs text-slate-500">
                                  {skill.percentage}%
                                </span>

                              </div>

                              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/[0.06]">

                                <motion.div
                                  initial={{ width: 0 }}
                                  whileInView={{
                                    width: `${skill.percentage}%`,
                                  }}
                                  viewport={{ once: true }}
                                  transition={{
                                    duration: 0.8,
                                    ease: "easeOut",
                                  }}
                                  className="
                                    h-full
                                    rounded-full
                                    bg-gradient-to-r
                                    from-blue-500
                                    to-cyan-400
                                  "
                                />

                              </div>

                            </div>
                          </BorderGlow>
                        );
                      })}

                    </div>

                    <BorderGlow
                      {...glowProps}
                      glowRadius={25}
                      borderRadius={16}
                      glowIntensity={0.55}
                      className="mt-5 w-full"
                    >
                      <div
                        className="
                          rounded-[15px]
                          bg-[#0B0E13]
                          p-5
                        "
                      >

                        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
                          Also Familiar With
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">

                          {[
                            "REST APIs",
                            "JSON",
                            "React Router",
                            "Responsive Design",
                            "Git Workflow",
                            "Component Architecture",
                          ].map((item) => (
                            <span
                              key={item}
                              className="
                                rounded-md
                                border
                                border-white/[0.07]
                                bg-black/20
                                px-3
                                py-1.5
                                text-xs
                                text-slate-400
                              "
                            >
                              {item}
                            </span>
                          ))}

                        </div>

                      </div>
                    </BorderGlow>

                  </motion.div>
                )}

                {/* =====================
                    TOOLS
                ====================== */}

                {activeTab === "tools" && (
                  <motion.div
                    key="tools"
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >

                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                      {tools.map((tool) => {
                        const Icon = tool.icon;

                        return (
                          <BorderGlow
                            key={tool.name}
                            {...glowProps}
                            glowRadius={22}
                            borderRadius={15}
                            glowIntensity={0.55}
                            className="w-full"
                          >
                            <div
                              className="
                                group
                                flex
                                items-center
                                gap-3
                                rounded-[14px]
                                bg-[#0B0E13]
                                p-4
                              "
                            >

                              <div
                                className="
                                  flex
                                  h-10
                                  w-10
                                  shrink-0
                                  items-center
                                  justify-center
                                  rounded-lg
                                  border
                                  border-white/[0.07]
                                  bg-black/20
                                  text-slate-400
                                  transition-colors
                                  duration-300
                                  group-hover:border-blue-400/20
                                  group-hover:text-blue-400
                                "
                              >
                                <Icon size={19} />
                              </div>

                              <div className="min-w-0">

                                <p className="truncate text-sm font-medium text-slate-200">
                                  {tool.name}
                                </p>

                                <p className="mt-0.5 text-[10px] uppercase tracking-wider text-slate-600">
                                  {tool.category}
                                </p>

                              </div>

                            </div>
                          </BorderGlow>
                        );
                      })}

                    </div>

                    <BorderGlow
                      {...glowProps}
                      glowRadius={25}
                      borderRadius={16}
                      glowIntensity={0.55}
                      className="mt-5 w-full"
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-[15px]
                          bg-[#0B0E13]
                          p-5
                        "
                      >

                        <div
                          className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-blue-500/10
                            text-blue-400
                          "
                        >
                          <Code2 size={19} />
                        </div>

                        <div>

                          <p className="text-sm font-medium text-white">
                            Always learning
                          </p>

                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            Exploring new technologies and improving my
                            development workflow every day.
                          </p>

                        </div>

                      </div>
                    </BorderGlow>

                  </motion.div>
                )}

              </AnimatePresence>

            </div>
          </motion.div>

        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <BorderGlow
            {...glowProps}
            glowRadius={35}
            borderRadius={18}
            glowIntensity={0.6}
            colors={[
              "#2563EB",
              "#22D3EE",
              "#3B82F6",
            ]}
            className="w-full"
          >
            <div
              className="
                flex
                flex-col
                items-center
                justify-between
                gap-5
                rounded-[17px]
                bg-[#0B0E13]
                p-6
                sm:flex-row
                sm:p-7
              "
            >

              <div>

                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-blue-400">
                  Let's build something
                </p>

                <h3 className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  Have a project in mind?
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Let's turn your idea into a modern web experience.
                </p>

              </div>

              <a
                href="#contact"
                className="
                  group
                  flex
                  shrink-0
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-blue-300
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-500/15
                  hover:text-blue-200
                "
              >
                Let's Talk

                <ExternalLink
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

            </div>
          </BorderGlow>
        </motion.div>

      </div>
    </section>
  );
};

export default About;