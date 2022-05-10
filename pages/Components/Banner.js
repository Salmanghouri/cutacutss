import React from 'react'
import Image from 'next/image'
import autoprefixer from 'autoprefixer'
import Link from 'next/link';

const Banner = () => {
  return (
    <>
 <div className="relative bg-white overflow-hidden">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
      <div className="sm:max-w-lg">
        <h1 className="text-4xl font font-extrabold tracking-tight text-[#E72526] sm:text-6xl">Cutacut Kitchen Scissors Stainless Steel...</h1>
        <p className="mt-4 text-2xl text-[#363535]">Cutacut Kitchen Scissors Stainless Steel Sharp Blades with TRP Grip - Multipurpose Kitchen Scissors Heavy Duty for Meat, Chicken, Fish, Vegetables, and Herbs – Bottle Opener.</p>
      </div>
      <div>
        <div className="mt-10">
          {/* Decorative image grid */}
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                    <Image src="/5.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/1.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/2.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/4.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/3.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/6.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image src="/7.jpg" alt="" className="w-full h-full object-center object-cover" width={500} height={500} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="https://www.amazon.co.uk/dp/B09CDVYZVP?ref=myi_title_dp" ><a  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-blue-800">Shop Now</a></Link>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Banner