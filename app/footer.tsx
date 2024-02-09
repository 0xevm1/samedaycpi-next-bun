'use client'
import Image from "next/image";
import { toast } from 'react-toastify';



export default function Footer() {

    const handleClickForToast = () => {
        toast(
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/assets/img/fcc-seal-rgb-2020.svg" alt="FCC agency seal." style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                <p>We are CPI (Certified Professional Installer) licensed under FCC rules and insured.</p>
            </div>,
            {
                // Additional toast options
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
              }
        );
      };
      

    return (

        <>
            <div className="bg footer mt-2">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-2/3 p-1 items-center">
                        
                    </div>
                    <div onClick={handleClickForToast} className="cursor-pointer flex justify-end items-end p-3 text-white"> {/* This will push the image to the bottom-right */}
                        {/** <span className="p-2 font-light text-xs">Same Day CPI, LLC</span> */}
                        <Image 
                            src="./assets/img/fcc-logo-white-2020.svg" 
                            alt="FCC Compliance Logo"
                            className="object-contain" // Ensures image keeps its aspect ratio
                            width={25}
                            height={25}
                        />
                        &nbsp;<span>certified</span>
                    </div>
                </div>
            </div> {/** end bg footer */}
        </>
    )
}