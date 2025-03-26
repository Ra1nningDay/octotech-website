import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutSection() {
    return (
        <section className="py-16 md:py-18 lg:py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className=" ">
                    <div className="flex flex-col gap-8 text-center lg:text-left">
                        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                            <span className="text-black font-bold">
                                OCTOTECH is a leading provider of AI-powered
                                solutions and strategic consulting services.
                            </span>{" "}
                            Our team is dedicated to pushing technological
                            boundaries, creating innovative solutions that drive
                            business success.
                        </p>
                    </div>
                </div>

                {/* Accordion */}
                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full bg-white shadow-lg rounded-lg p-6"
                    >
                        {/* Who Are We */}
                        <AccordionItem value="who-are-we">
                            <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                                Who Are We
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                We are a team of passionate engineers,
                                designers, and strategists committed to
                                delivering cutting-edge AI-driven solutions for
                                businesses of all sizes.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Our Mission */}
                        <AccordionItem value="our-mission">
                            <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                                Our Mission
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                Our mission is to empower businesses by
                                integrating AI seamlessly into their operations,
                                enhancing efficiency and driving innovation.
                            </AccordionContent>
                        </AccordionItem>

                        {/* Our Team */}
                        <AccordionItem value="our-team">
                            <AccordionTrigger className="text-xl font-semibold text-gray-900 hover:text-blue-600">
                                Our Team
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-700 text-base sm:text-lg leading-relaxed">
                                Our diverse team of experts brings together a
                                wealth of experience from various industries,
                                ensuring that we deliver the most effective
                                solutions to our clients.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
