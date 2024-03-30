import HeroSection from "@/components/home/hero";
import Features from "@/components/home/features";
import Campaigns from "@/components/home/campaigns";

export default function Home() {
  return (
    <div className="h-full">
      <HeroSection />
      <Features />
      <Campaigns />
    </div>
  );
}
