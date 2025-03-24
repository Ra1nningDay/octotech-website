import PageLayout from "@/components/ui/layout/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center h-full min-h-screen">
                <h1 className="text-4xl font-bold text-center mt-20">
                    Welcome to OctoTech
                </h1>
            </div>
        </PageLayout>
    );
}
