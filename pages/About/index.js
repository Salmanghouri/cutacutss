import React from 'react'
import Faq from '../Components/Faq'
import Details from '../Components/Details'


const index = () => {
  return (
    <>
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <div className="relative max-w-3xl mx-auto text-center">
        <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2" />
        <h2 className="relative inline-block px-4 text-3xl font-bold text-center bg-white">
        About US
        </h2>
      </div>
      </div>
    <div className="max-w-screen-xl px-4 py-8 mx-auto">
      <div className="relative max-w-3xl mx-auto text-center">
   <Details/>
    <Faq/>
    </div>
    </div>
    </>
  )
}

export default index