import Image from "next/image";

export default function Landing(){
    return (
        <>
            <video
                className="w-screen h-screen object-cover fixed"
                autoPlay
                muted
                loop
                disablePictureInPicture
                playsInline
                poster="/assets/img/bg-video-poster.webp">

                <source src='/assets/vid/bg-cbrs.mp4' type='video/mp4' />
                Your browser does not support HTML5 video.
             </video>
            
            <div className="logo-container absolute md:bottom-[12rem] xs:bottom-[12rem] sm:bottom-[8rem]  lg:bottom-[16rem] right-3 flex space-x-4">
                <Image src="./assets/img/fcc-logo-blue-2020.svg" alt="FCC Compliance Logo" className="bg-white p-3 rounded-2xl opacity-100" 
                    width={50}
                    height={50}/>
            </div>

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
        </>
    )
}