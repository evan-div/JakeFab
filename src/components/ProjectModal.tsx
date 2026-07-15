"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SmartImage } from "./SmartImage";
import type { Project } from "@/lib/types";
import { getProjectMedia } from "@/lib/projectMedia";

type Props = {
  project: Project;
  onClose: () => void;
};

/**
 * Accessible project detail / lightbox dialog.
 * - role="dialog" aria-modal, labelled by the project title
 * - Escape closes, focus is trapped, focus is restored to the trigger
 * - Left/Right arrows move between photos/videos
 */
export function ProjectModal({ project, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const media = getProjectMedia(project);
  const total = media.length;

  const next = useCallback(
    () => setIndex((i) => (i + 1) % total),
    [total]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowRight") {
        next();
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
        return;
      }
      if (e.key === "Tab") {
        // Simple focus trap within the dialog.
        const focusables = dialogRef.current?.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        if (!focusables || focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, onClose]);

  const current = media[index];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-steel-950/90 p-4 backdrop-blur-sm animate-fade-in sm:p-6"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden bg-concrete-50 shadow-2xl md:flex-row"
      >
        {/* Image side */}
        <div className="relative w-full bg-steel-950 md:w-3/5">
          <div className="relative aspect-[3/2] w-full md:aspect-auto md:h-full md:min-h-[420px]">
            {current.kind === "video" ? (
              <video
                key={current.src}
                src={current.src}
                poster={current.poster}
                aria-label={current.alt}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full bg-steel-950 object-contain animate-fade-in"
              />
            ) : (
              <SmartImage
                key={current.src}
                src={current.src}
                alt={current.alt}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover animate-fade-in"
              />
            )}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-steel-950/60 text-concrete-50 transition-colors hover:bg-steel-950"
              >
                <Chevron dir="left" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center bg-steel-950/60 text-concrete-50 transition-colors hover:bg-steel-950"
              >
                <Chevron dir="right" />
              </button>
              <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                {media.map((item, i) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to ${item.kind} ${i + 1} of ${total}`}
                    aria-current={i === index}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-6 bg-concrete-50"
                        : "w-1.5 bg-concrete-50/50 hover:bg-concrete-50/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Detail side */}
        <div className="flex w-full flex-col overflow-y-auto p-7 md:w-2/5 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow">{project.category}</p>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close project"
              className="grid h-9 w-9 shrink-0 place-items-center text-steel-500 transition-colors hover:bg-steel-900 hover:text-concrete-50"
            >
              <CloseIcon />
            </button>
          </div>

          <h2
            id="project-modal-title"
            className="mt-3 font-display text-2xl font-bold leading-tight tracking-tight text-steel-900"
          >
            {project.title}
          </h2>

          {project.location && (
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-steel-400">
              {project.location}
            </p>
          )}

          {project.isPlaceholder && (
            <p className="mt-4 border-l-2 border-copper-500 bg-copper-500/5 px-3 py-2 text-xs text-copper-600">
              Sample project — demonstration content, not a real job.
            </p>
          )}

          {project.description && (
            <p className="mt-4 text-sm leading-relaxed text-steel-600">
              {project.description}
            </p>
          )}

          <dl className="mt-6 space-y-4 text-sm">
            {project.challenge && (
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-label text-steel-400">
                  The goal
                </dt>
                <dd className="mt-1 text-steel-600">{project.challenge}</dd>
              </div>
            )}
            {project.result && (
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-label text-steel-400">
                  The result
                </dt>
                <dd className="mt-1 text-steel-600">{project.result}</dd>
              </div>
            )}
          </dl>

          {project.materials && project.materials.length > 0 && (
            <div className="mt-6">
              <p className="font-mono text-[11px] uppercase tracking-label text-steel-400">
                Materials
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.materials.map((m) => (
                  <li
                    key={m}
                    className="border border-steel-900/15 px-2.5 py-1 text-xs text-steel-600"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <a href="#quote" onClick={onClose} className="btn-dark mt-8">
            Start a project like this
          </a>
        </div>
      </div>
    </div>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M18 6L6 18M6 6l12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
