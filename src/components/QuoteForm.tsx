"use client";

import { useId, useRef, useState } from "react";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

const PROJECT_TYPES = [
  "Handrail or railing",
  "Planter box",
  "Interior metalwork",
  "Exterior metalwork",
  "Architectural feature",
  "Furniture or fixture",
  "Repair or modification",
  "Something completely custom",
];

const BUDGETS = [
  "Not sure yet",
  "Under $2,500",
  "$2,500 – $7,500",
  "$7,500 – $20,000",
  "$20,000+",
];

const TIMELINES = [
  "Flexible / no rush",
  "Within 1–2 months",
  "Within 3–6 months",
  "As soon as possible",
];

const CONTACT_METHODS = ["Email", "Phone", "Text"];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<string, string>>;

export function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const uid = useId();
  const [fileName, setFileName] = useState<string>("");

  const fieldId = (name: string) => `${uid}-${name}`;

  const validate = (data: FormData): Errors => {
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const description = String(data.get("description") ?? "").trim();
    const type = String(data.get("projectType") ?? "");

    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Enter a valid email address.";
    // Phone is optional, but if provided should look plausible.
    if (phone && phone.replace(/[^\d]/g, "").length < 7)
      next.phone = "Enter a valid phone number, or leave this blank.";
    if (!type) next.projectType = "Choose the closest project type.";
    if (description.length < 15)
      next.description =
        "Tell us a little more — even a couple of sentences helps.";
    return next;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field.
    if (String(data.get("company") ?? "").length > 0) {
      // Silently pretend success for bots.
      setStatus("success");
      return;
    }

    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      // Move focus to the first invalid field for keyboard/screen-reader users.
      const firstKey = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");

    // ───────────────────────────────────────────────────────────────────
    // ▸ CONNECT FORM SUBMISSION HERE.
    //   This form is NOT wired to a backend yet. Replace the simulated
    //   delay below with a real submission, e.g.:
    //
    //     const res = await fetch("/api/quote", { method: "POST", body: data });
    //     if (!res.ok) throw new Error("Request failed");
    //
    //   Options: a Next.js Route Handler (/app/api/quote/route.ts) that emails
    //   the shop, or a form service (Formspree, Basin, Web3Forms, Resend, etc.).
    //   Handle the uploaded file(s) server-side; do not trust client input.
    // ───────────────────────────────────────────────────────────────────
    try {
      await new Promise((r) => setTimeout(r, 900)); // simulated only
      setStatus("success");
      form.reset();
      setFileName("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section id="quote" className="bg-steel-950 py-20 text-concrete-50 md:py-28">
        <div className="container-page">
          <Reveal className="mx-auto max-w-xl border border-concrete-50/15 bg-steel-900 p-10 text-center">
            <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-copper-500">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h2 className="font-display text-2xl font-bold">Thanks — that's in.</h2>
            <p className="mt-3 text-sm leading-relaxed text-concrete-100/75">
              Your request has been received in the browser. We'll follow up to
              talk through your project.{" "}
              <span className="text-concrete-100/50">
                (Note: no backend is connected yet — see the code comment in{" "}
                <code className="font-mono">QuoteForm.tsx</code> to wire up real
                delivery.)
              </span>
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="btn-ghost-light mt-8"
            >
              Send another request
            </button>
          </Reveal>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="bg-steel-950 py-20 text-concrete-50 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Invitation copy */}
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <p className="eyebrow mb-5">Request a quote</p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Tell us about your project.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-concrete-100/75">
              Rough ideas are welcome. Sketches, photos, measurements,
              inspiration images, or a few sentences are plenty to get started —
              we'll help work out the rest.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8 space-y-4 border-t border-concrete-50/10 pt-8">
            <ContactRow label="Email" value={site.email} />
            <ContactRow label="Phone" value={site.phone} />
            <ContactRow
              label="Area"
              value={`${site.city}, ${site.state} · ${site.region}`}
            />
          </Reveal>
        </div>

        {/* Form */}
        <div className="min-w-0 lg:col-span-7">
          <Reveal>
            <form
              ref={formRef}
              onSubmit={onSubmit}
              noValidate
              className="grid grid-cols-1 gap-5 border border-concrete-50/12 bg-steel-900 p-6 sm:p-8"
            >
              {status === "error" && (
                <p
                  role="alert"
                  className="border-l-2 border-red-400 bg-red-400/10 px-3 py-2 text-sm text-red-200"
                >
                  Please fix the highlighted fields and try again.
                </p>
              )}

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id={fieldId("name")}
                  name="name"
                  label="Name"
                  required
                  error={errors.name}
                  autoComplete="name"
                />
                <Field
                  id={fieldId("email")}
                  name="email"
                  label="Email"
                  type="email"
                  required
                  error={errors.email}
                  autoComplete="email"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  id={fieldId("phone")}
                  name="phone"
                  label="Phone"
                  type="tel"
                  optional
                  error={errors.phone}
                  autoComplete="tel"
                />
                <Field
                  id={fieldId("location")}
                  name="location"
                  label="Project location"
                  optional
                  placeholder="City or neighborhood"
                  autoComplete="address-level2"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <SelectField
                  id={fieldId("projectType")}
                  name="projectType"
                  label="Project type"
                  required
                  error={errors.projectType}
                  options={PROJECT_TYPES}
                  placeholder="Select a type"
                />
                <SelectField
                  id={fieldId("budget")}
                  name="budget"
                  label="Approximate budget"
                  optional
                  options={BUDGETS}
                  placeholder="Select a range"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <SelectField
                  id={fieldId("timeline")}
                  name="timeline"
                  label="Desired timeline"
                  optional
                  options={TIMELINES}
                  placeholder="Select a timeline"
                />
                <SelectField
                  id={fieldId("contact")}
                  name="preferredContact"
                  label="Preferred contact"
                  optional
                  options={CONTACT_METHODS}
                  placeholder="Select one"
                />
              </div>

              <TextAreaField
                id={fieldId("description")}
                name="description"
                label="Project description"
                required
                error={errors.description}
                placeholder="What are you thinking about building? Include rough sizes, materials, or a link if you have one."
              />

              {/* File upload */}
              <div>
                <label
                  htmlFor={fieldId("files")}
                  className="mb-1.5 block text-sm font-medium text-concrete-100"
                >
                  Photos or inspiration{" "}
                  <span className="text-concrete-100/40">(optional)</span>
                </label>
                <label
                  htmlFor={fieldId("files")}
                  className="flex cursor-pointer items-center justify-between gap-3 border border-dashed border-concrete-50/25 bg-steel-950/40 px-4 py-3 text-sm text-concrete-100/70 transition-colors hover:border-copper-400"
                >
                  <span className="truncate">
                    {fileName || "Attach a sketch, photo, or reference image"}
                  </span>
                  <span className="shrink-0 font-mono text-xs uppercase tracking-wide text-copper-400">
                    Browse
                  </span>
                  <input
                    id={fieldId("files")}
                    name="files"
                    type="file"
                    multiple
                    accept="image/*,.pdf"
                    className="sr-only"
                    onChange={(e) => {
                      const files = e.currentTarget.files;
                      setFileName(
                        !files || files.length === 0
                          ? ""
                          : files.length === 1
                            ? files[0].name
                            : `${files.length} files selected`
                      );
                    }}
                  />
                </label>
              </div>

              {/* Honeypot — visually hidden, ignored by users, catches bots. */}
              <div aria-hidden="true" className="hidden">
                <label htmlFor={fieldId("company")}>
                  Company (leave blank)
                </label>
                <input
                  id={fieldId("company")}
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="mt-2 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-concrete-100/45">
                  We'll only use your details to talk about your project.
                </p>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full sm:w-auto"
                >
                  {status === "submitting" ? "Sending…" : "Send request"}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex min-w-0 items-baseline gap-4">
      <span className="w-16 shrink-0 font-mono text-[11px] uppercase tracking-label text-concrete-100/45">
        {label}
      </span>
      <span className="min-w-0 break-words text-sm text-concrete-100/85">
        {value}
      </span>
    </div>
  );
}

/* ── Reusable field primitives ─────────────────────────────────────────── */

const inputBase =
  "w-full min-w-0 border bg-steel-950/50 px-3.5 py-2.5 text-sm text-concrete-50 placeholder:text-concrete-100/35 transition-colors focus:outline-none focus-visible:border-copper-400";

function labelEl(id: string, label: string, required?: boolean, optional?: boolean) {
  return (
    <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-concrete-100">
      {label}
      {required && <span className="ml-1 text-copper-400">*</span>}
      {optional && <span className="ml-1 text-concrete-100/40">(optional)</span>}
    </label>
  );
}

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  optional,
  error,
  placeholder,
  autoComplete,
}: {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      {labelEl(id, label, required, optional)}
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} ${
          error ? "border-red-400" : "border-concrete-50/15"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function SelectField({
  id,
  name,
  label,
  required,
  optional,
  error,
  options,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  options: string[];
  placeholder: string;
}) {
  return (
    <div>
      {labelEl(id, label, required, optional)}
      <select
        id={id}
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} appearance-none bg-[length:12px] bg-[right_0.9rem_center] bg-no-repeat pr-9 ${
          error ? "border-red-400" : "border-concrete-50/15"
        }`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23A49C90' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-steel-900">
            {opt}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function TextAreaField({
  id,
  name,
  label,
  required,
  error,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      {labelEl(id, label, required)}
      <textarea
        id={id}
        name={name}
        rows={5}
        required={required}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBase} resize-y ${
          error ? "border-red-400" : "border-concrete-50/15"
        }`}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
