import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "dark" | "light" | "ghost";
  download?: boolean;
};

export function ButtonLink({ href, children, icon: Icon, variant = "dark", download }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      download={download}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2",
        variant === "dark" && "!bg-black !text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] hover:-translate-y-0.5 hover:!bg-emerald-950 [&_svg]:!text-white",
        variant === "light" && "!bg-white !text-black shadow-[0_18px_50px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 [&_svg]:!text-black",
        variant === "ghost" && "border border-black/10 bg-white/45 text-black backdrop-blur hover:bg-white/80"
      )}
    >
      {Icon ? <Icon className="size-4 transition group-hover:scale-110" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}
