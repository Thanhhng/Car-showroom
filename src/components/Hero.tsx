import Image from "next/image";
import CustomButton from "./CustomButton";
import { RefObject } from "react";

interface heroProps {
    forwardedRef: RefObject<HTMLDivElement> | null;

}
export default function HeroComponent({forwardedRef}:heroProps) {
    if(forwardedRef === null ){return}
    function handleClick() {
        forwardedRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
         <div className={' mt-8 flex flex-col gap-12 md:flex md:flex-row md:gap-0 lg:gap-0  2xl:px-30 '}>
            <div className={'p-8 flex flex-col gap-6 sm:p-12  sm:flex sm:flex-col sm:gap-12'}>
                <h1 className={'text-5xl font-bold tracking-wide leading-snug'}>
                    Find, book, or rent a car - quickly and easily!
                </h1>
                <p className={'text-2xl text-gray-500 leading-snug'}>
                    streamline your car rental experience with our effortless booking process
                </p>
                <CustomButton value={'Explore Cars'}  buttonWidth={8} onclick={handleClick}/>
            </div>
             <div className={"w-full  flex justify-center"}>
                 <div className={"w-fit h-fit flex justify-center sm:h-72 md:h-80 lg:h-96 m-auto pr-12 "}>
                     <Image src="/hero.png" width={600} height={500}  alt="car-img" className="object-contain" />
                 </div>
             </div>
        </div>
    )
}