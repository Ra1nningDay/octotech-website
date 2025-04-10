import PageLayout from "@/components/ui/layout/PageLayout";
import HeroSection from "@/components/ui/layout/pages/home/HeroSection";
import LatestSection from "@/components/ui/layout/pages/home/LatestSection";
import ContactSection from "@/components/ui/layout/pages/home/ContactSection";
import ServiceSection from "@/components/ui/layout/pages/home/ServiceSection";
import AboutSection from "@/components/ui/layout/pages/home/AboutSection";

// import HomePage from "@/components/ui/layout/pages/home/HomeSection";

export default function Home() {
  return (
    <PageLayout>
      <HeroSection />
      <LatestSection />
      <ServiceSection />
      <AboutSection />
      <ContactSection />
    </PageLayout>
  );
}
