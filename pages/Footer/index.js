import React from 'react'
import Image from "next/image";
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className="bg-[#363535]">
    <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div>
        <Link href="/"><Image
              src="/logo2.png"
              alt="Picture of the author"
              width={300}
              height={70}
              className="cursor-pointer"
            /></Link>
          <p className="max-w-xs mt-4 text-md text-white">
          Stainless Steel Sharp Blades with TRP Grip - Multipurpose Kitchen Scissors Heavy Duty for Meat, Chicken, Fish, Vegetables, and Herbs – Bottle Opener.
          </p>
         
        </div>
        <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-bold text-xl text-white">
              CUTACUT
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
              <a className="hover:opacity-75  cursor-pointer"> Our Story </a>
              <a className="hover:opacity-75  cursor-pointer"> Cutacut Ambassadors </a>
              <a className="hover:opacity-75  cursor-pointer"> Knife Sharpening Program</a>
              <a className="hover:opacity-75  cursor-pointer"> Product Warranty</a>
            </nav>
          </div>
          <div>
          <p className="font-bold text-xl text-white">
            LEARN MORE
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
              <a className="hover:opacity-75  cursor-pointer"> Knife Skills</a>
              <a className="hover:opacity-75 cursor-pointer "> Knife Knowledge </a>
              <a className="hover:opacity-75 cursor-pointer"> Product Catalog </a>
             
            </nav>
          </div>
          <div>
          <p className="font-bold text-xl text-white">
            GET HELP 
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
              <a className="hover:opacity-75 cursor-pointer"> Store Locator </a>
              <a className="hover:opacity-75 cursor-pointer" > Shipping Policy </a>
              <a className="hover:opacity-75 cursor-pointer"> Return Policy </a>
              <a className="hover:opacity-75 cursor-pointer"> Contact Us </a>
            </nav>
          </div>
          <div>
          <p className="font-bold text-lg text-white">
            JOIN OUR COMMUNITY
            </p>
            <nav className="flex flex-col mt-4 space-y-2 text-md text-white">
              <p> Subscribe to our newsletter on our homepage & follow us on social media for the latest in culinary news & special offers. </p>
             
            </nav>
          </div>
        </div>
      </div>
      <p className="mt-8 text-sm text-white text-center">
      © 2022 Cutacut. All rights reserved
      </p>
    </div>
  </footer>
  
  
  )
}

export default Footer