"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LayoutTemplate } from "lucide-react";
import ProjectDrawer from "@/components/ui/layout/pages/home/ProjectDrawer";
import Image from "next/image";

export default function LatestSection() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* Section: ViennaUP */}
      <section className="py-12 sm:py-16 lg:py-18 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
            {/* Left Content */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 1,
                ease: "easeIn",
                delay: 0.4,
              }}
            >
              <div className="bg-gray-200 w-full h-[525px] relative rounded-lg ">
                <Image
                  src="/assets/images/vienna.png"
                  alt="vienna"
                  fill
                  className="rounded-lg"
                />
              </div>
            </motion.div>

            {/* Right Content */}
            <div className="flex flex-col w-full lg:w-1/2 text-center lg:text-left py-6">
              <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-[#FF4500] text-white border-none">
                Our Latest Activities
              </Badge>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0000BE] mb-6">
                Join Us at <span className="text-[#FF4500]">ViennaUP 2025</span>
              </h2>

              <p className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed mb-6">
                We are thrilled to announce that OCTOTECH is taking part in{" "}
                <span className="text-[#35A8AB]">ViennaUP 2025</span>, an
                international startup festival hosted in Vienna. This
                opportunity has been made possible with the generous support of
                Advantage Austria, and we are excited to connect with global
                innovators and share our ideas with the world.
              </p>
              <p className="text-gray-600 text-md sm:text-lg lg:text-xl leading-relaxed">
                Our team will be in Vienna from May 8–14, 2025. 💬 Let&apos;s
                connect during ViennaUP! If you&apos;re interested in our
                products or would like to explore collaboration opportunities,
                feel free to reach out via our Contact Us page to schedule a
                meeting.
              </p>
              <Button
                className="mt-10 ms-auto py-6 text-md sm:text-lg cursor-pointer lg:text-xl font-bold max-w-max"
                onClick={() => setIsDrawerOpen(true)}
              >
                <LayoutTemplate />
                Our Projects
              </Button>
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
