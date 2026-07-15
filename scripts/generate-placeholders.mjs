/**
 * Regenerates the material-toned SVG Open Graph / social-share placeholder.
 *
 * The project gallery now uses real client photos (see src/data/projects.ts
 * and /public/projects/), so this script no longer generates project images —
 * only the OG placeholder in /public/brand, which can be swapped for a real
 * hero photo whenever one is available.
 *
 * Run:  npm run gen:placeholders
 */
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const W = 1600;
const H = 1100;

const STEEL = { a: "#26241f", b: "#0f0e0d", accent: "#8a8078", label: "Blackened steel" };

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

await mkdir(join(__dirname, "..", "public", "brand"), { recursive: true });
await writeFile(
  join(__dirname, "..", "public", "brand", "og-image.svg"),
  svg(STEEL, "Jake Wall Metalworks"),
  "utf8"
);

console.log("Generated 1 placeholder image (public/brand/og-image.svg).");
