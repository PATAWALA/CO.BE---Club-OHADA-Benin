import HeroSection from "@/components/home/HeroSection";
import StudentNetworkSection from "@/components/home/StudentNetworkSection";
import PartnersSection from "@/components/home/PartnersSection";
import VisionSection from "@/components/home/VisionSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <StudentNetworkSection />
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-slate-border"></div>
      </div>
      <PartnersSection />
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-t border-slate-border"></div>
      </div>
      <VisionSection />
      <FinalCTASection />
    </div>
  );
}