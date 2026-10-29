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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <CategoryCarousel />
      <BestSellers />
      <ProductSpotlight />
      <WeeklyDeals />
      <Recommendations />
      <Collections />
      <Testimonials />
      <FAQ />
    </>
  );
}
