"use client"
import { MouseEventHandler, useEffect, useState } from "react";
import {fetchCars, getImage} from "@/utils/fetch"
import Image from "next/image";
import { createPortal } from "react-dom";
import CarDetail from "@/components/CarCardDetail"

interface CustomButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const Button = ({ isDisabled, btnType, containerStyles, textStyles, title, rightIcon, handleClick }: CustomButtonProps) => (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} block `}
      onClick={handleClick}
    >
        <span className={`flex-1 ${textStyles}`}>
            {title}
        </span>
    </button>
  );

const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50;
    const mileageFactor = 0.1;
    const ageFactor = 0.05;
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
    return rentalRatePerDay.toFixed(0);
};
type VoidCallback = any;


export default function CarCard(){
    const [isOpen,setIsOpen] = useState(false)
    const [data, setData] = useState(null);
    const [indexOfItem, setIndex] = useState(0)
    const setIsOpenOrNot:VoidCallback = () => setIsOpen(!isOpen)
    useEffect(() => {
        async function getData() {
            const _data = await fetchCars();
            setData(_data );
        }
        getData();
    }, []);
    return (
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14 mb-8">
            {
                data ? data.map((e:any,index:number) => {
                    return(
                    <div key={index} className="flex flex-col p-6 justify-center items-start text-black-100 bg-gray-200 hover:bg-white hover:shadow-md rounded-3xl group">
                        <div className="w-full flex justify-between items-start gap-2">
                            <h2 className="text-[22px] leading-[26px] font-bold flex flex-row gap-1">
                                    {e.make.charAt(0).toUpperCase() + e.make.slice(1)}
                                    <span>{e.model.charAt(0).toUpperCase() + e.model.slice(1)}</span>
                            </h2>
                        </div>
                        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold items-center justify-between'>
                            <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                            {calculateCarRent(e.city_mpg,e.year)}
                            <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
                        </p>
                        <div className='relative w-full h-40 my-3 object-contain'>
                            <Image src={getImage(e)}  alt="car-pic" fill={true} priority className="object-contain" />
                        </div>
                        <div className="relative flex w-full mt-2">
                            <div className="flex group-hover:invisible w-full justify-between text-grey mx-4">
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                                    <p className='text-[14px] leading-[17px]'>
                                        {e.transmission === "a" ? "Automatic" : "Manual"}
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <Image src='/tire.svg' width={20} height={20} alt='tire' />
                                    <p className='text-[14px] leading-[17px]'>
                                        {e.drive.toUpperCase()}
                                    </p>
                                </div>
                                <div className='flex flex-col justify-center items-center gap-2'>
                                    <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                                    <p className='text-[14px] leading-[17px]'>
                                        {e.city_mpg}MPG
                                    </p>
                                </div>
                            </div>
                            <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                                <Button
                                    title="View More"
                                    containerStyles="w-full py-[16px] rounded-full bg-blue-400 "
                                    textStyles='text-white text-[14px] leading-[17px] font-bold'
                                    rightIcon='/right-arrow.svg'
                                    handleClick={() => {
                                        setIsOpen(!isOpen)
                                        setIndex(index)
                                    }
                                }
                                />
                            </div>
                        </div>
                    </div>
                    )
                })
                :  <div className="text-[22px] leading-[26px] font-bold capitalize;">loading ... </div>
            }
            {
                isOpen &&
                createPortal(
                    <CarDetail onClick={setIsOpenOrNot}  carData={data ?  data[indexOfItem] : null } />
                    ,document.body,
                )
            }
        </div>
    )
}