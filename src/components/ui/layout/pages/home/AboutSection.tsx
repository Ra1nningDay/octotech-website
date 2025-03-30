"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-12 sm:pt-16 lg:pt-18">
      <div className="relative overflow-hidden rounded-xl p-8 bg-[#f2f2f2]">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF4500]/10"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#4D2DB7]/10"></div>

        <div className="relative flex z-10">
          <div className="flex flex-col">
            <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-[#FF4500] text-white border-none">
              About Us
            </Badge>
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
              OCTOTECH
            </h1>
            <p className="max-w-2xl text-lg text-gray-600">
              We build intelligent AI-powered solutions to accelerate business
              growth — from custom software to strategic consulting.
            </p>
            <Link href="/about" className="mt-auto">
              <Button className="max-w-max  uppercase cursor-pointer">
                <Info />
                more information
              </Button>
            </Link>
          </div>
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="image"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
