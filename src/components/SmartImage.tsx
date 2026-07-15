import Image, { type ImageProps } from "next/image";

/**
 * Thin wrapper around next/image.
 *
 * Real raster photography (JPG/WebP/PNG) flows through Next's image optimizer
 * as normal — responsive `sizes`, AVIF/WebP, lazy loading, etc.
 *
 * The shipped placeholder art is SVG. Vector art has nothing to gain from the
 * raster optimizer (and Next rejects it there), so we serve SVGs directly with
 * `unoptimized`. When you replace placeholders with real photos this wrapper
 * automatically optimizes them — no per-usage change needed.
 */
export function SmartImage(props: ImageProps) {
  const isSvg =
    typeof props.src === "string" && props.src.toLowerCase().endsWith(".svg");
  return <Image {...props} unoptimized={props.unoptimized ?? isSvg} />;
}
