import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');

      if (!link) return;

      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // URL hash update without jumping
      window.history.pushState(null, "", targetId);
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
};

export default SmoothScroll;