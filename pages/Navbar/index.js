import React from "react";
import Image from "next/image";



const Navbar = () => {
  return (
<>
<header className="text-white body-font bg-gradient-to-r from-[#E72526] via-red-400 to-[#E72526]">
      <div className="container mx-auto flex flex-wrap p-0 flex-col md:flex-row items-center">
   
      <ul className="   flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto  ">
          
      <div className="flex items-center ml-8">
  
</div>

       
        
         
        </ul>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
  
          {/* <BiCodeAlt className="text-4xl font-[600] text-teal-900 cursor-pointer" />
          <span className="ml-3 text-3xl font-extrabold text-teal-600 cursor-pointer">Salman Ghouri Dev</span> */}
            <Image
              src="/logo2.png"
              alt="Picture of the author"
              width={265}
              height={72}
            />
         

        </a>

      

      
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        {/* <div className="flex items-center border-gray-100 divide-x divide-gray-100 border-x">
    <span>
    
      <a href="/cart" className=" flex  p-1 border-b-2 border-transparent text-black hover:border-red-700 text-lg">
      <MdAttachEmail className="text-2xl text-black"/> info@cutacut.com
      </a>
    </span>
    <span>
    
    <a href="/cart" className=" flex  p-1 border-b-2 border-transparent text-black hover:border-red-700 text-lg">
    <AiOutlineShoppingCart className="text-2xl text-black"/> Buy
    </a>
  </span>
   
  </div> */}


        </div>
      </div>
      
    </header>
 
    </>
  );
};

export default Navbar;