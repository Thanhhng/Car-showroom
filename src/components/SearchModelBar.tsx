"use client";

import {Combobox,Transition} from "@headlessui/react"
import SearchModel from "@/types/index"
import Image from "next/image";
import {useState,Fragment} from "react";

export default function SearchModelBar ({searchMenu,setMenu}):SearchModel{
    const [query,setQuery] = useState("")

    const handleChange = (e) => {
        setQuery(e.target.value)
    };
    
    return (
        <div className={"flex-1 w-full flex justify-start items-center border"} >
            <div>
                <Combobox className={"w-full"} >
                    <div className={"relative w-full px-4 "}>
                        <Combobox.Button>
                            <Image src="/car-logo.svg" width={30} height={30} alt="car-svg"/>
                        </Combobox.Button>
                        <Combobox.Input className={"w-full h-[48px] pl-6 p-2 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-md"}
                        placeholder={"Bmw"}
                        displayValue={(searchMenu :string) => searchMenu}
                        onChange={handleChange}
                        />
                    </div>
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options
                            className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            static
                        >
                            {filterMenu.length === 0 && query !== "" ? (
                                <Combobox.Option
                                    displayValue={query}
                                    className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                                >
                                    Create {query}
                                </Combobox.Option>
                            ) : (
                                filterMenu.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active ? "bg-blue-300 text-white" : "text-gray-900"
                                            }`
                                        }
                                        displayValue={item}
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
                    </Transition>
                </Combobox>
            </div>
        </div>
    )
}