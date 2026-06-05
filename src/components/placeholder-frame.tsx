"use client";

import { ImagePlus } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type PlaceholderFrameProps = {
  label: string;
  className?: string;
  dark?: boolean;
  src?: string;
};

export function PlaceholderFrame({ label, className, dark = false, src }: PlaceholderFrameProps) {
  const [hasImageError, setHasImageError] = useState(false);

  if (src && !hasImageError) {
    return (
      <div className={cn("relative overflow-hidden rounded-[2rem] bg-black", className)}>
        <Image
          src={src}
          alt={label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 hover:scale-[1.025]"
          priority={label === "Professional Portrait"}
          onError={() => setHasImageError(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <div className={cn("placeholder-grid relative overflow-hidden rounded-[2rem]", className)}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/12 to-white/10" />
      <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
        <ImagePlus className="size-3.5" aria-hidden="true" />
        Upload slot
      </div>
      <div className="absolute inset-x-5 bottom-5">
        <p className={cn("text-xs font-medium uppercase tracking-[0.22em]", dark ? "text-emerald-200" : "text-white/68")}>
          Replace with
        </p>
        <p className="mt-2 max-w-sm text-2xl font-semibold text-white text-balance">{label}</p>
      </div>
    </div>
  );
}
