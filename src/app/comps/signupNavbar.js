"use client";

import React from 'react';
import { BiWorld } from "react-icons/bi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const SignupNavbar = () => {
    const pathName = usePathname();
    const isLOgin = pathName === '/signup';

    return (
        <header className={`w-full flex flex-col items-center bg-[#f5f5f5]`}>
            <nav className={` w-full max-w-[1440px]  flex justify-between items-center p-6  `}>
                <Link href='/'>
                    <div>
                        <h1 className="text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">Logo</h1>
                    </div>
                </Link>
                <div className='flex gap-2 items-center'><BiWorld />Lang</div>
            </nav>
            
        </header>
    );
};

export default SignupNavbar;