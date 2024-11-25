import Link from 'next/link'
import React from 'react'
import HeroDoc from '../../../public/heroDoc.png'
import Image from 'next/image'
import { CircleDot } from 'lucide-react'
import PulsatingButton from '@/components/ui/pulsating-button'
import BlurFade from '@/components/ui/blur-fade'
import { FadeText } from '@/components/ui/fade-text'
const Hero = () => {
  return (
    <div className='bg-secondary md:h-[90vh] flex flex-col md:flex-row items-center justify-evenly px-5 md:px-10 py-20 md:py-0 z-0'>
        <div className="flex flex-col items-start gap-4 flex-1">
        <BlurFade  delay={0.25} inView={true}>
            <h1 className='text-3xl md:text-4xl text-black font-bold'>
                Consult a doctor anytime,anywhere via <span className='text-primary underline decoration-primary decoration-2 '> DoChat</span>
            </h1>
            </BlurFade>
        <FadeText
          className="text-gray-400 text-md md:text-xl"
          direction="left"
          framerProps={{
            show: { transition: { delay: 0.45 } },
          }}
          text="Talk with a doctor using our highly secure, user friendly platform."
        />
            <div className="flex items-center gap-4 flex-wrap pt-5">
             <BlurFade delay={0.45} inView={true}>
              <Link href='/' className='bg-primary p-2 rounded-full text-white shadow-md hover:shadow-xl text-lg md:text-xl'>Chat with a doctor</Link>
            </BlurFade>
            <BlurFade delay={0.55} inView={true}>
              <Link href='/' className='bg-white p-2 rounded-full text-primary shadow-md hover:shadow-xl text-lg md:text-xl'>Contact Us</Link>
           </BlurFade>
            </div>

        </div>
        <div className="flex-1 relative z-0">
           <BlurFade delay={0.45} inView={true}>
            <Image src={HeroDoc} alt='doctor Image' className='-z-10'/>
           </BlurFade>
            
            <PulsatingButton className="absolute top-14 right-8 md:right-14  bg-white text-gray-400 rounded-full p-2 flex items-center gap-3 shadow-lg flex-row text-sm md:text-lg">
               <span className='text-green-500' ><CircleDot size={23}/></span> 
               <span> 24/7 <span className='text-primary'>Online</span> Service</span>
               
            </PulsatingButton>
            

        </div>
    </div>
  )
}

export default Hero