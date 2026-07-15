/**
 * Shared between the client form (src/components/QuoteForm.tsx) and the
 * server route handler (src/app/api/quote/route.ts) so the two can never
 * drift out of sync.
 */

export const MAX_ATTACHMENTS_BYTES = 4 * 1024 * 1024; // 4 MB

export type QuoteFields = {
  name?: string;
  email?: string;
  phone?: string;
  description?: string;
  projectType?: string;
};

export function validateQuote(fields: QuoteFields): Record<string, string> {
  const errors: Record<string, string> = {};

  const name = (fields.name ?? "").trim();
  const email = (fields.email ?? "").trim();
  const phone = (fields.phone ?? "").trim();
  const description = (fields.description ?? "").trim();
  const projectType = (fields.projectType ?? "").trim();

  if (name.length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Enter a valid email address.";
  // Phone is optional, but if provided should look plausible.
  if (phone && phone.replace(/[^\d]/g, "").length < 7)
    errors.phone = "Enter a valid phone number, or leave this blank.";
  if (!projectType) errors.projectType = "Choose the closest project type.";
  if (description.length < 15)
    errors.description =
      "Tell us a little more — even a couple of sentences helps.";

  return errors;
}
