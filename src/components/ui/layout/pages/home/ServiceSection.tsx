import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function ServiceSection() {
  return (
    <section className="mx-auto py-16 relative bg-[#070c46] ">
      <div className="container px-4 sm:px-6 lg:px-10 mx-auto">
        <div className="text-center mb-16 relative z-10">
          <Badge
            variant="outline"
            className="mb-4 border border-red-500 text-red-500"
          >
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl text-white font-bold mb-4">
            AI-Powered Solutions for Every Business Need
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Leverage cutting-edge AI technology to transform your business
            operations and drive growth.
          </p>
        </div>
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
              className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <CardContent className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
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
      </div>
    </section>
  );
}
