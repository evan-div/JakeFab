import { site } from "@/data/site";

/**
 * LocalBusiness JSON-LD. This improves how the business can appear in local
 * search. Keep the values in sync with `src/data/site.ts` — and only include
 * fields (phone, address, geo) once they hold real, verified information.
 */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: site.name,
    description:
      "Custom metalwork and fabrication — railings, architectural metal, planters, kitchen features, and one-off pieces for homes and businesses.",
    url: site.url,
    image: `${site.url}/projects/hillside-view-home-railings/cover.jpg`,
    areaServed: site.serviceAreas.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      addressCountry: "US",
    },
    // ▸ Add these once verified:
    // telephone: site.phone,
    // email: site.email,
    // geo: { "@type": "GeoCoordinates", latitude: 48.22, longitude: -122.68 },
    knowsAbout: [
      "Custom metal fabrication",
      "Railings and handrails",
      "Architectural metalwork",
      "Steel planter boxes",
      "Kitchen metal finishes",
    ],
  };
}
