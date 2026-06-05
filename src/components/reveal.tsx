"use client";

import { motion, type MotionProps } from "framer-motion";
import { type ElementType, type ReactNode } from "react";

type RevealProps = MotionProps & {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ as = "div", children, className, delay = 0, ...props }: RevealProps) {
  const Component = motion.create(as);

  return (
    <Component
      initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
}
