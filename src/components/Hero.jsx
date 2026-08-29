import React from "react";
import DotField from "./DotField";

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
      <section className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-center text-[72px] font-bold text-white">
          Hello, I'm Huzaifa
        </h1>
      </section>

    </div>
  );
};

export default Hero;