import type { Project } from "@/lib/types";

/**
 * FEATURED PROJECTS
 * ─────────────────
 * Every project below is DEMONSTRATION CONTENT (`isPlaceholder: true`) so the
 * gallery is fully populated for design and review. None of these are real
 * jobs — do not present them as such.
 *
 * ▸ To add a real project:
 *   1. Create a folder:  /public/projects/<your-slug>/
 *   2. Drop the photos in it (cover.jpg + 01.jpg, 02.jpg, …). Real raster
 *      photos (JPG/WebP) are optimized automatically by next/image.
 *   3. Copy one object below, set `isPlaceholder: false` (or remove it), and
 *      point `coverImage` / `images[].src` at your files.
 *   4. Fill in real `alt` text describing each photo (see alt-text guidance in
 *      README). Keep `width`/`height` accurate to avoid layout shift.
 *
 * The gallery renders entirely from this array — no markup changes required.
 */

const IMG_W = 1600;
const IMG_H = 1100;

export const projects: Project[] = [
  {
    slug: "harbor-stair-railing",
    title: "Harbor Stair Railing",
    category: "Railings & Handrails",
    location: "Coupeville, WA",
    summary:
      "A blackened-steel stair rail with a warm oak cap, built for a waterfront remodel.",
    description:
      "A floating interior stair needed a rail that felt structural but stayed visually quiet so it wouldn't compete with the water view. We built a minimal blackened-steel frame with a hand-finished white oak top rail warm to the touch on the way down.",
    challenge:
      "Meet residential guard-rail code without a bulky picket design that would block sightlines to the harbor.",
    result:
      "A slim vertical-baluster rail that reads as a single clean line across the stair opening while exceeding load requirements.",
    materials: ["Blackened mild steel", "White oak cap", "Satin clear coat"],
    coverImage: "/projects/harbor-stair-railing/cover.svg",
    images: [
      {
        src: "/projects/harbor-stair-railing/cover.svg",
        alt: "PLACEHOLDER — full view of a blackened-steel interior stair railing with an oak top rail.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/harbor-stair-railing/01.svg",
        alt: "PLACEHOLDER — detail of the welded baluster-to-stringer connection.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/harbor-stair-railing/02.svg",
        alt: "PLACEHOLDER — close-up of the hand-finished white oak cap rail.",
        width: IMG_W,
        height: IMG_H,
      },
    ],
    isPlaceholder: true,
  },
  {
    slug: "blackened-kitchen-hood",
    title: "Blackened Steel Range Hood",
    category: "Kitchen & Interior Finishes",
    location: "Whidbey Island, WA",
    summary:
      "A hand-formed range hood and floating shelf set that anchors an island kitchen.",
    description:
      "The kitchen wanted one strong metal gesture instead of many small ones. We wrapped the vent in seamless blackened steel and matched it with a pair of bracketed shelves so the whole wall reads as one considered detail.",
    challenge:
      "Build a lightweight hood cover that fits an existing insert and hides all seams and fasteners.",
    result:
      "A crisp, fingerprint-resistant hood with continuous corners and concealed mounting.",
    materials: ["Blackened steel sheet", "Waxed matte finish", "Steel shelf brackets"],
    coverImage: "/projects/blackened-kitchen-hood/cover.svg",
    images: [
      {
        src: "/projects/blackened-kitchen-hood/cover.svg",
        alt: "PLACEHOLDER — blackened steel range hood over a kitchen island.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/blackened-kitchen-hood/01.svg",
        alt: "PLACEHOLDER — matching floating steel shelves with concealed brackets.",
        width: IMG_W,
        height: IMG_H,
      },
    ],
    isPlaceholder: true,
  },
  {
    slug: "corten-planters",
    title: "Corten Courtyard Planters",
    category: "Planter Boxes",
    location: "Langley, WA",
    summary:
      "A run of weathering-steel planters scaled for a small commercial courtyard.",
    description:
      "A café courtyard needed planters rugged enough for a public space and warm enough to feel inviting. Corten's living rust finish does both, and the tapered profile keeps the footprint small where foot traffic is tight.",
    challenge:
      "Durable, drainable planters that develop an even patina and won't stain the surrounding concrete.",
    result:
      "Modular weathering-steel boxes with internal liners and hidden drainage.",
    materials: ["Corten / weathering steel", "Internal galvanized liner", "Concealed drainage"],
    coverImage: "/projects/corten-planters/cover.svg",
    images: [
      {
        src: "/projects/corten-planters/cover.svg",
        alt: "PLACEHOLDER — row of Corten weathering-steel planter boxes in a courtyard.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/corten-planters/01.svg",
        alt: "PLACEHOLDER — corner detail showing the weld seam and patina.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/corten-planters/02.svg",
        alt: "PLACEHOLDER — planters in context along a café frontage.",
        width: IMG_W,
        height: IMG_H,
      },
    ],
    isPlaceholder: true,
  },
  {
    slug: "entry-canopy",
    title: "Steel Entry Canopy",
    category: "Architectural Metalwork",
    location: "Oak Harbor, WA",
    summary:
      "A cantilevered steel-and-glass canopy developed from an architect's drawings.",
    description:
      "Working from the architect's set, we engineered and fabricated a clean cantilevered canopy that shelters the entry without visible posts, keeping the façade uninterrupted.",
    challenge:
      "Carry the load off the wall alone while holding tight reveals against the cladding.",
    result:
      "A powder-coated steel frame with laminated glass and hidden structural connections.",
    materials: ["Structural steel", "Powder-coat finish", "Laminated safety glass"],
    coverImage: "/projects/entry-canopy/cover.svg",
    images: [
      {
        src: "/projects/entry-canopy/cover.svg",
        alt: "PLACEHOLDER — cantilevered steel and glass entry canopy over a doorway.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/entry-canopy/01.svg",
        alt: "PLACEHOLDER — underside detail of the canopy framing and glass.",
        width: IMG_W,
        height: IMG_H,
      },
    ],
    isPlaceholder: true,
  },
  {
    slug: "live-edge-console",
    title: "Live-Edge Console Table",
    category: "Furniture & Fixtures",
    location: "Seattle, WA",
    summary:
      "A steel-based console pairing a blackened frame with a live-edge slab.",
    description:
      "A narrow entry called for a piece with presence but a light footprint. The tapered steel base lets the wood slab appear to float, and the whole thing knocks down for delivery up a tight stair.",
    challenge:
      "A stable, slim base that ships flat and fits a wood top the client already owned.",
    result:
      "A demountable blackened-steel base tuned to the client's slab dimensions.",
    materials: ["Blackened steel", "Client-supplied walnut slab", "Leveling feet"],
    coverImage: "/projects/live-edge-console/cover.svg",
    images: [
      {
        src: "/projects/live-edge-console/cover.svg",
        alt: "PLACEHOLDER — console table with a blackened steel base and live-edge wood top.",
        width: IMG_W,
        height: IMG_H,
      },
      {
        src: "/projects/live-edge-console/01.svg",
        alt: "PLACEHOLDER — detail of the tapered steel leg and slab connection.",
        width: IMG_W,
        height: IMG_H,
      },
    ],
    isPlaceholder: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
