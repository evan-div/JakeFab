import type { ProcessStep } from "@/lib/types";

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Share your idea",
    description:
      "Send a sketch, a photo, a measurement, or just a description of the problem. Nothing needs to be finalized — a rough idea is a fine place to start.",
  },
  {
    number: "02",
    title: "Talk scope & materials",
    description:
      "We walk through dimensions, materials, finishes, budget, and how the piece will be used, then confirm what's realistic and what it will cost.",
  },
  {
    number: "03",
    title: "Design & refine",
    description:
      "You get a clear direction — drawings, material samples, or references — and we adjust until the details are right before any steel is cut.",
  },
  {
    number: "04",
    title: "Fabricate",
    description:
      "The piece is cut, welded, and finished in the shop with the tolerances and joinery the project calls for.",
  },
  {
    number: "05",
    title: "Deliver or install",
    description:
      "We deliver and install on-site, or hand off ready to mount — clean, level, and built to last.",
  },
];
