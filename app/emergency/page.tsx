import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PHONE, PHONE_HREF } from "@/lib/services";

export const metadata: Metadata = {
  title: { absolute: "24/7 Emergency Septic Service | Eagle Septic Pumping" },
  description:
    "Septic backup or overflow? Call Eagle Septic NOW — we respond 24/7, including nights, weekends, and holidays. Licensed technicians, fast dispatch to Modesto, Turlock, Stockton & Central Valley.",
  alternates: {
    canonical: "https://eaglesepticpumping.com/emergency",
  },
  openGraph: {
    title: "24/7 Emergency Septic Service | Eagle Septic Pumping",
    description:
      "Septic backup or overflow? Call Eagle Septic NOW — we respond 24/7, including nights, weekends, and holidays.",
    type: "website",
  },
};

const immediateSteps = [
  {
    step: "1",
    title: "Stop all water use",
    detail:
      "No flushing, no laundry, no running faucets. Every drop adds pressure and worsens the backup.",
  },
  {
    step: "2",
    title: "Stay away from affected areas",
    detail:
      "Raw sewage is a health hazard. Keep children and pets out of any rooms with backup or sewage odor.",
  },
  {
    step: "3",
    title: "Open windows if safe",
    detail:
      "Ventilate the home to reduce sewage gas buildup. Do not use fans that could circulate contaminated air throughout the house.",
  },
  {
    step: "4",
    title: "Call us now",
    detail:
      "A live technician answers 24/7. We'll assess the situation, dispatch immediately, and give you an ETA.",
  },
];

const emergencySigns = [
  "Sewage backing up into sinks, tubs, or toilets",
  "Raw sewage smell inside the house",
  "Multiple drains slow or stopped at the same time",
  "Gurgling sounds from toilets or floor drains",
  "Standing water or sewage surfacing in the yard",
  "Soggy, foul-smelling patches of grass over the drain field",
  "Sewage alarm sounding (for systems with pumps or aerators)",
  "All water use in the home has stopped draining",
];

const faqs = [
  {
    q: "What should I do right now while I wait?",
    a: "Stop all water use immediately — no flushing, no laundry, no running faucets. If sewage has entered the home, stay out of affected areas and keep children and pets away. Open windows for ventilation. Our technician will give you more specific guidance when you call.",
  },
  {
    q: "How fast can you get here?",
    a: "We aim to be on-site within 2–4 hours of your call. Response time varies by distance and current call volume. We'll give you an estimated arrival time the moment you call so you know exactly what to expect.",
  },
  {
    q: "Do you charge extra for nights and weekends?",
    a: "Yes — after-hours emergency service carries an additional fee. We'll quote you the exact price before dispatching, so there are no surprises on the invoice.",
  },
  {
    q: "Will emergency pumping fix the problem permanently?",
    a: "Emergency pumping stops active backup and stabilizes your system. It doesn't fix the root cause. After pumping, we'll diagnose exactly what triggered the emergency — full tank, pump failure, blockage, or drain field failure — and give you a clear repair plan.",
  },
  {
    q: "Is sewage backup dangerous to my health?",
    a: "Yes. Raw sewage contains bacteria, viruses, and parasites. Avoid contact with sewage or affected surfaces. Wash hands thoroughly if any contact occurs. If sewage has contaminated a large area, professional remediation may also be needed — we can refer you to trusted partners.",
  },
  {
    q: "Can I use toilets or sinks while I wait?",
    a: "No. Any water you add to the system increases pressure and can worsen the backup. Avoid all water use until we arrive and stabilize the system.",
  },
  {
    q: "What if the drain field is the problem?",
    a: "Drain field failures can't be fixed by pumping alone, but emergency pumping still relieves immediate pressure. After stabilizing the situation, we'll assess the field and discuss repair options — from targeted restoration to full replacement — with honest pricing.",
  },
];

