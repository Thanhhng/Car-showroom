"use client";

import React from 'react';
import CustomButton from "./CustomButton";

export default function HeroActions() {
    const handleClick = () => {
        alert("huu thang was here");
    }
    return (
        <CustomButton value={'Explore Cars'}  buttonWidth={8} onclick={handleClick}/>
    )
}

