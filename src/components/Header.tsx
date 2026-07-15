"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-premium ${
        solid
          ? "border-b border-steel-900/10 bg-concrete-50/95 backdrop-blur supports-[backdrop-filter]:bg-concrete-50/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Wordmark */}
        <a
          href="#top"
          className={`group flex flex-col leading-none transition-colors ${
            solid ? "text-steel-900" : "text-concrete-50"
          }`}
          aria-label={`${site.name} — home`}
        >
          <span className="font-display text-lg font-extrabold uppercase tracking-tight md:text-xl">
            {site.shortName}
          </span>
          <span
            className={`font-mono text-[10px] uppercase tracking-label transition-colors ${
              solid ? "text-steel-400" : "text-concrete-100/70"
            }`}
          >
            Fabrication · {site.city}, {site.addressRegion}
          </span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-copper-500 ${
                solid ? "text-steel-700" : "text-concrete-100"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a href="#quote" className="btn-primary !py-2.5 !px-5">
            Request a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center md:hidden ${
            solid ? "text-steel-900" : "text-concrete-50"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-concrete-50 md:hidden ${
          open ? "max-h-[420px]" : "max-h-0"
        } transition-[max-height] duration-500 ease-premium`}
      >
        <nav
          className="container-page flex flex-col gap-1 pb-6 pt-2"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-steel-900/10 py-3 text-base font-medium text-steel-800"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quote"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Request a Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
