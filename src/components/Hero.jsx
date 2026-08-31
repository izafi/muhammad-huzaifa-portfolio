import React from "react";

import DotField from "./DotField";
import CodePanel from "./CodePanel";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>

      {/* Hero Content */}
      <section className="relative z-10 flex min-h-screen items-center pt-8">

        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-16 px-5 py-20 lg:flex-row lg:gap-10 lg:px-8">

          {/* Left Content */}
          <div className="w-full text-center lg:w-[55%] lg:text-left">

            <p className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-purple-400">
              Frontend Developer
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
              Hello, I'm{" "}
              <span className="text-purple-400">
                Huzaifa
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              I’m a Frontend Developer with a Software Engineering background, passionate about creating modern, responsive, and user-friendly web applications. I specialize in turning designs and ideas into functional digital experiences using React.js, JavaScript, Tailwind CSS, and modern web technologies.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 lg:justify-start lg:flex-row">

              <button className="rounded-full bg-purple-500 px-7 py-3 font-semibold text-white transition hover:bg-purple-600 cursor-pointer">
                View My Work
              </button>

              <button className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition cursor-pointer hover:bg-white/10">
                Contact Me
              </button>

            </div>

          </div>

          {/* Right Code Panel */}
          <div className="w-full lg:w-[45%] hidden lg:block">
            <CodePanel />
          </div>

        </div>

      </section>
    </div>
  );
};

export default Hero;