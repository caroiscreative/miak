import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import CategoryCarousel from "@/components/home/CategoryCarousel";
import BestSellers from "@/components/home/BestSellers";
import ProductSpotlight from "@/components/home/ProductSpotlight";
import WeeklyDeals from "@/components/home/WeeklyDeals";
import Recommendations from "@/components/home/Recommendations";
import Collections from "@/components/home/Collections";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import { getProducts, getCategories } from "@/lib/supabase-queries";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const deals = products.filter((p) => p.compareAtPrice).slice(0, 4);

  return (
    <>
      <Hero />
      <TrustBadges />
      <CategoryCarousel categories={categories} />
      <BestSellers />
      <ProductSpotlight />
      <WeeklyDeals deals={deals} />
      <Recommendations products={products} />
      <Collections />
      <Testimonials />
      <FAQ />
    </>
  );
}
