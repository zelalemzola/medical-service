import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full pt-6 flex items-center justify-between flex-col md:flex-row bg-white shadow-lg shadow-gray-400 border-t border-primary rounded-t-2xl  px-5 md:px-20 py-5'>
        <div className="flex flex-col gap-4 items-start">
            <div className='flex items-end gap-3 flex-wrap'>
                <Image src='/mlogo.png' width={40} height={40} alt=''/>
                <p className='text-lg font-bold text-primary'>DoChat</p>
            </div>
            <p className="text-sm text-gray-400">Talk to a Doctor with our secure and friendly platfrom</p>
        </div>
        <div className="flex flex-row flex-wrap gap-5 md:gap-20">
              <Instagram className='text-lg text-primary  p-1  font-bold scale-[200%]' />
              <Facebook className='text-lg text-primary  p-1   font-bold scale-[200%]' />
              <Twitter className='text-lg text-primary p-1   font-bold scale-[200%]' />
              <Linkedin className='text-lg text-primary p-1  font-bold scale-[200%]' />

        </div>
    </div>
  )
}

export default Footer