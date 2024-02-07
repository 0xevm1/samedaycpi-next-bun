import Navbar from "./navbar";
import Landing from "./landing";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  return (
    <>
        <div className="bg-filler main-container">
           <Landing/>
        </div>
    </>
  );
}
