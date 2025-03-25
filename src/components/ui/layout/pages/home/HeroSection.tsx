import { Button } from "@/components/ui/button";
import Image from "next/image";
import playIcon from "@/assets/icons/play-button.png";
import arrowUp from "@/assets/icons/right-up.png";
import bgImage from "@/assets/images/bg.jpg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const carouselItems = [
    "OCTOTECH builds intelligent AI-powered solutions to accelerate business growth — from custom software to strategic consulting.",
    "We provide cutting-edge AI tools to help businesses optimize their operations and achieve their goals.",
    "Partner with OCTOTECH to unlock the full potential of generative AI for your organization.",
];

export default function HeroSection() {
    return (
        <div
            className="relative h-screen w-full"
            style={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover", // ปรับให้ภาพครอบคลุมทุกขนาดหน้าจอ
                backgroundRepeat: "no-repeat",
                backgroundColor: "#000",
            }}
        >
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            <div className="h-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-10 mx-auto">
                {/* Left Content */}
                <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 h-full">
                    <div className="mt-auto">
                        <div className="flex gap-3 sm:gap-4 mb-6 lg:mb-12 sm:mb-8">
                            <p className="text-white border-b-4 border-teal-400 px-2 py-1 rounded-2xl text-sm sm:text-base">
                                AI Solutions
                            </p>
                            <p className="text-white border-b-4 border-teal-400 px-2 py-1 rounded-2xl text-sm sm:text-base">
                                Consultation
                            </p>
                        </div>
                        <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold text-white leading-tight">
                            EMPOWER YOUR <br /> BUSINESS <br /> WITH{" "}
                            <span className="text-teal-400">GENERATIVE AI</span>
                        </h1>
                    </div>
                    <p className="flex lg:mt-auto gap-3 sm:gap-4 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] sm:mt-8 mb-8 sm:mb-10 lg:mb-14 text-gray-100 leading-relaxed tracking-wide max-w-md sm:max-w-lg lg:max-w-3xl group">
                        <span className="text-teal-400 transition-transform group-hover:scale-110">
                            ▣
                        </span>
                        <span>
                            OCTOTECH builds intelligent AI-powered solutions to{" "}
                            <br className="hidden sm:block" />
                            accelerate business growth — from{" "}
                            <a
                                href="/services"
                                className="underline hover:text-teal-400 transition-colors"
                            >
                                custom software to strategic consulting
                            </a>
                            .
                        </span>
                    </p>
                </div>

                {/* Right Content */}
                <div className="flex flex-col items-center lg:items-end w-full lg:mt-30 lg:w-1/2 h-full">
                    {/* Carousel */}
                    <Carousel className="w-full max-w-sm sm:max-w-md lg:max-w-lg mt-8 sm:mt-12 lg:mt-16">
                        <CarouselContent>
                            {carouselItems.map((text, index) => (
                                <CarouselItem key={index}>
                                    <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-gray-200 text-center lg:text-end">
                                        {text}
                                    </p>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex justify-center lg:justify-end mt-4 sm:mt-6 gap-3 sm:gap-4">
                            <CarouselPrevious className="p-3 sm:p-4 bg-gray-700 border-0 hover:bg-gray-600 rounded-full text-white">
                                <span className="sr-only">Previous</span>
                            </CarouselPrevious>
                            <CarouselNext className="p-3 sm:p-4 bg-gray-700 border-0 hover:bg-gray-600 rounded-full text-white">
                                <span className="sr-only">Next</span>
                            </CarouselNext>
                        </div>
                    </Carousel>
                    <Button
                        variant="link"
                        className="py-4 px-6 lg:mt-auto sm:py-5 sm:px-7 text-[14px] sm:text-[16px] lg:text-[30px] lg:px-8 lg:py-8 lg:mb-30 rounded-3xl mt-6 sm:mt-8 mb-8 sm:mb-10 max-w-max cursor-pointer text-white flex gap-2 sm:gap-3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-teal-300/50 hover:bg-opacity-30 shadow-lg"
                    >
                        Contact Us
                        <span>
                            <Image
                                src={arrowUp}
                                width={16}
                                height={16}
                                alt="Arrow pointing up"
                                className="invert"
                            />
                        </span>
                    </Button>
                </div>
            </div>

            {/* Play Button */}
            <Button
                variant="link"
                className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 px-4 max-w-max flex items-center gap-2 sm:gap-3"
            >
                <Image
                    src={playIcon}
                    width={32}
                    height={32}
                    alt="Play Intro Video"
                    className="invert"
                />
                <span className="text-white text-[14px] sm:text-[16px] hidden sm:block">
                    Watch Our Intro Video
                </span>
            </Button>
        </div>
    );
}
