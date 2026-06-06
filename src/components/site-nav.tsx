"use client";

import { Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
      window.history.pushState(null, "", href);
    }

    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-4 z-50">
      <nav className="container-x glass flex h-14 items-center justify-between rounded-full px-3 pl-5" aria-label="Primary navigation">
        <Link href="#top" className="text-sm font-bold tracking-tight text-black">
          Kishore P
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/62 transition hover:bg-black/5 hover:text-black"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex size-10 items-center justify-center rounded-full bg-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-950"
            aria-label="Open GitHub profile"
          >
            <Github className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full bg-black text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={cn(
          "container-x mt-2 overflow-hidden rounded-[1.5rem] border border-black/10 bg-white/86 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-black/70 hover:bg-black/5"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
