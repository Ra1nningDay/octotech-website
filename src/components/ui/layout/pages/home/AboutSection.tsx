"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, Sparkles } from "lucide-react";

// Types for the team members
interface TeamMember {
  name: string;
  role: string;
  bio: string;
}

// Types for the stats
interface Stat {
  number: string;
  label: string;
  icon?: React.ReactNode;
}

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState("who-are-we");

  // Stats data
  const stats: Stat[] = [
    {
      number: "10+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6 text-rose-500" />,
    },
    {
      number: "200+",
      label: "Clients Worldwide",
      icon: <Users className="h-6 w-6 text-rose-500" />,
    },
    {
      number: "50+",
      label: "Team Members",
      icon: <Users className="h-6 w-6 text-rose-500" />,
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: <Target className="h-6 w-6 text-rose-500" />,
    },
  ];

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      name: "Alex Chen",
      role: "CEO & Founder",
      bio: "Former AI researcher with 15+ years of experience in machine learning and business strategy.",
    },
    {
      name: "Sarah Williams",
      role: "CTO",
      bio: "Expert in AI systems architecture with a background in enterprise software development.",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Consulting",
      bio: "Strategic advisor with experience helping Fortune 500 companies implement AI solutions.",
    },
  ];

  return (
    <div className={`min-h-screen bg-[#070c46] text-white `}>
      <section className="py-16 px-10 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] transform rotate-12"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="">
            {/* Header Section */}
            <div className="flex flex-col gap-6 text-center mb-16">
              <Badge
                variant="outline"
                className="w-fit mx-auto border-red-500 text-red-600"
              >
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-blue-100">
                About Us
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                <span className="text-white font-bold relative inline-block">
                  OCTOTECH is a leading provider of AI-powered solutions and
                  strategic consulting services.
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-rose-600 rounded-full"></span>
                </span>{" "}
                Our team is dedicated to pushing technological boundaries,
                creating innovative solutions that drive business success.
              </p>
            </div>

            {/* Accordion Section */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl blur-md"></div>
              <Accordion
                type="single"
                value={activeAccordion}
                onValueChange={setActiveAccordion}
                collapsible
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl rounded-xl overflow-hidden"
              >
                {/* Who Are We */}
                <AccordionItem
                  value="who-are-we"
                  className="border-white/10 px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold text-white hover:text-primary transition-colors py-6">
                    <div className="flex items-center">
                      <div
                        className={`mr-4 p-2 rounded-lg ${activeAccordion === "who-are-we" ? "bg-primary/20" : "bg-white/10"} transition-colors`}
                      >
                        <Users className="h-5 w-5 text-rose-500" />
                      </div>
                      Who Are We
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-lg leading-relaxed pb-6 pl-16">
                    We are a team of passionate engineers, designers, and
                    strategists committed to delivering cutting-edge AI-driven
                    solutions for businesses of all sizes. With expertise in
                    machine learning, data analytics, and software development,
                    we create tailored solutions that address complex business
                    challenges.
                  </AccordionContent>
                </AccordionItem>

                {/* Our Mission */}
                <AccordionItem
                  value="our-mission"
                  className="border-white/10 px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold text-white hover:text-primary transition-colors py-6">
                    <div className="flex items-center">
                      <div
                        className={`mr-4 p-2 rounded-lg ${activeAccordion === "our-mission" ? "bg-primary/20" : "bg-white/10"} transition-colors`}
                      >
                        <Target className="h-5 w-5 text-rose-500" />
                      </div>
                      Our Mission
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-lg leading-relaxed pb-6 pl-16">
                    Our mission is to empower businesses by integrating AI
                    seamlessly into their operations, enhancing efficiency and
                    driving innovation. We believe that AI technology should be
                    accessible to organizations of all sizes, and we&apos;re
                    committed to democratizing access to these powerful tools
                    through our solutions and services.
                  </AccordionContent>
                </AccordionItem>

                {/* Our Team */}
                <AccordionItem
                  value="our-team"
                  className="border-white/10 px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold text-white hover:text-primary transition-colors py-6">
                    <div className="flex items-center">
                      <div
                        className={`mr-4 p-2 rounded-lg ${activeAccordion === "our-team" ? "bg-primary/20" : "bg-white/10"} transition-colors`}
                      >
                        <Users className="h-5 w-5 text-rose-500" />
                      </div>
                      Our Team
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-lg leading-relaxed pb-6 pl-16">
                    Our diverse team of experts brings together a wealth of
                    experience from various industries, ensuring that we deliver
                    the most effective solutions to our clients. Led by industry
                    veterans with backgrounds in AI research, enterprise
                    software, and business strategy, our team combines technical
                    excellence with business acumen.
                  </AccordionContent>
                </AccordionItem>

                {/* Our Values */}
                <AccordionItem
                  value="our-values"
                  className="border-white/10 px-6"
                >
                  <AccordionTrigger className="text-xl font-semibold text-white hover:text-primary transition-colors py-6">
                    <div className="flex items-center">
                      <div
                        className={`mr-4 p-2 rounded-lg ${activeAccordion === "our-values" ? "bg-primary/20" : "bg-white/10"} transition-colors`}
                      >
                        <Sparkles className="h-5 w-5 text-rose-500" />
                      </div>
                      Our Values
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 text-lg leading-relaxed pb-6 pl-16">
                    <ul className="space-y-3 list-disc pl-5">
                      <li>
                        <span className="font-semibold">Innovation:</span> We
                        constantly push the boundaries of what&apos;s possible
                        with AI technology.
                      </li>
                      <li>
                        <span className="font-semibold">Excellence:</span> We
                        are committed to delivering the highest quality
                        solutions and services.
                      </li>
                      <li>
                        <span className="font-semibold">Integrity:</span> We
                        operate with transparency and honesty in all our
                        business dealings.
                      </li>
                      <li>
                        <span className="font-semibold">Collaboration:</span> We
                        work closely with our clients to ensure their success.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Stats Section */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:from-white/10 hover:to-white/15 transition-all duration-300 group"
                >
                  {stat.icon && (
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                  )}
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-600 mb-2 group-hover:scale-105 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Team Leadership */}
            <div className="mt-24 text-center">
              <Badge
                variant="outline"
                className="w-fit mx-auto border-2 border-red-500 text-red-600 mb-4"
              >
                Leadership
              </Badge>
              <h2 className="text-3xl font-bold mb-12">
                Meet Our Leadership Team
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group"
                  >
                    <div className="relative h-64 bg-gradient-to-br from-purple-900/40 to-blue-900/40">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        alt={member.name}
                        width={300}
                        height={300}
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary mb-3">{member.role}</p>
                      <p className="text-white/70">{member.bio}</p>
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
