import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Service = () => {
    return (
        <div className='h-auto mt-[10%] md:mt-[5%]'>

            <h1 className=' text-center font-bold text-3xl md:text-5xl text-gray-400 flex justify-center gap-2'> Our <span className='text-primary'>Services</span><span className="p-4 rounded-full bg-teal-100 h-4 w-4 -mt-4"></span></h1>
            <div className='mx-6 md:mx-20 my-[5%] flex flex-col gap-6'>
               
            <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-500 flex gap-2"> Prevention<span className="p-4 rounded-full bg-teal-100 h-3 w-3 -mt-4"></span></h1>
                <hr className="w-[25%] h-1 bg-gray-400" />
                 <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col  py-6 md:w-1/2">
                    <div className=" md:py-10">
                            <h2 className="text-gray-400 text-xl md:text-2xl">1. Medical problem (anatomical and physiological)</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What does medical problem mean?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        A medical problem refers to a condition affecting a person's health that requires diagnosis and treatment by a medical professional. An anatomical and physiological medical problem refers to a health issue that involves the structure and function of the body. it may involve conditions such as heart disease, respiratory disorders, kidney failure, or gastrointestinal issues that impact the normal functioning of the body.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>How does one know they have a medical problem?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        By physical examinations, medical tests, and imaging studies to identify the underlying cause and determine appropriate treatment options.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                    </div>
                 </div>

                 <div className="flex flex-col  md:w-1/2">
                    <div className=" md:py-10">
                            <h2 className="text-gray-400 text-xl md:text-2xl">2. Prevention will be done to all at all age category</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>Why is prevention useful?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Prevention is the act of stopping something from happening or getting worse. It’s key to maintaining good health and avoiding potential risks. It's all about taking proactive steps to stay healthy and safe. By focusing on prevention, individuals can take control of their health and make informed choices to protect themselves and others.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>Why prevention classify with age ?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Certain health conditions and diseases tend to be more prevalent in specific age groups. Additionally, the effectiveness and appropriateness of prevention measures can vary depending on the age of an individual. By categorizing prevention strategies by age group, public health officials and healthcare providers can better tailor interventions to address the unique needs and risks associated with different stages of life. This can help optimize the impact of prevention efforts and improve health outcomes for individuals of all ages.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What are age classification </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        The World Health Organization (WHO) defines age categories as follows:<br/>
                                        - Infants: 0-1 year<br />
                                        - Children: 1-10 years<br />
                                        - Adolescents: 10-19 years<br />
                                        - Adults: 20-59 years<br />
                                        - Older adults: 60 years and above.<br />
                                        So prevention will be done those age category.<br /> 
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            

                    </div>
                 </div>
                 </div>

                    <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col   w-1/2">
                    <div className=" md:py-10">
                            <h2 className="text-gray-400 text-xl md:text-2xl">3. Chronic and other life style related problem</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What is chronic disease </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Chronic diseases, also known as chronic conditions are long-lasting medical conditions that generally progress slowly over time. These diseases are often caused by a combination of genetic, environmental, and lifestyle factors and may require ongoing medical management to control symptoms and prevent complications.
                                        Chronic diseases, such as heart disease, diabetes, and obesity, are often influenced by lifestyle factors. Unhealthy habits, such as poor diet, lack of physical activity, smoking, and excessive alcohol consumption, can increase the risk of developing these chronic diseases.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>Why chronic disease related to life style </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Healthy lifestyle can help prevent and manage chronic diseases. This includes eating a balanced diet rich in fruits, vegetables, whole grains, and lean proteins, engaging in regular physical activity, maintaining a healthy weight, avoiding smoking and excessive alcohol consumption, and managing stress effectively. Making positive lifestyle changes can not only reduce the risk of developing chronic diseases, but can also help manage symptoms and improve overall quality of life for individuals already living with a chronic condition. It is important to work with healthcare professionals to create a personalized plan that addresses both the medical and lifestyle aspects of managing chronic disease.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What are chronic disease  </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Some common chronic diseases include heart disease, diabetes, arthritis, and asthma 
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What shall we do ?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Regular medical screenings, medication management, lifestyle changes, and support from healthcare providers.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                          

                    </div>
                 </div>

                 <div className="flex flex-col  w-1/2">
                    <div className=" py-10">
                            <h2 className="text-gray-400 text-xl md:text-2xl">4. Addictive and related behavior  problems</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What are addictive and related behavior problems? </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Addictive behaviors are often intertwined with mental health disorders, trauma, and environmental factors. Individuals struggling with addiction may experience intense urges to engage in their addictive behavior, difficulty controlling their impulses, and withdrawal symptoms when attempting to stop.

                                        If you or someone you know is struggling with addictive behaviors, it is important to seek help from a professional therapist, counselor, or support group.It is essential to address addictive behaviors as early as possible to prevent further harm and improve quality of life.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                          
                          

                    </div>
                 </div>
                 </div>
                    <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col   w-1/2">
                    <div className=" md:py-10">
                            <h2 className="text-gray-400 text-xl md:text-2xl">5.Nutrition and dietary problem</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What is Nutrition and dietary problem? </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Nutrition is intake of food, considered in relation to the body's dietary needs. Good nutrition provides the body with the essential nutrients it needs to function effectively, maintain proper health, and support growth and development. A well-balanced diet that includes a variety of foods rich in vitamins, minerals, and macronutrients is essential for promoting overall well-being and preventing malnutrition and chronic diseases.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>You have this Dietary problems  </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        1. Over consumption of unhealthy foods high in sugar, salt, and saturated fats can lead to obesity, heart disease, and type 2  diabetes.  <br/>

                                        2. Restrictive or fad diets that eliminate entire food groups can lead to nutrient deficiencies and other health issues.<br/>

                                        3. Lack of variety in the diet can result in nutrient deficiencies and poor overall health.<br/>

                                        4. Skipping meals or not eating enough can lead to malnutrition and low energy levels.<br/>

                                        5. Eating disorders, such as anorexia nervosa or bulimia, can have serious consequences on overall health and well-being.<br/>

                                        It is important to maintain a balanced and varied diet that includes a variety of nutrient-rich foods to promote overall health and prevent nutrition and dietary problems.
                                        So Consulting with a healthcare provider or registered dietitian can help address any nutritional concerns and develop a personalized plan for optimal health.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>      

                    </div>
                 </div>

                 <div className="flex flex-col w-1/2">
                    <div className="py-10 ">
                            <h2 className="text-gray-400 text-xl md:text-2xl">6.Psychiatric and psychological </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What does Psychiatric and psychological mean</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                        Psychological refers to the study of the mind and behavior, including mental processes such as cognition, emotion, and perception. Psychiatric and psychological evaluations are often conducted to assess an individual's mental health and well-being.
                                        Now in our country Some are  common psychiatric problems include depression, anxiety disorders, PTSD, substance abuse disorders, schizophrenia, and bipolar disorder. Additionally, issues related to trauma, stress, and societal pressures may also contribute to mental health challenges in the population.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                             

                    </div>
                 </div>
                 </div>
            </div>
                <hr className="w-[95%] h-1 bg-gray-300 mx-auto my-10" />
            <div className="flex flex-col gap-4">
                    <h1 className="text-3xl md:text-4xl font-bold text-teal-500 flex gap-2"> Treatment <span className="p-4 rounded-full bg-teal-100 h-3 w-3 -mt-4"></span></h1>
                <hr className="w-[25%] h-1 bg-gray-400" />
                 <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col  py-6 md:w-1/2">
                    <div className=" md:py-10">
                                <h2 className="text-gray-400 text-xl md:text-2xl">1.Those in need of psychiatric and psychological treatment </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What we can offer to you?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Medication: Psychiatric medications such as antidepressants, antipsychotics, mood stabilizers, and anti-anxiety medications are often prescribed to help manage symptoms of various mental health disorders.<br/>
                                            2. Psychotherapy: Psychotherapy, also known as talk therapy, is a form of treatment that involves talking to a mental health professional to understand and address your thoughts, feelings, and behaviors.<br />
                                            3. Cognitive Behavioral Therapy (CBT): CBT is a specific type of psychotherapy that is effective in treating a wide range of mental health disorders by identifying and changing negative thought patterns and behaviors.<br />
                                            4. Electroconvulsive Therapy (ECT): ECT is a procedure that involves passing electric currents through the brain to induce a controlled seizure. It is often used as a treatment for severe depression and other mental health disorders.<br />
                                            5. Hospitalization: In severe cases where a person's mental health is at risk, hospitalization may be necessary to provide intensive treatment and support.
                                            Community-based mental health services: The WHO promotes the integration of mental health services into primary care settings and the development of community-based mental health programs to provide support to individuals with mental health disorders.<br />

                                            It is important to note that the choice of treatment for a specific individual will depend on their particular symptoms, diagnosis, and preferences. It is essential for individuals to work closely with their healthcare provider to determine the most appropriate treatment plan for their mental health needs.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                           

                    </div>
                 </div>

                 <div className="flex flex-col  md:w-1/2">
                    <div className=" md:py-10">
                                <h2 className="text-gray-400 text-xl md:text-2xl">2.Those with medical and physical problem in need of care and support </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>Any one With the following issues?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Chronic illnesses such as diabetes, heart disease, and arthritis<br/>
                                            2. Mental health conditions such as depression, anxiety, and bipolar disorder<br/>
                                            3. Cancer and other serious illnesses<br />
                                            4. Physical disabilities and mobility issues<br />
                                            5. Chronic pain and injury management<br />
                                            6. Age-related medical conditions<br />
                                            7. Substance abuse and addiction issues<br />
                                            8. Eating disorders and weight management<br />
                                            9. Pregnancy and childbirth complications<br />
                                            10. Infectious diseases <br />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                           
                            

                    </div>
                 </div>
                 </div>

                    <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col   w-1/2">
                    <div className=" md:py-10">
                                <h2 className="text-gray-400 text-xl md:text-2xl">3. Care for those with the need  for palliative care we Provide?</h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>Our Treatment</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Physical comfort: Ensure that the person is comfortable and pain-free by providing appropriate medications, treatments, and therapies.<br/>
                                            2. Emotional support: Offer emotional support by listening, showing empathy, and providing a safe space for the person to express their feelings and fears.<br />
                                            3. Spiritual care: Attend to the person's spiritual needs by providing access to religious or spiritual practices, counseling, or other spiritual support services.<br />
                                            4. Communication: Keep the person informed about their condition, treatment options, and prognosis in a clear and compassionate manner. Encourage open communication between the person, their loved ones, and the healthcare team.<br />
                                            5. Pain management: Monitor and manage the person's pain levels effectively, adjusting medications and treatments as needed to ensure optimal comfort.<br />
                                            6. Symptom management: Address and manage symptoms such as nausea, constipation, fatigue, and difficulty breathing to improve the person's quality of life.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            
                          

                    </div>
                 </div>

                 <div className="flex flex-col   w-1/2">
                    <div className=" py-10">
                                <h2 className="text-gray-400 text-xl md:text-2xl">4. All services we provide on the basis of care </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What are are they? </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Equity and Accessibility<br/>
                                            2. Quality of Care<br />
                                            3. Integration of Services<br />
                                            4. Comprehensive Health care <br />

                                        
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                          
                          

                    </div>
                 </div>
                 </div>
                    <div className="flex flex-col md:flex-row gap-6">
                 <div className="flex flex-col   w-1/2">
                    <div className=" md:py-10">
                                <h2 className="text-gray-400 text-xl md:text-2xl">5. Illness that require intensive care </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What are they? </AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Respiratory Distress <br/>
                                            2. Trauma<br />
                                            3. Cardiac Condition<br />
                                            4. Pediatric Intensive care<br />
                                            5. Critical illnesses Requiring Continuous Monitoring<br />
                                            6. Neurological Emergency such as stock ,Seizures 
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            
                    </div>
                 </div>

                 <div className="flex flex-col w-1/2">
                    <div className="py-10 ">
                                <h2 className="text-gray-400 text-xl md:text-2xl">6.Those with surgical procedure </h2>
                    </div>
                    <div className=" flex flex-col gap-4 ">
                            <Accordion type="single" collapsible className='shadow-lg rounded-b-2xl'>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger className=' bg-teal-500 text-white text-xl rounded-t-2xl border-2 border-gray-300 px-4 border-b-0'>What do they need?</AccordionTrigger>
                                    <AccordionContent className='text-lg text-gray-400 border-2 border-gray-300 px-2 rounded-b-2xl '>
                                            1. Medication Management<br/>
                                            2. Follow–up<br />
                                            3. Wound care<br />
                                            4. Mobility and Rehabilitation<br />
                                            5. Pain management 
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                             

                    </div>
                 </div>
                 </div>
            </div>
            
            </div>
        </div>
    )
}

export default Service