const emergencySchema = {
  "@context": "https://schema.org",
  "@type": "EmergencyService",
  name: "Eagle Septic Pumping — 24/7 Emergency Septic Service",
  url: "https://eaglesepticpumping.com/emergency",
  telephone: PHONE,
  description:
    "24/7 emergency septic pumping and sewage backup response for homeowners and businesses in California's Central Valley. Fast dispatch, licensed technicians.",
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  areaServed: [
    { "@type": "City", name: "Modesto" },
    { "@type": "City", name: "Turlock" },
    { "@type": "City", name: "Ceres" },
    { "@type": "City", name: "Stockton" },
    { "@type": "City", name: "Riverbank" },
    { "@type": "City", name: "Oakdale" },
    { "@type": "City", name: "Manteca" },
    { "@type": "City", name: "Tracy" },
    { "@type": "City", name: "Merced" },
    { "@type": "City", name: "Atwater" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do During a Septic Emergency",
  description:
    "Immediate steps to take when you have a septic backup or sewage overflow, while waiting for emergency septic service to arrive.",
  totalTime: "PT5M",
  step: immediateSteps.map((item) => ({
    "@type": "HowToStep",
    position: Number(item.step),
    name: item.title,
    text: item.detail,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://eaglesepticpumping.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "24/7 Emergency Service",
      item: "https://eaglesepticpumping.com/emergency",
    },
  ],
};

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-6 w-6"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
      clipRule="evenodd"
    />
  </svg>
);

// Step-specific icons for "Do This Right Now" section
const NoWaterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM20.25 5.507v11.561L5.853 2.671c.15-.043.306-.075.467-.094a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93zM3.75 21V6.932l14.063 14.063L12 18.088l-7.165 3.583A.75.75 0 013.75 21z" />
  </svg>
);

const ShieldExclamationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path fillRule="evenodd" d="M11.484 2.17a.75.75 0 011.032 0 11.209 11.209 0 007.877 3.08.75.75 0 01.722.515 12.74 12.74 0 01.635 3.985c0 5.942-4.064 10.933-9.563 12.348a.749.749 0 01-.374 0C6.314 20.683 2.25 15.692 2.25 9.75c0-1.39.223-2.73.635-3.985a.75.75 0 01.722-.516l.143.001c2.996 0 5.718-1.17 7.734-3.08zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zM12 15a.75.75 0 100 1.5.75.75 0 000-1.5z" clipRule="evenodd" />
  </svg>
);

const WindowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
    <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 0a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm0 3a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z" clipRule="evenodd" />
  </svg>
);

// Icons for "What Happens When You Call" section
const ChatBubbleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97z" clipRule="evenodd" />
  </svg>
);

const TruckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875H3.75a3 3 0 106 0h3.75a.75.75 0 00.75-.75V15z" />
    <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
    <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
    <path fillRule="evenodd" d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.641l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z" clipRule="evenodd" />
  </svg>
);

const stepIcons = [
  <NoWaterIcon key="no-water" />,
  <ShieldExclamationIcon key="shield" />,
  <WindowIcon key="window" />,
  <PhoneIcon key="phone" />,
];

const callStepIcons = [
  <PhoneIcon key="phone" />,
  <ChatBubbleIcon key="chat" />,
  <TruckIcon key="truck" />,
  <WrenchIcon key="wrench" />,
];

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5 flex-shrink-0 text-red-400"
  >
    <path
      fillRule="evenodd"
      d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
      clipRule="evenodd"
    />
  </svg>
);

