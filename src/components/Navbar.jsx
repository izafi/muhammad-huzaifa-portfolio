import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-5 lg:px-8 pt-4">
        <div className="h-[68px] px-4 md:px-6 flex items-center justify-between rounded-2xl border border-white/10 bg-[#07070c]/75 backdrop-blur-xl">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="sm:block text-white font-semibold">
              Muhammad Huzaifa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-white hover:text-[#7C60FF] transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full
            bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
            text-black text-sm font-semibold
            hover:-translate-y-0.5 transition-transform duration-300"
          >
            Hire Me
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-lg border border-white/10
            flex items-center justify-center text-white"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 p-5 rounded-2xl border border-white/10
              bg-[#0b0b12]/95 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="text-center py-3 rounded-full
                  bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
                  text-black font-semibold"
                >
                  Hire Me
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