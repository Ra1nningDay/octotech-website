import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className="mx-auto relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-40 h-40 rounded-full bg-[#1A1AEB]/5 blur-3xl -top-10 -left-10" />
        <div className="absolute w-24 h-24 rounded-full bg-white/5 top-20 right-10" />
        <div className="absolute w-16 h-16 rounded-full bg-white/10 bottom-40 left-20" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: "radial-gradient(#1A1AEB 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-10 py-12 md:py-16 lg:py-18 mx-auto">
        <div className="text-center mb-20 relative z-10">
          <Badge
            variant="outline"
            className="mb-6 border border-[#FF4500] text-[#FF4500] text-sm tracking-wide"
          >
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl text-black font-extrabold mb-6 leading-tight">
            AI-Powered Solutions for Every Business Need
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto text-lg">
            Leverage cutting-edge AI technology to transform your business
            operations and drive growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            {
              title: "Custom AI Development",
              description:
                "Tailored AI solutions designed specifically for your business needs and challenges.",
            },
            {
              title: "Strategic Consulting",
              description:
                "Expert guidance on implementing AI to maximize ROI and business impact.",
            },
            {
              title: "Process Automation",
              description:
                "Streamline operations with intelligent automation powered by AI.",
            },
            {
              title: "Generative AI Solutions",
              description:
                "Harness the power of generative AI for content, design, and more.",
            },
          ].map((service, index) => (
            <Card
              key={index}
              className="bg-white/5 border-none backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold mb-3 text-black">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12 relative z-10">
          <Button className="bg-[#0000be] text-white hover:bg-[#0000be]/90 cursor-pointer  px-10 py-6 uppercase rounded-full font-semibold text-sm tracking-wide">
            Learn more <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
