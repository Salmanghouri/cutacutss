import React from 'react'


const Faq = () => {
  return (
    <section>
         
         <div className="relative max-w-3xl mx-auto text-center">
        <span className="absolute inset-x-0 h-px -translate-y-1/2 bg-black/10 top-1/2" />
        <h2 className="relative inline-block py-5 px-4 text-3xl font-bold text-center bg-white">
       FAQ
        </h2>
      </div>
       
    <div className="space-y-4">
    <details className="p-6 border-l-4 border-red-500 bg-gray-50 group" open>
      <summary className="flex items-center justify-between cursor-pointer">
        <h5 className="text-lg font-medium text-gray-900">
        Ergonomic Design?
        </h5>
        <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 leading-relaxed text-gray-700">
      Our perfectly designed meat scissor is extra smooth and comfortable for your hand. It won’t hurt you while using for a long time and will not leave any marks on your hand. It’s also suitable for left and right hand
      </p>
    </details>
    <details className="p-6 border-l-4 border-red-500 bg-gray-50 group">
      <summary className="flex items-center justify-between cursor-pointer">
        <h5 className="text-lg font-medium text-gray-900">
        Premium Quality?
        </h5>
        <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 leading-relaxed text-gray-700">
      This scissors kitchen is made of stainless steel, with a perfect size of 21.5 cm. Our scissor is very fast while cutting, and our non-loosing strongly jointed pairs of blades make this one of the best kitchen tools
      </p>
    </details>
    <details className="p-6 border-l-4 border-red-500 bg-gray-50 group">
      <summary className="flex items-center justify-between cursor-pointer">
        <h5 className="text-lg font-medium text-gray-900">
        Additional Features?
        </h5>
        <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 leading-relaxed text-gray-700">
      Kitchen scissors dishwasher safe is rust-free with high-speed micro-serrated and water-resistant blades. We have added a cover to protect it against dirt for the blade’s safety. A careful inspection and testing make sure that you get high quality
      </p>
    </details>
    <details className="p-6 border-l-4 border-red-500 bg-gray-50 group">
      <summary className="flex items-center justify-between cursor-pointer">
        <h5 className="text-lg font-medium text-gray-900">
        Built-in Opener?
        </h5>
        <span className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
        </span>
      </summary>
      <p className="mt-4 leading-relaxed text-gray-700">
      Our meat scissor kitchen scissor has a serrated section in the middle of the grip handle, which helps you open bottles and jars quickly. Even cracking nuts won’t be an issue with our additional feature
      </p>
    </details>
  </div>
  
  
  </section>
  )
}

export default Faq