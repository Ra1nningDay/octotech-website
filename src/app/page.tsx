import PageLayout from "@/components/ui/layout/PageLayout";
import BeforeAboutSection from "@/components/ui/layout/pages/home/BeforeAboutSection";
import HeroSection from "@/components/ui/layout/pages/home/HeroSection";
import LatestSection from "@/components/ui/layout/pages/home/LatestSection";
import AboutSection from "@/components/ui/layout/pages/home/AboutSection";

// import HomePage from "@/components/ui/layout/pages/home/HomeSection";

export default function Home() {
    return (
        <PageLayout>
            <HeroSection />
            <LatestSection />
            <BeforeAboutSection />
            <AboutSection />
        </PageLayout>
    );
}
