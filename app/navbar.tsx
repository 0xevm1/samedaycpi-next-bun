'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Banner from './banner';
import { usePathname } from 'next/navigation'


export default function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname()
    return (
        <>
            <div className="sticky top-0 z-50"> 
              {pathname === '/' && <Banner />}
              <nav className="bg-[#0f1b2f] shadow-md py-2 px-2 flex items-center justify-between">
                <div className="relative w-20 2xs:w-40 lg:w-60 h-auto"> {/* Adjust max-width as necessary */}
                    <a href="./">
                      <Image
                        src={"/assets/img/samedaycpilogo-bg.webp"}
                        width={200} // Original aspect ratio width
                        height={116} // Original aspect ratio height
                        alt="Company Logo"
                        className="object-contain" // Ensures image is scaled correctly
                      />
                    </a>
                  </div>

                  <div className="hidden md:flex space-x-8 items-center">
                      <a href="/company" className="text-white hover:font-bold focus:font-bold active:font-bold text-base lg:text-lg">Company</a>
                      <a href="/services" className="text-white hover:font-bold focus:font-bold active:font-bold text-base lg:text-lg mr-4">Services</a>
                      <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfWkX_T7RIFwxbbvNiHY00-4pR91OsR3Fw24_ZQc-ir9qFN8Q/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white text-black hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300"
                      >
                      <Image src="/assets/img/logomark.png" alt="Logo" className="mr-2 -ml-1"
                          width={20}
                          height={20} />
                      Get Quote Now
                      </a>
                  </div>
                  <div className="md:hidden space-x-1">
                      <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLSfWkX_T7RIFwxbbvNiHY00-4pR91OsR3Fw24_ZQc-ir9qFN8Q/viewform"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-white text-black hover:bg-indigo-600 hover:text-white focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center transition-colors duration-300"
                      >
                        <Image src="/assets/img/logomark.png" alt="Logo" className="mr-1 -ml-1"
                            width={20}
                            height={20} />
                        Get Quote Now
                      </a>
                      {/* Hamburger icon */}
                      <button
                        className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        type="button"
                        aria-label="Toggle menu"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                      >
                        {/* Icon for the menu button */}
                        <svg
                          className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                        {/* Icon for the close button */}
                        <svg
                          className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>

                      {/* Menu content */}
                      <div
                        className={`${
                          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
                        } absolute top-full left-0 w-full bg-[#0f1b2f] md:hidden transition transform duration-300 ease-out rounded-bl-lg rounded-br-lg`}
                      >
                        {/* Menu Links */}
                        <a href="/company" className="block px-4 py-3 text-white text-lg hover:font-bold focus:font-bold active:font-bold">Company</a>
                        <a href="/services" className="block px-4 py-3 text-white text-lg hover:font-bold focus:font-bold active:font-bold">Services</a>
                      </div>

                      {/* Implement toggle functionality using JavaScript */}
                  </div>
                  
              </nav>
            </div>
        </>
    )

}