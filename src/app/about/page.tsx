import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const AboutPage = () => {
  return (
    <div className='pt-[5%] h-[100%]'>
      <h1 className='text-3xl md:text-4xl  font-bold text-center'>About Us</h1>
      <div className="h-auto md:h-screen px-6 md:px-20 py-10">
        <div className="flex flex-col gap-6">
        <p className='text-primary text-xl font-bold'>DoChat - <span className='text-gray-400'>&apos; Health Strength Life People &apos;</span></p>
        <p className='text-lg md:text-xl text-gray-700 text-justify'>
            Our company now is in its starting stage we have collected many fresh graduates from many health sectors to make them available for the market and use them at our disposal. We have created a plat from that will be used for purposes making ourself available to the market. We are composed of many professionals and health service providing institutions, from hospitals to health centers, pharmacies physiotherapeutic centers, from all parts of the world starting with localized care and treatment to international consultations form highly qualified professionals from different parts of the world. Our company uses the web and other cyber technologies to make our services available to our target population. Its believed that there are around 50 establishments that tend to follow similar services with in Ethiopia with different scopes, which is considered as insignificant for the total population that need health service in general. 
         </p>
         <div className='self-end flex-col gap-3 w-full md:w-1/3'>
            <p className="text-primary font-bold text-xl">Founder&apos;s Message</p>
            <p className="text-lg text-gray-700">&apos;&apos; We are a company with the intention of providing health service to everyone at all the times and in all place with the highest level of standard.  &apos;&apos; </p>
         </div>
        </div>
      </div>
      <div className="h-auto py-10">
          <h2 className='text-3xl md:text-4xl font-bold text-center'>What is Unique about us?</h2>
          <div className="py-10 px-10 md:px-20">
          <Tabs defaultValue="1" className="w-full">
            <TabsList className='w-full py-2'>
              <TabsTrigger value="1"  className='w-1/3 text-xl'>1</TabsTrigger>
              <TabsTrigger value="2" className=' w-1/3  text-xl'>2</TabsTrigger>
              <TabsTrigger value="3" className=' w-1/3 text-xl'>3</TabsTrigger>
            </TabsList>
            <TabsContent value="1" className='w-full px-10 text-center'>
              the length we go to prevent miss diagnosis we consult health professionals from all around the world with better expertise to get different opinions about a challenging health problem through our chat rooms.
            </TabsContent>
            <TabsContent value="2" className='w-full px-10 text-center'>
              We connect with as many pharmaceuticals as available to come up with the necessary medication for the diagnosed disease all over the world. 
            </TabsContent>
            <TabsContent value="3" className='w-full px-10 text-center'>
              Make available all the necessary equipment for the well-being of our patients.
            </TabsContent>
          </Tabs>

          </div>
      </div>
    </div>
  )
}

export default AboutPage