import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Code2,
  Terminal,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import DotField from "./DotField";
import CodePanel from "./CodePanel";

const roles = [
  "Frontend Developer",
  "React.js Developer",
  "JavaScript Developer",
  "UI/UX Enthusiast",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#08090B]
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none absolute inset-0 z-0">
        <DotField
          dotRadius={1.3}
          dotSpacing={15}
          bulgeStrength={55}
          glowRadius={150}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={450}
          cursorForce={0.08}
          bulgeOnly
          gradientFrom="#2563EB"
          gradientTo="#22D3EE"
          glowColor="#08090B"
        />
      </div>

      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/4
          top-1/2
          h-[350px]
          w-[350px]
          -translate-y-1/2
          rounded-full
          bg-blue-500/[0.06]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-1/4
          top-1/3
          h-[300px]
          w-[300px]
          rounded-full
          bg-cyan-400/[0.04]
          blur-[110px]
        "
      />

      {/* ================= HERO CONTENT ================= */}

      <div className="relative z-10 flex min-h-screen items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            flex-col
            items-center
            justify-center
            gap-12
            px-5
            pb-16
            pt-32
            sm:px-6
            sm:pb-20
            sm:pt-36
            md:gap-14
            md:px-8
            lg:flex-row
            lg:justify-between
            lg:gap-12
            lg:px-8
            xl:px-10
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              w-full
              text-center
              lg:w-[55%]
              lg:text-left
            "
          >
            {/* Developer Badge */}

            <motion.div variants={itemVariants}>
              <div
                className="
                  mx-auto
                  flex
                  w-fit
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-blue-400/20
                  bg-blue-500/[0.06]
                  px-3.5
                  py-2
                  font-mono
                  text-[11px]
                  font-medium
                  text-blue-300
                  sm:text-xs
                  lg:mx-0
                "
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full
                      animate-ping
                      rounded-full
                      bg-cyan-400
                      opacity-60
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex
                      h-2
                      w-2
                      rounded-full
                      bg-cyan-400
                    "
                  />
                </span>

                Available for opportunities
              </div>
            </motion.div>

            {/* ================= MAIN HEADING ================= */}

            <motion.h1
              variants={itemVariants}
              className="
                mt-6
                text-4xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-white
                sm:text-5xl
                md:text-6xl
                lg:mt-7
                lg:text-6xl
                xl:text-7xl
              "
            >
              Building digital
              <br />

              <span className="text-slate-300">
                experiences that
              </span>

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-blue-400
                  via-cyan-300
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                feel modern.
              </span>
            </motion.h1>

            {/* ================= ROLE ================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                lg:justify-start
              "
            >
              <div className="h-px w-8 bg-blue-400/60" />

              <div className="flex items-center gap-2">
                <Code2
                  size={15}
                  className="text-cyan-400"
                />

                <div className="relative h-5 overflow-hidden sm:h-6">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={roles[roleIndex]}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -15,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                      className="
                        block
                        font-mono
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-cyan-300
                        sm:text-sm
                        sm:tracking-[0.22em]
                      "
                    >
                      {roles[roleIndex]}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            {/* ================= DESCRIPTION ================= */}

            <motion.p
              variants={itemVariants}
              className="
                mx-auto
                mt-6
                max-w-xl
                text-sm
                leading-7
                text-slate-400
                sm:text-base
                sm:leading-7
                md:text-lg
                lg:mx-0
              "
            >
              I'm a Frontend Developer and Software Engineering
              student focused on building responsive, interactive,
              and user-friendly web applications using React.js,
              JavaScript, Tailwind CSS, and modern web technologies.
            </motion.p>

            {/* ================= TECH STACK MINI BADGES ================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-6
                flex
                flex-wrap
                items-center
                justify-center
                gap-2
                lg:justify-start
              "
            >
              {[
                "React.js",
                "JavaScript",
                "Tailwind CSS",
                "Framer Motion",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-md
                    border
                    border-white/[0.08]
                    bg-white/[0.03]
                    px-2.5
                    py-1.5
                    font-mono
                    text-[10px]
                    text-slate-400
                    transition-colors
                    duration-300
                    hover:border-blue-400/30
                    hover:text-blue-300
                    sm:text-[11px]
                  "
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* ================= BUTTONS ================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
                lg:justify-start
              "
            >
              {/* View Projects */}

              <a
                href="#projects"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-blue-500
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-600
                  hover:shadow-[0_10px_30px_rgba(59,130,246,0.20)]
                  sm:w-auto
                "
              >
                View My Work

                <ArrowUpRight
                  size={17}
                  strokeWidth={2.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* Contact */}

              <a
                href="#contact"
                className="
                  group
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-slate-200
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-cyan-400/30
                  hover:bg-cyan-400/[0.05]
                  hover:text-cyan-300
                  sm:w-auto
                "
              >
                <Mail
                  size={17}
                  strokeWidth={2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                  "
                />

                Contact Me
              </a>
            </motion.div>

            {/* ================= SOCIAL / CODE LINE ================= */}

            <motion.div
              variants={itemVariants}
              className="
                mt-8
                flex
                items-center
                justify-center
                gap-4
                lg:justify-start
              "
            >
             <a
  href="https://github.com/izafi"
  target="_blank"
  rel="noreferrer"
  className="
    flex
    items-center
    gap-2
    font-mono
    text-xs
    text-slate-500
    transition-colors
    duration-300
    hover:text-white
  "
>
  <FaGithub size={15} />
  GitHub
</a>
              <span className="h-3 w-px bg-white/10" />

              <span
                className="
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-xs
                  text-slate-500
                "
              >
                <Terminal size={14} />

                clean.code
              </span>
            </motion.div>
          </div>

          {/* ================= RIGHT CODE PANEL ================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="
              hidden
              w-full
              lg:block
              lg:w-[45%]
              xl:w-[43%]
            "
          >
            <div className="relative">

              {/* Small label */}

              <div
                className="
                  absolute
                  -top-4
                  left-6
                  z-20
                  flex
                  items-center
                  gap-2
                  rounded-md
                  border
                  border-white/[0.08]
                  bg-[#08090B]
                  px-3
                  py-1.5
                  font-mono
                  text-[10px]
                  text-slate-500
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                developer.config
              </div>

              <CodePanel />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= BOTTOM SCROLL INDICATOR ================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
          duration: 0.6,
        }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          items-center
          gap-3
          font-mono
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-slate-600
          sm:flex
        "
      >
        <span className="h-px w-6 bg-white/10" />

        Scroll to explore

        <span className="h-px w-6 bg-white/10" />
      </motion.div>
    </section>
  );
};

export default Hero;