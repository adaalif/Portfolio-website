"use client";

import { motion } from "framer-motion";
import { MotionWrapper } from "@/components/motion-wrapper";
import { experiences } from "@/lib/data";

function TimelineItem({
  exp,
  index,
}: {
  exp: (typeof experiences)[0];
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex md:justify-center group">
      <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-3 h-3 rounded-full bg-[var(--accent)] ring-4 ring-[var(--background)] group-hover:ring-[var(--accent-glow)] transition-all"
        />
      </div>

      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
        } pl-14 md:pl-0`}
      >
        <MotionWrapper
          direction={isLeft ? "left" : "right"}
          delay={index * 0.1}
        >
          <motion.div
            whileHover={{ y: -2 }}
            className="glass glass-hover rounded-xl p-6 transition-all"
          >
            <span className="inline-block text-xs font-body text-[var(--accent)] bg-[var(--accent-glow)] px-3 py-1 rounded-full mb-3">
              {exp.period}
            </span>
            <h3 className="font-display text-lg font-bold mb-1">{exp.role}</h3>
            <div className="flex items-center gap-2 mb-3">
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-body text-[var(--accent)] hover:underline inline-block"
              >
                {exp.company} ↗
              </a>
              {exp.location && (
                <span className="text-xs font-body text-[var(--muted)]">
                  · {exp.location}
                </span>
              )}
            </div>
            <p className="text-sm font-body text-[var(--muted)] leading-relaxed mb-4">
              {exp.description}
            </p>
            <ul className="space-y-2">
              {exp.highlights.map((h, i) => (
                <li
                  key={i}
                  className="text-sm font-body text-[var(--muted)] flex items-start gap-2"
                >
                  <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-[var(--accent)]" />
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        </MotionWrapper>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Work experience">
      <div className="max-w-6xl mx-auto px-6">
        <MotionWrapper>
          <p className="text-[var(--accent)] font-body text-sm tracking-[0.2em] uppercase mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Where I&apos;ve worked
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mb-14" />
        </MotionWrapper>

        <div className="relative">
          <div
            className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px timeline-line"
            aria-hidden="true"
          />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.company} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
