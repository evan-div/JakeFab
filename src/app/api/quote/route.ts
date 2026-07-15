import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/data/site";
import { MAX_ATTACHMENTS_BYTES, validateQuote } from "@/lib/validateQuote";

export const runtime = "nodejs";

export async function POST(req: Request) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 }
    );
  }

  const field = (name: string) => String(formData.get(name) ?? "").trim();

  // Honeypot — defensive backstop in case JS is disabled or the endpoint is
  // hit directly. Fake success so bots don't learn they were caught.
  if (field("company").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const fields = {
    name: field("name"),
    email: field("email"),
    phone: field("phone"),
    description: field("description"),
    projectType: field("projectType"),
  };

  const errors = validateQuote(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  const location = field("location");
  const budget = field("budget");
  const timeline = field("timeline");
  const preferredContact = field("preferredContact");

  // Attachments: skip (but still send the email) if they're missing, too
  // large in aggregate, or fail to read — a photo problem should never
  // block the core inquiry from reaching the shop.
  const rawFiles = formData
    .getAll("files")
    .filter((f): f is File => f instanceof File && f.size > 0);
  const totalBytes = rawFiles.reduce((sum, f) => sum + f.size, 0);

  let attachments: { filename: string; content: Buffer }[] = [];
  let attachmentsSkipped = false;

  if (rawFiles.length > 0) {
    if (totalBytes > MAX_ATTACHMENTS_BYTES) {
      attachmentsSkipped = true;
    } else {
      try {
        attachments = await Promise.all(
          rawFiles.map(async (file) => ({
            filename: file.name || "attachment",
            content: Buffer.from(await file.arrayBuffer()),
          }))
        );
      } catch (err) {
        console.error("quote route: failed reading attachments", err);
        attachments = [];
        attachmentsSkipped = true;
      }
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("quote route: RESEND_API_KEY is not set");
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 500 }
    );
  }

  const lines = [
    "New quote request from the JWALL site",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone || "—"}`,
    `Project location: ${location || "—"}`,
    `Project type: ${fields.projectType}`,
    `Approximate budget: ${budget || "—"}`,
    `Desired timeline: ${timeline || "—"}`,
    `Preferred contact: ${preferredContact || "—"}`,
    "",
    "Description:",
    fields.description,
    "",
    rawFiles.length === 0
      ? "Attachments: none"
      : attachmentsSkipped
        ? `Attachments: ${rawFiles.length} file(s) skipped — over the ${(
            MAX_ATTACHMENTS_BYTES /
            1024 /
            1024
          ).toFixed(0)}MB limit. Ask ${fields.name} to email photos directly.`
        : `Attachments: ${attachments.length} file(s), ~${(
            totalBytes /
            1024 /
            1024
          ).toFixed(1)}MB`,
  ];

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "JWALL Site <onboarding@resend.dev>",
      to: process.env.QUOTE_TO_EMAIL || site.email,
      replyTo: fields.email,
      subject: `New quote request — ${fields.name} (${fields.projectType})`,
      text: lines.join("\n"),
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("quote route: resend returned an error", error);
      return NextResponse.json(
        { ok: false, error: "send_failed" },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("quote route: unexpected error sending email", err);
    return NextResponse.json(
      { ok: false, error: "unexpected" },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, attachmentsSkipped });
}

// ▸ If spam ever becomes a problem: add IP-based rate limiting (e.g.
//   @vercel/kv with a sliding-window counter) or a CAPTCHA (Cloudflare
//   Turnstile is free and low-friction). Not needed at current volume —
//   the honeypot above catches unsophisticated bot traffic.
