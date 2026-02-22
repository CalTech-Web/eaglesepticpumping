import Link from "next/link";

const topics = [
  {
    slug: "how-does-a-septic-system-work",
    question: "How does a septic system work?",
    blurb:
      "Understand the two main components, how waste breaks down in three layers, and what keeps your drain field healthy.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    slug: "warning-signs-septic-system-failing",
    question: "What are the warning signs of a failing system?",
    blurb:
      "Slow drains, sewage smells, soggy ground — learn which symptoms mean call-now urgency and which can wait.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
  {
    slug: "septic-tank-pumping-cost-central-valley",
    question: "How much does septic pumping cost?",
    blurb:
      "Residential pumping runs $300–$600 in the Central Valley. See what drives the price and how to avoid overcharges.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    slug: "what-happens-if-you-never-pump-septic-tank",
    question: "What happens if you never pump your tank?",
    blurb:
      "Skipping pumping turns a $400 service call into a $15,000–$30,000 drain field replacement. Here's the timeline.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    slug: "what-not-to-flush-septic-system",
    question: "What can't you flush with a septic system?",
    blurb:
      "Wipes, grease, and certain cleaners can destroy your system's bacterial balance. Here's the definitive list.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        />
      </svg>
    ),
  },
  {
    slug: "septic-backup-after-heavy-rain",
    question: "Why does my septic system back up after heavy rain?",
    blurb:
      "Saturated soil prevents drainage and groundwater pressure pushes sewage back. Learn what to do in the first 30 minutes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
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
            Homeowner Resource Center
          </p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Septic System Questions Answered
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Free guides written by our licensed technicians — no fluff, no upsells. Just straight
            answers to the questions Central Valley homeowners ask most.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/blog/${topic.slug}`}
              className="group flex flex-col gap-4 rounded-xl border border-gray-200 bg-gray-50 p-6 transition-all hover:border-brand-300 hover:bg-brand-50 hover:shadow-sm"
            >
              {/* Icon */}
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100 text-brand-700">
                {topic.icon}
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-bold leading-snug text-gray-900 group-hover:text-brand-700">
                  {topic.question}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-gray-500">{topic.blurb}</p>
              </div>

              {/* Read link */}
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:underline">
                Read the guide
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-8 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 hover:underline"
          >
            Browse all septic guides & resources
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
