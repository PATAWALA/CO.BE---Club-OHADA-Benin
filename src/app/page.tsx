import HeroSection from "@/components/home/HeroSection";
import ChampionBanner from "@/components/home/ChampionBanner";
import PresidenteSection from "@/components/home/PresidenteSection";
import SectionsUniversitaires from "@/components/home/SectionsUniversitaires";
import TimelineCUDO from "@/components/home/TimelineCUDO";
import ActualitesCarousel from "@/components/home/ActualitesCarousel";
import PartenairesSection from "@/components/home/PartenairesSection";
import FinalCTASection from "@/components/home/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ChampionBanner />
      <PresidenteSection />
      <SectionsUniversitaires />
      <TimelineCUDO />
      <ActualitesCarousel />
      <PartenairesSection />
      <FinalCTASection />
    </div>
  );
}