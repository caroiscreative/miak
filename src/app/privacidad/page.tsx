import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de privacidad — MIAK",
  description:
    "Cómo recopilamos, usamos y protegemos tus datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">
          Política de privacidad
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">
        Política de privacidad
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Última actualización: Octubre 2026
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-600">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            1. Datos recopilados
          </h2>
          <p className="mt-3">
            Recopilamos los datos personales que el usuario proporciona
            voluntariamente al registrarse, realizar una compra o contactarnos:
            nombre y apellido, dirección de email, teléfono, dirección de envío
            y datos de facturación. También recopilamos datos de navegación de
            forma automática (dirección IP, tipo de dispositivo, páginas
            visitadas) a través de cookies y tecnologías similares.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            2. Uso de datos
          </h2>
          <p className="mt-3">Utilizamos los datos personales para:</p>
          <ul className="mt-2 space-y-1.5 pl-4">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Procesar y entregar pedidos.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Emitir comprobantes fiscales.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Enviar comunicaciones relacionadas con la compra (confirmaciones,
              actualizaciones de envío).
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Enviar comunicaciones comerciales, solo con consentimiento previo.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Mejorar la experiencia de navegación y personalizar contenidos.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">3. Cookies</h2>
          <p className="mt-3">
            Utilizamos cookies esenciales para el funcionamiento del sitio
            (sesión, carrito de compras) y cookies analíticas para comprender el
            uso del sitio. El usuario puede configurar su navegador para rechazar
            cookies, aunque esto puede afectar la funcionalidad del sitio. No
            utilizamos cookies de terceros con fines publicitarios sin
            consentimiento explícito.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            4. Derechos del usuario
          </h2>
          <p className="mt-3">
            De acuerdo con la Ley 25.326 de Protección de Datos Personales de la
            República Argentina, el usuario tiene derecho a:
          </p>
          <ul className="mt-2 space-y-1.5 pl-4">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Acceder a sus datos personales almacenados.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Solicitar la rectificación de datos inexactos.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Solicitar la supresión de sus datos cuando ya no sean necesarios.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
              Oponerse al tratamiento de sus datos con fines comerciales.
            </li>
          </ul>
          <p className="mt-3">
            Para ejercer estos derechos, el usuario puede escribir a{" "}
            <a
              href="mailto:privacidad@miak.com.ar"
              className="font-medium underline"
            >
              privacidad@miak.com.ar
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            5. Seguridad
          </h2>
          <p className="mt-3">
            Implementamos medidas técnicas y organizativas para proteger los
            datos personales contra acceso no autorizado, pérdida o alteración.
            Los pagos se procesan a través de MercadoPago, que cumple con los
            estándares PCI-DSS. MIAK no almacena datos de tarjetas de crédito o
            débito.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            6. Contacto del responsable
          </h2>
          <p className="mt-3">
            Responsable del tratamiento de datos: MIAK S.R.L., con domicilio en
            la Ciudad Autónoma de Buenos Aires, República Argentina.
          </p>
          <p className="mt-2">
            Email de contacto:{" "}
            <a
              href="mailto:privacidad@miak.com.ar"
              className="font-medium underline"
            >
              privacidad@miak.com.ar
            </a>
          </p>
          <p className="mt-3 text-xs text-neutral-400">
            La DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, órgano de
            control de la Ley 25.326, tiene la atribución de atender denuncias y
            reclamos que se interpongan con relación al incumplimiento de las
            normas sobre protección de datos personales.
          </p>
        </section>
      </div>
    </div>
  );
}