export default function EmergencyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(emergencySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Emergency top bar — above header */}
      <div className="bg-red-600 text-white">
        <div className="container-max flex flex-col items-center justify-between gap-2 px-4 py-3 sm:flex-row">
          <p className="text-sm font-semibold">
            ⚠️ Sewage backup? Don&apos;t wait — call now. We answer 24/7.
          </p>
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-1.5 text-sm font-bold text-red-700 shadow hover:bg-red-50 transition-colors"
          >
            <PhoneIcon />
            {PHONE}
          </a>
        </div>
      </div>

      <Header />

      <main>
        {/* Breadcrumb */}
        <nav className="border-b border-gray-200 bg-gray-50 px-4 py-3">
          <div className="container-max flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-brand-700">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-900">
              24/7 Emergency Service
            </span>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-red-900 text-white">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-700 px-4 py-1.5 text-sm font-semibold">
                <span className="h-2 w-2 rounded-full bg-red-300" />
                Available right now — 24/7/365
              </div>
              <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
                24/7 Emergency Septic Service
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-red-100 sm:text-xl">
                Sewage backup is a health emergency. A live technician answers
                now — no voicemail, no waiting until morning. We dispatch
                immediately and aim to arrive within 2–4 hours.
              </p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-xl font-bold text-red-800 shadow-lg transition-colors hover:bg-red-50"
              >
                <PhoneIcon />
                Call {PHONE} Now
              </a>
              <p className="mt-4 text-sm text-red-200">
                Real person answers. No hold music. No call center.
              </p>
            </div>
          </div>
        </section>

        {/* Immediate Action Steps */}
        <section className="bg-red-50 border-b-4 border-red-200">
          <div className="container-max section-padding">
            <h2 className="mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
              Do This Right Now While You Wait
            </h2>
            <p className="mb-10 text-center text-gray-600">
              These steps limit damage and protect your family until we arrive.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {immediateSteps.map((item, i) => (
                <div
                  key={item.step}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-red-100"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-red-400">
                    STEP {item.step}
                  </p>
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-700">
                    {stepIcons[i]}
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Is This an Emergency */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  Is This a Septic Emergency?
                </h2>
                <p className="mb-6 text-lg text-gray-600 leading-relaxed">
                  If you&apos;re experiencing any of the following, stop what
                  you&apos;re doing and call us immediately. These are not
                  &ldquo;wait until morning&rdquo; situations.
                </p>
                <ul className="space-y-3">
                  {emergencySigns.map((sign) => (
                    <li key={sign} className="flex items-start gap-3">
                      <CheckIcon />
                      <span className="text-gray-700">{sign}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <a
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 text-base font-bold text-white shadow transition-colors hover:bg-red-700"
                  >
                    <PhoneIcon />
                    Call Now — We Answer 24/7
                  </a>
                </div>
              </div>

              {/* What happens when you call */}
              <div className="rounded-xl bg-gray-50 p-6 lg:p-8">
                <h3 className="mb-6 text-xl font-bold text-gray-900">
                  What Happens When You Call
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "A technician picks up",
                      detail:
                        "You reach a licensed technician — not a call center or voicemail — who can assess your situation immediately.",
                    },
                    {
                      title: "We ask a few quick questions",
                      detail:
                        "Tank location, symptoms, number of people in the home. This helps us send the right equipment and give safety guidance.",
                    },
                    {
                      title: "We dispatch immediately",
                      detail:
                        "A vacuum truck is dispatched right away. We give you an ETA and any specific steps to follow until we arrive.",
                    },
                    {
                      title: "We stabilize, then diagnose",
                      detail:
                        "We pump the tank to stop active backup, then identify the root cause and explain your repair options with clear pricing.",
                    },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-700">
                        {callStepIcons[i]}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response commitment banner */}
        <section className="bg-red-900 text-white">
          <div className="container-max section-padding">
            <div className="grid gap-8 text-center sm:grid-cols-3">
              <div>
                <p className="text-4xl font-bold">2–4 hrs</p>
                <p className="mt-2 text-red-200">Target on-site response</p>
              </div>
              <div>
                <p className="text-4xl font-bold">24/7</p>
                <p className="mt-2 text-red-200">
                  Including holidays & weekends
                </p>
              </div>
              <div>
                <p className="text-4xl font-bold">Live</p>
                <p className="mt-2 text-red-200">
                  Real person answers every call
                </p>
              </div>
            </div>
            <div className="mt-10 text-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-red-800 shadow-lg transition-colors hover:bg-red-50"
              >
                <PhoneIcon />
                {PHONE} — Call Now
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-gray-50">
          <div className="container-max section-padding">
            <h2 className="mb-10 text-2xl font-bold text-gray-900 sm:text-3xl">
              Emergency Septic FAQs
            </h2>
            <div className="max-w-3xl space-y-6">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
                >
                  <h3 className="mb-3 text-lg font-semibold text-gray-900">
                    {item.q}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Non-emergency CTA */}
        <section className="bg-white">
          <div className="container-max section-padding">
            <div className="rounded-xl bg-gray-50 p-8 text-center ring-1 ring-gray-200">
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                Not an Emergency?
              </h2>
              <p className="mb-6 text-gray-600">
                Schedule routine pumping, an inspection, or get a free estimate
                for planned work.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/book"
                  className="rounded-lg bg-brand-700 px-6 py-3 text-sm font-bold text-white shadow transition-colors hover:bg-brand-800"
                >
                  Schedule Service
                </Link>
                <Link
                  href="/services"
                  className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition-colors hover:bg-gray-100"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
