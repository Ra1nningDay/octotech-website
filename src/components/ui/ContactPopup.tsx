import { useEffect, useState } from "react";
import Image from "next/image";
import contactIcon from "@/assets/icons/customer-service.png";

export default function ContactPopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = document.getElementById("target-section"); // ID ของ Section ที่ให้แสดง
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.5 } // แสดงเมื่อ Section อย่างน้อย 50%
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            {isVisible && (
                <div className="fixed bottom-4 right-4 z-50 rounded-full p-2 border-2">
                    <Image
                        src={contactIcon}
                        alt="contact"
                        width={35}
                        className="cursor-pointer"
                    />
                </div>
            )}
        </>
    );
}
