import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container-max px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <span className="font-bold text-white">Eagle Septic Guide</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free septic system information, guides, and troubleshooting tips
              for homeowners. Learn how to maintain, diagnose, and understand
              your septic system.
            </p>
          </div>

          {/* Topics */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Topics
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "How Septic Systems Work", href: "/blog/how-does-a-septic-system-work" },
                { label: "Septic Maintenance", href: "/blog" },
                { label: "Signs of Problems", href: "/blog" },
                { label: "Septic vs Sewer", href: "/blog/septic-system-vs-sewer-system" },
                { label: "Emergency Situations", href: "/emergency" },
                { label: "Drain Field Guide", href: "/blog" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-200">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "All Guides", href: "/resources" },
                { label: "Blog", href: "/blog" },
                { label: "FAQ", href: "/faq" },
                { label: "Services Explained", href: "/services" },
                { label: "Cost & Pricing Info", href: "/pricing" },
                { label: "About This Site", href: "/about" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-gray-800 pt-8 text-center text-xs">
          <p>
            © {currentYear} Eagle Septic Guide · Informational resource for homeowners
          </p>
        </div>
      </div>

    </footer>
  );
}
