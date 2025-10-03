import React from 'react'
import { useEffect,useState } from 'react';
import { getStoreLocations } from '@/services';

function Form() {
    const [storeLocation,setStoreLocation]=useState<any>([]);
    useEffect(()=>{
        getStoreLocation_();
    })
    const getStoreLocation_=async()=>{
        const resp=await getStoreLocations();
        console.log(resp);
        setStoreLocation(resp?.storesLocations);
    }
  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-500'>PickUp Location</label>
            <select className='select select-bordered w-full max-w-lvh'>
                <option disabled selected>PickUp Location?</option>
                {storeLocation&&storeLocation.map((loc:any,index:number)=>{
                    <option key={index}>{loc?.address}</option>
                })}
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
        </div>
        <div className='flex flec-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Pick Up Date</label>
                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
            
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop off date</label>
                <input type="date" placeholder="Type here" className="input input-bordered w-full max-w-lg"/>
            </div>

        </div>
    </div>
  )
}

export default Form