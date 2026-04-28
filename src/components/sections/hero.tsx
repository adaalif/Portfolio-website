"use client";

import { motion } from "framer-motion";
import { ArrowDown, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";

/**
 * Hero section — the first thing visitors see.
 * Features:
 * - Staggered word reveal animation on the heading
 * - Ambient gradient orbs for depth
 * - Two CTA buttons with hover states
 * - Responsive layout
 */
export function Hero() {
  const words = personalInfo.name.split("");

  // Container variant for staggered children
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.04, delayChildren: 0.3 },
    },
  };

  // Individual letter variant
  const letter = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-label="Introduction"
    >
      {/* ── Ambient Gradient Orbs ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="orb w-[500px] h-[500px] bg-[var(--accent)]"
          style={{ top: "15%", left: "10%" }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="orb w-[400px] h-[400px] bg-purple-500"
          style={{ bottom: "20%", right: "15%" }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="orb w-[300px] h-[300px] bg-indigo-400"
          style={{ top: "60%", left: "50%" }}
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -20, 25, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Overline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-[var(--accent)] font-body text-sm tracking-[0.2em] uppercase mb-6"
        >
          {personalInfo.title}
        </motion.p>

        {/* Name — staggered letter reveal */}
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          {words.map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className={char === " " ? "inline-block w-4" : "inline-block"}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-lg sm:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 font-body leading-relaxed"
        >
          {personalInfo.subtitle}. {personalInfo.bio.split(".")[0]}.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent)] text-white font-body font-medium text-sm hover:bg-[var(--accent-light)] transition-all hover:shadow-lg hover:shadow-[var(--accent-glow)] active:scale-[0.97]"
          >
            View Work
            <ArrowDown
              size={16}
              className="group-hover:translate-y-0.5 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] text-[var(--foreground)] font-body font-medium text-sm hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all active:scale-[0.97]"
          >
            Get in Touch
            <Send
              size={14}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-[var(--muted)] rounded-full flex items-start justify-center p-1"
        >
          <motion.div className="w-1 h-2 bg-[var(--muted)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
