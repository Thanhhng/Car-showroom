"use client"
import SearchModelBar from "@/components/SearchModelBar"
import { useState } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'



export function SearchButton({classProp} :{classProp?:string;}){
    return (
        <button type='submit' className={`z-10 ${classProp}`}>
            <Image
                src={"/magnifying-glass.svg"}
                alt={"magnifying glass"}
                width={30}
                height={30}
                className='object-contain'
            />
        </button>
    )
}



export default function SearchBar() {
    const [carName, setCar] = useState("");
    const [model, setModel] = useState("");
    const router = useRouter();
    function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        if(carName === "" || model === ""){
            alert("please fill the input");
        } else {
            carName.trim();
            model.trim();
            changeParam(carName.toLowerCase(),model.toLowerCase());
            setCar("");
            setModel("");
        }
    }

    function changeParam(car:string,model:string){
        const pageUrl = new URLSearchParams(window.location.search);
        model ? pageUrl.set("model",model) : pageUrl.delete("model",model);
        car ? pageUrl.set("manufacturer",car) : pageUrl.delete("manufacturer",car);
        const path = pageUrl.toString();
        router.push(`?${path}`)

    }

    return (
        <form className="flex justify-start minSm:flex-col minSm:gap-6 w-full relative max-sm:gap-4  supersmall:max-w-xl px-8" onSubmit={handleSubmit}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative flex-row">
                <SearchModelBar carOption={carName} setCarOption={setCar}/>
                <SearchButton classProp="sm:hidden absolute top-[10px] right-3"/>
            </div>
            <div className="flex-1 pl-4 max-sm:w-full flex justify-start items-center relative h-min border " >
                <div className="absolute top-[10px] pr-4">
                    <Image src="/model-icon.png" width={30} height={30} alt="car-type-svg" className="object-contain"  />
                </div>
                <input
                type="text"
                className="w-full h-[48px] pl-12 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm;"
                placeholder="Tiguan"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                />
                <SearchButton classProp="sm:hidden absolute top-[10px] right-3 "/>
            </div>
            <SearchButton classProp="minSm:hidden absolute top-[10px] right-10"/>
        </form>
    )
}