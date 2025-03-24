import Image from "next/image";
import contactIcon from "@/assets/icons/customer-service.png";

export default function ContactPopup() {
    return (
        <div className="fixed bottom-4 right-4 z-50 rounded-full p-3 border-2">
            <Image
                src={contactIcon}
                alt="contact"
                width={45}
                className=" cursor-pointer"
            />
        </div>
    );
}
