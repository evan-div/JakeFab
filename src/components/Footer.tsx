import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { label: "Instagram", href: site.social.instagram },
    { label: "Facebook", href: site.social.facebook },
    { label: "Houzz", href: site.social.houzz },
  ].filter((s) => s.href);

  return (
    <footer className="border-t border-concrete-50/10 bg-steel-950 text-concrete-50">
      <div className="container-page py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-xl font-extrabold uppercase tracking-tight">
              {site.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-concrete-100/60">
              Custom metalwork and fabrication in {site.city}, {site.state} —
              serving {site.region}.
            </p>
            <a href="#quote" className="btn-primary mt-6">
              Request a Quote
            </a>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="font-mono text-[11px] uppercase tracking-label text-concrete-100/40">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-concrete-100/75 transition-colors hover:text-copper-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] uppercase tracking-label text-concrete-100/40">
              Contact
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-concrete-100/75">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-copper-400"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="transition-colors hover:text-copper-400"
                >
                  {site.phone}
                </a>
              </li>
              <li className="text-concrete-100/60">
                {site.city}, {site.addressRegion}
              </li>
            </ul>

            {socials.length > 0 && (
              <ul className="mt-5 flex gap-4">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-concrete-100/75 transition-colors hover:text-copper-400"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-concrete-50/10 pt-6 text-xs text-concrete-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            Serving {site.serviceAreas.slice(0, 4).join(" · ")} and beyond.
          </p>
        </div>
      </div>
    </footer>
  );
}
