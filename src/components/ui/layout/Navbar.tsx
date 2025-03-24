import { Button } from "@/components/ui/button";
import Image from "next/image";
import worldIcon from "@/assets/icons/world.png";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-2 px-4 py-4 shadow-xs font-serif">
            <div className="flex items-center justify-between">
                <div className="flex">
                    <Link href="/">
                        <h1 className="text-4xl font-bold uppecase">
                            OCTOTECH
                        </h1>
                    </Link>
                </div>

                <Button variant="ghost" className="cursor-pointer">
                    <Image
                        src={worldIcon}
                        alt="world"
                        className=""
                        width={30}
                    />
                </Button>
            </div>
        </nav>
    );
}
