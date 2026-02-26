import type { Metadata } from "next";
import Hero from "@/components/Hero";
import HomepageAnswerHub from "@/components/HomepageAnswerHub";
import SepticHealthCheck from "@/components/SepticHealthCheck";
import RecentPosts from "@/components/RecentPosts";

export const metadata: Metadata = {
  title: { absolute: "Eagle Septic Guide | Free Septic System Information for Homeowners" },
  description:
    "Free guides, maintenance tips, and troubleshooting help for homeowners with septic systems. Learn how your system works, when to pump, signs of problems, and more.",
  alternates: {
    canonical: "https://eaglesepticpumping.com",
  },
  openGraph: {
    title: "Eagle Septic Guide | Free Septic System Information",
    description:
      "Plain-language septic guides for homeowners — how it works, maintenance schedules, troubleshooting, costs, and more.",
    url: "https://eaglesepticpumping.com",
    type: "website",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Eagle Septic Guide",
  url: "https://eaglesepticpumping.com",
  description:
    "Free septic system information, guides, and troubleshooting tips for homeowners.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://eaglesepticpumping.com/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <RecentPosts />
      <HomepageAnswerHub />
      <SepticHealthCheck />
    </>
  );
}
