import React from 'react';
import bg from "../assets/drip.png";

const Faq = () => {
  return (
    <section
    id="faq"
    className="  text-[#5C4033]  py-32 min-h-screen  relative">

    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
      <h2 className="mb-12 text-4xl font-bold  text-center sm:text-5xl">Frequently Asked Questions</h2>
      <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 relative z-10">
        <img src={bg}
        className='absolute right-0   max-sm:hidden'
        />

        <details>
          <summary className="py-2 outline-none cursor-pointer ">What types of honey do you offer?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>We offer a wide variety of honey, including raw, organic, wildflower, clover, manuka, and flavored honeys. Each type is sourced from trusted beekeepers and is available in different sizes to suit your needs.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer ">Is your honey raw and unfiltered?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'> Yes, our honey is raw and unfiltered, meaning it is not pasteurized or processed in any way. This helps preserve its natural enzymes, nutrients, and unique flavor profile.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer ">How do you ensure the quality of your honey?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>We partner with certified beekeepers who follow sustainable and ethical beekeeping practices. Our honey undergoes rigorous testing to ensure it is free from pesticides, antibiotics, and other contaminants.</p>
          </div>
        </details>


        <details>
          <summary className="py-2 outline-none cursor-pointer ">Can I track my order after purchase?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Yes, once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track your package's progress on our website or the carrier's site.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer "> Do you offer international shipping?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'> Currently, we ship within USA. We are working on expanding our shipping options to include international destinations in the near future. Please sign up for our newsletter for updates.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer ">What is your return policy?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>If you are not satisfied with your purchase, you can return unopened and unused products within 30 days of delivery for a full refund. Please contact our customer service team to initiate a return.</p>
          </div>
        </details>

        <details>
          <summary className="py-2 outline-none cursor-pointer ">How should I store my honey?</summary>
          <div className="px-4 pb-4">
            <p className='w-[90%]'>Honey should be stored in a cool, dry place away from direct sunlight. It does not need to be refrigerated. If your honey crystallizes, you can gently warm the jar in a bowl of warm water to restore its liquid consistency.</p>
          </div>
        </details>
        
      </div>
    </div>
  </section>
  
  )
}

export default Faq