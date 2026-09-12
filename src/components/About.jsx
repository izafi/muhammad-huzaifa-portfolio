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

/* =========================
   TABS
========================= */

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

/* =========================
   SKILLS
========================= */

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

/* =========================
   TOOLS
========================= */

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

/* =========================
   ANIMATION
========================= */

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

/* =========================
   GLOW PROPS
========================= */

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

/* =========================
   ABOUT
========================= */

const About = () => {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#08090B]
        px-4
        py-10
        text-white
        sm:px-6
        sm:py-12
        md:px-8
        md:py-14
        lg:py-16
        xl:py-20
      "
    >
      {/* =========================
          BACKGROUND GLOW
      ========================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          h-[220px]
          w-[220px]
          rounded-full
          bg-blue-500/[0.05]
          blur-[100px]
          sm:h-[280px]
          sm:w-[280px]
          md:h-[350px]
          md:w-[350px]
          md:blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-0
          h-[200px]
          w-[200px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[90px]
          sm:h-[250px]
          sm:w-[250px]
          md:h-[300px]
          md:w-[300px]
          md:blur-[120px]
        "
      />

      {/* =========================
          CONTAINER
      ========================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
        "
      >
        {/* =========================
            SECTION HEADING
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="
            mb-6
            text-center
            sm:mb-7
            md:mb-8
          "
        >
          <div
            className="
              mx-auto
              mb-2.5
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
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-blue-300
              sm:mb-3
              sm:text-[10px]
              sm:tracking-[0.2em]
            "
          >
            <Code2 size={13} />
            About Me
          </div>

          <h2
            className="
              text-2xl
              font-bold
              leading-tight
              tracking-tight
              text-white
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
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
              mt-2.5
              max-w-xl
              px-2
              text-xs
              leading-6
              text-slate-400
              sm:mt-3
              sm:px-0
              sm:text-sm
              sm:leading-7
              md:text-base
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

        <div
          className="
            grid
            grid-cols-1
            gap-5
            md:gap-6
            lg:grid-cols-[250px_minmax(0,1fr)]
            lg:gap-7
            xl:grid-cols-[280px_minmax(0,1fr)]
            xl:gap-8
          "
        >
          {/* =========================
              LEFT PROFILE
          ========================== */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <BorderGlow
              {...glowProps}
              className="w-full"
            >
              <div
                className="
                  rounded-[17px]
                  bg-[#0B0E13]
                  p-4
                  sm:p-5
                  md:p-6
                  lg:p-5
                "
              >
                {/* Avatar */}

                <div
                  className="
                    relative
                    mx-auto
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    border
                    border-blue-400/20
                    bg-blue-500/[0.08]
                    sm:h-28
                    sm:w-28
                    md:h-32
                    md:w-32
                    lg:h-28
                    lg:w-28
                    xl:h-32
                    xl:w-32
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

                  <img
                    src="/muhammad huzaifa.png"
                    alt="Muhammad Huzaifa"
                    className="
                      relative
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </div>

                <div className="mt-4 text-center sm:mt-5">
                  <h3
                    className="
                      text-base
                      font-semibold
                      text-white
                      sm:text-lg
                    "
                  >
                    Muhammad Huzaifa
                  </h3>

                  <p className="mt-1 font-mono text-[11px] text-cyan-400 sm:text-xs">
                    Frontend Developer
                  </p>
                </div>

                <div
                  className="
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-2
                    text-[11px]
                    text-slate-500
                    sm:mt-5
                    sm:text-xs
                  "
                >
                  <MapPin
                    size={14}
                    className="shrink-0 text-blue-400"
                  />

                  Pakistan
                </div>

                <div
                  className="
                    mt-4
                    border-t
                    border-white/[0.07]
                    pt-4
                    sm:mt-5
                    sm:pt-5
                  "
                >
                  <p
                    className="
                      text-center
                      text-[11px]
                      leading-5
                      text-slate-500
                      sm:text-xs
                      sm:leading-6
                    "
                  >
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
                    mt-4
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-lg
                    bg-blue-500
                    px-3
                    py-2.5
                    text-xs
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-blue-600
                    sm:mt-5
                    sm:px-4
                    sm:py-3
                    sm:text-sm
                  "
                >
                  <Download size={15} />
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
            className="min-w-0 w-full"
          >
            {/* =========================
                TABS
            ========================== */}

            <div
              className="
                mb-4
                w-full
                overflow-x-auto
                rounded-xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-1
                sm:mb-5
                sm:p-1.5
                md:mb-6
              "
            >
              <div className="flex min-w-max gap-1">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        relative
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-lg
                        px-2.5
                        py-2
                        text-[10px]
                        font-medium
                        transition-all
                        duration-300
                        sm:gap-2
                        sm:px-3
                        sm:py-2.5
                        sm:text-xs
                        md:px-4
                        md:text-sm
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
                        size={14}
                        className={`
                          relative
                          z-10
                          shrink-0
                          sm:size-[15px]
                          ${
                            isActive
                              ? "text-cyan-400"
                              : "text-slate-500"
                          }
                        `}
                      />

                      <span className="relative z-10 whitespace-nowrap">
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

            <div className="min-h-0 w-full">
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
                    className="w-full"
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
                          p-4
                          sm:p-6
                          md:p-7
                          lg:p-8
                        "
                      >
                        <div
                          className="
                            flex
                            flex-col
                            gap-4
                            sm:gap-5
                            md:flex-row
                            md:items-start
                            md:justify-between
                          "
                        >
                          <div className="min-w-0">
                            <div
                              className="
                                mb-3
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-blue-400/20
                                bg-blue-500/10
                                text-blue-300
                                sm:mb-4
                                sm:h-11
                                sm:w-11
                              "
                            >
                              <GraduationCap size={21} />
                            </div>

                            <h3
                              className="
                                text-lg
                                font-semibold
                                leading-tight
                                text-white
                                sm:text-xl
                                md:text-2xl
                              "
                            >
                              BS Software Engineering
                            </h3>

                            <p className="mt-2 text-xs font-medium text-cyan-400 sm:text-sm">
                              University of Sargodha
                            </p>
                          </div>

                          <div
                            className="
                              flex
                              w-fit
                              shrink-0
                              items-center
                              gap-2
                              rounded-md
                              border
                              border-white/[0.08]
                              bg-white/[0.03]
                              px-2.5
                              py-1.5
                              font-mono
                              text-[10px]
                              text-slate-400
                              sm:px-3
                              sm:text-xs
                            "
                          >
                            <Calendar size={12} />
                            2024 — 2028
                          </div>
                        </div>

                        <div
                          className="
                            mt-5
                            grid
                            grid-cols-1
                            gap-3
                            sm:mt-6
                            sm:grid-cols-2
                            sm:gap-4
                          "
                        >
                          <div
                            className="
                              rounded-xl
                              border
                              border-white/[0.07]
                              bg-black/20
                              p-3.5
                              sm:p-4
                            "
                          >
                            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-600 sm:text-[10px]">
                              Location
                            </p>

                            <p className="mt-2 flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                              <MapPin
                                size={14}
                                className="shrink-0 text-blue-400"
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
                              p-3.5
                              sm:p-4
                            "
                          >
                            <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-600 sm:text-[10px]">
                              Status
                            </p>

                            <p className="mt-2 flex items-center gap-2 text-xs text-slate-300 sm:text-sm">
                              <CheckCircle2
                                size={14}
                                className="shrink-0 text-cyan-400"
                              />
                              Currently Studying
                            </p>
                          </div>
                        </div>

                        <p
                          className="
                            mt-5
                            text-xs
                            leading-6
                            text-slate-400
                            sm:mt-6
                            sm:text-sm
                            sm:leading-7
                            md:text-base
                          "
                        >
                          Currently pursuing a Bachelor's degree in
                          Software Engineering with a strong interest in
                          frontend development, software architecture,
                          databases, algorithms, and modern web
                          technologies.
                        </p>

                        <div
                          className="
                            mt-5
                            border-t
                            border-white/[0.07]
                            pt-5
                            sm:mt-6
                            sm:pt-6
                          "
                        >
                          <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600 sm:text-xs">
                            Current Focus
                          </p>

                          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
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
                                  px-2.5
                                  py-1.5
                                  text-[10px]
                                  text-slate-400
                                  sm:px-3
                                  sm:text-xs
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
                    className="w-full"
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
                          p-4
                          sm:p-6
                          md:p-7
                          lg:p-8
                        "
                      >
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div
                            className="
                              flex
                              h-10
                              w-10
                              shrink-0
                              items-center
                              justify-center
                              rounded-xl
                              border
                              border-cyan-400/20
                              bg-cyan-400/10
                              text-cyan-300
                              sm:h-11
                              sm:w-11
                            "
                          >
                            <BriefcaseBusiness size={20} />
                          </div>

                          <div className="min-w-0 flex-1">
                            <div
                              className="
                                flex
                                flex-col
                                justify-between
                                gap-3
                                sm:gap-2
                                md:flex-row
                              "
                            >
                              <div className="min-w-0">
                                <h3
                                  className="
                                    text-lg
                                    font-semibold
                                    text-white
                                    sm:text-xl
                                  "
                                >
                                  Frontend Developer
                                </h3>

                                <p className="mt-1 text-xs text-cyan-400 sm:text-sm">
                                  Freelance & Personal Projects
                                </p>
                              </div>

                              <span
                                className="
                                  flex
                                  h-fit
                                  w-fit
                                  shrink-0
                                  items-center
                                  gap-2
                                  rounded-md
                                  border
                                  border-white/[0.08]
                                  bg-white/[0.03]
                                  px-2.5
                                  py-1.5
                                  font-mono
                                  text-[10px]
                                  text-slate-500
                                  sm:px-3
                                  sm:text-xs
                                "
                              >
                                <Calendar size={12} />
                                Present
                              </span>
                            </div>
                          </div>
                        </div>

                        <div
                          className="
                            mt-5
                            border-t
                            border-white/[0.07]
                            pt-5
                            sm:mt-6
                            sm:pt-6
                          "
                        >
                          <p
                            className="
                              text-xs
                              leading-6
                              text-slate-400
                              sm:text-sm
                              sm:leading-7
                              md:text-base
                            "
                          >
                            Developing modern and responsive websites and
                            web applications with a strong focus on clean
                            UI, reusable components, performance, and user
                            experience.
                          </p>

                          <div
                            className="
                              mt-5
                              grid
                              grid-cols-1
                              gap-2.5
                              sm:mt-6
                              sm:grid-cols-2
                              sm:gap-3
                            "
                          >
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
                                  gap-2.5
                                  rounded-lg
                                  border
                                  border-white/[0.07]
                                  bg-black/20
                                  px-3
                                  py-2.5
                                  sm:gap-3
                                  sm:px-4
                                  sm:py-3
                                "
                              >
                                <CheckCircle2
                                  size={14}
                                  className="shrink-0 text-blue-400"
                                />

                                <span className="text-xs text-slate-300 sm:text-sm">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>

                          <div className="mt-5 sm:mt-6">
                            <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600 sm:text-xs">
                              Technologies Used
                            </p>

                            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
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
                                    px-2.5
                                    py-1.5
                                    font-mono
                                    text-[10px]
                                    text-slate-400
                                    sm:px-3
                                    sm:text-[11px]
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
                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-3
                        sm:grid-cols-2
                        sm:gap-4
                      "
                    >
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
                                p-4
                                sm:p-5
                              "
                            >
                              <div className="flex items-center justify-between gap-3">
                                <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                                  <div
                                    className="
                                      flex
                                      h-9
                                      w-9
                                      shrink-0
                                      items-center
                                      justify-center
                                      rounded-lg
                                      border
                                      border-blue-400/10
                                      bg-blue-500/[0.06]
                                      sm:h-10
                                      sm:w-10
                                    "
                                  >
                                    <Icon
                                      size={18}
                                      className="text-blue-400"
                                    />
                                  </div>

                                  <div className="min-w-0">
                                    <h4 className="truncate text-xs font-medium text-white sm:text-sm">
                                      {skill.name}
                                    </h4>

                                    <p className="mt-0.5 text-[9px] text-slate-600 sm:text-[10px]">
                                      {skill.level}
                                    </p>
                                  </div>
                                </div>

                                <span className="shrink-0 font-mono text-[10px] text-slate-500 sm:text-xs">
                                  {skill.percentage}%
                                </span>
                              </div>

                              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/[0.06] sm:mt-4">
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
                      className="mt-4 w-full sm:mt-5"
                    >
                      <div
                        className="
                          rounded-[15px]
                          bg-[#0B0E13]
                          p-4
                          sm:p-5
                        "
                      >
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-600 sm:text-[10px]">
                          Also Familiar With
                        </p>

                        <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
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
                                px-2.5
                                py-1.5
                                text-[10px]
                                text-slate-400
                                sm:px-3
                                sm:text-xs
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
                    <div
                      className="
                        grid
                        grid-cols-1
                        gap-2.5
                        sm:grid-cols-2
                        sm:gap-3
                        md:grid-cols-2
                        lg:grid-cols-3
                      "
                    >
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
                                gap-2.5
                                rounded-[14px]
                                bg-[#0B0E13]
                                p-3.5
                                sm:gap-3
                                sm:p-4
                              "
                            >
                              <div
                                className="
                                  flex
                                  h-9
                                  w-9
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
                                  sm:h-10
                                  sm:w-10
                                "
                              >
                                <Icon size={18} />
                              </div>

                              <div className="min-w-0">
                                <p className="truncate text-xs font-medium text-slate-200 sm:text-sm">
                                  {tool.name}
                                </p>

                                <p className="mt-0.5 truncate text-[9px] uppercase tracking-wider text-slate-600 sm:text-[10px]">
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
                      className="mt-4 w-full sm:mt-5"
                    >
                      <div
                        className="
                          flex
                          items-start
                          gap-3
                          rounded-[15px]
                          bg-[#0B0E13]
                          p-4
                          sm:p-5
                        "
                      >
                        <div
                          className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-blue-500/10
                            text-blue-400
                            sm:h-10
                            sm:w-10
                          "
                        >
                          <Code2 size={18} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-white sm:text-sm">
                            Always learning
                          </p>

                          <p className="mt-1 text-[10px] leading-5 text-slate-500 sm:text-xs">
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
          className="
            mt-6
            sm:mt-7
            md:mt-8
          "
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
                gap-4
                rounded-[17px]
                bg-[#0B0E13]
                p-4
                text-center
                sm:p-5
                md:flex-row
                md:gap-5
                md:p-6
                md:text-left
              "
            >
              <div className="min-w-0">
                <p
                  className="
                    font-mono
                    text-[9px]
                    uppercase
                    tracking-[0.16em]
                    text-blue-400
                    sm:text-[10px]
                    sm:tracking-[0.18em]
                  "
                >
                  Let's build something
                </p>

                <h3
                  className="
                    mt-1.5
                    text-base
                    font-semibold
                    text-white
                    sm:mt-2
                    sm:text-lg
                    md:text-xl
                  "
                >
                  Have a project in mind?
                </h3>

                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  Let's turn your idea into a modern web experience.
                </p>
              </div>

              <a
                href="#contact"
                className="
                  group
                  flex
                  w-full
                  shrink-0
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-blue-400/20
                  bg-blue-500/10
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-blue-300
                  transition-all
                  duration-300
                  hover:border-blue-400/40
                  hover:bg-blue-500/15
                  hover:text-blue-200
                  sm:w-fit
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
              >
                Let's Talk

                <ExternalLink
                  size={14}
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