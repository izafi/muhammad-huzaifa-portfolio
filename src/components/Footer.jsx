import React from "react";
import {
  ArrowUpRight,
  Code2,
  Mail,
  MapPin,
  Phone,
  Heart,
} from "lucide-react";

const Footer = () => {
  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Technologies", href: "#technologies" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#05070B]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:py-14 lg:grid-cols-[1.3fr_0.7fr_0.9fr] lg:gap-16 lg:py-16">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10">
                <Code2 size={19} />
              </div>

              <div>
                <h2 className="text-lg font-semibold tracking-tight text-white">
                  Muhammad Huzaifa
                </h2>

                <p className="text-[11px] text-white/35">
                  Frontend Developer
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
              Frontend Developer and Software Engineering student focused on
              building modern, responsive, and interactive web experiences
              using React.js, JavaScript, and Tailwind CSS.
            </p>

            {/* Status */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.025] px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs text-white/45">
                Available for opportunities
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="group flex w-fit items-center gap-1.5 text-sm text-white/40 transition-colors duration-300 hover:text-cyan-400"
                >
                  {link.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-5 space-y-4">
              {/* Email */}
              <a
                href="mailto:your-email@gmail.com"
                className="group flex items-start gap-3"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-cyan-400"
                />

                <span className="text-sm text-white/40 transition-colors duration-300 group-hover:text-white/70">
                  your-email@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+92XXXXXXXXXX"
                className="group flex items-start gap-3"
              >
                <Phone
                  size={16}
                  className="mt-0.5 shrink-0 text-white/30 transition-colors duration-300 group-hover:text-cyan-400"
                />

                <span className="text-sm text-white/40 transition-colors duration-300 group-hover:text-white/70">
                  +92 XXX XXXXXXX
                </span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 shrink-0 text-white/30"
                />

                <span className="text-sm text-white/40">
                  Pakistan
                </span>
              </div>
            </div>

            {/* Contact Button */}
            <a
              href="#contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.025] px-4 py-2.5 text-xs font-medium text-white/60 transition-all duration-300 hover:border-cyan-400/25 hover:bg-cyan-400/[0.06] hover:text-cyan-400"
            >
              Let's Work Together

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 border-t border-white/[0.06] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Muhammad Huzaifa. All rights
            reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-white/30">
            Built with
            <Heart
              size={12}
              className="fill-current text-cyan-400"
            />
            using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;