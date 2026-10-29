import { Truck, RefreshCw, Shield, Headphones } from "lucide-react";

const badges = [
  { icon: Truck, title: "Envío gratis", subtitle: "Sin mínimo de compra" },
  { icon: RefreshCw, title: "30 cambios", subtitle: "Sin preguntas" },
  { icon: Shield, title: "Garantía limitada", subtitle: "3 años de cobertura" },
  { icon: Headphones, title: "Servicio local", subtitle: "Atención en español" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-6 md:grid-cols-4 lg:px-8">
        {badges.map((badge) => (
          <div key={badge.title} className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
              <badge.icon className="h-5 w-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-900">
                {badge.title}
              </p>
              <p className="text-xs text-neutral-500">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
