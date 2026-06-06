export function scrollToSection(href: string, options?: { smooth?: boolean }) {
  const target = document.querySelector(href);

  if (!target) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: options?.smooth && !prefersReducedMotion ? "smooth" : "auto",
    block: "start",
  });
  window.history.pushState(null, "", href);
}
