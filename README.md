# Jake Wall Metalworks — Landing Page

A high-end, industrial-themed marketing site for a custom metalsmith in
Coupeville, Washington. Built with **Next.js (App Router) · TypeScript ·
Tailwind CSS**. The gallery, capabilities, process, and quote form are all
driven by small, editable data files so the site can be updated without
touching markup.

> **Status:** Fully built with 13 real projects and real project photography
> (see `public/projects/`). Business contact details, the About bio, and the
> Trust section are still marked `[PLACEHOLDER …]` — replace those with real
> information before launch. Nothing here is presented as a verified fact
> beyond what's visible in the photos themselves.

---

## Quick start

```bash
npm install
npm run dev                # http://localhost:3000
```

`npm run gen:placeholders` only regenerates the Open Graph share-image
placeholder in `public/brand/` — the project gallery uses real photos and
doesn't need it.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # eslint
```

---

## What you'll want to edit (the short list)

| I want to change… | Edit this file |
| --- | --- |
| Business name, contact, service area, social links, domain | `src/data/site.ts` |
| Projects in the gallery (add/edit/reorder) | `src/data/projects.ts` + `public/projects/<slug>/` |
| Capability categories | `src/data/capabilities.ts` |
| Process steps | `src/data/process.ts` |
| Nav labels/order | `src/data/nav.ts` |
| Page title / meta description / Open Graph | `src/app/layout.tsx` |
| LocalBusiness structured data | `src/lib/schema.ts` |
| Where the quote form sends submissions | `src/components/QuoteForm.tsx` (see below) |
| Colors, fonts, spacing tokens | `tailwind.config.ts` |

---

## 1. Adding real project photos

Each project lives in its own folder under `public/projects/`:

```
public/projects/
  wine-cellar-door/         ← a real project already in the gallery
    cover.jpg      ← the card / hero image for this project
    01.jpg
    02.jpg
  your-new-project/
    cover.jpg
    01.jpg
    …
