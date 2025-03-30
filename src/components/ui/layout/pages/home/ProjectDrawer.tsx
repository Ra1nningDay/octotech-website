"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProjectDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDrawer({ isOpen, onClose }: ProjectDrawerProps) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const testimonials = [
    {
      quote:
        "OCTOTECH's AI solutions have transformed our business operations completely. We've seen a 40% increase in efficiency and a significant boost in our decision-making capabilities.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate Inc.",
    },
    {
      quote:
        "Working with OCTOTECH has been a game-changer for our company. Their custom AI development helped us automate complex processes and gain valuable insights from our data.",
      author: "Michael Chen",
      position: "CEO, DataDrive Solutions",
    },
    {
      quote:
        "The strategic consulting provided by OCTOTECH helped us identify the perfect AI implementation strategy. Their expertise and guidance were invaluable throughout the process.",
      author: "Jessica Williams",
      position: "COO, FutureTech Industries",
    },
  ];

  const projects = [
    {
      title: "AI-Powered Customer Service Platform",
      client: "E-commerce Giant",
      description:
        "Developed an intelligent chatbot system that handles 70% of customer inquiries automatically, reducing response time by 85%.",
    },
    {
      title: "Predictive Maintenance System",
      client: "Manufacturing Company",
      description:
        "Created an AI solution that predicts equipment failures before they occur, reducing downtime by 35% and maintenance costs by 25%.",
    },
    {
      title: "Data Analytics Dashboard",
      client: "Financial Services Firm",
      description:
        "Built a comprehensive analytics platform that processes millions of transactions daily, identifying patterns and anomalies in real-time.",
    },
    {
      title: "Natural Language Processing Tool",
      client: "Content Publishing Network",
      description:
        "Developed a custom NLP solution that analyzes content sentiment and recommends optimizations, increasing engagement by 40%.",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-[#010138] text-white overflow-y-auto"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
        >
          <div className="min-h-screen">
            {/* Close button */}
            <div className="fixed top-6 right-6 z-50">
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full h-12 w-12 bg-white/10 hover:bg-white/20 text-white"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-20">
              <div className="max-w-5xl mx-auto">
                <Badge
                  variant="outline"
                  className="mb-4 border-[#FE3603]/30 text-[#FE3603]"
                >
                  Our Work
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
                  Featured Projects
                </h1>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                  {projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    >
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-[#FE3603] text-sm mb-4">
                        {project.client}
                      </p>
                      <p className="text-white/70">{project.description}</p>
                      <Button
                        variant="link"
                        className="p-0 mt-4 text-[#00F8BC] hover:text-[#00F8BC]/80"
                      >
                        View case study
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonials Section */}
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 relative overflow-hidden mt-20">
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div>
                      <Badge
                        variant="outline"
                        className="mb-2 border-[#FE3603]/30 text-[#FE3603]"
                      >
                        Success Stories
                      </Badge>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        What Our Clients Say
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

                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 backdrop-blur-sm max-w-3xl relative z-10">
                    <p className="text-lg md:text-xl italic mb-6">
                      &quote;{testimonials[0].quote}&quote;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
                      <div>
                        <h4 className="font-semibold">
                          {testimonials[0].author}
                        </h4>
                        <p className="text-sm text-white/70">
                          {testimonials[0].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6">
                    Ready to Start Your Project?
                  </h2>
                  <Button
                    size="lg"
                    className="bg-[#FE3603] hover:bg-[#00F8BC] hover:text-[#010138] transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
