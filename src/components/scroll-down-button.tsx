"use client";

import { ArrowDown } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-to-section";

type ScrollDownButtonProps = {
  href: string;
  label?: string;
  className?: string;
};

export function ScrollDownButton({ href, label = "Scroll", className }: ScrollDownButtonProps) {
  return (
    <button
      type="button"
      onClick={() => scrollToSection(href, { smooth: true })}
      className={className}
    >
      {label} <ArrowDown className="size-4 animate-bounce" aria-hidden="true" />
    </button>
  );
}
