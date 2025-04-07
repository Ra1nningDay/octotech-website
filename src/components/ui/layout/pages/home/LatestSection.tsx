"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LayoutTemplate } from "lucide-react";
import ProjectDrawer from "@/components/ui/layout/pages/home/ProjectDrawer";
import Image from "next/image";
import { useState } from "react"; // <-- Make sure useState is imported

export default function LatestSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Section: ViennaUP */}
      <section className="py-12 sm:py-14 lg:py-16 relative overflow-hidden">
        {" "}
        {/* Added overflow-hidden for safety */}
        {/* Background Pattern Div */}
        {/* === SOLUTION: Add z-index: -1 here === */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none z-[-1]">
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{
              backgroundImage: "radial-gradient(#1A1AEB 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </div>
        {/* Main Content Container */}
        {/* Reduced z-index slightly, but still positive to be above background */}
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-10 ">
          {/* Removed z-50 from inner card, parent container handles layering now */}
          <div className="bg-white shadow-lg p-8 sm:p-12 lg:p-20 rounded-lg ">
            {" "}
            {/* Adjusted padding */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12 xl:gap-20">
              {" "}
              {/* Adjusted gap */}
              {/* Left Content */}
              <motion.div
                className="w-full lg:w-1/2 flex justify-center items-center lg:items-start" // Simplified alignment
                initial={{ opacity: 0, y: 20 }} // Added subtle slide-up
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8, // Slightly faster
                  ease: "easeOut", // Smoother ease
                  delay: 0.2, // Earlier start
                }}
              >
                {/* Image Container with Perspective */}
                <div
                  className="bg-gray-200 w-full max-w-md lg:max-w-none h-[300px] sm:h-[350px] md:h-[400px] lg:h-[425px] relative rounded-lg shadow-md overflow-hidden" // Added shadow, overflow, height adjustments
                  style={{
                    transform: "perspective(1200px) rotateY(6deg)", // Adjusted perspective
                    transformOrigin: "center left", // Rotate from left edge
                  }}
                >
                  <Image
                    src="/assets/images/vienna.png" // Ensure path is correct
                    alt="OCTOTECH Team at ViennaUP event" // More descriptive alt text
                    fill
                    className="object-cover object-left" // Use object-cover, adjust object-position if needed
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 425px" // Add sizes prop for optimization
                    priority
                  />
                </div>
              </motion.div>
              {/* Right Content */}
              <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left">
                {" "}
                <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-[#FF4500] text-white border-none w-fit mx-auto lg:mx-0">
                  {" "}
                  Our Latest Activities
                </Badge>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0000BE] mb-4">
                  {" "}
                  Join Us at{" "}
                  <span className="text-[#FF4500]">ViennaUP 2025</span>
                </h2>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4">
                  {" "}
                  We are thrilled to announce that OCTOTECH is taking part in{" "}
                  <span className="font-medium text-[#35A8AB]">
                    ViennaUP 2025
                  </span>
                  , an international startup festival hosted in Vienna. This
                  opportunity has been made possible with the generous support
                  of Advantage Austria, and we are excited to connect with
                  global innovators and share our ideas with the world.
                </p>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                  {" "}
                  {/* Adjusted size/margin */}
                  Our team will be in Vienna from May 8–14, 2025. 💬 Let&apos;s
                  connect during ViennaUP! If you&apos;re interested in our
                  products or would like to explore collaboration opportunities,
                  feel free to reach out via our Contact Us page to schedule a
                  meeting.
                </p>
                <Button
                  className="mt-6 sm:mt-8 py-3 px-6 bg-[#0000be] hover:bg-[#0000be]/90 text-base sm:text-lg cursor-pointer font-semibold max-w-max mx-auto lg:ml-auto lg:mr-0 rounded-md"
                  onClick={() => setIsDrawerOpen(true)}
                >
                  <LayoutTemplate className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Our
                  Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Drawer */}
      <ProjectDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
