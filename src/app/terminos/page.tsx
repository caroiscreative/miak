import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y condiciones — MIAK",
  description:
    "Términos y condiciones de uso de la tienda online MIAK.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      <nav className="mb-6 flex items-center gap-1.5 text-sm text-neutral-500">
        <Link href="/" className="transition hover:text-neutral-900">
          Inicio
        </Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="font-medium text-neutral-900">
          Términos y condiciones
        </span>
      </nav>

      <h1 className="text-3xl font-bold text-neutral-900">
        Términos y condiciones
      </h1>
      <p className="mt-2 text-sm text-neutral-500">
        Última actualización: Octubre 2026
      </p>

      <div className="mt-10 space-y-10 text-sm leading-relaxed text-neutral-600">
        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            1. Condiciones generales
          </h2>
          <p className="mt-3">
            El presente documento establece los términos y condiciones que
            regulan el uso del sitio web miak.com.ar (en adelante, &ldquo;el
            Sitio&rdquo;) y la compra de productos a través del mismo. Al
            acceder o utilizar el Sitio, el usuario acepta estos términos en su
            totalidad. MIAK se reserva el derecho de modificar estos términos en
            cualquier momento, notificando los cambios a través del Sitio.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            2. Productos y precios
          </h2>
          <p className="mt-3">
            Los productos ofrecidos están sujetos a disponibilidad. Los precios
            se expresan en Pesos Argentinos (ARS) e incluyen IVA. MIAK se
            reserva el derecho de modificar precios sin previo aviso, aunque los
            cambios no afectarán pedidos ya confirmados. Las fotografías de los
            productos son ilustrativas y pueden presentar variaciones menores
            respecto al producto real.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            3. Proceso de compra
          </h2>
          <p className="mt-3">
            Para realizar una compra, el usuario debe seleccionar los productos
            deseados, completar los datos de envío y efectuar el pago a través
            de los medios habilitados. La confirmación de compra se envía por
            email una vez procesado el pago. MIAK se reserva el derecho de
            rechazar o cancelar un pedido en caso de error en el precio, falta
            de stock, o sospecha de fraude.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">4. Envíos</h2>
          <p className="mt-3">
            MIAK realiza envíos a todo el territorio de la República Argentina.
            Los plazos de entrega son estimativos y pueden variar según la zona
            y la disponibilidad del servicio de logística. El envío es gratuito
            para compras superiores a $150.000 ARS. Para montos inferiores, se
            aplica un cargo de envío que se informa antes de confirmar la
            compra.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            5. Devoluciones y cambios
          </h2>
          <p className="mt-3">
            El usuario dispone de 30 días corridos desde la recepción del
            producto para solicitar un cambio y 15 días para solicitar una
            devolución con reembolso, conforme a lo establecido en la Ley 24.240
            de Defensa del Consumidor. Los detalles completos se encuentran en
            nuestra{" "}
            <Link href="/devoluciones" className="font-medium underline">
              política de devoluciones
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            6. Propiedad intelectual
          </h2>
          <p className="mt-3">
            Todos los contenidos del Sitio — incluyendo textos, imágenes,
            logotipos, diseños, código fuente y marcas — son propiedad exclusiva
            de MIAK o de sus licenciantes y están protegidos por las leyes de
            propiedad intelectual de la República Argentina. Queda prohibida su
            reproducción, distribución o uso sin autorización expresa.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            7. Limitación de responsabilidad
          </h2>
          <p className="mt-3">
            MIAK no será responsable por daños indirectos, incidentales o
            consecuentes derivados del uso del Sitio o de los productos
            adquiridos, salvo en los casos previstos por la legislación vigente.
            La responsabilidad máxima de MIAK se limita al valor del producto
            adquirido.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-neutral-900">
            8. Jurisdicción
          </h2>
          <p className="mt-3">
            Los presentes términos se rigen por las leyes de la República
            Argentina. Cualquier controversia derivada del uso del Sitio o la
            compra de productos será sometida a la jurisdicción de los Tribunales
            Ordinarios de la Ciudad Autónoma de Buenos Aires.
          </p>
        </section>
      </div>
    </div>
  );
}
