import React from 'react'
import { FaFacebook,FaPinterest } from 'react-icons/fa';
import { AiFillTwitterCircle,AiOutlineInstagram,AiOutlineShoppingCart } from 'react-icons/ai';


const Topbar = () => {
  return (
    <div className="relative px-2 py-2 text-white bg-[#363535] pr-14">
  <p className=" flex space-x-2  font-medium text-left sm:text-left  ">
  <AiFillTwitterCircle className="bg-white text-black text-2xl hover:bg-red-500 hover:text-white rounded-lg"/>
  <FaFacebook className="bg-white text-black text-2xl hover:bg-red-500 hover:text-white rounded-lg"/>
  <FaPinterest className="bg-white text-black text-2xl hover:bg-red-500 hover:text-white rounded-lg"/>
  <AiOutlineInstagram className="bg-white text-black text-2xl hover:bg-red-500 hover:text-white rounded-lg"/>
  </p>


  <button aria-label="Close" className=" flex absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 text-white  hover:bg-white hover:text-red-600">
   
    <AiOutlineShoppingCart className="  text-3xl font-bold rounded-sm"/><span className="font-thinbold" >0</span>
  </button>
  
</div>


  )
}

export default Topbar