import { useState } from 'react'
import Link from "next/link";


const Navbar3 = () => {

  const [state, setState] = useState(false)



  return (
      <nav className="bg-[#363535]  w-full border-b md:border-0 md:static">
          <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-6 md:block md:mx-20">
              
                  <div className="md:hidden">
                      <button className="text-red-700 bg-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center    pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'}`}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                     
                         
                             
                                
                              <li>  <Link href="/"><a className=" h-8  font-extrabold border-b-4 text-white border-transparent hover:text-white hover:border-current" >HOME</a></Link></li>
                              <li><Link href="/Shop"><a className=" h-8  font-extrabold border-b-4 text-white border-transparent hover:text-white hover:border-current" >SHOP</a></Link></li>
                              <li> <Link href="/About"><a className=" h-8  font-extrabold border-b-4 text-white border-transparent hover:text-white hover:border-current" >ABOUT</a></Link></li>
                              <li> <Link href="/Contact"><a className=" h-8  font-extrabold border-b-4 text-white border-transparent hover:text-white hover:border-current" >CONTACT</a></Link></li>
         
                      
                      
                  </ul>
              </div>
              <div className="hidden md:inline-block">
              <form className="bg-white flex items-center  border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                placeholder="Search"
                            />
                        </form>
              </div>
          </div>
      </nav>
  )
}
export default Navbar3;