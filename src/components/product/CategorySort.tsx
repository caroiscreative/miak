"use client";

import { useRouter, useSearchParams } from "next/navigation";

const sortOptions = [
  { value: "relevancia", label: "Relevancia" },
  { value: "precio-asc", label: "Precio: menor a mayor" },
  { value: "precio-desc", label: "Precio: mayor a menor" },
  { value: "nuevos", label: "Más nuevos" },
] as const;

export default function CategorySort() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("orden") ?? "relevancia";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("orden", value);
    router.push(`?${params.toString()}`, { scroll: false });
  }

  return (
    <select
      value={current}
      onChange={(e) => handleChange(e.target.value)}
      className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-500"
    >
      {sortOptions.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
}
