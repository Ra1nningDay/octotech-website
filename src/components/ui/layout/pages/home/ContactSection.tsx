import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section className="py-10 md:py-16 lg:py-18 bg-[#070c46]">
      <div className="px-4 sm:px-6 lg:px-10 container mx-auto">
        <Card className="bg-white p-6 sm:p-8 flex flex-col lg:flex-row gap-10 justify-center items-stretch  shadow-sm rounded-xl">
          {/* Google Map */}
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[565px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.614614678614!2d100.61461461482947!3d13.741614990345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29f2b4e4b7b4b%3A0x1f2b4e4b7b4b7b4b!2sSuan%20Luang%2C%20Bangkok%2010250%2C%20Thailand!5e0!3m2!1sen!2sth!4v1698765432100!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A3C34]">
              Contact Us
            </h1>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              If you have any further questions about our products or services,
              please contact us.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 text-gray-600 text-base sm:text-lg">
              <p>
                <span className="font-semibold">Address:</span> FSWM+FI9
                Phatthanakan Road, Suan Luang Subdistrict, Suan Luang District,
                Bangkok 10250
              </p>
              <p>
                <span className="font-semibold">Contact:</span> 080-1234567
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
