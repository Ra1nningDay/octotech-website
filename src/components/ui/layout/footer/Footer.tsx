import Image from "next/image";
export default function Footer() {
  return (
    <footer className="border-t bg-[#070c46] border-white/10 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="OCTOTECH Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">OCTOTECH</span>
            </div>
            <p className="text-white/70 mb-4">
              Empowering businesses with intelligent AI-powered solutions.
            </p>
            <div className="flex gap-4">
              {["twitter", "linkedin", "facebook", "github"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="h-4 w-4 bg-white/70 rounded-sm"></div>
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "Our Team", "Careers", "Contact"],
            },
            {
              title: "Services",
              links: ["AI Solutions", "Consulting", "Development", "Training"],
            },
            {
              title: "Resources",
              links: ["Blog", "Case Studies", "Documentation", "FAQ"],
            },
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-4 text-white">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © 2025 OCTOTECH. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
