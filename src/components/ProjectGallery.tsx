"use client";

import { useRef, useState } from "react";
import { SmartImage } from "./SmartImage";
import type { Project } from "@/lib/types";
import { projects } from "@/data/projects";
import { getProjectMedia, mediaCountLabel } from "@/lib/projectMedia";
import { Reveal } from "./Reveal";
import { ProjectModal } from "./ProjectModal";

export function ProjectGallery() {
  const [active, setActive] = useState<Project | null>(null);
  // Remember the trigger so focus can return to it when the modal closes.
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const open = (project: Project, el: HTMLButtonElement) => {
    triggerRef.current = el;
    setActive(project);
  };

  const close = () => {
    setActive(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="work" className="bg-concrete-100 py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-5">Selected work</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-steel-900 sm:text-4xl">
              Projects, from first sketch to final install.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a href="#quote" className="btn-ghost whitespace-nowrap">
              Start your project
            </a>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-14 md:gap-20">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.slug}
              project={project}
              flip={i % 2 === 1}
              onOpen={open}
            />
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={close} />}
    </section>
  );
}

function ProjectRow({
  project,
  flip,
  onOpen,
}: {
  project: Project;
  flip: boolean;
  onOpen: (p: Project, el: HTMLButtonElement) => void;
}) {
  const media = getProjectMedia(project);

  return (
    <Reveal className="group grid grid-cols-1 items-center gap-6 md:grid-cols-12 md:gap-10">
      {/* Image */}
      <div
        className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
      >
        <button
          type="button"
          onClick={(e) => onOpen(project, e.currentTarget)}
          aria-label={`View project: ${project.title}`}
          className="relative block w-full overflow-hidden bg-steel-900 focus-visible:outline-offset-4"
        >
          <div className="relative aspect-[3/2] w-full">
            <SmartImage
              src={project.coverImage}
              alt={project.images[0]?.alt ?? project.title}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
            />
          </div>
          <span
            className="pointer-events-none absolute inset-0 bg-steel-950/0 transition-colors duration-500 group-hover:bg-steel-950/10"
            aria-hidden="true"
          />
          {media.length > 1 && (
            <span className="pointer-events-none absolute bottom-3 right-3 bg-steel-950/70 px-2.5 py-1 font-mono text-[11px] text-concrete-50">
              {mediaCountLabel(media)}
            </span>
          )}
        </button>
      </div>

      {/* Text */}
      <div
        className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}
      >
        <div className="flex items-center gap-3">
          <span className="eyebrow">{project.category}</span>
          {project.location && (
            <span className="font-mono text-xs uppercase tracking-wide text-steel-400">
              · {project.location}
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-steel-900 sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-3 max-w-md text-base leading-relaxed text-steel-500">
          {project.summary}
        </p>

        <button
          type="button"
          onClick={(e) => onOpen(project, e.currentTarget)}
          className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-label text-steel-900 transition-colors hover:text-copper-500"
        >
          View project
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>
    </Reveal>
  );
}
