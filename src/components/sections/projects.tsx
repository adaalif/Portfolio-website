"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { MotionWrapper } from "@/components/motion-wrapper";
import { projects } from "@/lib/data";

const GithubIcon = ({ size = 15 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

/**
 * Individual project card with glassmorphic styling,
 * hover lift + border glow, image, tech stack badges, and action links.
 */
function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  return (
    <MotionWrapper delay={index * 0.1} className="h-full">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col group"
      >
        {/* Project Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-[var(--background-secondary,#12121a)]">
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-transparent z-20" />
          {/* Fallback gradient */}
          <div
            className={`absolute inset-0 opacity-40 ${
              index % 4 === 0
                ? "bg-gradient-to-br from-indigo-600 to-purple-700"
                : index % 4 === 1
                ? "bg-gradient-to-br from-emerald-600 to-teal-700"
                : index % 4 === 2
                ? "bg-gradient-to-br from-orange-600 to-rose-700"
                : "bg-gradient-to-br from-cyan-600 to-blue-700"
            }`}
          />
          {/* Actual project image */}
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover z-[1] group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="font-display text-xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h3>
          <p className="text-[var(--muted)] font-body text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-xs font-body text-[var(--accent)] bg-[var(--accent-glow)] rounded-md"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color)]">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-body text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <GithubIcon size={15} />
              Code
            </a>
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-body text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                aria-label={`View ${project.title} live demo`}
              >
                <ExternalLink size={15} />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.article>
    </MotionWrapper>
  );
}

/**
 * Projects section showcasing featured work in a responsive grid.
 */
export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Projects">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <MotionWrapper>
          <p className="text-[var(--accent)] font-body text-sm tracking-[0.2em] uppercase mb-3">
            Work
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-12 h-[2px] bg-[var(--accent)] mb-10" />
        </MotionWrapper>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
