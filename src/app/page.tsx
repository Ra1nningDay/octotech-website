import PageLayout from "@/components/ui/layout/PageLayout";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import heroImg from "@/assets/images/logo.png";
import playIcon from "@/assets/icons/play-button.png";

export default function Home() {
    return (
        <PageLayout>
            <div className="relative h-screen max-w-screen-2xl mx-auto">
                <div className="h-full min-h-screen flex flex-col lg:flex-row relative items-center p-6 lg:p-10">
                    {/* Left Content */}
                    <div className="flex flex-col items-start text-center lg:text-left max-w-xl w-full lg:max-w-screen">
                        <h1 className="text-4xl lg:text-7xl font-bold mb-12">
                            Empower <br /> Your Business <br /> with Generative
                            AI
                        </h1>
                        <p className="text-[16px] lg:text-[18px] mb-12">
                            OCTOTECH builds intelligent AI-powered solutions to{" "}
                            <br /> accelerate business growth — from custom
                            software to strategic consulting.
                        </p>
                        <div className="flex flex-col lg:flex-row gap-4">
                            <Button className="py-7 px-6 text-[16px] lg:text-[20px] cursor-pointer">
                                Explore Our Services
                            </Button>
                            <Button
                                variant="outline"
                                className="py-7 px-6 text-[16px] lg:text-[20px]  cursor-pointer"
                            >
                                Free Consultation
                            </Button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-end items-center h-full w-full">
                        <Image
                            src={heroImg}
                            alt="hero"
                            className="w-[1300px] max-w-xs lg:max-w-lg"
                        />
                    </div>
                </div>
                <Button
                    variant="link"
                    className="absolute bottom-4 left-1/2 text-3xl cursor-pointer transform -translate-x-1/2 -translate-y-1/2 z-60  px-4 max-w-max"
                >
                    <Image src={playIcon} width={48} alt="play" />
                </Button>
            </div>
        </PageLayout>
    );
}
