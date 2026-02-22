import type { Metadata } from "next";
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
    url: "https://eaglesepticpumping.com",
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
        {children}
      </body>
    </html>
  );
}
