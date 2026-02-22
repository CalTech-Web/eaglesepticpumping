import Link from "next/link";

const answers = [
  {
    question: "How often should I pump my septic tank?",
    answer:
      "Most households need pumping every 3–5 years. A family of four with a 1,000-gallon tank typically pumps every 3–4 years. Waiting too long lets solids overflow into the drain field — turning a $400 pump job into a $15,000+ repair.",
    href: "/blog/how-often-pump-septic-tank",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    question: "What are the warning signs of a failing septic system?",
    answer:
      "Key warning signs include slow or gurgling drains, sewage odors inside or outside, unusually lush grass over the drain field, and wet or spongy ground near the tank. Any of these signals you need service soon.",
    href: "/blog/warning-signs-septic-system-failing",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    question: "How does a septic system work?",
    answer:
      "Wastewater flows from your home into a buried tank where solids settle and bacteria break them down. Clarified liquid (effluent) exits through the outlet pipe into a drain field, where soil filters it before it re-enters the groundwater.",
    href: "/blog/how-does-a-septic-system-work",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    question: "How much does septic pumping cost?",
    answer:
      "Residential septic pumping in the Central Valley typically runs $300–$600, depending on tank size and access. Larger tanks (1,500+ gallons) or difficult-to-reach locations cost more. We provide a firm quote before any work begins.",
    href: "/blog/septic-tank-pumping-cost-central-valley",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    question: "What should I do during a septic emergency?",
    answer:
      "Stop all water use immediately — every flush makes it worse. Keep people away from wet areas outside (sewage is a health hazard). Then call a septic company right away; most emergencies can be resolved with an emergency pump-out.",
    href: "/blog/septic-emergency-what-to-do",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

export default function HomepageAnswerHub() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-brand-600">
            Homeowner Guide
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Common Septic Questions, Answered
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-gray-600">
            Quick, straightforward answers from licensed technicians who service hundreds of
            Central Valley systems every year.
          </p>
        </div>

        {/* Answer grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {answers.slice(0, 3).map((item) => (
            <article
              key={item.href}
              className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                {item.icon}
              </div>
              <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">
                {item.question}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
              >
                Read full guide
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Second row */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {answers.slice(3).map((item) => (
            <article
              key={item.href}
              className="flex flex-col rounded-xl border border-gray-100 bg-gray-50 p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                {item.icon}
              </div>
              <h3 className="mb-3 text-base font-bold leading-snug text-gray-900">
                {item.question}
              </h3>
              <p className="flex-1 text-sm leading-relaxed text-gray-600">{item.answer}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
              >
                Read full guide
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Bottom link */}
        <div className="mt-8 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900"
          >
            Browse all septic guides and resources
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
