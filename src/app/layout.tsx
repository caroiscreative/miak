import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/lib/cart-context";
import { getCategories } from "@/lib/supabase-queries";
import { connection } from "next/server";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MIAK — Equipaje para viajeros",
  description:
    "Maletas, mochilas y accesorios de viaje diseñados para llevarte más lejos con menos peso. Envío a todo el país.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  await connection();
  const categories = await getCategories();

  return (
    <html lang="es" data-theme="light" className={`${inter.variable} ${playfair.variable} h-full antialiased`} style={{ colorScheme: "light" }}>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Header categories={categories} />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
