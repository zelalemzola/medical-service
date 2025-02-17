"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"

interface MedicalCardProps {
    image: string
    organ: string
    symptoms: string[]
}

export function MedicalCard({ image, organ, symptoms }: MedicalCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Card className="overflow-hidden">
            <CardContent className="p-0">
                <div className="relative h-48 w-full">
                    <Image
                        src={image || "/placeholder.svg"}
                        alt={`${organ} illustration`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="p-4">
                    <h3 className="text-2xl font-semibold text-center mb-4">{organ}</h3>
                </div>
            </CardContent>
            <CardFooter className="justify-center p-4">
                <Popover open={isOpen} onOpenChange={setIsOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline">View Symptoms</Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-80">
                        <div className="space-y-2">
                            <h4 className="font-medium text-lg">Common Symptoms</h4>
                            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                <ul className="list-disc pl-4 space-y-2">
                                    {symptoms.map((symptom, index) => (
                                        <li key={index}>{symptom}</li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </PopoverContent>
                </Popover>
            </CardFooter>
        </Card>
    )
}

