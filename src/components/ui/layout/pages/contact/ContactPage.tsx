"use client";

import type React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Home, ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ที่นี่คุณสามารถเพิ่ม logic ส่งข้อมูลไป backend หรือ API ได้
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header Section */}
      <div className="bg-[#070c46] pt-36 pb-32 relative text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-[120px] transform rotate-12"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-[100px]"></div>
        </div>

        <Badge
          variant="outline"
          className="w-fit mx-auto border-2 border-[#FF4500] mb-4 text-[#FF4500]"
        >
          Contact Us
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 font-bold">
          Let’s Build the Future Together
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Ready to take your business to the next level? Drop us a message or
          book a free consultation.
        </p>
        <div className="flex items-center justify-center gap-2 text-white/80 mt-6">
          <Link
            href="/"
            className="flex items-center hover:text-[#1dfebd] transition-colors"
          >
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#1dfebd]">Contact</span>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-12 md:py-16 lg:py-18 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="bg-white/90 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-6 text-gray-700">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-rose-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:Kanyarat.c@octotechth.com"
                      className="hover:text-[#FF4500] transition-colors"
                    >
                      Kanyarat.c@octotechth.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-rose-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+66976956195"
                      className="hover:text-[#FF4500] transition-colors"
                    >
                      +66 976-956-195
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-rose-500" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>Bangkok, Thailand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/90 border border-gray-200 rounded-xl p-8 shadow-sm">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-gray-700 mb-6">
                Alternatively, you may leave your email and a message, and our
                team will get back to you as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-semibold mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full"
                    rows={5}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#FF4500] hover:bg-[#FF4500]/90 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
