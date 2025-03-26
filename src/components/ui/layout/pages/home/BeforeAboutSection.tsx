export default function BeforeAboutSection() {
    return (
        <section className=" bg-white pb-16 relative overflow-hidden">
            <div className="relative ms-[-10rem] flex justify-center items-center gap-10 overflow-auto w-[2200px]">
                {/* Left */}
                <div className=" bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] "></div>
                {/* Center */}
                <div className="bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] z-10"></div>
                {/* Right */}
                <div className=" bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px]"></div>
            </div>
        </section>
    );
}