```

Then add (or edit) an entry in **`src/data/projects.ts`**:

```ts
{
  slug: "your-new-project",              // must match the folder name
  title: "Project Title",
  category: "Railings & Handrails",
  location: "Coupeville, WA",            // optional
  summary: "One editorial sentence for the card.",
  description: "Longer story shown in the detail view.", // optional
  challenge: "What the client needed.",  // optional
  result: "What the finished piece did.", // optional
  materials: ["Blackened steel", "White oak"], // optional
  coverImage: "/projects/your-new-project/cover.jpg",
  images: [
    { src: "/projects/your-new-project/cover.jpg", alt: "Describe the photo.", width: 1600, height: 1100 },
    { src: "/projects/your-new-project/01.jpg",    alt: "Describe the photo.", width: 1600, height: 1100 },
  ],
}
```

Only set `isPlaceholder: true` for demonstration content that isn't a real
job — it adds a "Sample project" note in the modal. Leave it off (as all 13
current projects do) for real work.

The gallery renders straight from this array — no component changes needed.
Cards alternate left/right automatically.

**Image tips**

- Use **JPG or WebP**, landscape, ideally ~1600px on the long edge or larger.
  `next/image` automatically serves resized AVIF/WebP variants.
- Always set accurate `width`/`height` (or an aspect ratio) to prevent layout
  shift.
- Write **specific `alt` text** describing what's in the photo (material,
  object, setting) — not "image" or the project title.
- The current `.svg` files are generated placeholders. Real raster photos are
  optimized normally; the `SmartImage` wrapper (`src/components/SmartImage.tsx`)
  only bypasses the optimizer for `.svg`, so you don't need to change anything.

The **hero** and **about** sections point at placeholder images too —
update those `src` paths in `src/components/Hero.tsx` and
`src/components/About.tsx` to your strongest hero photo and a portrait/workshop
shot.

---

## 2. Business information & contact details

Everything lives in **`src/data/site.ts`**. Replace each `[PLACEHOLDER …]`:

- `email`, `phone` / `phoneHref`
- `social.instagram` / `facebook` / `houzz` (leave `""` to hide a link)
- `url` (final domain — used for canonical URL, Open Graph, sitemap)
- `serviceAreas`, `postalCode`, etc.

Then review **`src/lib/schema.ts`** and un-comment `telephone`, `email`, and
`geo` once those are verified. The About and Trust sections also contain
inline `[PLACEHOLDER …]` copy (years of experience, bio, license/insurance,
testimonials) — fill those in and **do not publish invented reviews or
credentials.**

---

## 3. Connecting the quote form

The form (`src/components/QuoteForm.tsx`) is a complete, validated UI with
success/error states, accessible labels, and a honeypot spam trap — but it is
**not wired to a backend.** Find the clearly marked block:

```ts
// ▸ CONNECT FORM SUBMISSION HERE.
```

Replace the simulated delay with a real submission. Two common options:

1. **Next.js Route Handler** — create `src/app/api/quote/route.ts`, read the
   `FormData` (including uploaded files), and email the shop (e.g. via
   [Resend](https://resend.com) or Nodemailer). Then `fetch("/api/quote", …)`.
2. **A form service** — [Formspree](https://formspree.io),
   [Basin](https://usebasin.com), or [Web3Forms](https://web3forms.com). Point
   the fetch at their endpoint and add your form key/ID via an environment
   variable (e.g. `NEXT_PUBLIC_FORM_ENDPOINT` in `.env.local`).

Whichever you choose: validate and handle the uploaded file(s) **server-side**,
and never trust client input. Consider adding a real CAPTCHA (e.g. Cloudflare
Turnstile) in addition to the honeypot if you get spam.

Nothing about the current UI implies a working backend beyond a browser-side
confirmation, and the success message says so.

---

## Architecture

```
src/
  app/
    layout.tsx        # fonts, <head> metadata, Open Graph, JSON-LD
    page.tsx          # assembles the sections + skip link
    globals.css       # Tailwind layers, focus styles, reduced-motion, grain
    icon.svg          # favicon
    robots.ts         # /robots.txt
    sitemap.ts        # /sitemap.xml
  components/
    Header.tsx        # transparent→solid on scroll, accessible mobile menu
    Hero.tsx          # priority hero image + CTAs
    ValueProp.tsx     # intro / four pillars
    Capabilities.tsx  # 8 capability cards (data-driven)
    ProjectGallery.tsx# alternating editorial rows (data-driven)
    ProjectModal.tsx  # accessible lightbox: focus trap, arrows, Esc
    Process.tsx       # 5-step process
    About.tsx         # craftsman bio + stats
    Trust.tsx         # service area, testimonials, credentials (placeholders)
    QuoteForm.tsx     # validated quote request form
    Footer.tsx
    Reveal.tsx        # scroll-reveal wrapper (respects reduced motion)
    SmartImage.tsx    # next/image wrapper (optimizes photos, passes SVG through)
  data/               # site, projects, capabilities, process, nav
  lib/                # types, schema (JSON-LD)
scripts/
  generate-placeholders.mjs  # builds the demo images
```

### Design system

- **Palette** (`tailwind.config.ts`): warm concrete surfaces, blackened-steel
  darks, brushed-aluminum neutrals, and a restrained copper/rust accent.
- **Type**: Archivo (display), Inter (body), IBM Plex Mono (technical labels).
- **Motion**: gentle scroll reveals, hover image scaling, scroll-linked header.
  All motion is disabled under `prefers-reduced-motion`.

### Accessibility

Semantic landmarks, one `<h1>`, logical heading order, visible focus rings,
labeled form fields with inline errors, a keyboard-operable modal (focus trap,
`Esc`, arrow-key carousel, focus restoration), an accessible mobile menu, a
skip link, and reduced-motion support. Verified across desktop / tablet /
mobile with no horizontal overflow and no console errors.

### Performance / SEO

Static-rendered page, priority hero image, lazy-loaded gallery images, modern
image formats via `next/image`, minimal JS. Draft `<title>`, meta description,
Open Graph, `robots.txt`, `sitemap.xml`, and `LocalBusiness` JSON-LD are in
place — update the domain and business facts in `site.ts` / `schema.ts`.

---

## Notes

- The remaining `npm audit` findings are in the dev-only ESLint dependency
  chain (`glob`/`minimatch`) and are not shipped to production.
- `npm run gen:placeholders` will regenerate the demo images if you ever delete
  them; it does not touch real photos you've added under other folders.
