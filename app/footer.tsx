import Image from "next/image";

export default function Footer() {

    return (

        <>
            <div className="bg footer mt-2">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-2/3 p-1 items-center">
                        
                    </div>
                    <div className="flex justify-end items-end p-3"> {/* This will push the image to the bottom-right */}
                        {/** <span className="p-2 font-light text-xs">Same Day CPI, LLC</span> */}
                        <Image 
                            src="./assets/img/fcc-logo-white-2020.svg" 
                            alt="FCC Compliance Logo"
                            className="object-contain" // Ensures image keeps its aspect ratio
                            width={25}
                            height={25}
                        />
                    </div>
                </div>
            </div> {/** end bg footer */}
        </>
    )
}