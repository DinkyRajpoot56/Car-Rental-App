import React from 'react'
import { useState } from 'react'
import { FaGasPump } from 'react-icons/fa'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheelFill } from 'react-icons/pi'

function CarCard(props:any) {
    const [car,setCar]=useState(props.car)
    useEffect(()=>{
      if(props.car){
        setCar(props.car);
      }

    },[props.car])
  return car && (
    <div className='group bg-gray-50 p-2 hover:bg:white hover:border-[1px] cursor-pointer border-blue-500'>
        <h2 className='text-[20px] font-medium mb-2'>{car.name}</h2>
        <span className='text-[12px] font-light'>${car.price}</span>
        <span className='text-[12px] font-light'>/day</span>
        <Image src={car.image?.url}
        alt={car.name}
        width={220}
        height={200}
        className='w-[250px] h-[150px] mb-3 object-contain'/>
        <div className='flex justify aroud'>
          <div className='text-center text-gray-500'>
            <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-3'/>
            <h2 className='line-clamp-5 text-[14px] font-light'>{car.seats}</h2>
          </div>
          <div className='text-center text-gray-500'>
            <FaGasPump className='w-full text-[22px] mb-3'/>
            <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg}</h2>
          </div>
          <div className='text-center text-gray-500'>
            <PiSteeringWheelFill className='w-full text-[22px] mb-3'/>
            <h2 className='line-clamp-5 text-[14px] font-light'>{car.type}</h2>
          </div>

        </div>
    </div>
  )
}

export default CarCard