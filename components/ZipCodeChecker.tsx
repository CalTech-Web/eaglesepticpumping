"use client";

import { useState } from "react";
import { ZIP_CODE_MAP, serviceAreas } from "@/lib/serviceAreas";

type ResultState = "idle" | "found" | "not-found";

export default function ZipCodeChecker() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<ResultState>("idle");
  const [city, setCity] = useState("");
  const [citySlug, setCitySlug] = useState("");

  function checkZip(val: string) {
    if (val.length === 5) {
      const slug = ZIP_CODE_MAP[val];
      if (slug) {
        const area = serviceAreas.find((a) => a.slug === slug);
        setCity(area?.city ?? slug);
        setCitySlug(slug);
        setResult("found");
      } else {
        setCity("");
        setCitySlug("");
        setResult("not-found");
      }
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, "").slice(0, 5);
    setZip(val);

    if (val.length === 5) {
      checkZip(val);
    } else {
      setResult("idle");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    checkZip(zip);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      {/* Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-10 w-10 text-brand-400"
      >
        <path
          fillRule="evenodd"
          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.079 3.43-4.577 3.43-7.328a6.75 6.75 0 00-13.5 0c0 2.75 1.485 5.25 3.43 7.328a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.079.694zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
          clipRule="evenodd"
        />
      </svg>

      <div>
        <p className="text-lg font-semibold text-brand-900">
          Check Your Service Area
        </p>
        <p className="mt-0.5 text-sm text-brand-700">
          Enter your zip code to see if your area is in the Central Valley
        </p>
      </div>

      {/* Input + Button */}
      <form onSubmit={handleSubmit} className="flex w-full max-w-xs flex-col gap-2">
        <input
          type="text"
          inputMode="numeric"
          value={zip}
          onChange={handleChange}
          placeholder="e.g. 95350"
          maxLength={5}
          aria-label="Enter your zip code"
          className="w-full rounded-lg border border-brand-300 bg-white px-4 py-3 text-center text-xl font-mono tracking-widest text-gray-900 placeholder:text-gray-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
        />
        <button
          type="submit"
          disabled={zip.length < 5}
          className="w-full rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Check Coverage
        </button>
      </form>

      {/* Results */}
      {result === "found" && (
        <div className="w-full max-w-xs rounded-xl border border-green-200 bg-green-50 p-4">
          <p className="font-semibold text-green-800">
            Yes — {city}, CA is in the Central Valley service area.
          </p>
          <a
            href={`/service-areas/${citySlug}`}
            className="mt-3 block rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
          >
            View {city} Info
          </a>
        </div>
      )}

      {result === "not-found" && (
        <div className="w-full max-w-xs rounded-xl border border-amber-200 bg-amber-50 p-4">
          <p className="font-semibold text-amber-800">
            Zip {zip} isn&apos;t in our coverage list.
          </p>
          <p className="mt-1 text-xs text-amber-700">
            This area may still be served by Central Valley septic providers.
          </p>
          <a
            href="/service-areas"
            className="mt-3 block rounded-lg bg-brand-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-800"
          >
            Browse All Service Areas
          </a>
        </div>
      )}

      {result === "idle" && (
        <p className="text-xs text-brand-600">
          Serving Stanislaus, Merced &amp; San Joaquin counties
        </p>
      )}
    </div>
  );
}
