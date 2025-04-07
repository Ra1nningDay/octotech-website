"use client";

import type React from "react";
import Link from "next/link";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
export default function ServicePage() {
  // Team members data
  return (
    <div className={`min-h-screen  text-white `}>
      {/* Header Section */}
      <div className="flex flex-col bg-[#070c46] pt-40 pb-32 relative justify-center gap-6 text-center ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] transform rotate-12"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 w-fit border-2 border-[#FF4500] text-[#FF4500]"
            >
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              AI-Powered Solutions for
              <span className="block mt-2">Every Business Need</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              OCTOTECH builds intelligent AI-powered solutions to accelerate
              business growth — from custom software to strategic consulting.
            </p>
          </div>

          {/* Service Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              "AI Solutions",
              "Consulting",
              "Development",
              "Integration",
              "Training",
            ].map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#FE3603] cursor-pointer hover:bg-[#FE3603]/90"
                    : " cursor-pointer text-black "
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80">
            <Link
              href="/"
              className="flex items-center hover:text-[#1dfebd] transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#1dfebd]">Services</span>
          </div>
        </div>
      </div>
      <section className="mx-auto container py-16 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10">
          {[
            {
              title: "Custom AI Development",
              description:
                "Tailored AI solutions designed specifically for your business needs and challenges.",
              icon: "🧠",
            },
            {
              title: "Strategic Consulting",
              description:
                "Expert guidance on implementing AI to maximize ROI and business impact.",
              icon: "💡",
            },
            {
              title: "Process Automation",
              description:
                "Streamline operations with intelligent automation powered by AI.",
              icon: "⚙️",
            },
            {
              title: "Generative AI Solutions",
              description:
                "Harness the power of generative AI for content, design, and more.",
              icon: "🔮",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-[#010138] to-[#0d2a3f] hover:bg-white/10 transition-all"
            >
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-4">{service.description}</p>
                <Button
                  variant="link"
                  className="p-0 hover:text-red-500/80 text-red-600 gap-1 cursor-pointer"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      {/* 
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-[#FE3603]/30 text-[#FE3603]"
              >
                Success Stories
              </Badge>
              <h2 className="text-3xl md:text-4xl text-black font-bold">
                Our Work in Action
              </h2>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-white/20"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-10 w-10 border-white/20 bg-white/10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt!",
                industry: "Lorem, ipsum",
                description:
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, nesciunt! lorem",
              },
            ].map((caseStudy, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#010138] to-[#0d2a3f] border border-white/10 rounded-xl overflow-hidden group hover:border-[#FE3603]/30 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-purple-900/40 to-blue-900/40 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FE3603]/20 to-[#00F8BC]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-[#FE3603] text-sm font-medium mb-2">
                    {caseStudy.industry}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="text-white/70 mb-4">{caseStudy.description}</p>
                  <Button
                    variant="link"
                    className="p-0 text-[#00F8BC] hover:text-[#00F8BC]/80 gap-1 group-hover:gap-2 transition-all duration-300"
                  >
                    View project{" "}
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}
    </div>
  );
}
