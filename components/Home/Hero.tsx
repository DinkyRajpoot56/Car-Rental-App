import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
            <h2 className='text-[40px] md:text-[60] font-bold'>Premium Car Rental in you area</h2>
            <h2 className='text-[20px] text-gray-500 pr-20 mt-5'>Book the selected car effortlessly,Pay for driving only,Book the car now now</h2>
            <button className='p-2 mt-5 bg-blue-500 text-white px-4 rounded-full hover:scale-10% transition-all'>Explorec more cars</button>
        </div>
        <div>
          <Image src='/CarRental.jpg' alt='hero' width={400} height={500} className='w-full object-cover all'/>
        </div>
    </div>
  )
}

export default Hero