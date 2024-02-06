import Image from "next/image";

export default function Navbar(){

    return (
        <>
         <nav className="flex items-center w-full py-0 pr-4" style={{backgroundColor: '#0f1b2f'}}>
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
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfHXLCUvipK45qaHi33KBF4Z63xOKx6lBZCH90e26GbxCPIoA/viewform" // Replace with your actual Google Form link
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