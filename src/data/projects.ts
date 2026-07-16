import type { Project } from "@/lib/types";

/**
 * FEATURED PROJECTS
 * ─────────────────
 * Real client work, sourced from project photos provided directly by Jake.
 * Descriptions below are written from what's visible in the photos —
 * specific facts we weren't given (exact addresses, wood species, finish
 * process, etc.) are described in general terms rather than guessed.
 * Confirm/refine any copy here before launch.
 *
 * ▸ To add another project:
 *   1. Create a folder:  /public/projects/<your-slug>/
 *   2. Drop the photos in it (cover.jpg + 01.jpg, 02.jpg, …). Real raster
 *      photos (JPG/WebP) are optimized automatically by next/image.
 *   3. Copy one object below and point `coverImage` / `images[].src` at
 *      your files.
 *   4. Fill in real `alt` text describing each photo. Keep `width`/`height`
 *      accurate (see README) to avoid layout shift.
 *
 * The gallery renders entirely from this array — no markup changes needed.
 */

export const projects: Project[] = [
  {
    slug: "patinated-steel-range-hood",
    title: "Stained Brass Range Hood",
    category: "Kitchen & Interior Finishes",
    location: "Sammamish, WA",
    summary:
      "A large range hood in hand-stained brass with a mottled, one-of-a-kind patina, set against a marble slab backsplash.",
    description:
      "This kitchen wanted a hood that acted as the visual centerpiece of the room rather than disappearing into the cabinetry. We built it full-width over the range and finished it in stained brass — no two square inches read quite the same, which gives the piece a lot of depth against the book-matched marble slab behind it.",
    challenge:
      "Build a hood large enough to properly vent a professional range while giving it a finish with real presence next to a dramatic stone backsplash.",
    result:
      "A seamless brass hood with a one-of-a-kind stained finish, sized and vented to match the range below it.",
    materials: ["Brass", "Hand-stained finish"],
    coverImage: "/projects/patinated-steel-range-hood/cover.jpg",
    images: [
      {
        src: "/projects/patinated-steel-range-hood/cover.jpg",
        alt: "Large custom brass range hood with a mottled, hand-stained patina above a professional range, set against a marble slab backsplash.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "boise-bronze-kitchen-accents",
    title: "Bronze Kitchen Accents",
    category: "Kitchen & Interior Finishes",
    location: "Boise, ID",
    summary:
      "A set of custom bronze accents — a range hood band and floating shelf edge trim — for a kitchen remodel.",
    description:
      "This kitchen wanted a warm metal thread running through several features rather than one big statement piece. We fabricated a bronze band to wrap the base of the range hood and edge trim for a run of floating shelves — both in the same material, so the accents read as one considered decision throughout the room.",
    challenge:
      "Design distinct bronze pieces — a hood band and shelf edge trim — that read as a matched set without being identical.",
    result:
      "A cohesive run of bronze accents left in a raw finish so they'll patina naturally over time, tying the range hood and shelving together.",
    materials: ["Bronze", "Raw, unlacquered finish"],
    coverImage: "/projects/boise-bronze-kitchen-accents/cover.jpg",
    images: [
      {
        src: "/projects/boise-bronze-kitchen-accents/cover.jpg",
        alt: "Raw bronze band wrapping the base of a range hood above a dark red vertical-stripe tile backsplash.",
        width: 960,
        height: 1280,
      },
      {
        src: "/projects/boise-bronze-kitchen-accents/01.jpg",
        alt: "Floating wood shelves with bronze edge trim along the front edge, styled with books and decor.",
        width: 960,
        height: 1280,
      },
      {
        src: "/projects/boise-bronze-kitchen-accents/02.jpg",
        alt: "Close-up of the bronze edge trim on a floating shelf corner, showing the fastening screws.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "bronze-cabinet-accents-and-hood",
    title: "Bronze Cabinet Accents and Hood",
    category: "Kitchen & Interior Finishes",
    summary:
      "Bronze muntin bars on a glass-front display cabinet, part of a larger kitchen accent package including a range hood.",
    description:
      "More photos of this project are on the way — currently showing the bronze muntin bars dividing the panes of a glass-front display cabinet.",
    materials: ["Bronze"],
    coverImage: "/projects/bronze-cabinet-accents-and-hood/cover.jpg",
    images: [
      {
        src: "/projects/bronze-cabinet-accents-and-hood/cover.jpg",
        alt: "Glass-front display cabinet with bronze muntin bars dividing the panes, filled with dishware.",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    slug: "wine-cellar-door",
    title: "Arched Wine Cellar Door",
    category: "Architectural Metalwork",
    location: "Snoqualmie, WA",
    summary:
      "A hand-forged steel-and-glass double door with Damascus steel accents, set into an arched opening leading to a brick barrel-vault wine cellar.",
    description:
      "The cellar behind this door is fully brick-vaulted, so the entrance needed to match that level of craft. We hand-forged an arched steel frame and glazed double doors, including a matching side panel, and brought in Damascus steel for the accents — so the whole opening reads as one continuous piece of ironwork.",
    challenge:
      "Fabricate an arched frame and a pair of doors that fit a curved masonry opening precisely, without the frame looking applied or separate from the brickwork.",
    result:
      "A tight-fitting arched steel-and-glass entry, hand-forged with Damascus steel accents and a substantial matching pull handle.",
    materials: ["Hand-forged steel", "Glass panels", "Damascus steel accents"],
    coverImage: "/projects/wine-cellar-door/cover.jpg",
    images: [
      {
        src: "/projects/wine-cellar-door/cover.jpg",
        alt: "Arched steel-and-glass double door opening into a brick barrel-vaulted wine cellar with wood wine racks.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/wine-cellar-door/01.jpg",
        alt: "Detail of the wine cellar door's hand-forged steel surface and glazing.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/wine-cellar-door/02.jpg",
        alt: "Close-up of the door pull with Damascus steel accents, mounted to the hand-forged steel door frame.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "modern-steel-planter-boxes",
    title: "Modern Steel Planter Boxes",
    category: "Planter Boxes",
    location: "Seattle, WA",
    summary:
      "A matched set of long, raw-steel planter boxes with integrated trellis posts for a modern backyard.",
    description:
      "This backyard called for several long, low planters that could double as a privacy trellis for climbing plants. We built a run of raw-steel boxes to matching dimensions, each with welded-in trellis posts and internal drainage, and set them on a compacted gravel base along the property line.",
    challenge:
      "Fabricate multiple planters to consistent dimensions with a raw steel finish that would weather evenly and a trellis structure strong enough for mature climbing plants.",
    result:
      "A coordinated run of welded steel planters with built-in trellising, finished and set in place along the yard.",
    materials: ["Raw mild steel", "Welded trellis posts", "Internal drainage"],
    coverImage: "/projects/modern-steel-planter-boxes/cover.jpg",
    images: [
      {
        src: "/projects/modern-steel-planter-boxes/cover.jpg",
        alt: "Finished raw-steel planter box set against a hedge, with a paver border and stone bench nearby.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/01.jpg",
        alt: "Aerial view of newly installed steel planter boxes with trellis posts, set in gravel during a backyard build.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/02.jpg",
        alt: "Raw steel planter box with welded trellis frame, ready for backfill on a construction site.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/03.jpg",
        alt: "Steel planter box under construction, showing internal reinforcement bars and gravel base.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/04.jpg",
        alt: "Long steel planter box on a gravel bed alongside a residential yard.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/05.jpg",
        alt: "Welded steel planter box with visible seams, prior to final placement.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/06.jpg",
        alt: "Steel planter box with trellis post, set against a backyard fence line.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/07.jpg",
        alt: "Raw steel planter box positioned along a paver walkway during installation.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-steel-planter-boxes/09.jpg",
        alt: "Steel planter boxes fully planted with peas on an integrated trellis and staked tomatoes, set on a curved bluestone patio bordered by a hedge.",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    slug: "hillside-view-home-railings",
    title: "View Home Deck & Stair Railings",
    category: "Railings & Handrails",
    location: "Milton, WA",
    summary:
      "Matching black cable-and-glass railings across a two-story home's rear balconies and exterior stair.",
    description:
      "This home's entire rear elevation opens onto stacked decks and a long exterior stair, so the railings needed to be consistent across every level and disappear visually against the view. We fabricated matching black-framed rail systems with glass and cable infill for the balconies and a matching guard system for the stair, tying the whole back of the house together.",
    challenge:
      "Keep a uniform rail design across two stories of balconies plus a full exterior staircase, while preserving sightlines to the yard and trees beyond.",
    result:
      "A consistent black rail system — glass panels on the balconies, cable infill on the stair — installed across the full rear elevation.",
    materials: ["Powder-coated steel framing", "Tempered glass panels", "Stainless cable infill"],
    coverImage: "/projects/hillside-view-home-railings/cover.jpg",
    images: [
      {
        src: "/projects/hillside-view-home-railings/cover.jpg",
        alt: "Two-story modern home with matching black-framed glass balcony railings and a long exterior stair with cable railing.",
        width: 1800,
        height: 1350,
      },
      {
        src: "/projects/hillside-view-home-railings/01.jpg",
        alt: "Side view of the same home showing the black stair railing descending from the upper deck to the backyard patio.",
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    slug: "cedar-steel-trash-enclosure",
    title: "Steel-Framed Enclosure with Wood Infill",
    category: "Outdoor Features",
    location: "Milton, WA",
    summary:
      "A blackened steel-frame enclosure with horizontal wood slats and a matching gate, built for a paver patio.",
    description:
      "This enclosure needed to screen a utility area without looking like an afterthought on a nicely hardscaped patio. We built a welded steel frame with horizontal wood slat infill and a hinged double gate with a lockable latch, finished to match the home's black exterior hardware.",
    challenge:
      "Design a fully enclosed screen with a functional, lockable gate that reads as intentional architecture rather than a utility fix.",
    result:
      "A steel-and-wood enclosure with a locking double gate, set on a herringbone paver patio.",
    materials: ["Blackened steel frame", "Wood slat infill", "Locking gate hardware"],
    coverImage: "/projects/cedar-steel-trash-enclosure/cover.jpg",
    images: [
      {
        src: "/projects/cedar-steel-trash-enclosure/cover.jpg",
        alt: "Steel-framed enclosure with horizontal wood slats and a locking double gate, on a herringbone paver patio.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/cedar-steel-trash-enclosure/01.jpg",
        alt: "Corner detail of the steel frame and wood slat infill on the enclosure.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/cedar-steel-trash-enclosure/02.jpg",
        alt: "Wide view of the enclosure in place along a backyard patio, with the gate latch visible.",
        width: 1350,
        height: 1800,
      },
    ],
    videos: [
      {
        src: "/projects/cedar-steel-trash-enclosure/enclosure-install.mp4",
        alt: "Walkthrough of the finished steel-and-wood enclosure on the paver patio, including a close-up of the frame joinery and gate latch.",
        poster: "/projects/cedar-steel-trash-enclosure/cover.jpg",
      },
    ],
  },
  {
    slug: "wood-steel-address-sign",
    title: "Wood & Steel Address Sign",
    category: "Fully Custom Fabrication",
    location: "Milton, WA",
    summary:
      "A framed steel-and-wood address sign with applied metal house numbers, set on a freestanding post.",
    description:
      "A simple request — a house number visible from the street — became a small signature piece. We built a black steel frame around a wood panel and applied cut steel numbers to it, then mounted the whole thing on a freestanding post so it reads clearly from the road.",
    challenge:
      "Make a street-facing address sign that felt custom-built rather than off-the-shelf, using the same material language as the rest of the property's metalwork.",
    result:
      "A framed wood-and-steel address sign with applied numbers, installed on its own post at the property entrance.",
    materials: ["Steel frame", "Wood panel", "Applied steel numerals"],
    coverImage: "/projects/wood-steel-address-sign/cover.jpg",
    images: [
      {
        src: "/projects/wood-steel-address-sign/cover.jpg",
        alt: "Framed steel-and-wood address sign with applied metal house numbers, mounted on a freestanding post.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/wood-steel-address-sign/01.jpg",
        alt: "Angled view of the address sign showing the steel frame and hinge detail around the wood panel.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "custom-address-mailbox",
    title: "Custom Steel Mailbox",
    category: "Fully Custom Fabrication",
    location: "Coupeville, WA",
    summary:
      "A fully custom steel mailbox with an angular hooded top and house numbers laser-cut through the post.",
    description:
      "Rather than a stock mailbox, this piece was built entirely from steel — an angular hooded top welded above a squared post, with the house number cut straight through the metal so it's legible from either direction.",
    challenge:
      "Build a weatherproof, fully custom mailbox from steel alone, with the address integrated into the structure rather than added as a separate plate.",
    result:
      "A welded steel mailbox with a laser-cut address and a distinct angular profile, set in a concrete footing at the curb.",
    materials: ["Welded mild steel", "Laser-cut numerals", "Concrete footing"],
    coverImage: "/projects/custom-address-mailbox/cover.jpg",
    images: [
      {
        src: "/projects/custom-address-mailbox/cover.jpg",
        alt: "Custom steel mailbox with an angular hooded top and house numbers cut through the steel post, set at the curb.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/custom-address-mailbox/01.jpg",
        alt: "Close-up of the laser-cut house numbers on the mailbox post.",
        width: 1350,
        height: 1800,
      },
    ],
    videos: [
      {
        src: "/projects/custom-address-mailbox/mailbox-install.mp4",
        alt: "Another example of the same angular steel mailbox design, finished in a gloss purple with a red flag and house numbers cut through the post.",
        poster: "/projects/custom-address-mailbox/cover.jpg",
      },
    ],
  },
  {
    slug: "sliding-driveway-gate",
    title: "Slatted Steel Driveway Gate",
    category: "Outdoor Features",
    location: "Sammamish, WA",
    summary:
      "A wide sliding driveway gate with horizontal raw-steel slats, built for a wooded rural property.",
    description:
      "This driveway needed a gate wide enough to slide clear on a rural property, with enough visibility through it to see oncoming traffic on the road. We built a full steel frame with evenly spaced horizontal slats and mounted it on a heavy-duty sliding track between two steel posts set in concrete.",
    challenge:
      "Span a wide driveway opening with a gate that stays rigid over a long slide and still lets sightlines through to the road.",
    result:
      "A wide raw-steel slat gate on a sliding track, framed by concrete-set steel posts.",
    materials: ["Raw mild steel", "Sliding gate track", "Concrete-set posts"],
    coverImage: "/projects/sliding-driveway-gate/cover.jpg",
    images: [
      {
        src: "/projects/sliding-driveway-gate/cover.jpg",
        alt: "Wide sliding steel driveway gate with horizontal slats, set between concrete posts on a wooded rural property.",
        width: 1800,
        height: 1350,
      },
    ],
    videos: [
      {
        src: "/projects/sliding-driveway-gate/gate-install.mp4",
        alt: "Install-day footage of the slatted steel driveway gate being set into place and hung on its track between the concrete-set posts.",
        poster: "/projects/sliding-driveway-gate/cover.jpg",
      },
    ],
  },
  {
    slug: "salmon-storm-drain-grate",
    title: "Salmon Storm Drain Grate",
    category: "Fully Custom Fabrication",
    location: "Milton, WA",
    summary:
      "A custom-cut steel storm drain grate featuring a salmon silhouette, set into a paver walkway.",
    description:
      "A standard drain grate on this walkway was swapped for something with real character — a steel plate custom-cut with a salmon silhouette and a scatter of bubble-like holes, sized to drop directly into the existing paver opening.",
    challenge:
      "Fit a fully custom, decoratively cut grate into a standard drain opening while keeping enough open area for proper drainage.",
    result:
      "A one-off cut-steel grate that turns a utility drain into a small piece of art in the walkway.",
    materials: ["Cut steel plate"],
    coverImage: "/projects/salmon-storm-drain-grate/cover.jpg",
    images: [
      {
        src: "/projects/salmon-storm-drain-grate/cover.jpg",
        alt: "Custom steel storm drain grate cut with a salmon silhouette and bubble pattern, set into a paver walkway.",
        width: 960,
        height: 1280,
      },
      {
        src: "/projects/salmon-storm-drain-grate/01.jpg",
        alt: "Wider view of the salmon storm drain grate in place along a paver path.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "kitchen-island-table-leg",
    title: "Hand-Forged Table Leg",
    category: "Furniture & Fixtures",
    location: "Sammamish, WA",
    summary:
      "A blackened, hand-textured tapered table leg extending a kitchen island into a peninsula table.",
    description:
      "Rather than build an entirely new table, this kitchen island got a single sculptural steel leg to support an extended peninsula overhang — tapered and hand-textured down its length, finished black to match the room's other metal accents.",
    challenge:
      "Support an extended counter overhang with a single leg that could carry the load invisibly while adding a decorative, hand-forged look.",
    result:
      "A tapered, textured blackened-steel leg that reads as a design feature as much as a structural support.",
    materials: ["Blackened mild steel", "Hand-textured finish", "Leveling foot"],
    coverImage: "/projects/kitchen-island-table-leg/cover.jpg",
    images: [
      {
        src: "/projects/kitchen-island-table-leg/cover.jpg",
        alt: "Kitchen island extended into a peninsula table, supported by a single tapered, hand-textured blackened-steel leg.",
        width: 1350,
        height: 1800,
      },
    ],
  },
  {
    slug: "modern-stairwell-railing",
    title: "Modern Stairwell Railing",
    category: "Railings & Handrails",
    location: "Maple Valley, WA",
    summary:
      "A blackened steel handrail with slim horizontal bars, wrapping an open stairwell and loft landing.",
    description:
      "This two-story stairwell needed a rail that felt sturdy from the stair itself and stayed visually light from the loft landing above. We built a continuous blackened steel frame with evenly spaced horizontal bars, carried around the corner posts and down the stair run as one unbroken line.",
    challenge:
      "Wrap a rail continuously around an open stairwell and loft opening while keeping the design consistent through every angle and transition.",
    result:
      "A single continuous horizontal-bar rail system spanning the loft landing and the stair down to the main floor.",
    materials: ["Blackened mild steel", "Powder-coat finish"],
    coverImage: "/projects/modern-stairwell-railing/cover.jpg",
    images: [
      {
        src: "/projects/modern-stairwell-railing/cover.jpg",
        alt: "Blackened steel horizontal-bar railing wrapping a loft landing, with a window and staircase in the background.",
        width: 1800,
        height: 1350,
      },
      {
        src: "/projects/modern-stairwell-railing/02.jpg",
        alt: "The same horizontal-bar railing following the stair down from the loft landing to the main floor.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-stairwell-railing/03.jpg",
        alt: "Detail of the railing's horizontal bars and corner post along the stair.",
        width: 1200,
        height: 900,
      },
      {
        src: "/projects/modern-stairwell-railing/04.jpg",
        alt: "Horizontal-bar railing installed over a half-wall opening between a hallway and stairwell.",
        width: 1800,
        height: 1350,
      },
      {
        src: "/projects/modern-stairwell-railing/05.jpg",
        alt: "Close-up of a welded post-to-baserail connection on the stairwell railing.",
        width: 600,
        height: 450,
      },
      {
        src: "/projects/modern-stairwell-railing/06.jpg",
        alt: "Full view of the stairwell railing along the upper landing.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/modern-stairwell-railing/07.jpg",
        alt: "Wide view of the stairwell and railing from the lower level looking up.",
        width: 600,
        height: 450,
      },
    ],
  },
  {
    slug: "cascade-view-deck-railing",
    title: "Mountain-View Deck & Stair Rail",
    category: "Railings & Handrails",
    location: "Snoqualmie, WA",
    summary:
      "A minimalist bent-steel handrail and matching deck guard, set against a dramatic mountain backdrop.",
    description:
      "With a view like this, the rail had to get out of the way. We kept the deck guard to a simple horizontal-bar gate section and paired it with a single sculptural bent-steel handrail at the stair — just enough steel to meet code and guide a hand, nothing more.",
    challenge:
      "Provide a compliant deck guard and stair handrail without adding visual clutter in front of an unobstructed mountain view.",
    result:
      "A minimal bent-steel handrail at the stair and a simple bar-rail gate section on the deck above.",
    materials: ["Mild steel", "Powder-coat finish"],
    coverImage: "/projects/cascade-view-deck-railing/cover.jpg",
    images: [
      {
        src: "/projects/cascade-view-deck-railing/cover.jpg",
        alt: "Steel bar-rail deck gate on a concrete-and-wood deck overlooking a forested mountain valley.",
        width: 1350,
        height: 1800,
      },
      {
        src: "/projects/cascade-view-deck-railing/01.jpg",
        alt: "Minimalist bent-steel handrail at a stair landing, with a mountain valley view in the background.",
        width: 1800,
        height: 1350,
      },
    ],
  },
  {
    slug: "glass-elevator-stair-railing",
    title: "Stairwell Railing with Glass Elevator",
    category: "Railings & Handrails",
    location: "Gig Harbor, WA",
    summary:
      "A vertical-baluster black steel railing wrapping a stairwell landing beside a residential glass elevator.",
    description:
      "This home's central stairwell wraps a glass elevator shaft, so the railing needed clean sightlines through to the elevator and the floors below. We built a vertical-baluster black steel rail with a rounded cap, following the stair and landing in a continuous run.",
    challenge:
      "Wrap a multi-level stairwell railing around a curved glass elevator shaft while keeping the rail visually light next to the glass.",
    result:
      "A continuous black vertical-baluster rail with a smooth cap, following the stair and landing around the elevator shaft.",
    materials: ["Blackened mild steel", "Powder-coat finish"],
    coverImage: "/projects/glass-elevator-stair-railing/cover.jpg",
    images: [
      {
        src: "/projects/glass-elevator-stair-railing/cover.jpg",
        alt: "Black vertical-baluster stair railing wrapping a landing beside a glass elevator shaft in a multi-story home.",
        width: 1800,
        height: 1350,
      },
      {
        src: "/projects/glass-elevator-stair-railing/01.jpg",
        alt: "Detail view of the vertical-baluster railing and rounded handrail cap along the stair.",
        width: 1012,
        height: 1800,
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
