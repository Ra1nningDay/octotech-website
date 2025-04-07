"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Users, Home, ChevronRight } from "lucide-react";

// Types for the team members
interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

export default function AboutPage() {
  const [activeAccordion, setActiveAccordion] = useState("who-are-we");

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Lorem",
      role: "CEO & Founder",
      bio: "Former AI researcher with 15+ years of experience in machine learning and business strategy.",
    },
    {
      name: "Lorem Lorem",
      role: "CTO",
      bio: "Expert in AI systems architecture with a background in enterprise software development.",
    },
    {
      name: "Lorem Lorem",
      role: "Head of Consulting",
      bio: "Strategic advisor with experience helping Fortune 500 companies implement AI solutions.",
    },
  ];

  return (
    <div className={`min-h-screen  text-white `}>
      {/* Header Section */}
      <div className=" bg-[#070c46] pt-36 pb-32 relative text-center ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] transform rotate-12"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <Badge
          variant="outline"
          className="w-fit mx-auto border-2 border-[#FF4500] mb-4 text-[#FF4500]"
        >
          About Us
        </Badge>
        <h1 className=" text-4xl md:text-5xl lg:text-6xl mb-8 font-bold">
          OCTOTECH — Our Stories
        </h1>
        <div className="flex items-center justify-center gap-2 text-white/80">
          <Link
            href="/"
            className="flex items-center hover:text-[#1dfebd] transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#1dfebd]">About Us</span>
        </div>
      </div>

      <section className="py-12 md:py-16 lg:py-18 relative overflow-hidden ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="">
            {/* Accordion Section */}
            <div className="relative">
              <Accordion
                type="single"
                value={activeAccordion}
                onValueChange={(val) => setActiveAccordion(val)}
                collapsible
                className="w-full bg-white/90 border border-gray-200 shadow-sm; rounded-xl overflow-hidden"
              >
                {/* Who Are We */}
                <AccordionItem
                  value="who-are-we"
                  className="border-gray-200 px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold text-gray-900 cursor-pointer hover:text-red-600 transition-colors py-6">
                    <div className="flex items-center">
                      <div
                        className={`mr-4 p-2 rounded-lg ${activeAccordion === "who-are-we" ? "bg-primary/20" : "bg-gray-100"} transition-colors`}
                      >
                        <Users className="h-5 w-5 text-rose-500" />
                      </div>
                      Who Are We
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 text-lg leading-relaxed pb-6 pl-16">
                    We craft AI-powered software, applications, and websites
                    that transform the way businesses operate smarter, faster,
                    and ready for tomorrow.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Stats Section */}

            {/* Team Leadership */}
            <div className="pt-12 sm:pt-16 lg:pt-18 text-center">
              <h2 className="text-3xl font-bold mb-12 text-gray-900">
                Our Leadership Team
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/90 border border-gray-200 rounded-xl overflow-hidden group"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-400/20 to-gray-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      <p className="text-gray-700 mb-3">{member.role}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
