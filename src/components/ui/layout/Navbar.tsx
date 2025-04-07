"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact", url: "/contact" },
];

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Path handler
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md backdrop-blur-sm bg-opacity-90"
          : "bg-transparent"
      }`}
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-[#1A1AEB]/5"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 rounded-full bg-[#FE5803]/5"></div>
        <div className="absolute top-0 left-1/3 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10FEBD]/20 to-transparent"></div>
      </div>

      <div className="container mx-auto relative">
        <div className="flex items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 relative z-10">
            <Image
              src="/assets/images/logo-this2.png"
              alt="OCTOTECH Logo"
              width={50}
              height={50}
              className=" w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-6 lg:gap-8 relative z-10">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className={`text-[16px] lg:text-[18px] font-medium text-gray-800 hover:text-[#FE5803] transition-colors relative ${
                    currentPath === link.url
                      ? "text-[#1A1AEB] after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[#FE5803]"
                      : ""
                  }`}
                  aria-current={currentPath === link.url ? "page" : undefined}
                >
                  {link.title}
                </Link>
              </li>
            ))}
            <Button
              variant="outline"
              className="ml-2 border-[#1A1AEB] text-[#1A1AEB] hover:bg-[#1A1AEB] hover:text-white transition-colors"
            >
              <span className="text-[14px] lg:text-[16px] flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-globe"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" x2="22" y1="12" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                EN
              </span>
            </Button>
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="sm:hidden text-[#1A1AEB] hover:text-[#FE5803] hover:bg-transparent"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
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
            )}
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden bg-white border-t border-gray-100 mt-4 px-4 py-4 rounded-lg shadow-lg">
            <ul className="flex flex-col gap-4">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className={`text-[16px] font-medium text-gray-800 hover:text-[#FE5803] transition-colors block py-2 ${
                      currentPath === link.url
                        ? "text-[#1A1AEB] border-l-2 pl-2 border-[#FE5803]"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <Button
                  variant="outline"
                  className="w-full justify-start border-[#1A1AEB] text-[#1A1AEB] hover:bg-[#1A1AEB] hover:text-white transition-colors"
                >
                  <span className="text-[14px] flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-globe"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" x2="22" y1="12" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    EN
                  </span>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
