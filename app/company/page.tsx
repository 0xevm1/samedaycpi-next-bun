export default function Company(){

    return (
        <>
            <div className="bg-filler main-container">
                <video
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
                <div className="w-screen h-screen object-cover fixed bg-gradient-to-t from-black to-transparent"></div> {/* Gradient overlay */}

                <div className="fixed w-screen sm:w-1/2 logo-container sm:bottom-[3rem] xs:bottom-[4rem] flex space-x-4">
                    
                    <p className="mx-5 text-sm xs:text-xs lg:text-lg">
                        <p>&nbsp;</p>
                        <p className="font-semibold text-lg">Our Expertise:</p><p>&nbsp;</p>
                        <p>Same Day CPI, LLC facilitates the three-tiered access and authorization framework for shared federal and non-federal use of the Citizens Broadband Radio Service (CBRS) established the Federal Communications Commission (FCC). Our services extend to a wide range of industries, including telecommunications, healthcare, DePIN, and public services. We specialize in the installation and maintenance of wireless networks that power businesses, communities, and cities.</p><p>&nbsp;</p>

                        <p className="font-semibold text-lg">Expanding Horizons:</p><p>&nbsp;</p>
                        <p>The City of Angels calls for nothing short of angelic service. That's why we're thrilled to announce our expansion into Los Angeles and Orange County. The vibrancy and dynamism of these regions resonate with our core values of excellence and swift service delivery. We are here to support the ever-growing tech needs of this illustrious area and to become an integral part of its digital infrastructure.</p>
                    </p>
                </div>

            </div>
        </>
    )

}