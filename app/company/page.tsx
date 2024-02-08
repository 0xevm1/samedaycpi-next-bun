'use client'
import { useRef, useState, useEffect } from "react";

export default function Company(){
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
            <div className="bg-filler main-container">
                {showVideo ? (
                    <video
                        ref={videoRef}
                        className="w-screen h-screen object-cover fixed"
                        autoPlay
                        muted
                        loop
                        disablePictureInPicture
                        playsInline
                        poster="/assets/img/bg-video-poster.webp">

                        <source src='/assets/vid/bg-survey.mp4' type='video/mp4' />
                        Your browser does not support HTML5 video.
                    </video>
                ):(<div>&nbsp;</div>)}
                <div className="w-screen h-screen object-cover fixed bg-gradient-to-t from-black to-transparent"></div> {/* Gradient overlay */}

                <div className="fixed w-screen sm:w-1/2 logo-container sm:bottom-[3rem] xs:bottom-[4rem] flex space-x-4">
                    
                    <p className="mx-5 text-sm xs:text-xs lg:text-lg">
                        <p>&nbsp;</p>
                        <p className="font-semibold text-lg">Our Expertise:</p><p>&nbsp;</p>
                        <p>Same Day CPI, LLC facilitates the three-tiered access and authorization framework for shared federal and non-federal use of the Citizens Broadband Radio Service (CBRS) established the Federal Communications Commission (FCC). Our services extend to a wide range of industries, including telecommunications, healthcare, DePIN, and public services. We specialize in the installation and maintenance of wireless networks that power businesses, communities, and cities.</p><p>&nbsp;</p>

                        <p className="font-semibold text-lg">Expanding Horizons:</p><p>&nbsp;</p>
                        <p>The City of Angels calls for nothing short of angelic service. That&apos;s why we&apos;re thrilled to announce our expansion into Los Angeles and Orange County. The vibrancy and dynamism of these regions resonate with our core values of excellence and swift service delivery. We are here to support the ever-growing tech needs of this illustrious area and to become an integral part of its digital infrastructure.</p>
                    </p>
                </div>

            </div>
        </>
    )

}