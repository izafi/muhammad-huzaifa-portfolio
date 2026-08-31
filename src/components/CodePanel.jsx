import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const codeSnippets = [
  {
    file: "Developer.jsx",
    language: "React",
    code: `function Developer() {
  const stack = [
    "React",
    "JavaScript",
    "Tailwind CSS"
  ];

  return (
    <Website
      responsive
      seoFriendly
      modern
    />
  );
}`,
  },

  {
    file: "Portfolio.js",
    language: "JavaScript",
    code: `const developer = {
  name: "Muhammad Huzaifa",
  role: "Frontend Developer",
  skills: [
    "React.js",
    "JavaScript",
    "Tailwind CSS"
  ],
  available: true
};`,
  },

  {
    file: "styles.css",
    language: "Tailwind CSS",
    code: `.portfolio {
  @apply min-h-screen;
  @apply bg-black;
  @apply text-white;
}

.hero {
  @apply flex;
  @apply items-center;
  @apply justify-center;
}`,
  },
];

const CodePanel = () => {
  const [snippetIndex, setSnippetIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSnippet = codeSnippets[snippetIndex];
  const fullCode = currentSnippet.code;

  useEffect(() => {
    const typingSpeed = isDeleting ? 15 : 20;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayedCode.length < fullCode.length) {
          setDisplayedCode(fullCode.slice(0, displayedCode.length + 1));
        } else {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      } else {
        if (displayedCode.length > 0) {
          setDisplayedCode(displayedCode.slice(0, -1));
        } else {
          setIsDeleting(false);

          setSnippetIndex(
            (prevIndex) => (prevIndex + 1) % codeSnippets.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedCode, isDeleting, fullCode]);

  return (
    <div className="relative mx-auto w-full max-w-4xl px-4">
      {/* Floating Tech Badges */}

     {/* React */}
<motion.div
  animate={{
    y: [0, -15, 0, 12, 0],
    rotate: [0, 2, -2, 1, 0],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute -left-6 bottom-2 z-20 rounded-2xl border border-white/10 bg-[#171922]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:-left-10">   
  <span className="text-xl text-[#61DAFB]">⚛</span>

  <span className="ml-3 font-mono font-bold text-white">
    React.js
  </span>
</motion.div>


{/* Tailwind CSS */}
<motion.div
  animate={{
    y: [0, 12, 0, -10, 0],
    rotate: [0, -2, 2, -1, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.5,
  }}
  className="absolute -left-4 top-[65%] z-20 rounded-2xl border border-white/10 bg-[#171922]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:-left-5"
>
  <span className="font-bold text-cyan-300">
    TW
  </span>

  <span className="ml-3 font-mono font-bold text-white">
    Tailwind CSS
  </span>
</motion.div>


{/* JavaScript */}
<motion.div
  animate={{
    y: [0, -12, 0, 15, 0],
    rotate: [0, 2, -1, 2, 0],
  }}
  transition={{
    duration: 5.5,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1,
  }}
  className="absolute -right-4 -bottom-8 z-20 rounded-2xl border border-white/10 bg-[#171922]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:-right-10"
>
  <span className="font-bold text-yellow-300">
    JS
  </span>

  <span className="ml-3 font-mono font-bold text-white">
    JavaScript
  </span>
</motion.div>


{/* HTML5 */}
<motion.div
  animate={{
    y: [0, -10, 0, 14, 0],
    rotate: [0, -2, 1, -2, 0],
  }}
  transition={{
    duration: 5.8,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 0.8,
  }}
  className="absolute -right-3 top-8 z-20 rounded-2xl border border-white/10 bg-[#171922]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:-right-10"
>
  <span className="font-bold text-orange-400">
    HTML5
  </span>
</motion.div>


{/* CSS3 */}
<motion.div
  animate={{
    y: [0, 13, 0, -12, 0],
    rotate: [0, 2, -2, 1, 0],
  }}
  transition={{
    duration: 6.2,
    repeat: Infinity,
    ease: "easeInOut",
    delay: 1.2,
  }}
  className="absolute right-8 top-1/2 z-20 rounded-2xl border border-white/10 bg-[#171922]/80 px-5 py-4 shadow-xl backdrop-blur-xl md:-right-3"
>
  <span className="font-bold text-blue-400">
    CSS3
  </span>
</motion.div>

      {/* Code Window */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#111522]/90 shadow-2xl backdrop-blur-xl">
        
        {/* Window Header */}

        <div className="flex items-center gap-3 border-b border-white/10 px-6 py-5">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>

          <span className="ml-4 font-mono text-sm font-semibold tracking-wide text-gray-400 sm:text-base">
            {currentSnippet.file}
          </span>
        </div>

        {/* Code Area */}

        <div className="min-h-[420px] p-6 sm:p-10">
          <pre className="whitespace-pre-wrap break-words font-mono text-sm leading-8 text-gray-300 sm:text-lg">
            <code>{displayedCode}</code>

            <span className="ml-1 inline-block h-5 w-[2px] animate-pulse bg-cyan-300 align-middle"></span>
          </pre>
        </div>

        {/* Bottom Glow */}

        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
    </div>
  );
};

export default CodePanel;