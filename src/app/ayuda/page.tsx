import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Truck,
  RefreshCw,
  Shield,
  CreditCard,
  User,
  Ruler,
  Mail,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Centro de ayuda — MIAK",
  description:
    "Encontrá respuestas a tus preguntas sobre envíos, devoluciones, garantía y más.",
};

const helpCategories = [
  {
    icon: Truck,
    title: "Envíos y entregas",
    id: "envios",
    questions: [
      {
        q: "¿Cuánto tarda el envío?",
        a: "CABA: 24-48 hs hábiles. GBA: 48-72 hs. Interior: 3-7 días hábiles.",
      },
      {
        q: "¿El envío es gratis?",
        a: "Sí, en compras mayores a $150.000. Para montos menores, el costo es de $12.500.",
      },
      {
        q: "¿Puedo elegir día y horario de entrega?",
        a: "Trabajamos con Andreani, OCA y Correo Argentino. Podés coordinar con el transportista una vez que recibas el código de seguimiento.",
      },
      {
        q: "¿Hacen envíos al interior?",
        a: "Sí, realizamos envíos a todo el país.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "Cambios y devoluciones",
    id: "cambios",
    questions: [
      {
        q: "¿Cuántos días tengo para cambiar un producto?",
        a: "Tenés 30 días desde la recepción para solicitar un cambio.",
      },
      {
        q: "¿Cómo inicio una devolución?",
        a: "Escribinos a hola@miak.com.ar con tu número de orden y el motivo. Te enviamos una etiqueta de devolución gratuita.",
      },
      {
        q: "¿Cuánto tarda el reembolso?",
        a: "Una vez recibido el producto, procesamos el reembolso en 5-10 días hábiles.",
      },
    ],
  },
  {
    icon: Shield,
    title: "Garantía",
    id: "garantia",
    questions: [
      {
        q: "¿Qué cubre la garantía?",
        a: "Cubrimos defectos de fabricación en cierres, ruedas, manijas y telas durante 3 años.",
      },
      {
        q: "¿Cómo hago un reclamo de garantía?",
        a: "Enviá fotos del problema junto con tu comprobante de compra a garantia@miak.com.ar.",
      },
      {
        q: "¿Reparan o reemplazan el producto?",
        a: "Evaluamos cada caso. Si es reparable, lo reparamos sin costo. Si no, lo reemplazamos.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Pagos y facturación",
    id: "pagos",
    questions: [
      {
        q: "¿Qué medios de pago aceptan?",
        a: "Aceptamos MercadoPago (tarjetas de crédito, débito y transferencia bancaria).",
      },
      {
        q: "¿Puedo pagar en cuotas?",
        a: "Sí, ofrecemos hasta 6 cuotas sin interés con tarjetas seleccionadas a través de MercadoPago.",
      },
      {
        q: "¿Cómo pido factura A?",
        a: "Indicá tus datos fiscales al momento de la compra o escribinos a facturacion@miak.com.ar.",
      },
    ],
  },
  {
    icon: User,
    title: "Mi cuenta",
    id: "cuenta",
    questions: [
      {
        q: "¿Cómo creo una cuenta?",
        a: "Podés registrarte desde la página de Mi Cuenta con tu email. También podés comprar como invitado.",
      },
      {
        q: "¿Olvidé mi contraseña, qué hago?",
        a: "Usá la opción 'Olvidé mi contraseña' en la página de inicio de sesión. Te enviamos un link de recuperación.",
      },
      {
        q: "¿Puedo ver el historial de mis compras?",
        a: "Sí, desde tu cuenta podés ver todas tus órdenes y su estado de envío.",
      },
    ],
  },
  {
    icon: Ruler,
    title: "Productos y tallas",
    id: "productos",
    questions: [
      {
        q: "¿Qué tamaño de carry-on es apto para cabina?",
        a: "Nuestros carry-on de hasta 40L cumplen con las medidas estándar de cabina (55×40×20 cm) de la mayoría de aerolíneas.",
      },
      {
        q: "¿De qué material son las maletas?",
        a: "Usamos policarbonato y nylon balístico, según el modelo. Cada ficha de producto detalla los materiales.",
      },
      {
        q: "¿Puedo ver los productos en persona?",
        a: "Actualmente operamos online. Estamos trabajando en un showroom en Palermo, CABA.",
      },
    ],
  },
];

export default function AyudaPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">Centro de ayuda</span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">Centro de ayuda</h1>
      <p className="mt-2 text-neutral-600">
        Encontrá respuestas rápidas a las preguntas más frecuentes.
      </p>

      {/* Category cards grid */}
      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {helpCategories.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 p-6 text-center transition hover:border-neutral-400 hover:shadow-sm"
          >
            <cat.icon className="h-7 w-7 text-neutral-700" />
            <span className="text-sm font-medium text-neutral-900">
              {cat.title}
            </span>
          </a>
        ))}
      </div>

      {/* FAQ sections */}
      <div className="mt-16 space-y-14">
        {helpCategories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <div className="mb-6 flex items-center gap-3">
              <cat.icon className="h-5 w-5 text-neutral-700" />
              <h2 className="text-xl font-semibold text-neutral-900">
                {cat.title}
              </h2>
            </div>
            <div className="space-y-4">
              {cat.questions.map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-neutral-200 p-5"
                >
                  <h3 className="font-medium text-neutral-900">{item.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact banner */}
      <div className="mt-16 rounded-2xl bg-neutral-50 p-8 text-center sm:p-12">
        <h2 className="text-xl font-semibold text-neutral-900">
          ¿No encontrás lo que buscás?
        </h2>
        <p className="mt-2 text-neutral-600">
          Nuestro equipo está listo para ayudarte.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hola@miak.com.ar"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-900 transition hover:bg-white"
          >
            <Mail className="h-4 w-4" />
            hola@miak.com.ar
          </a>
          <a
            href="https://wa.me/5411XXXXXXXX"
            className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
