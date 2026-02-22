import Image from "next/image";
import Link from "next/link";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&h=900&q=85&fit=crop&crop=center";

export default function Hero() {
  return (
    <section className="relative flex min-h-[380px] items-center overflow-hidden bg-brand-900">
      {/* Background photo */}
      <Image
        src={HERO_IMAGE}
        alt="Residential home with green lawn and healthy septic system"
        fill
        priority
        className="object-cover object-center opacity-30"
        sizes="100vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-900/85 via-brand-800/75 to-brand-700/65" />

      <div className="container-max section-padding relative w-full">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent-500/20 px-4 py-2 text-sm font-semibold text-accent-400 ring-1 ring-accent-500/30">
            Free septic system information for homeowners
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Understand Your{" "}
            <span className="text-accent-400">Septic System</span>
          </h1>

          <p className="mb-8 text-lg text-brand-100 sm:text-xl">
            Plain-language guides, maintenance tips, and troubleshooting help
            for homeowners with septic systems. No jargon, no sales pitch.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/resources" className="btn-primary text-base">
              Browse All Guides
            </Link>
            <Link href="/blog" className="btn-secondary text-base">
              Read the Blog
            </Link>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-brand-100">
            {[
              "Free to Read",
              "No Ads",
              "Homeowner Focused",
              "Plain Language",
            ].map((trust) => (
              <div key={trust} className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4 text-accent-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clipRule="evenodd"
                  />
                </svg>
                {trust}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
