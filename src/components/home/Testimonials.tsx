"use client";

import { Star } from "lucide-react";
import { testimonials } from "@/lib/mock-data";

export default function Testimonials() {
  return (
    <section className="bg-neutral-50 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 flex items-center justify-center gap-1 text-sm text-neutral-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-2">4.5 / 2800+ opiniones</span>
          </p>
          <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">
            Amado por viajeros de todo el país
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-lg border border-neutral-200 bg-white p-6"
            >
              <span className="mb-3 block font-serif text-4xl leading-none text-neutral-300">
                &ldquo;
              </span>
              <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                {t.text}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-neutral-900">
                  {t.author}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
