"use client"
import React, { useState, useEffect, useRef, createContext, RefObject} from 'react';
import HeroComponent from "../components/Hero";
import SearchBar from "@/components/searchBar";
import CarCard from '@/components/CarCard';
import { FilterProps, fetchCars } from "@/utils/fetch";


export interface searchFetchCars {
  searchParams?: FilterProps;
}

export default function Home({searchParams}: searchFetchCars) {
  const CarListContext = createContext<RefObject<any> | null>(null);
  const [carData, setCarData] = useState<{}[]>([]);
  const carListRef = useRef<HTMLDivElement | null>(null);
  if(searchParams?.manufacturer){
    carListRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchCars(searchParams || {});
        setCarData(data);
      } catch (error) {
        console.error("Error occurred: ", error);
      }
    }
    fetchData();
  }, [searchParams]);
  return (
    <div>
        <CarListContext.Provider value={carListRef}>
          <HeroComponent forwardedRef={carListRef} />
        </CarListContext.Provider>
      <div>
        <div className={"flex flex-col gap-4 px-10 mb-8 md:mb-12"}>
          <h1 className={"text-3xl"}>
            Car Catalogue
          </h1>
          <p className={"text-gray-400 text-xl"}>
            Explore the car you might like
          </p>
        </div>
        <SearchBar />
        <CarCard data={carData} myRef={carListRef} />
      </div>
    </div>
  );
}
