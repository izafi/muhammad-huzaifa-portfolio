import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "923248808971";
  const message =
    "Hello Muhammad Huzaifa, I would like to discuss a project.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Let's Get in Touch"
      className="group fixed bottom-6 right-6 z-[999] flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_40px_rgba(37,211,102,0.4)] sm:bottom-7 sm:right-7"
    >
      {/* Pulse */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />

      {/* WhatsApp Icon */}
      <FaWhatsapp
        size={29}
        className="transition-transform duration-300 group-hover:scale-110"
      />

      {/* Tooltip */}
      <span className="pointer-events-none absolute right-[68px] translate-x-2 whitespace-nowrap rounded-lg border border-white/[0.08] bg-[#0B0E13] px-3 py-2 text-xs font-medium text-white opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        Let&apos;s Get in Touch
      </span>
    </a>
  );
};

export default WhatsAppButton;