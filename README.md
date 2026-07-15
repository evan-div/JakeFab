# JWALL Fabrication — Landing Page

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
| Where the quote form sends submissions | `.env.local` (API key) + `src/app/api/quote/route.ts` (see below) |
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

The form (`src/components/QuoteForm.tsx`) **is wired up** — submissions POST
to `src/app/api/quote/route.ts`, which emails the shop via
[Resend](https://resend.com). There's no database or admin panel; Gmail is
the system of record.

**Setup (one-time):**

1. Sign up for a free Resend account at [resend.com](https://resend.com)
   using the same address that should receive quotes (e.g.
   `wall.d.jake@gmail.com`) — no credit card, no domain verification needed
   to get started.
2. Generate an API key in the Resend dashboard.
3. Copy `.env.local.example` to `.env.local` and paste the key in as
   `RESEND_API_KEY`. Restart `npm run dev` if it's already running.
4. For the deployed site, add `RESEND_API_KEY` in Vercel → Project →
   Settings → Environment Variables (Production and Preview), then redeploy.

**How it works:**

- Emails send from Resend's shared `onboarding@resend.dev` address — this
  works with zero DNS setup as long as the recipient (`QUOTE_TO_EMAIL` in
  `.env.local`, or `site.email` if that's unset) matches the email the
  Resend account was created with. Replying to a notification goes straight
  back to the customer (`reply_to` is set to their submitted email).
- Attached photos are included as email attachments, capped at **4MB
  total** (enforced both in the browser, before anything is sent, and again
  on the server). If someone attaches more than that, the email still sends
  with the text fields — the browser tells the person their photos didn't
  come through and to email them directly.
- Both client (`QuoteForm.tsx`) and server (`route.ts`) validate required
  fields from a single shared source, `src/lib/validateQuote.ts` — update
  validation rules there, not in either file individually.
- A hidden honeypot field (checked on both ends) filters unsophisticated
  spam bots. There's no rate limiting or CAPTCHA yet — not needed at this
  site's volume, but `route.ts` has a comment noting the upgrade path
  (Cloudflare Turnstile, or IP-based limiting) if that ever changes.

**Optional next step:** once a real domain is connected (see below) and
verified in Resend's dashboard, you can send from a branded address like
`quotes@jwallfabrication.com` instead of `onboarding@resend.dev` — change
the `from` field in `route.ts`.

---

## 4. Connecting a custom domain

The site deploys to Vercel from `main`. To put it on a real domain instead
of the default `*.vercel.app` URL:

1. In the Vercel project → Settings → Domains, enter the domain you own.
   Vercel shows either a couple of DNS records to add at your registrar, or
   an option to point the domain's nameservers at Vercel directly.
2. Add whichever Vercel asks for at your registrar (GoDaddy, Namecheap,
   etc.). Propagation is usually minutes, sometimes a few hours; Vercel's
   dashboard shows a green "Valid Configuration" once it's live and
   auto-issues SSL.
3. Update `src/data/site.ts` — replace the `url` placeholder with the real
   domain. This feeds the canonical URL, Open Graph tags, `sitemap.ts`, and
   the `LocalBusiness` schema throughout the site. Redeploy.

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
    api/quote/route.ts # POST handler — emails quote submissions via Resend
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
  lib/                # types, schema (JSON-LD), shared quote-form validation
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
