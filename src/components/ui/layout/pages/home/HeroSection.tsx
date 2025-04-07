"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div className="relative bg-white text-black overflow-hidden">
      {/* Decorative Elements - Absolute Positioned */}

      {/* Geometric Shapes */}
      <div className="absolute top-20 right-[10%] w-16 h-16 border-4 border-[#1A1AEB]/10 rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-40 left-[15%] w-20 h-20 border-4 border-[#FE5803]/10 transform -rotate-12"></div>
      <div className="absolute top-[30%] left-[5%] w-12 h-12 border-4 border-[#10FEBD]/10 rounded-full"></div>

      {/* Dotted Grid Pattern */}
      <div className="container mx-auto px-4 pt-30 pb-16 relative z-10">
        {/* Main Content */}
        <div className="max-w-5xl mx-auto text-center mb-10 pt-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-6xl text-black font-extrabold mb-6"
          >
            Empower Your Business With{" "}
            <span className="text-[#FE5803]">Generative AI</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium mb-10 text-black/80"
          >
            OCTOTECH builds intelligent AI-powered solutions to
            <br />
            accelerate business growth — from
            <br />
            custom software to strategic consulting
          </motion.h2>

          <div className="flex justify-center">
            <Button className="py-4 px-6 hover:bg-[#10FEBD] transition-colors sm:py-5 sm:px-7 text-[14px] sm:text-[16px] lg:text-[20px] lg:px-8 lg:py-6 rounded-3xl mt-6 mb-16 max-w-max cursor-pointer text-white flex gap-2 sm:gap-3 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border bg-gradient-to-r from-[#FE5803] to-[#FD4055] hover:from-[#FE5803] hover:to-[#FD4055] border-[#10FEBD]/50 shadow-lg group">
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

          {/* Video Section with Decorative Elements */}
          <div className="relative max-w-4xl mx-auto mb-20">
            {/* Video Border Decoration */}

            {/* Main Video Container */}
            <div className="relative bg-white border-4 border-[#10FEBD] rounded-lg p-4 shadow-lg">
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 rounded flex items-center justify-center relative">
                {/* Decorative Corner Elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#1A1AEB]/30"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#1A1AEB]/30"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#1A1AEB]/30"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#1A1AEB]/30"></div>

                {/* Play Button */}
                <div className="w-16 h-16 rounded-full bg-[#1A1AEB] flex items-center justify-center cursor-pointer shadow-lg transition-transform hover:scale-110">
                  <Play size={30} className="text-white ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-full bg-[#FE5803]/10"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#10FEBD]/10"></div>
          </div>

          {/* Testimonial Section */}
          <div className="container mx-auto px-4 text-center relative">
            {/* Decorative Quote Marks */}
            <div className="absolute top-0 left-1/4 text-[80px] text-[#1A1AEB]/5 font-serif">
              ❝
            </div>
            <div className="absolute bottom-0 right-1/4 text-[80px] text-[#1A1AEB]/5 font-serif">
              ❞
            </div>

            <h3 className="text-xl font-medium text-[#1A1AEB] mb-4 relative z-10">
              OCTOTECH will impact your business...
            </h3>

            <div className="flex items-start justify-center relative z-10">
              <span className="text-[#FE5803] text-5xl leading-none mr-2">
                &quot;
              </span>
              <p className="text-gray-600 max-w-2xl text-lg italic">
                Our AI solutions focus on getting you the results you want -
                more business efficiency, growth for your company, as well as
                innovation and competitive advantage.
              </p>
              <span className="text-[#FE5803] text-5xl leading-none ml-2 self-end">
                &quot;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
