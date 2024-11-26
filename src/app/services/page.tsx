import { AnimatedList } from '@/components/ui/animated-list';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react'

interface Item {
  name: string;


}

let notifications = [
  {
    name: "Medial problems (anatomical and physiological)",


  },
  {
    name: "Psychiatric and Psychological",


  },
  {
    name: "Nutritional and dietary problems ",


  },
  {
    name: "Addictive and related behavioral problems",


  },
  {
    name: "Chronic and other life style related problem ",


  },
  {
    name: "Prevention will be done to all; at all age category ",


  },
];
let notifications3 = [
  {
    name: "Provide death care ",


  },
  {
    name: "Provide deliver of medication and medical equipment ",


  },
  {
    name: "Provide ambulance service  ",


  },
  {
    name: "Serve as a pool for hospitals and health centers to access trained professionals   ",


  },
 
];
let notifications2 = [
  {
    name: "Those with surgical procedure ",


  },
  {
    name: "Those with medical and physical problems in need of care and support",


  },
  {
    name: "Those with the need for intensive care ",


  },
  {
    name: "Care for those with the need for palliative care",


  },
  {
    name: "Those in need of psychiatric and psychological treatment  ",


  },
  {
    name: "Prevention will be done to all; at all age category ",


  },
  {
    name: "All services to be provided on the basis of care  ",


  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();
notifications2 = Array.from({ length: 10 }, () => notifications2).flat();
notifications3 = Array.from({ length: 10 }, () => notifications3).flat();

const Notification = ({ name }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer  rounded-2xl p-4 bg-white text-wrap",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%] bg-primary text-wrap",
        // light styles
        "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] bg-white text-nowrap",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] bg-white text-wrap",
      )}
    >
      <div className="flex flex-row items-center gap-3 bg-white">

        <div className="flex flex-col items-center  mx-auto">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white text-center mx-auto">
            <span className="text-lg text-center text-primary text-wrap">{name}</span>


          </figcaption>

        </div>
      </div>
    </figure>
  );
};
const ServicesPage = () => {
  return (
    <div className='pt-[5%] '>
      <div className="">
        <h1 className='text-3xl md:text-4xl font-bold text-center'>Our Services</h1>
        <div className="h-auto md:h-screen flex items-center flex-col md:flex-row gap-4 md:gap-0 py-10 px-10 md:px-20">
          <div className="flex flex-col items-center gap-3 flex-1">
            <Image src='/prevention.jpg' alt='prevention' width={120} height={120} />
            <h2 className="text-primary text-3xl md:text-4xl">Prevention</h2>
            <p className="text-gray-500 text-lg">prevent the occurrence of any form of health problem  </p>
          </div>
          <div
            className={
              "relative flex h-[350px]  flex-col p-6 overflow-hidden rounded-lg border bg-muted md:shadow-xl flex-1 "
            }
          >
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
           </div>
   
         <div className="h-auto flex flex-col gap-5 items-center py-10 px-10 md:px-20">
            <Image src='/cure.jpg' alt='cure' width={120} height={120} />
                        <h2 className="text-primary text-3xl md:text-4xl font-bold">Cure</h2>
                        <p className="text-gray-500 text-lg">confirmation of suspected and probable diseases to confirmed with the necessary medications. </p>
                      
        </div>


        <div className="h-auto md:h-screen flex items-center flex-col md:flex-row gap-4 md:gap-0  px-10 md:px-20">
          <div className="flex flex-col items-center gap-3 flex-1">
            <Image src='/treatment.jpg' alt='prevention' width={120} height={120} />
            <h2 className="text-primary text-3xl md:text-4xl">Treatment</h2>
            <p className="text-gray-500 text-lg"> giving care to those in need  </p>
          </div>
          <div
            className={
              "relative flex h-[350px]  flex-col p-6 overflow-hidden rounded-lg border bg-muted md:shadow-xl flex-1 "
            }
          >
            <AnimatedList>
              {notifications2.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>


        <div className="h-auto md:h-screen flex items-center flex-col md:flex-row gap-4 md:gap-0  px-10 md:px-20">
          <div className="flex flex-col items-center gap-3 flex-1">
            <Image src='/treatment.jpg' alt='prevention' width={120} height={120} />
            <h2 className="text-primary text-3xl md:text-5xl">Other Services</h2>
           
          </div>
          <div
            className={
              "relative flex h-[350px]  flex-col p-6 overflow-hidden rounded-lg border bg-muted md:shadow-xl flex-1 "
            }
          >
            <AnimatedList>
              {notifications3.map((item, idx) => (
                <Notification {...item} key={idx} />
              ))}
            </AnimatedList>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default ServicesPage;