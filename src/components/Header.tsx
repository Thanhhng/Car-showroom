import React from 'react';
import Image from "next/image";
import Link from "next/link";



export default function Header(){
    return (
        <header className={"px-12 w-full border-b-2 border-gray-100 h-16 inset-x-0 top-0   "}>
            <nav className={"flex items-center justify-between h-full"}>
               <div>
                   <Link href={""}>
                        <Image src="/logo.svg" width={160} height={100} alt="logo-svg" />
                   </Link>
               </div>
                <div>
                    <Link href="/signin">
                        <p>
                            Sign In
                        </p>
                    </Link>
                </div>
            </nav>
        </header>
    )
}