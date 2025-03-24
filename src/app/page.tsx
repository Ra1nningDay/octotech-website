import Navbar from "@/components/ui/layout/Navbar";
import Footer from "@/components/ui/layout/footer/Footer";

export default function Home() {
    return (
        <div className="flex flex-col h-screen">
            <Navbar />
            <main className="flex-1">
                <h1 className="text-4xl font-bold text-center mt-20">
                    Welcome to OctoTech
                </h1>
            </main>
            <Footer />
        </div>
    );
}
