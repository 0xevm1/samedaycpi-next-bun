import Image from "next/image";
export default function Services(){

    return (
        <>
            <div className="bg-filler main-container">
            <div className="fixed w-screen sm:w-1/2 logo-container sm:bottom-[3rem] xs:bottom-[4rem] flex space-x-4">
                    
                    <p className="mx-5 text-sm xs:text-xs lg:text-lg">
                        <p>&nbsp;</p>
                        <p className="font-semibold text-lg">Our Primary Services:</p><p>&nbsp;</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Remote CPI Evaluation - Comprehensive off-site assessments to ensure FCC compliance and optimal network function. Alleviating backlogs on centralized CPI approval.</li>
                            <li>On-site CPI Evaluation - Detailed on-premises inspections and troubleshooting by our certified professionals, saving you time in proper setup and submission for CPI approval.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <p className="font-semibold text-lg">Consulting:</p><p>&nbsp;</p>
                        <ul className="list-disc pl-5 space-y-2">
                            {/** <li>Wireless Network Installation and Setup - Deploying robust and reliable wireless solutions tailored to your needs.</li>**/}
                            <li>Wireless Network Optimization - Site planning and modeling your wireless networks for peak performance and efficiency.</li>
                        </ul>
                        <p>&nbsp;</p>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfWkX_T7RIFwxbbvNiHY00-4pR91OsR3Fw24_ZQc-ir9qFN8Q/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white text-black hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-colors duration-300"
                      >
                        <Image src="/assets/img/logomark.png" alt="Logo" className="mr-1 -ml-1"
                            width={20}
                            height={20} />
                        Contact Us Today!
                      </a>
                    </p>
                </div>
            </div>
        </>
    )

}