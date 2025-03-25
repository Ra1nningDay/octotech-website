import PageLayout from "@/components/ui/layout/PageLayout";
import HeroSection from "@/components/ui/layout/pages/home/HeroSection";
import AboutSection from "@/components/ui/layout/pages/home/AboutSection";

// import HomePage from "@/components/ui/layout/pages/home/HomeSection";

export default function Home() {
    return (
        <PageLayout>
            <HeroSection />
            <AboutSection />
        </PageLayout>
    );
}
