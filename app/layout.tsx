import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eaglesepticpumping.com"),
  title: {
    default: "Eagle Septic Guide | Free Septic System Information",
    template: "%s | Eagle Septic Guide",
  },
  description:
    "Free septic system guides, maintenance tips, troubleshooting help, and cost information for homeowners. Learn how to understand and care for your septic system.",
  keywords: [
    "septic system guide",
    "septic tank maintenance",
    "septic system information",
    "how septic systems work",
    "septic troubleshooting",
  ],
  openGraph: {
    type: "website",
    siteName: "Eagle Septic Guide",
    images: [
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=630&q=80&fit=crop&crop=center",
        width: 1200,
        height: 630,
        alt: "Residential home with a well-maintained lawn — Eagle Septic Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eagle Septic Guide | Free Septic System Information",
    description:
      "Free septic system guides, maintenance tips, troubleshooting help, and cost information for homeowners.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
