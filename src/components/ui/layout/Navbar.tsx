import { Button } from "@/components/ui/button";
import Image from "next/image";
import worldIcon from "@/assets/icons/world.png";
import logoImage from "@/assets/images/logo.png";
import Link from "next/link";

const links = [
    {
        title: "Home",
        url: "/",
    },
    {
        title: "About Us",
        url: "/about",
    },
    {
        title: "Our Services",
        url: "/services",
    },
];

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 font-serif bg-white">
            <div className="flex items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logoImage} alt="logo" width={50} />
                    <h1 className="text-3xl font-bold uppecase">OCTOTECH</h1>
                </Link>

                <ul className="flex items-center gap-4">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                href={link.url}
                                className="text-[20px] font-semibold"
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <Button variant="link" className="cursor-pointer p-0">
                        <Image
                            src={worldIcon}
                            alt="world"
                            className=""
                            width={30}
                        />
                    </Button>
                </ul>
            </div>
        </nav>
    );
}
