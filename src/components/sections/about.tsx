"use client";

import { MotionWrapper } from "@/components/motion-wrapper";
import { personalInfo, skills } from "@/lib/data";
import { motion } from "framer-motion";

/**
 * About section with professional summary and animated skill grid.
 * Skills are grouped by category and displayed as glassmorphic badges
 * with staggered reveal animations.
 */
export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32"
      aria-label="About me"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionWrapper>
          <p className="text-[var(--accent)] font-body text-sm tracking-[0.2em] uppercase mb-3">
            About
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            A bit about me
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mb-10" />
        </MotionWrapper>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* ── Bio ── */}
          <MotionWrapper delay={0.1}>
            <p className="text-[var(--muted)] font-body text-base sm:text-lg leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-[var(--muted)] font-body text-base sm:text-lg leading-relaxed mb-6">
              Completed My my Bachelor&apos;s in Computer Engineering at
              Universitas Sriwijaya with a 3.96 GPA and an IELTS score of 8.0.
              I&apos;m passionate about applying AI to solve real-world problems
              and always looking for opportunities to build impactful systems
              with talented people.
            </p>
          </MotionWrapper>

          {/* ── Skills Grid ── */}
          <div className="space-y-8">
            {skills.map((group, groupIndex) => (
              <MotionWrapper
                key={group.category}
                delay={0.15 + groupIndex * 0.1}
              >
                <h3 className="font-display text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + groupIndex * 0.1 + skillIndex * 0.04,
                        duration: 0.3,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px var(--accent-glow)",
                      }}
                      className="glass px-3 py-1.5 rounded-lg text-sm font-body text-[var(--foreground)] cursor-default transition-colors hover:border-[rgba(99,102,241,0.2)]"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </MotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
