import type { Metadata, Viewport } from "next";
import { Archivo, Inter, IBM_Plex_Mono } from "next/font/google";
import { site } from "@/data/site";
import { localBusinessJsonLd } from "@/lib/schema";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

const title = `${site.name} — Custom Metalwork in ${site.city}, ${site.addressRegion}`;
const description =
  "Custom metalsmith in Coupeville, Washington. Handrails, architectural metalwork, planters, kitchen features, and one-of-a-kind fabrication for homes and businesses across Whidbey Island and the greater Seattle area.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "custom metalwork Coupeville",
    "Whidbey Island metal fabrication",
    "custom railings and handrails",
    "architectural metalwork",
    "metalsmith Coupeville Washington",
    "custom steel fabrication Seattle",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
    images: [
      {
        url: "/projects/hillside-view-home-railings/cover.jpg",
        width: 2048,
        height: 1536,
        alt: `${site.name} — custom metalwork in ${site.city}, ${site.state}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/projects/hillside-view-home-railings/cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D0C0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          // JSON-LD is trusted, first-party structured data.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        {children}
      </body>
    </html>
  );
}
