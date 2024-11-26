import { AnimatedList } from '@/components/ui/animated-list';
import { cn } from '@/lib/utils';
import React from 'react'

interface Item {
  name: string;
  description: string;
  
}

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    
  },
  {
    name: "User signed up",
    description: "Magic UI",
   
  },
  {
    name: "New message",
    description: "Magic UI",
   
  },
  {
    name: "New event",
    description: "Magic UI",
 
  },
];

// notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description  }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};
const ServicesPage = () => {
  return (
    <div className='pt-[5%] h-full'>
      <div className="h-auto md:h-screen">
        <h1 className='text-3xl md:text-4xl font-bold text-center'>Our Services</h1>
        <div className="h-auto md:h-screen flex items-center flex-col md:flex-row gap-4 md:gap-0 py-10">
          <div className="flex flex-col gap-3 flex-1">
            <h2 className="text-primary text-3xl md:text-4xl">Prevention</h2>
            <p className="text-gray-500 text-lg">prevent the occurrence of any form of health problem  </p>
          </div>
          <div className="">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>   
     
  
      </div>
    </div>
  )
}

export default ServicesPage