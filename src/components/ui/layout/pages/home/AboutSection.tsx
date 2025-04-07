"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div
          className="absolute top-0 left-0 right-0 bottom-0"
          style={{
            backgroundImage: "radial-gradient(#1A1AEB 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-14 lg:py-16">
        <div className="relative overflow-hidden rounded-xl bg-white p-20 shadow-lg">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#FF4500]/10 blur-xl"></div>
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#4D2DB7]/10 blur-xl"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex flex-col">
              <Badge className="mb-4 px-3 py-1 text-sm font-medium bg-[#FF4500] text-white border-none w-fit">
                {" "}
                About Us
              </Badge>
              <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
                {" "}
                OCTOTECH
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 mb-6">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                feugiat condimentum sem eget euismod. Sed interdum enim in dolor
                maximus, nec venenatis neque vestibulum. Etiam euismod fermentum
                est fermentum lobortis.
              </p>

              <Link href="/about">
                <Button className="max-w-max uppercase cursor-pointer bg-[#0000be] text-white">
                  <Info className="mr-2 h-4 w-4" /> more information
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-end w-full">
              <Image
                src="/assets/images/aboutus.avif"
                alt="About OCTOTECH team working"
                width={500}
                height={300}
                className="object-contain rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
