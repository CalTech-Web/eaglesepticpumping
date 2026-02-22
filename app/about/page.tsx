import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: { absolute: "About Eagle Septic Guide" },
  description:
    "Eagle Septic Guide is a free informational resource for homeowners with septic systems. Learn about our mission and what you'll find here.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-brand-900 py-16 sm:py-20">
          <div className="container-max px-4 sm:px-6 lg:px-8">
            <nav className="mb-6 text-sm text-brand-300">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">About</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
                About Eagle Septic Guide
              </h1>
              <p className="text-xl leading-relaxed text-brand-200">
                A free information resource for homeowners who want to understand,
                maintain, and troubleshoot their septic systems.
              </p>
            </div>
          </div>
        </section>

        {/* About content */}
        <section className="bg-white">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div className="space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Eagle Septic Guide exists because most septic system information
                  online is buried in service company websites designed to sell you
                  something. We wanted to build a straightforward resource where
                  homeowners can get honest answers without a sales pitch.
                </p>
                <p>
                  Most homeowners don&apos;t think about their septic system until
                  something goes wrong. By then, a $400 pump-out has turned into
                  a $15,000 drain field replacement. Our goal is to give you the
                  information to prevent that.
                </p>
                <p>
                  You&apos;ll find guides on how septic systems work, how often to
                  pump, signs of problems, cost ranges, and what to ask a
                  contractor. Everything is written for homeowners — not engineers
                  or plumbers.
                </p>
                <p>
                  This is a free resource. There are no paid recommendations,
                  no sponsored content, and no pressure to call anyone.
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-2xl bg-brand-50 p-8">
                  <h2 className="mb-4 text-xl font-bold text-brand-900">What You&apos;ll Find Here</h2>
                  <ul className="space-y-3">
                    {[
                      "How septic systems work (conventional, aerobic, mound)",
                      "Maintenance schedules and what they include",
                      "Signs your system needs attention",
                      "Cost guides for pumping, inspections, and repairs",
                      "What to do in a septic emergency",
                      "Septic vs. sewer — pros and cons",
                      "Drain field care and common failure causes",
                      "What to ask before hiring a septic contractor",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-brand-800">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl bg-gray-50 p-8">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Disclaimer</h2>
                  <p className="text-sm leading-relaxed text-gray-600">
                    The information on this site is for general educational purposes only.
                    Septic systems vary significantly by region, soil type, age, and local
                    regulations. Always consult a licensed septic professional in your area
                    before making decisions about your system. Cost ranges are typical
                    averages and may not reflect prices in your market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Explore CTA */}
        <section className="bg-gray-50">
          <div className="container-max section-padding px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">Start Exploring</h2>
            <p className="mb-8 text-gray-600 max-w-xl mx-auto">
              Whether you just bought a home with a septic system or you&apos;ve had
              one for years, we have guides to help you understand what you&apos;re
              working with.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/resources"
                className="rounded-lg bg-accent-500 px-8 py-3 text-base font-bold text-white hover:bg-accent-600 transition-colors"
              >
                Browse All Guides
              </Link>
              <Link
                href="/blog"
                className="rounded-lg border-2 border-brand-700 px-8 py-3 text-base font-bold text-brand-700 hover:bg-brand-700 hover:text-white transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
