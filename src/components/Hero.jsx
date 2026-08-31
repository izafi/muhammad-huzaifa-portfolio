import React from "react";
import DotField from "./DotField";
import CodePanel from "./CodePanel";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Full Screen Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
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
      <section className="relative z-10 flex min-h-screen items-center">

        <div
          className="
            mx-auto flex w-full max-w-7xl flex-col
            items-center justify-center
            gap-12
            px-5 py-20

            sm:px-6 sm:py-24

            md:gap-14 md:px-8 md:py-24

            lg:flex-row
            lg:justify-between
            lg:gap-10
            lg:px-8
            lg:py-30

            xl:px-10
          "
        >

          {/* Left Content */}
          <div
            className="
              w-full
              text-center

              md:max-w-3xl

              lg:w-[55%]
              lg:max-w-none
              lg:text-left
            "
          >

            {/* Role */}
            <p
              className="
                mb-4
                font-mono
                text-xs
                font-semibold
                uppercase
                tracking-[0.25em]
                text-cyan-300

                sm:text-sm
                sm:tracking-[0.3em]
              "
            >
              Frontend Developer
            </p>

            {/* Heading */}
            <h1
              className="
                text-4xl
                font-bold
                leading-tight
                text-white

                sm:text-5xl
                md:text-6xl
                lg:text-6xl
                xl:text-7xl
              "
            >
              Hello, I'm{" "}
              <span className="text-purple-400">
                Huzaifa
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-gray-400

                sm:mt-6
                sm:text-base
                sm:leading-7

                md:text-lg

                lg:mx-0
                lg:text-lg
              "
            >
              I’m a Frontend Developer with a Software Engineering
              background, passionate about creating modern, responsive,
              and user-friendly web applications. I specialize in
              turning designs and ideas into functional digital
              experiences using React.js, JavaScript, Tailwind CSS,
              and modern web technologies.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-7
                flex
                flex-col
                items-center
                justify-center
                gap-3

                sm:mt-8
                sm:flex-row

                lg:justify-start
              "
            >
              <button
                className="
                  w-full
                  rounded-full
                  bg-purple-500
                  px-7
                  py-3
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-purple-600
                  cursor-pointer

                  sm:w-auto
                "
              >
                View My Work
              </button>

              <button
                className="
                  w-full
                  rounded-full
                  border
                  border-white/20
                  px-7
                  py-3
                  font-semibold
                  text-white
                  transition
                  duration-300
                  hover:bg-white/10
                  cursor-pointer

                  sm:w-auto
                "
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Code Panel */}
          <div
            className="
              hidden
              lg:block
              lg:w-[45%]
              xl:w-[45%]
            "
          >
            <CodePanel />
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;