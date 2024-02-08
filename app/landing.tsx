'use client'
import { useRef, useState, useEffect } from "react";
import Image from "next/image";


export default function Landing(){
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(true); // State to control video visibility
  
    useEffect(() => {
      const videoEl = videoRef.current;
      if (videoEl) {
        const playPromise = videoEl.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            // Autoplay started successfully, show the video
            setShowVideo(true);
          }).catch(() => {
            // Autoplay was prevented, hide the video
            setShowVideo(false);
          });
        }
      }
    }, []);
  
    return (
        <>
            {showVideo ? (
                <video
                    ref={videoRef}
                    className="w-screen h-screen object-cover fixed"
                    autoPlay
                    muted
                    loop
                    disablePictureInPicture
                    playsInline
                    poster="/assets/vid/bg-cbrs-poster.webp">

                    <source src='/assets/vid/bg-cbrs.mp4' type='video/mp4' />
                    Your browser does not support HTML5 video.
                </video>
            ): (
                <Image src="/assets/vid/bg-cbrs-poster.webp" alt="Fallback if video fails poster" className="w-screen h-screen object-cover fixed"
                width={854}
                height={480} />
            ) } 
             <div className="w-screen h-screen object-cover fixed inset-0 bg-black bg-opacity-20"></div> {/* Transparent black overlay */}
             <div className="w-screen h-screen object-cover fixed bg-gradient-to-t from-black to-transparent"></div> {/* Gradient overlay */}
            
             <div className="fixed w-screen sm:w-1/2 logo-container sm:bottom-[3rem] xs:bottom-[4rem] flex space-x-4">
                <p className="mx-5 text-sm xs:text-xs lg:text-lg">
                    Certified Professional Installers (CPIs) are licensed according to guidelines set by the Federal Communications Commission (FCC) and are responsible for ensuring that wireless networks comply with regulations and function optimally. <br/> <br/>
                    Our team of licensed, insured professionals addresses a common challenge in the field: getting CPI work done quickly without compromising quality or safety. By doing so, we help our clients avoid potential issues and maintain smooth operations. Contact us for pricing and availability.
                </p>
            </div>
            

        </>
    )
}