import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function NavBar() {
  return (
    <div className='flex items-center justify-between p-5 shadow-sm border-b-[1px]'>
        <Image src='/carlogo.jpg' alt='logo' width={150} height={100}/>
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white'>Home</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white'>History</h2>
            <h2 className='hover:bg-blue-500 p-2 rounded-full hover:text-white'>Contact Us</h2>
        </div>
        <UserButton/>
    </div>
  )
}

export default NavBar