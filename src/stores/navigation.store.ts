import { defineStore } from "pinia";
import { ref } from "vue";

export const useNavigationStore = defineStore("navigation", () => {
  const activeSection = ref("");

  let observer: IntersectionObserver | null = null;

  let animationFrame: number | null = null;

  function initObserver() {
    destroyObserver();

    animationFrame = requestAnimationFrame(() => {
      const sections = document.querySelectorAll("section[id]");

      if (!sections.length) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries

            .filter((entry) => entry.isIntersecting)

            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) {
            activeSection.value = visible.target.id;
          }
        },

        {
          threshold: [0.25, 0.5, 0.75],

          rootMargin: "-90px 0px -45% 0px",
        }
      );

      sections.forEach((section) => observer?.observe(section));

      window.addEventListener("scroll", handleScroll, {
        passive: true,
      });
    });
  }

  function handleScroll() {
    const scrollBottom = window.innerHeight + window.scrollY;

    const pageBottom = document.documentElement.scrollHeight;

    if (pageBottom - scrollBottom < 5) {
      activeSection.value = "contacts";
    }
  }

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",

      block: "start",
    });
  }

  function destroyObserver() {
    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame);

      animationFrame = null;
    }

    observer?.disconnect();

    observer = null;

    window.removeEventListener("scroll", handleScroll);
  }

  return {
    activeSection,

    initObserver,

    destroyObserver,

    handleScroll,

    scrollToSection,
  };
});
