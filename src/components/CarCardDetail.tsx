import { getImage } from "@/utils/fetch";
import Image from "next/image"

type buttonPros = {
  onClick: () => {},
  carData: any;
}


export default function CarDetail({onClick,carData}:buttonPros){
  const entriesCar = Object.entries(carData)
  return (
    <div className="relative w-full ">
      <div className="fixed inset-0 bg-black opacity-25 z-30"></div>
      <div className="fixed inset-0 z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white  rounded-xl h-fit">
        <Image src={"/close.svg"} alt="close-svg" width={30} height={30} onClick={onClick} className="cursor-pointer absolute top-1 right-1 z-40"/>
        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-t-xl">
          <Image src={getImage(carData)} fill alt="car-img" className="object-contain" />
        </div>
        <div className="px-4 py-4">
          {entriesCar.map((value,index) => {
            return (
              <div key={index} className="flex justify-between">
                <h3 className="text-gray-400 capitalize text-xl">{value[0].charAt(0).toUpperCase() + value[0].slice(1)} : </h3>
                <span className="text-black-100 font-semibold text-lg">{value[1]}</span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}