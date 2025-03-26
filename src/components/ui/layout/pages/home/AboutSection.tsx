import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export default function AboutSection() {
    return (
        <section className="py-12 md:py-16 lg:py-20">
            <div className="border-t-2 mx-10">
                <div className="flex flex-col gap-10 mt-15">
                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 lg:gap-14  lg:text-left">
                        <h1 className="text-sm sm:text-md lg:text-lg w-lg font-bold">
                            About Us
                        </h1>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                            <span className="text-black font-bold">
                                OCTOTECH is a leading provider of AI-powered
                                solutions and strategic consulting services.
                            </span>{" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae provident est similique eius alias
                            id libero in assumenda aperiam eaque consectetur
                            labore sint voluptas impedit, aspernatur inventore
                            nemo odit facere!
                        </p>
                    </div>

                    {/* Accordion */}
                    <Accordion type="single" collapsible className="w-full">
                        {/* Who Are We */}
                        <AccordionItem value="who-are-we">
                            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                                Who Are We
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Sunt, saepe cupiditate
                                numquam, molestiae corrupti ipsa quia
                                necessitatibus sit in quidem eligendi dolorem
                                natus et deserunt odio, aliquam labore modi!
                                Neque sapiente dolor officiis accusamus
                                repellendus quidem, eos voluptates quisquam non
                                est eius distinctio velit molestias in iure
                                nulla temporibus nihil?
                            </AccordionContent>
                        </AccordionItem>

                        {/* Our Mission */}
                        <AccordionItem value="our-mission">
                            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                                Our Mission
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Sunt, saepe cupiditate
                                numquam, molestiae corrupti ipsa quia
                                necessitatibus sit in quidem eligendi dolorem
                                natus et deserunt odio, aliquam labore modi!
                                Neque sapiente dolor officiis accusamus
                                repellendus quidem, eos voluptates quisquam non
                                est eius distinctio velit molestias in iure
                                nulla temporibus nihil?
                            </AccordionContent>
                        </AccordionItem>

                        {/* Our Team */}
                        <AccordionItem value="our-team">
                            <AccordionTrigger className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">
                                Our Team
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 text-base sm:text-lg leading-relaxed">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Sunt, saepe cupiditate
                                numquam, molestiae corrupti ipsa quia
                                necessitatibus sit in quidem eligendi dolorem
                                natus et deserunt odio, aliquam labore modi!
                                Neque sapiente dolor officiis accusamus
                                repellendus quidem, eos voluptates quisquam non
                                est eius distinctio velit molestias in iure
                                nulla temporibus nihil?
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
