import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section className="py-10 md:py-16 lg:py-18 bg-[#070c46]">
      <div className="px-4 sm:px-6 lg:px-10 container mx-auto">
        <Card className="bg-white p-6 sm:p-8 flex flex-col lg:flex-row gap-10 justify-center items-stretch  shadow-sm rounded-xl">
          {/* Google Map */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] relative lg:h-[700px] rounded-lg ">
            <Image
              src="/assets/images/contact.jpg"
              className="rounded-lg"
              fill
              priority
              alt="contact"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FE4500]">
              Contact Us
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Let’s Build the Future Together Ready to take your business to the
              next level? Drop us a message or book a free consultation.{" "}
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-gray-600 text-base sm:text-lg">
              <p>
                <span className="font-semibold">Email:</span>
                Kanyarat.c@octotechth.com
              </p>
              <p>
                <span className="font-semibold">Address:</span> Bangkok,
                Thailand
              </p>
              <p>
                <span className="font-semibold">Contact:</span> +66
                976-956-195{" "}
              </p>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mt-4">
                Alternatively, you may leave your email and a message, and our
                team will get back to you as soon as possible.
              </p>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4 mt-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-600 text-sm sm:text-base font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Name.."
                  className="w-full border-gray-300 rounded-md focus:ring-[#1A3C34] focus:border-[#1A3C34]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-600 text-sm sm:text-base font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email.."
                  className="w-full border-gray-300 rounded-md focus:ring-[#1A3C34] focus:border-[#1A3C34]"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-600 text-sm sm:text-base font-medium mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Messages.."
                  className="w-full border-gray-300 rounded-md focus:ring-[#1A3C34] focus:border-[#1A3C34] min-h-[100px]"
                />
              </div>
              <Button
                type="submit"
                className="bg-black text-white cursor-pointer rounded-md text-xl py-6 px-4 mt-2"
              >
                Send Message
              </Button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
