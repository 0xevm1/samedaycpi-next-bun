import Navbar from "./navbar";
import Landing from "./landing";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <>
        <div className="bg-filler main-container">

            {/* Top Banner */}
            <div className="bg-orange-700 text-sm text-white text-center py-[0.15rem]">
               Now serving Los Angeles/OC | <span className="text-gray-300">Read more</span>
            </div>

            {/* Navigation Bar */}

           <Navbar/>

            
           <Landing/>
        </div>
    </>
  );
}
