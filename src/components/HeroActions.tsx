"use client";

import React, { ServerContext, ServerContextJSONValue, useContext } from 'react';
import CustomButton from "./CustomButton";
import { CarListContext } from '@/app/page';

export default function HeroActions() {
    const carList = useContext(CarListContext);
    const handleClick = () => carList?.current?.scrollIntoView({ behavior: 'smooth' });
    return (
        <CustomButton value={'Explore Cars'}  buttonWidth={8} onclick={handleClick}/>
    )
}

