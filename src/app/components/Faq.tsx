import BlurFade from '@/components/ui/blur-fade'
import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className='md:h-screen w-full px-10 md:px-20 flex flex-col gap-5 items-center py-10'>
          
          <h1 className='text-3xl md:text-4xl font-bold text-center '>Frequently Asked Questions(FAQs)</h1>

          <div className='flex flex-col md:flex-row gap-5 md:gap-0 items-center w-full pt-8 md:px-20'>
              <div className="hidden md:flex md:flex-1 ">
              <BlurFade delay={0.25} inView={true}>
                  <Image src='/docchat1.png' alt='doctor chatting' width={540} height={540} />
              </BlurFade>
        </div>
        <div className="w-full md:w-1/2 flex-1 ">
            <BlurFade delay={0.35} inView={true}>
                  <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                          <AccordionTrigger>Is it accessible?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It adheres to the WAI-ARIA design pattern.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                          <AccordionTrigger>Is it styled?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It comes with default styles that matches the other
                              components&apos; aesthetic.
                          </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                          <AccordionTrigger>Is it animated?</AccordionTrigger>
                          <AccordionContent>
                              Yes. It&apos;s animated by default, but you can disable it if you
                              prefer.
                          </AccordionContent>
                      </AccordionItem>
                  </Accordion>

            </BlurFade>
        </div>
        </div>

    </div>
  )
}

export default Faq