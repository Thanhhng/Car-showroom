"use client";

import {Combobox,Transition} from "@headlessui/react"
import {SearchModelProps} from "@/types/index"
import Image from "next/image";
import {useState} from "react";
import {manufacturers} from "@/Constants/"

export default function SearchModelBar ():any{
    const [query,setQuery] = useState("")
    const handleChange = (e:any) => {
        setQuery(e.target.value)
    };

    const queryFilter = query === "" ? manufacturers : manufacturers.filter((item) =>{
        return item.toLowerCase().includes(query.toLowerCase());
    })

    return (
        <div className={"flex-1 w-full flex justify-start items-center border"} >
            <div className="w-full">
                <Combobox as="div" className="w-full" >
                    <div className={"flex w-full px-4 "}>
                        <Combobox.Button >
                            <Image src="/car-logo.svg" width={30} height={30} alt="car-svg"/>
                        </Combobox.Button>
                        <Combobox.Input className={"w-full h-[48px] pl-6 p-2 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-md"}
                            placeholder={"Bmw"}
                            displayValue={(searchMenu :string) => searchMenu}
                            onChange={handleChange}
                        />
                    </div>
                        <Combobox.Options
                            className='mt-2 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                            {queryFilter.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    as="div"
                                    value={query}
                                    className='mt-1 max-h-60 w-full rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                                >
                                </Combobox.Option>
                            ) : (
                                queryFilter.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? "bg-blue-500 text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span className={`${selected ? "font-medium" : "font-normal"}`}>
                                                    {item}
                                                </span>
                                                    {selected ? (
                                                        <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-purple-400"}`}
                                                        ></span>
                                                    ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                </Combobox>
            </div>
        </div>
    )
}