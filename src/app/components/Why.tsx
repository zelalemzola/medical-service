import BlurFade from '@/components/ui/blur-fade'
import Image from 'next/image'
import React from 'react'

const Why = () => {
  return (
    <div className='md:h-screen flex flex-col gap-10 md:gap-20 items-center justify-center w-full py-10'>
       <h1 className='text-4xl font-semibold flex items-center flex-col'>
        Why should you trust us?
        <span>Get to know about us</span>
       </h1>
       <div className="flex flex-col md:flex-row gap-5  w-full px-10 md:px-20">
        
       
            <BlurFade delay={0.25} inView={true} className="flex flex-col items-center gap-3 bg-gray-200 p-2 rounded-xl w-auto md:w-[23%] hover:bg-gray-300">
            <Image src='/docs.png' alt='doctors' width={84} height={84}/>
            <p className="text-lg font-bold">All Specialists</p>
            <p className="text-md text-gray-400">you can reach out to various doctors in different specialities via DoChat</p>
        </BlurFade>
        
        

       <BlurFade delay={0.35} inView={true} className="flex flex-col items-center gap-3 bg-gray-200 p-2 rounded-xl w-auto md:w-[23%] hover:bg-gray-300">
       
            <Image src='/security.png' alt='doctors' width={84} height={84}/>
            <p className="text-lg font-bold">Private & Secure  </p>
            <p className="text-md text-gray-400">All your data is protected and safeguarded</p>
       
        </BlurFade>

        <BlurFade delay={0.45} inView={true} className="flex flex-col items-center gap-3 bg-gray-200 p-2 rounded-xl w-auto md:w-[23%] hover:bg-gray-300">
       
            <Image src='/users.png' alt='doctors' width={84} height={84}/>
            <p className="text-lg font-bold">Million Customers</p>
            <p className="text-md text-gray-400">Trusted by millions and serving users worldwide. Users from all over the world</p>
       
        </BlurFade>

        <BlurFade delay={0.55} inView={true} className="flex flex-col items-center gap-3 bg-gray-200 p-2 rounded-xl w-auto md:w-[23%] hover:bg-gray-300">
        
            <Image src='/chat.png' alt='doctors' width={84} height={84}/>
            <p className="text-lg font-bold">Chatbot Support</p>
            <p className="text-md text-gray-400">We offer you 24/7 online chat support where you can find just about all solution to your problems 
        
            </p>
        
        </BlurFade>


       </div>
    </div>
  )
}

export default Why