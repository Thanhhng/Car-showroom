import React from 'react';
import HeroActions from "@/components/HeroActions";
import Image from "next/image";

export default function HeroComponent() {
    return (
         <div className={' mt-40 flex flex-col gap-12 md:flex md:flex-row md:gap-0 lg:gap-0  2xl:px-30 '}>
            <div className={'p-8 flex flex-col gap-6 sm:p-12  sm:flex sm:flex-col sm:gap-12'}>
                <h1 className={'text-5xl font-bold tracking-wide leading-snug'}>
                    Find, book, or rent a car - quickly and easily!
                </h1>
                <p className={'text-2xl text-gray-500 leading-snug'}>
                    streamline your car rental experience with our effortless booking process
                </p>
                <HeroActions />
            </div>
             <div className={"w-full  flex justify-center"}>
                 <div className={"w-fit h-fit flex justify-center sm:h-72 md:h-80 lg:h-96 m-auto md: "}>
                     <Image src="/hero.png" width={600} height={500}  alt="car-img" className="object-contain" />
                 </div>
             </div>
        </div>
    )
}