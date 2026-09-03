import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
  Code2,
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "huzaifazafi156@gmail.com",
      link: "mailto:huzaifazafi156@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 324 8808971",
      link: "tel:+923248808971",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan",
      link: "https://maps.app.goo.gl/ycSAgxvuzyyxzpze8",
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070A0F] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center sm:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something
            <span className="text-cyan-400"> Great</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-white/45 sm:text-base">
            Have a project in mind, a question, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="mb-8">
              <p className="mb-2 text-sm font-medium text-cyan-400">
                Contact Me
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Let's talk about your project.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                I'm always open to discussing new projects, creative ideas,
                frontend opportunities, and collaborations.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="group flex items-center gap-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/[0.03]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.03] text-white/45 transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10 group-hover:text-cyan-400">
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-white/30">
                        {item.title}
                      </p>

                      <p className="mt-1 truncate text-sm text-white/75">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="ml-auto shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-400"
                    />
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t border-white/[0.06] pt-6">
              <p className="mb-4 text-xs uppercase tracking-wider text-white/30">
                Find me online
              </p>

              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com/izafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-white/45 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <Code2
                    size={17}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhammadhuzaifailyas05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.025] text-white/45 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  <span className="text-sm font-bold transition-transform duration-300 group-hover:scale-110">
                    in
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8"
          >
            <form className="space-y-5">
              {/* Name + Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-medium text-white/55">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="Muhammad Huzaifa"
                    className="w-full rounded-xl border border-white/[0.07] bg-[#0B0E13] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-medium text-white/55">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-white/[0.07] bg-[#0B0E13] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Let's work together"
                  className="w-full rounded-xl border border-white/[0.07] bg-[#0B0E13] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-xs font-medium text-white/55">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me a little about your project..."
                  className="w-full resize-none rounded-xl border border-white/[0.07] bg-[#0B0E13] px-4 py-3 text-sm text-white outline-none placeholder:text-white/20 transition-all duration-300 focus:border-cyan-400/40 focus:ring-1 focus:ring-cyan-400/10"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563EB] px-5 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#22D3EE] hover:text-[#071018] hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
              >
                Send Message

                <Send
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-5 text-center sm:p-6"
        >
          <p className="text-sm text-white/45">
            Looking for a frontend developer for your next project?
          </p>

          <p className="mt-2 text-sm font-medium text-white">
            Let's turn your idea into a modern digital experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;