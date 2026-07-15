/**
 * Central business information.
 *
 * ▸ REPLACE every value marked with `[PLACEHOLDER …]` before launch.
 *   These are drafts / stand-ins — nothing here is verified fact.
 */
export const site = {
  name: "JWALL Fabrication",
  // A short tagline for the logo lockup / meta.
  shortName: "JWALL",
  role: "Custom Metalsmith & Fabricator",
  city: "Coupeville",
  state: "Washington",
  region: "Whidbey Island & the greater Seattle area",

  // ▸ Contact
  email: "wall.d.jake@gmail.com",
  phone: "(704) 315-7270",
  phoneHref: "tel:+17043157270",

  // ▸ Physical / mailing reference (a full street address is optional for a
  //   workshop; the schema markup below can use whatever you provide).
  addressLocality: "Coupeville",
  addressRegion: "WA",
  postalCode: "[PLACEHOLDER — 98239]",

  // ▸ Social — leave "" to hide a link in the footer.
  social: {
    instagram: "", // e.g. "https://instagram.com/jwallfabrication"
    facebook: "",
    houzz: "",
  },

  // Canonical site URL (used for metadata / Open Graph / schema).
  url: "https://www.jwallfabrication.com", // [PLACEHOLDER — final domain]

  // Areas served — used in copy and LocalBusiness schema.
  serviceAreas: [
    "Coupeville",
    "Whidbey Island",
    "Oak Harbor",
    "Langley",
    "Anacortes",
    "Greater Seattle",
  ],
};

export type Site = typeof site;
