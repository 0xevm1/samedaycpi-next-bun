import Image from "next/image";

export default function Home() {
  return (
    <>
          <div className="bg-filler main-container">
          <nav className="flex items-center w-full py-0 pr-4" style={{backgroundColor: '#0f1b2f'}}>
                <div className="flex-1">
                    <a href="./" className="py-0 inline-block">
                        <img src={"./assets/img/samedaycpilogo-bg.webp"} className="w-auto h-28" alt="" />
                    </a>
                </div>
                <div>
                    <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfHXLCUvipK45qaHi33KBF4Z63xOKx6lBZCH90e26GbxCPIoA/viewform" // Replace with your actual Google Form link
                    target="_blank" // Opens the link in a new tab
                    rel="noopener noreferrer" // Security measure for opening links in new tabs
                    className="bg-white text-black hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
                    >
                    Get Quote Now
                    </a>
                </div>
            </nav>
            <video
                    className="w-screen h-screen object-cover fixed"
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    playsInline
                    poster="/assets/img/bg-video-poster.webp">

            <source src='/assets/vid/bg-cbrs.webm' type='video/webm' />
            <source src='/assets/vid/bg-cbrs.mp4' type='video/mp4' />
            Your browser does not support HTML5 video.
             </video>

            <div className="bg footer mt-2 div-3">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-2/3">
                        <div className="flex">
                            <div className="mx-5">
                                <p className="whitespace-pre-line">&nbsp;</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-1/2">
                            <p className="mx-5 text-sm xs:text-xs lg:text-lg">
                            Certified Professional Installers (CPIs) are licensed according to guidelines set by the Federal Communications Commission (FCC) and are responsible for ensuring that wireless networks comply with regulations and function optimally. Our team of licensed, insured professionals addresses a common challenge in the field: getting CPI work done quickly without compromising quality or safety. By doing so, we help our clients avoid potential issues and maintain smooth operations. Contact us for pricing and availability.
                            </p>
                        </div>
                    </div>
                </div>
              </div> {/** end bg footer */}
          </div>
    </>
  );
}
