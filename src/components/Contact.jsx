import React, { useState } from "react";
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
  // ================= CONTACT INFO =================
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

  // ================= FORM STATE =================
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ================= HANDLE SUBMIT =================
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    const mailtoLink = `mailto:huzaifazafi156@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#070A0F] px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      {/* ================= BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-2xl text-center sm:mb-10"
        >
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Let's Build Something
            <span className="text-cyan-400"> Great</span>
          </h2>

          <p className="mt-3 text-sm leading-6 text-white/45 sm:text-base">
            Have a project in mind, a question, or just want to say hello?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </motion.div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================= LEFT SIDE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-5
              sm:p-6
            "
          >
            <div className="mb-6">
              <p className="mb-1.5 text-xs font-medium text-cyan-400">
                Contact Me
              </p>

              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Let's talk about your project.
              </h3>

              <p className="mt-2 text-xs leading-5 text-white/40 sm:text-sm">
                I'm always open to discussing new projects, creative ideas,
                frontend opportunities, and collaborations.
              </p>
            </div>

            {/* ================= CONTACT INFORMATION ================= */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/[0.05]
                      bg-white/[0.02]
                      p-3
                      transition-all
                      duration-300
                      hover:border-cyan-400/20
                      hover:bg-cyan-400/[0.03]
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        border
                        border-white/[0.06]
                        bg-white/[0.03]
                        text-white/45
                        transition-all
                        duration-300
                        group-hover:border-cyan-400/20
                        group-hover:bg-cyan-400/10
                        group-hover:text-cyan-400
                      "
                    >
                      <Icon size={17} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] text-white/30">
                        {item.title}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-white/75 sm:text-sm">
                        {item.value}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={15}
                      className="
                        ml-auto
                        shrink-0
                        text-white/20
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-cyan-400
                      "
                    />
                  </a>
                );
              })}
            </div>

            {/* ================= SOCIAL LINKS ================= */}
            <div className="mt-6 border-t border-white/[0.06] pt-5">
              <p className="mb-3 text-[11px] uppercase tracking-wider text-white/30">
                Find me online
              </p>

              <div className="flex gap-2.5">

                {/* GitHub */}
                <a
                  href="https://github.com/izafi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-white/45
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/10
                    hover:text-cyan-400
                  "
                >
                  <Code2
                    size={16}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/muhammadhuzaifailyas05/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    group
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-white/[0.025]
                    text-white/45
                    transition-all
                    duration-300
                    hover:border-cyan-400/30
                    hover:bg-cyan-400/10
                    hover:text-cyan-400
                  "
                >
                  <span className="text-xs font-bold transition-transform duration-300 group-hover:scale-110">
                    in
                  </span>
                </a>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE FORM ================= */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              rounded-2xl
              border
              border-white/[0.07]
              bg-white/[0.025]
              p-5
              sm:p-6
            "
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-3.5"
            >

              {/* ================= NAME + EMAIL ================= */}
              <div className="grid gap-3 sm:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[11px] font-medium text-white/55"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Muhammad Huzaifa"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-[#0B0E13]
                      px-3.5
                      py-2.5
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-cyan-400/40
                      focus:ring-1
                      focus:ring-cyan-400/10
                    "
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[11px] font-medium text-white/55"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="
                      w-full
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-[#0B0E13]
                      px-3.5
                      py-2.5
                      text-xs
                      text-white
                      outline-none
                      placeholder:text-white/20
                      transition-all
                      duration-300
                      focus:border-cyan-400/40
                      focus:ring-1
                      focus:ring-cyan-400/10
                    "
                  />
                </div>
              </div>

              {/* ================= SUBJECT ================= */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-[11px] font-medium text-white/55"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Let's work together"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-[#0B0E13]
                    px-3.5
                    py-2.5
                    text-xs
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition-all
                    duration-300
                    focus:border-cyan-400/40
                    focus:ring-1
                    focus:ring-cyan-400/10
                  "
                />
              </div>

              {/* ================= MESSAGE ================= */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[11px] font-medium text-white/55"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me a little about your project..."
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                    border-white/[0.07]
                    bg-[#0B0E13]
                    px-3.5
                    py-2.5
                    text-xs
                    leading-5
                    text-white
                    outline-none
                    placeholder:text-white/20
                    transition-all
                    duration-300
                    focus:border-cyan-400/40
                    focus:ring-1
                    focus:ring-cyan-400/10
                  "
                />
              </div>

              {/* ================= SUBMIT ================= */}
              <button
                type="submit"
                className="
                  group
                  flex
                  w-full
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-[#2563EB]
                  px-5
                  py-3
                  text-xs
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#22D3EE]
                  hover:text-[#071018]
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]
                "
              >
                Send Message

                <Send
                  size={14}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />
              </button>

            </form>
          </motion.div>
        </div>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="
            mt-5
            rounded-2xl
            border
            border-cyan-400/10
            bg-cyan-400/[0.025]
            p-4
            text-center
            sm:p-5
          "
        >
          <p className="text-xs text-white/45">
            Looking for a frontend developer for your next project?
          </p>

          <p className="mt-1.5 text-xs font-medium text-white sm:text-sm">
            Let's turn your idea into a modern digital experience.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;