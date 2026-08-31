import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-5 pt-4 sm:px-6 lg:px-8">

        {/* ================= NAVBAR ================= */}
        <div
          className="
            flex h-[68px] items-center justify-between
            rounded-2xl
            border border-white/10
            bg-[#07070c]/75
            px-4
            backdrop-blur-xl
            sm:px-5
            md:px-6
          "
        >

          {/* ================= LOGO ================= */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-300
              hover:text-purple-400

              sm:text-base
            "
          >
            Muhammad Huzaifa
          </a>


          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">

            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(index)}
                onMouseLeave={() => setHoveredLink(null)}
                className="
                  relative
                  py-2
                  text-sm
                  text-white
                  transition-colors
                  duration-300
                  hover:text-purple-400
                "
              >
                {link.name}

                {/* Animated Underline */}
                <motion.span
                  initial={{
                    width: 0,
                    right: "0%",
                  }}
                  animate={
                    hoveredLink === index
                      ? {
                          width: "100%",
                          right: "0%",
                        }
                      : {
                          width: "0%",
                          right: "100%",
                        }
                  }
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    bottom-0
                    h-[2px]
                    rounded-full
                    bg-purple-400
                  "
                />
              </a>
            ))}

          </div>


          {/* ================= DESKTOP HIRE BUTTON ================= */}
          <a
            href="#contact"
            className="
              group
              hidden
              items-center
              gap-2
              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-violet-500

              px-5
              py-2.5

              text-sm
              font-semibold
              text-black

              transition-all
              duration-300

              hover:-translate-y-1
              hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]

              active:translate-y-0

              sm:flex
            "
          >
            Hire Me

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-lg
              border border-white/10

              text-white

              transition-all
              duration-300

              hover:border-purple-400/50
              hover:bg-purple-400/10
              hover:text-purple-300

              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>


        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                mt-2
                rounded-2xl
                border border-white/10
                bg-[#0b0b12]/95
                p-5
                shadow-2xl
                backdrop-blur-xl
                md:hidden
              "
            >

              <div className="flex flex-col gap-5">

                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="
                      group
                      relative
                      w-fit
                      py-1
                      text-gray-300
                      transition-colors
                      duration-300
                      hover:text-purple-400
                    "
                  >
                    {link.name}

                    {/* Mobile Underline */}
                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[1px]
                        w-0
                        bg-purple-400
                        transition-all
                        duration-300
                        ease-out
                        group-hover:w-full
                      "
                    />
                  </a>
                ))}


                {/* ================= MOBILE HIRE BUTTON ================= */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="
                    group
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2

                    rounded-full

                    bg-gradient-to-r
                    from-cyan-400
                    via-blue-500
                    to-violet-500

                    py-3

                    font-semibold
                    text-black

                    transition-all
                    duration-300

                    hover:-translate-y-1
                    hover:shadow-[0_0_25px_rgba(139,92,246,0.45)]

                    active:translate-y-0
                  "
                >
                  Hire Me

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </a>

              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
};

export default Navbar;