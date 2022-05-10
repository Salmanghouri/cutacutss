import Link from "next/link";
import React from "react";
import Image from "next/image";



const Navbar = () => {
  return (
<><header className="bg-[#363535]">
  <div className="max-w-screen-xl p-1 mx-auto">
    <div className="flex items-center justify-between space-x-4 lg:space-x-10">
      <div className="flex lg:w-0 lg:flex-1">
        
      </div>
      <nav className="hidden space-x-8 text-md font-extrabold md:flex">
        <Link href="/"><a className=" h-8  border-b-4 text-white border-transparent hover:text-white hover:border-current" >HOME</a></Link>
        <Link href="/Shop"><a className=" h-8  border-b-4 text-white border-transparent hover:text-white hover:border-current" >SHOP</a></Link>
        <Link href="/About"><a className=" h-8  border-b-4 text-white border-transparent hover:text-white hover:border-current" >ABOUT</a></Link>
        <Link href="/Contact"><a className=" h-8  border-b-4 text-white border-transparent hover:text-white hover:border-current" >CONTACT</a></Link>
     
      </nav>
      <div className="items-center justify-end flex-1 hidden space-x-10 sm:flex ">
      <div className="pt-0 relative mx-auto text-gray-600">
      <div className="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
  <div className="w-full">
    <input type="search" className="w-full px-1 py-1 text-gray-800 rounded-xl focus:outline-none" placeholder="Search" x-model="search" />
  </div>
  <div>
    <button type="submit" className="flex items-center bg-[#E72526] justify-center w-10 h-10 text-white rounded-r-lg " >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>
  </div>
</div>


</div>

      </div>
      <div className="lg:hidden">
        <button className="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
          <span className="sr-only">Open menu</span>
          <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          </svg>
        </button>
      </div>
    </div>
  </div>
</header>

 
    </>
  );
};

export default Navbar;