export default function BeforeAboutSection() {
    return (
        <section className="pb-12 md:pb-16 lg:pb-20 bg-white relative overflow-hidden">
            <div className="relative flex justify-center items-center">
                {/* Left */}
                <div className="absolute left-0 bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] transform -translate-x-1/2"></div>
                {/* Center */}
                <div className="bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] z-10"></div>
                {/* Right */}
                <div className="absolute right-0 bg-gray-300 rounded-xl w-[90%] sm:w-[60%] md:w-[50%] lg:w-[725px] h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] transform translate-x-1/2"></div>
            </div>
        </section>
    );
}
