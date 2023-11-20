import { useState } from "react"

interface FilterPropsType{
    propsList: {
        title: string;
        value:string;
        map : (e:any,index:number) => void
    }
}
interface propsListType{
    propsList:FilterPropsType
}

function FilterProps({propsList}:propsListType){

    return (
        <form className="relative flex flex-col w-fit " onSubmit={(element) => console.log(element)} >
            <select  name="cars" id="cars"  className={` w-[10rem] h-[2.5rem] pl-4 border border-bg-red-100 ml-8 mt-4 rounded-sm`}>
                {propsList.map((e,index) => {
                      return (
                        <option value={e.value} key={index}  >{e.title}</option>
                      )
                })}
            </select>
        </form>
        

    )
}

export default FilterProps