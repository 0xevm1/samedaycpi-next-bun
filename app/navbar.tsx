import Image from "next/image";

export default function Navbar(){

    return (
        <>
         <nav className="flex items-center w-full py-0 pr-4 bg-[#0f1b2f]">
                <div className="flex-1">
                    <a href="./" className="py-0 inline-block">
                        <div className="w-auto h-28">
                            <Image src={"/assets/img/samedaycpilogo-bg.webp"}
                            width={200}
                            height={291} alt="" />
                        </div>
                    </a>
                </div>
                <div>
                {/** Additional links/routes, needs to be collapsed in small view */}
                <div className="hidden md:flex space-x-4">
                    <a href="/about" className="text-white hover:underline">About Us</a>
                    <a href="/services" className="text-white hover:underline">Services</a>
                </div>
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfWkX_T7RIFwxbbvNiHY00-4pR91OsR3Fw24_ZQc-ir9qFN8Q/viewform"
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security measure for opening links in new tabs
                    className="inline-flex items-center bg-white text-black hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
                >
                    <Image src="/assets/img/logomark.png" alt="Logo" className="mr-2 -ml-1"
                        width={20}
                        height={20} /> {/* Adjust path, margin, and size as needed */}
                    Get Quote Now
                </a>
                </div>
            </nav>
        </>
    )

}