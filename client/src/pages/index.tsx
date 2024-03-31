import HeroSection from "@/components/home/hero";
import Features from "@/components/home/features";
import Campaigns from "@/components/home/campaigns";
import FAQs from "@/components/home/faqs";

export default function Home() {
  return (
    <div className="h-full">
      <HeroSection />
      <Features />
      <Campaigns />
      <FAQs />
    </div>
  );
}
