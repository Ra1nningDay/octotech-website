"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import worldIcon from "../../../../public/assets/icons/world.png";
import logoImage from "../../../../public/assets/images/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Our Services", url: "/services" },
];

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // เพิ่ม state สำหรับ toggle

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // cleanup
  }, []);

  // Path handler
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <nav
      className={
        `fixed top-0  left-0 right-0 z-50 px-4 sm:px-6 py-6 ` +
        (isScrolled ? "bg-[#070c46] shadow-lg transition-all" : "")
      }
    >
      <div className="flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logoImage}
            alt="OCTOTECH Logo"
            width={40}
            height={40}
            className="invert"
            unoptimized
          />
          <h1 className="text-2xl sm:text-3xl font-bold uppercase text-white">
            OCTOTECH
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6 lg:gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.url}
                className={`text-[16px] lg:text-[18px] font-semibold text-white hover:text-teal-400 transition-colors relative ${
                  currentPath === link.url
                    ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-teal-400"
                    : ""
                }`}
                aria-current={currentPath === link.url ? "page" : undefined}
              >
                {link.title}
              </Link>
            </li>
          ))}
          <Button
            variant="link"
            className="p-0 flex items-center gap-2 text-white hover:text-teal-400 transition-colors"
            aria-label="Select Language"
          >
            <Image
              src={worldIcon}
              alt="Select Language Icon"
              width={24}
              height={24}
              className="invert"
              unoptimized
            />
            <span className="text-[14px] lg:text-[16px] hidden lg:block">
              EN
            </span>
          </Button>
        </ul>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="sm:hidden text-white hover:text-teal-400"
          aria-label="Toggle Menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // เพิ่ม handler
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#070c46] px-4 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={`text-[16px] font-semibold text-white hover:text-teal-400 transition-colors ${
                    currentPath === link.url ? "border-b-2 border-teal-400" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)} // ปิดเมนูเมื่อคลิกลิงก์
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <Button
              variant="link"
              className="p-0 flex items-center gap-2 text-white hover:text-teal-400 transition-colors justify-start"
              aria-label="Select Language"
            >
              <Image
                src={worldIcon}
                alt="Select Language Icon"
                width={24}
                height={24}
                className="invert"
                unoptimized
              />
              <span className="text-[14px]">EN</span>
            </Button>
          </ul>
        </div>
      )}
    </nav>
  );
}
