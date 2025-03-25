// Note: Page layout component
// Note: This component is used to wrap the page content with the Navbar and Footer components.

import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/footer/Footer";
// import ContactPopup from "../ContactPopup";

interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <div className="flex flex-col h-screen ">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            {/* <ContactPopup /> */}
        </div>
    );
}
