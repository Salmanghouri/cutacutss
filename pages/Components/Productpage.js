import React from 'react'
import Link from 'next/link'
import Reviews from './Reviews'
import Image from 'next/image'

const Productpage = () => {
  return (
    <>  
    <div>
  
  <section>
    <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
      <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
          <div className="aspect-w-1 aspect-h-1">
            <Image alt="Mobile Phone Stand" className="object-cover rounded-xl" src="/4.jpg" width={500} height={500}/>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:mt-4">
            <div className="aspect-w-1 aspect-h-1">
            <Image alt="Mobile Phone Stand" className="object-cover rounded-xl" src="/5.jpg" width={500} height={500}/>
            </div>
            <div className="aspect-w-1 aspect-h-1">
            <Image alt="Mobile Phone Stand" className="object-cover rounded-xl" src="/6.jpg" width={500} height={500}/>
            </div>
            <div className="aspect-w-1 aspect-h-1">
            <Image alt="Mobile Phone Stand" className="object-cover rounded-xl" src="/1.jpg" width={500} height={500}/>
            </div>
            <div className="aspect-w-1 aspect-h-1">
            <Image alt="Mobile Phone Stand" className="object-cover rounded-xl" src="/3.jpg" width={500} height={500}/>
            </div>
          </div>
        </div>
        <div className="sticky top-0">
          <strong className="border border-blue-600 rounded-full tracking-wide px-3 font-medium py-0.5 text-xs bg-gray-100 text-blue-600"> Pre Order </strong>
          <div className="flex justify-between mt-8">
            <div className="max-w-[35ch]">
              <h1 className="text-2xl font-bold">
              Cutacut Kitchen Scissors Stainless Steel Sharp Blades with TRP Grip 
              </h1>
              <p className="mt-2 text-sm">
                Highest Rated Product
              </p>
              <div className="flex mt-2 -ml-0.5">
             
                <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg className="w-5 h-5 text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                
              </div>
              
            </div>
            <p className="text-lg text-red-800 font-bold">
            $ Currently unavailable. 
            </p>
          </div>
          <details className="relative mt-4 group">
            <summary className="block">
              <div>
                <div className="prose max-w-none group-open:hidden">
                 <p className="text-lg font-bold"> About this item</p>
                 <ul>
                     <li>Ergonomic Design: Our perfectly designed meat scissor is extra smooth and comfortable for your hand. It won&apos;t hurt you while using for a long time and will not leave any marks on your hand. It&apos;s also suitable for left and right hand </li>
                
                <li>Premium Quality: This scissors kitchen is made of stainless steel, with a perfect size of 21.5 cm. Our scissor is very fast while cutting, and our non-loosing strongly jointed pairs of blades make this one of the best kitchen tools </li>
                
                 </ul>

                </div>
                <span className="mt-4 text-sm font-medium underline cursor-pointer group-open:absolute group-open:bottom-0 group-open:left-0 group-open:mt-0">
                  Read More
                </span>
              </div>
            </summary>
            <div className="pb-6 prose max-w-none">
            <p className="text-lg font-bold"> About this item</p>
            <ul>
                     <li>Ergonomic Design: Our perfectly designed meat scissor is extra smooth and comfortable for your hand. It won&apos;t hurt you while using for a long time and will not leave any marks on your hand. It&apos;s also suitable for left and right hand </li>
                
                <li>Premium Quality: This scissors kitchen is made of stainless steel, with a perfect size of 21.5 cm. Our scissor is very fast while cutting, and our non-loosing strongly jointed pairs of blades make this one of the best kitchen tools </li>
                <li>Additional Features: Kitchen scissors dishwasher safe is rust-free with high-speed micro-serrated and water-resistant blades. We have added a cover to protect it against dirt for the blade’s safety. A careful inspection and testing make sure that you get high quality </li>
                
                
              <li>Built-in Opener: Our meat scissor kitchen scissor has a serrated section in the middle of the grip handle, which helps you open bottles and jars quickly. Even cracking nuts won’t be an issue with our additional feature  </li>
              <li>
              Multiple Use: Cutacut poultry shears are perfect for different use, not only in the kitchen for cutting vegetables, herbs, or meat. You can also use it for gardening, opening sealed jars or bottles, and cracking any nuts
               </li>
               </ul>
            </div>
          </details>
          <form className="mt-8">
            <fieldset>
              <legend className="mb-1 text-sm font-medium">Color</legend>
              <div className="flow-root">
                <div className="flex flex-wrap -m-0.5">
                  <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                    <input type="radio" name="color" id="color_tt" className="sr-only peer" />
                    <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Red
                    </span>
                  </label>
                  
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-1 text-sm font-medium">Material</legend>
              <div className="flow-root">
                <div className="flex flex-wrap -m-0.5">
                  <label htmlFor="color_tt" className="cursor-pointer p-0.5">
                    <input type="radio" name="color" id="color_tt" className="sr-only peer" />
                    <span className="inline-block px-3 py-1 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white">
                    Stainless Steel
                    </span>
                  </label>
                  
                </div>
              </div>
            </fieldset>
            <fieldset className="mt-4">
              <legend className="mb-1 text-sm font-medium">Item dimensions L x W x H</legend>
              <div className="flow-root">
                <div className="flex flex-wrap -m-0.5">
                  <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                    <input type="radio" name="size" id="size_xs" className="sr-only peer" />
                    <span className="inline-flex items-center justify-center w-40 h-15 text-sm font-medium border rounded-xl group bg-black text-white">
                    20 x 9 x 1 centimetres
                    </span>
                  </label>
                  
                </div>
              </div>
            </fieldset>
            <div className="flex mt-8">
              <div>
                <label htmlFor="quantity" className="sr-only">Qty</label>
                <input type="number" id="quantity" min={1} defaultValue={1} className="w-12 py-3 text-xs text-center border-gray-200 rounded no-spinners" />
              </div>
              <Link href="https://www.amazon.co.uk/dp/B09CDVYZVP?ref=myi_title_dp"><a   className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Buy Now</a></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</div>
<Reviews/>
</>

  )
}

export default Productpage