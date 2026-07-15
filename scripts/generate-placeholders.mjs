/**
 * Generates material-toned SVG placeholder images for the featured projects.
 *
 * These stand in for real photography so the gallery reads as a finished
 * design. Each image is clearly labeled "PLACEHOLDER" — replace the whole
 * /public/projects/<slug>/ folder with real photos when you have them.
 *
 * Run:  npm run gen:placeholders
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "projects");

const W = 1600;
const H = 1100;

// Material palettes — top and bottom gradient stops + accent line color.
const MATERIALS = {
  steel: { a: "#26241f", b: "#0f0e0d", accent: "#8a8078", label: "Blackened steel" },
  corten: { a: "#7a4a30", b: "#3d2418", accent: "#c98a5f", label: "Weathering steel" },
  aluminum: { a: "#c9c6c0", b: "#8f8b84", accent: "#5b574f", label: "Brushed aluminum" },
  concrete: { a: "#cbc6bc", b: "#9a948a", accent: "#6b655c", label: "Concrete" },
  wood: { a: "#8a5a34", b: "#4d3016", accent: "#caa06a", label: "Warm wood" },
};

// slug -> array of { file, material, caption }
const PLAN = {
  "harbor-stair-railing": [
    { file: "cover", material: "steel", caption: "Stair railing" },
    { file: "01", material: "steel", caption: "Weld detail" },
    { file: "02", material: "wood", caption: "Oak cap rail" },
  ],
  "blackened-kitchen-hood": [
    { file: "cover", material: "steel", caption: "Range hood" },
    { file: "01", material: "aluminum", caption: "Floating shelves" },
  ],
  "corten-planters": [
    { file: "cover", material: "corten", caption: "Corten planters" },
    { file: "01", material: "corten", caption: "Corner patina" },
    { file: "02", material: "concrete", caption: "In context" },
  ],
  "entry-canopy": [
    { file: "cover", material: "aluminum", caption: "Entry canopy" },
    { file: "01", material: "steel", caption: "Framing detail" },
  ],
  "live-edge-console": [
    { file: "cover", material: "wood", caption: "Console table" },
    { file: "01", material: "steel", caption: "Leg detail" },
  ],
};

function svg({ a, b, accent, label }, caption) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.35" y2="1">
      <stop offset="0" stop-color="${a}"/>
      <stop offset="1" stop-color="${b}"/>
    </linearGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
      <feComponentTransfer><feFuncA type="linear" slope="0.06"/></feComponentTransfer>
      <feComposite operator="over" in2="SourceGraphic"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <rect width="${W}" height="${H}" fill="url(#g)" filter="url(#grain)" opacity="0.5"/>
  <g stroke="${accent}" stroke-opacity="0.28" stroke-width="2">
    <line x1="0" y1="${H * 0.5}" x2="${W}" y2="${H * 0.5 - 120}"/>
    <line x1="0" y1="${H * 0.62}" x2="${W}" y2="${H * 0.62 - 120}"/>
    <line x1="${W * 0.5}" y1="0" x2="${W * 0.5 - 90}" y2="${H}"/>
  </g>
  <g font-family="ui-monospace, monospace" fill="#f4f1ec" text-anchor="middle">
    <text x="${W / 2}" y="${H / 2 - 10}" font-size="46" letter-spacing="6" opacity="0.92">PLACEHOLDER</text>
    <text x="${W / 2}" y="${H / 2 + 44}" font-size="28" letter-spacing="2" opacity="0.7">${caption} · ${label}</text>
    <text x="${W / 2}" y="${H / 2 + 92}" font-size="20" letter-spacing="4" opacity="0.45">${W}×${H}</text>
  </g>
</svg>
`;
}

let count = 0;
for (const [slug, items] of Object.entries(PLAN)) {
  const dir = join(ROOT, slug);
  await mkdir(dir, { recursive: true });
  for (const { file, material, caption } of items) {
    const out = join(dir, `${file}.svg`);
    await writeFile(out, svg(MATERIALS[material], caption), "utf8");
    count++;
  }
}

// A social share / Open Graph placeholder.
await mkdir(join(__dirname, "..", "public", "brand"), { recursive: true });
await writeFile(
  join(__dirname, "..", "public", "brand", "og-image.svg"),
  svg(MATERIALS.steel, "Jake Wall Metalworks"),
  "utf8"
);
count++;

console.log(`Generated ${count} placeholder image(s).`);
