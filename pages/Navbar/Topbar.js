import React from 'react'
import { IoIosCut } from 'react-icons/io';

const Topbar = () => {
  return (
    <div className="relative px-2 py-1 text-white bg-[#E72526] pr-14">
  <p className="text-sm font-medium text-left sm:text-center">
  FREE SHIPPING 🚚 ON ORDERS OVER $85 IN THE CONTIGUOUS UK
    
  </p>
  <button aria-label="Close" className="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20">
    <IoIosCut className="bg-white text-black text-xl hover:bg-red-500 hover:text-white rounded-lg"/>
  </button>
  
</div>


  )
}

export default Topbar