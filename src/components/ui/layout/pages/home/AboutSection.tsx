"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-18">
      <div className="relative overflow-hidden rounded-xl p-8 shadow-sm">
        <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF4500]/10"></div>
        <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#4D2DB7]/10"></div>

        <div className="relative flex z-10 justify-between gap-8">
          <div className="flex flex-col max-w-lg">
            <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-[#FF4500] text-white border-none">
              About Us
            </Badge>
            <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
              OCTOTECH
            </h1>
            <p className="max-w-2xl text-lg text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              feugiat condimentum sem eget euismod. Sed interdum enim in dolor
              maximus, nec venenatis neque vestibulum. Etiam euismod fermentum
              est fermentum lobortis.
            </p>
            <Link href="/about" className="mt-auto">
              <Button className="max-w-max uppercase cursor-pointer">
                <Info />
                more information
              </Button>
            </Link>
          </div>
          <div className="hidden lg:flex items-center w-full max-w-2xl">
            <Image
              src="/assets/images/ai.png"
              alt="image"
              width={600}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
