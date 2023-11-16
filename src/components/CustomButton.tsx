"use client";

import React, { MouseEventHandler } from "react"

interface CustomButtonProps {
    value: string;
    buttonWidth?: number;
    onclick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton:React.FC<CustomButtonProps> = ({ value , buttonWidth, onclick}) => {
    return (
        <button
            className={`w-40 bg-blue-600 h-12 rounded-3xl sm:w-56   `}
            onClick={onclick}
        >
            <p className={"text-white text-base "}>
                {value}
            </p>
        </button>
    );
};

export default CustomButton;