import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (name) => {
    setActiveLink(name);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">

        {/* NAVBAR */}
        <div
          className="
            flex h-[68px] items-center justify-between
            rounded-xl
            border border-white/[0.08]
            bg-[#090B0F]/90
            px-4
            shadow-[0_10px_40px_rgba(0,0,0,0.25)]
            backdrop-blur-xl
            sm:px-5
            md:px-6
          "
        >

          {/* LOGO */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="group flex items-center gap-3"
          >
            {/* MH */}
            <div
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                border border-blue-400/20
                bg-blue-500/10
                text-sm font-bold
                text-blue-400
                transition-all duration-300
                group-hover:border-blue-400/40
                group-hover:bg-blue-500/15
              "
            >
              MH
            </div>

            {/* NAME */}
            <div className="hidden sm:block">
              <p className="text-sm font-semibold tracking-wide text-white">
                Muhammad Huzaifa
              </p>

              <p className="mt-0.5 font-mono text-[10px] tracking-wider text-slate-500">
                FRONTEND.DEV
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = activeLink === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  className={`
                    relative rounded-lg
                    px-3.5 py-2
                    text-sm
                    transition-all duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-100"
                    }
                  `}
                >
                  {link.name}

                  {/* ACTIVE LINE */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="
                        absolute
                        bottom-0.5
                        left-1/2
                        h-[2px]
                        w-4
                        -translate-x-1/2
                        rounded-full
                        bg-blue-400
                      "
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* DESKTOP CTA */}
          <a
            href="#contact"
            onClick={() => handleNavClick("Contact")}
            className="
              group hidden
              items-center gap-2
              rounded-lg
              border border-blue-400/20
              bg-blue-500/10
              px-4 py-2.5
              text-sm font-medium
              text-blue-300
              transition-all duration-300
              hover:border-blue-400/40
              hover:bg-blue-500/15
              hover:text-blue-200
              sm:flex
            "
          >
            Let's Talk

            <ArrowUpRight
              size={15}
              className="
                transition-transform duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg
              border border-white/10
              bg-white/[0.03]
              text-slate-300
              transition-all duration-300
              hover:border-blue-400/30
              hover:bg-blue-500/10
              hover:text-blue-300
              md:hidden
            "
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="
                mt-2
                rounded-xl
                border border-white/[0.08]
                bg-[#090B0F]/95
                p-4
                shadow-[0_20px_50px_rgba(0,0,0,0.35)]
                backdrop-blur-xl
                md:hidden
              "
            >
              <div className="flex flex-col gap-1">

                {/* MOBILE LINKS */}
                {navLinks.map((link) => {
                  const isActive = activeLink === link.name;

                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => handleNavClick(link.name)}
                      className={`
                        flex items-center justify-between
                        rounded-lg
                        px-4 py-3
                        text-sm
                        transition-all duration-300
                        ${
                          isActive
                            ? "bg-blue-500/10 text-blue-300"
                            : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                        }
                      `}
                    >
                      <span>{link.name}</span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                      )}
                    </a>
                  );
                })}

                {/* MOBILE CTA */}
                <a
                  href="#contact"
                  onClick={() => handleNavClick("Contact")}
                  className="
                    group mt-3
                    flex items-center justify-center gap-2
                    rounded-lg
                    bg-blue-500
                    px-4 py-3
                    text-sm font-semibold
                    text-white
                    transition-all duration-300
                    hover:bg-blue-600
                  "
                >
                  Let's Talk

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
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