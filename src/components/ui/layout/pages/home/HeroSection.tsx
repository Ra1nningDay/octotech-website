"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion } from "framer-motion";

const carouselItems = [
  "OCTOTECH builds intelligent AI-powered solutions to accelerate business growth — from custom software to strategic consulting.",
  "We provide cutting-edge AI tools to help businesses optimize their operations and achieve their goals.",
  "Partner with OCTOTECH to unlock the full potential of generative AI for your organization.",
];

export default function HeroSection() {
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundImage: `url("/assets/images/bg.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1A1AEB", // เปลี่ยนเป็นสีน้ำเงินเข้มจาก Palette 1
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>{" "}
      {/* ปรับ overlay ให้สว่างขึ้นเล็กน้อย */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-full min-h-screen flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 lg:p-10 mx-auto"
      >
        {/* Left Content */}
        <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 h-full">
          <div className="mt-auto z-10">
            <div className="flex gap-3 sm:gap-4 mb-6 lg:mb-14 sm:mb-8 justify-center sm:justify-start">
              <p className="text-white border-b-4 border-[#FE5803] px-2 py-1 rounded-2xl text-sm sm:text-base">
                AI Solutions
              </p>
              <p className="text-white border-b-4 border-[#FE5803] px-2 py-1 rounded-2xl text-sm sm:text-base">
                Consultation
              </p>
            </div>
            <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[70px] font-bold text-white leading-tight">
              EMPOWER YOUR <br /> BUSINESS <br /> WITH{" "}
              <span className="text-[#FE5803]">GENERATIVE AI</span>{" "}
              {/* เปลี่ยนเป็นสีส้มแดงจาก Palette 1 */}
            </h1>
          </div>
          <p className="flex lg:mt-auto gap-3 z-10 sm:gap-4 text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px] sm:mt-8 mb-8 sm:mb-10 lg:mb-14 text-white leading-relaxed tracking-wide max-w-md sm:max-w-lg lg:max-w-3xl group">
            <span className="text-[#FE5803] hidden sm:block transition-transform group-hover:scale-110">
              ▣
            </span>
            <span>
              OCTOTECH builds intelligent AI-powered solutions to{" "}
              <br className="hidden sm:block" />
              accelerate business growth — from{" "}
              <a
                href="/services"
                className="underline hover:text-[#35A8AB] transition-colors" // คงสี hover เป็นฟ้าเทอควอยซ์จาก Palette 2
              >
                custom software to strategic consulting
              </a>
              .
            </span>
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center justify-start sm:justify-end lg:items-end w-full lg:mt-30 lg:w-1/2 h-full z-10">
          {/* Carousel */}
          <Carousel className="w-full max-w-sm sm:max-w-md lg:max-w-lg mt-8 sm:mt-12 lg:mt-14">
            <CarouselContent>
              {carouselItems.map((text, index) => (
                <CarouselItem key={index}>
                  <p className="text-[14px] sm:text-[16px] lg:text-[18px] text-white text-center lg:text-end">
                    {text}
                  </p>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center lg:justify-end mt-4 sm:mt-6 gap-3 sm:gap-4">
              <CarouselPrevious className="p-3 sm:p-4 cursor-pointer border-0 hover:bg-[#FE5803] rounded-full text-white">
                <span className="sr-only">Previous</span>
              </CarouselPrevious>
              <CarouselNext className="p-3 sm:p-4 cursor-pointer border-0 hover:bg-[#FE5803] rounded-full text-white">
                <span className="sr-only">Next</span>
              </CarouselNext>
            </div>
          </Carousel>
          {/* ปุ่ม Contact Us */}
          <Button className="py-4 px-6 hover:bg-[#10FEBD] transition-colors lg:mt-auto sm:py-5 sm:px-7 text-[14px] sm:text-[16px] lg:text-[30px] lg:px-8 lg:py-8 lg:mb-30 rounded-3xl mt-10 sm:mt-8 mb-30 sm:mb-10 max-w-max cursor-pointer text-white flex gap-2 sm:gap-3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border bg-gradient-to-r from-[#FE5803] to-[#FD4055] hover:from-[#FE5803] hover:to-[#FD4055] border-[#10FEBD]/50 shadow-lg group">
            Contact Us
            <span className="flex items-center">
              <Image
                src="/assets/icons/right-up.png"
                width={30}
                height={30}
                alt="Arrow pointing up"
                className="invert transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-0.5 group-hover:rotate-1"
                unoptimized
              />
            </span>
          </Button>
        </div>
      </motion.div>
      {/* Play Button */}
      <Button
        variant="link"
        className="absolute bottom-4 sm:bottom-6 cursor-pointer left-1/2 transform -translate-x-1/2 z-50 px-4 max-w-max flex items-center gap-2 sm:gap-3 hover:text-[#10FEBD] transition-colors"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          className="flex items-center gap-1 sm:gap-2"
        >
          <Image
            src="/assets/icons/play-button.png"
            width={32}
            height={32}
            alt="Play Intro Video"
            className="invert"
            unoptimized
          />
          <span className="text-white text-[14px] sm:text-[16px] hidden sm:block">
            Watch Our Intro Video
          </span>
        </motion.div>
      </Button>
    </div>
  );
}
