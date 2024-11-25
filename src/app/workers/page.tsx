"use client";
import React, { useState, useEffect, useCallback } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ChevronRight, Eye, FilterIcon, GraduationCap, NotebookText, Phone } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../../components/ui/drawer"

interface Maid {
  _id: string;
  name: string;
  fathersName: string;
  imageUrl: string;
  documentUrl: string;
  documentName: string;
  languages: string[];
  experience: string[];
  review: string[];
  isAvailable: boolean;
  category: {
    _id: string;
    name: string;
  };
  pricePerMonth: number;
  pricePerHour: number;
}

interface Category {
  _id: string;
  name: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Workers = () => {
  const { data: maidsData } = useSWR<{ maids: Maid[] }>("/api/maids", fetcher, {
    refreshInterval: 1000, // Re-fetch every 2 seconds
  });
  const { data: categoriesData } = useSWR<{ categories: Category[] }>("/api/categories", fetcher, {
    refreshInterval: 1000, // Re-fetch every 1 seconds
  });

  const [filteredMaids, setFilteredMaids] = useState<Maid[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceMonthRange, setSelectedPriceMonthRange] = useState([0, 100000]); // Default max price is 100,000
  const [selectedPriceHourRange, setSelectedPriceHourRange] = useState([0, 200]); // Default max price is 200
  const [newReview, setNewReview] = useState("");
  const [reviews, setReviews] = useState<string[]>([]);

  const handleReviewSubmit = async (id: string) => {
    if (!newReview) return;

    const response = await fetch(`/api/maids/${id}/reviews`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ review: newReview }),
    });

    const updatedMaid = await response.json();
    setReviews(updatedMaid.maid.review);
    setNewReview("");
  };

  const filterMaids = useCallback(() => {
    if (!maidsData || !maidsData.maids) return;

    let filtered = maidsData.maids.filter((maid) => maid.isAvailable); // Only show available maids
    if (selectedCategory) {
      filtered = filtered.filter((maid) => maid.category._id === selectedCategory);
    }
    filtered = filtered.filter(
      (maid) => maid.pricePerMonth >= selectedPriceMonthRange[0] && maid.pricePerMonth <= selectedPriceMonthRange[1] && maid.pricePerHour >= selectedPriceHourRange[0] && maid.pricePerHour <= selectedPriceHourRange[1]
    );
    setFilteredMaids(filtered);
  }, [maidsData, selectedCategory, selectedPriceMonthRange, selectedPriceHourRange]);

  useEffect(() => {
    filterMaids();
  }, [maidsData, selectedCategory, selectedPriceHourRange, selectedPriceMonthRange, filterMaids]);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceRangeMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedPriceMonthRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "min") {
        newRange[0] = parseInt(value);
      } else {
        newRange[1] = parseInt(value);
      }
      return newRange;
    });
  };

  const handlePriceRangeHourChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSelectedPriceHourRange((prevRange) => {
      const newRange = [...prevRange];
      if (name === "min") {
        newRange[0] = parseInt(value);
      } else {
        newRange[1] = parseInt(value);
      }
      return newRange;
    });
  };

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPriceMonthRange([0, 100000]); // Reset to default max price
    setSelectedPriceHourRange([0, 200]); // Reset to default max price
  };

  const maidsCount = filteredMaids?.length || 0;

  return (
    <div className="w-full mx-auto mt-[20px] flex flex-col ">
      <div className="w-full flex flex-wrap items-center justify-between fixed top-15 z-30 bg-white border-b rounded-b-2xl px-[4%] md:px-[10%] py-3 shadow-md">
        <Link href='/'><ArrowLeft fontWeight='bold' size={33} className="text-white bg-primary font-bold p-1 rounded-full md:scale-200 cursor-pointer" /></Link>
        <p className="text-primary text-lg md:text-2xl font-bold  items-center gap-3 flex flex-col md:flex-row">Available Physicians: <span className="text-primary">({maidsCount})</span></p>
        <Dialog>
          <DialogTrigger>
            <Button className="flex items-center gap-3 bg-primary hover:bg-primary">Filter <FilterIcon className='hidden md:block' /></Button>
          </DialogTrigger>
          <DialogContent className=" w-[96%] md:w-fit rounded-xl px-6">
            <DialogHeader className="mx-auto">
              <DialogTitle className='text-primary text-lg'>Apply filters</DialogTitle>
            </DialogHeader>
            <div className="flex flex-col items-start space-x-2 mb-4 lg:mb-0">
              <select
                value={selectedCategory}
                onChange={handleSelect}
                className="border p-2 rounded text-black bg-white"
              >
                <option value="">Select category...</option>
                {categoriesData && categoriesData.categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <div className="w-full flex items-center pt-5">
                <Button onClick={clearFilters} variant="destructive" className="mx-auto">
                  Clear Filters
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {(!maidsData || !categoriesData) ? <div className='pt-[40%] text-xl text-primary font-bold mx-auto'>Loading Physician...</div>
        :
        <div className="flex flex-wrap items-center justify-center gap-x-2 md:gap-x-8 gap-y-20 py-20 pt-[27%] md:pt-[15%] z-0  h-full">
          {filteredMaids.map((maid) => (
            <Card key={maid._id} className="relative shadow-lg py-4 md:p-4 scale-[90%] md:scale-100 bg-primary text-white hover:shadow-xl">
              <CardHeader>
                <div className="flex items-center justify-center">
                  <Avatar className="absolute top-0 mt-[-15%]">
                    <AvatarImage src={maid.imageUrl} alt="worker photo" />
                    <AvatarFallback>worker photo</AvatarFallback>
                  </Avatar>

                </div>
                <CardTitle className="pt-[5%]">
                  <h2 className="card-title text-primary font-bold text-[14px] md:text-[20px] text-white">{maid.name}</h2>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex items-center justify-center">
                <Drawer>
                  <DrawerTrigger>
                    <p className="flex items-center gap-3 bg-secondary hover:bg-white text-primary p-2 rounded-lg" >View Detail <Eye /></p>
                  </DrawerTrigger>
                  <DrawerContent className='h-[95%] '>
                    <div className="h-[85%] overflow-y-auto px-6">
                      <DrawerHeader className='flex flex-col items-center justify-center'>
                        <DrawerTitle> <Image src={maid.imageUrl} alt={maid.name} width={90} height={90} className="rounded-full" /></DrawerTitle>
                        <DrawerDescription>

                          <h2 className="card-title text-primary font-bold text-[32px] capitalize">{`${maid.name} ${maid.fathersName}`}</h2>
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="text-black font-bold text-[17px]">
                        <div className="flex flex-wrap items-center gap-4 justify-center pb-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-primary text-[18px]">Speaks:</span>
                            <span className="flex flex-wrap gap-2">{maid.languages.map((lang, index) => (
                              <p className=" p-1 rounded-full bg-[#a88905] text-white text-sm" key={index}>{lang}</p>
                            ))
                            }</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 justify-center pb-4">
                          <span className="text-primary text-[18px]">{maid.name}&apos;s Portfolio:</span>
                          <Link target="_blank" href={`${maid.documentUrl}`} className="col-span-6 sm:col-span-4 text-red-400 underline">
                            {maid.documentName}
                          </Link>
                        </div>
                        <p className='text-primary text-[18px] text-center py-2'>{maid.name} is also ready to work with you on a contract based environment</p>
                        <h1 className="flex items-center gap-2 rounded-2xl  p-2 bg-[#a88905] text-white w-fit  absolute top-0 right-0 m-3 md:m-10">To hire <Phone /> 9080</h1>
                        <div className="flex flex-col md:flex-row items-center  gap-6 ">
                          <div className="flex items-center flex-col  gap-3 bg-primary text-white w-[90%] md:w-1/2 rounded-2xl p-2">
                            <span className=" text-[18px] flex items-center gap-2"><GraduationCap color="white" />Experience:</span>
                            <span className="ml-1 flex flex-col gap-2">
                              {maid.experience.map((exp, index) => (
                                <div className="" key={index}>
                                  <p className="text-sm flex items-center gap-2">  <ChevronRight />{exp}</p>
                                </div>
                              ))}
                            </span>
                          </div>
                          <div className="flex items-center flex-col gap-4 w-[90%] md:w-1/2 rounded-2xl p-2 text-white bg-primary">
                            <span className=" text-[18px] flex items-center gap-2">  <NotebookText color="white" />Reviews:</span>
                            <span className="ml-1">
                              <div className="flex flex-col gap-1">
                                {maid.review.map((rev, index) => (
                                  <div className="" key={index}>
                                    <p className="text-sm flex items-center gap-2">  <ChevronRight />{rev}</p>
                                  </div>
                                ))}

                              </div>

                            </span>
                          </div>
                        </div>
                      </div>


                      <div className="w-full mt-4 flex flex-col items-center justify-center gap-3 pb-3">
                        <h3 className="text-lg md:text-xl text-primary font-bold">Add a Review:</h3>
                        <textarea
                          value={newReview}
                          onChange={(e) => setNewReview(e.target.value)}
                          className="w-[80%] md:w-1/2 p-2 border rounded"
                          placeholder="Write your review here"
                        />
                        <Button onClick={() => handleReviewSubmit(maid._id)} className="mt-2 hover:bg-primary">
                          Submit Review
                        </Button>
                      </div>
                    </div>
                    <DrawerFooter>

                      <DrawerClose>
                        Close
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>


              </CardFooter>
            </Card>
          ))}
        </div>

      }
    </div>
  );
};

export default Workers;

