"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface MotionWrapperProps {
  children: ReactNode;
  /** Direction the element slides in from */
  direction?: "up" | "down" | "left" | "right";
  /** Animation delay in seconds */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Additional CSS classes */
  className?: string;
  /** Whether to animate only once */
  once?: boolean;
}

/** Offset map for slide-in directions */
const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
};

/**
 * Reusable scroll-triggered reveal animation wrapper.
 * Wraps children in a Framer Motion div that fades + slides
 * into view when scrolled into the viewport.
 */
export function MotionWrapper({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
