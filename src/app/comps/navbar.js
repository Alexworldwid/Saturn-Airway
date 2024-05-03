"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { delay, motion, AnimatePresence } from "framer-motion";
import Link from "next/link";



export default function Navbar () {
    const pathName = usePathname();
    const isHomePage = pathName === '/';

    const [menu, setMenu] = useState(true);
    const menuRef = useRef(null);

    const handleMenu = () => {
        setMenu(!menu);
    }

    const handleClickOutsideMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenu(true);
        }
    };

    useEffect(() => {
        window.addEventListener("click", handleClickOutsideMenu);
        return () => {
            window.removeEventListener("click", handleClickOutsideMenu);
        };
    }, []);

    const [home, setHome] = useState(true);
    const [about, setAbout] = useState(false);
    const [routes, setRoutes] = useState(false);
    const [contact, setContact] = useState(false);
    const [help, setHelp] = useState(false);

    const handleHome = () => {
        setHome(true);
        setAbout(false);
        setRoutes(false);
        setContact(false);
        setHelp(false);
        setMenu(true);
    }

    const handleRoutes = () => {
        setHome(false);
        setAbout(false);
        setRoutes(true);
        setContact(false);
        setHelp(false);
        setMenu(true);
    }

    const handleAbout = () => {
        setHome(false);
        setAbout(true);
        setRoutes(false);
        setContact(false);
        setHelp(false);
        setMenu(true);
    }

    const handleContact = () => {
        setHome(false);
        setAbout(false);
        setRoutes(false);
        setContact(true);
        setHelp(false);
        setMenu(true);
    }

    const handleHelp = () => {
        setHome(false);
        setAbout(false);
        setRoutes(false);
        setContact(false);
        setHelp(true);
        setMenu(true);
    }

    return (
        <header className={`w-full flex flex-col items-center ${ isHomePage ? "bg-[#dae3ea]" : "" }`}>
            <nav className={` w-full flex justify-between items-center p-6 max-w-[1440px]`}>
            <div>
                <h1 className="text-2xl font-bold transition-all duration-300 ease-in-out hover:scale-125 cursor-pointer">Logo</h1>
            </div>

            <ul className="md:flex justify-between gap-x-6 xl:gap-x-10 hidden cursor-pointer">
                <li onClick={handleHome} className={`${home ? "scale-125 font-bold" : ""} hover:scale-125 hover:font-bold transition-all duration-300 ease-in-out`}>Home</li>
                <li onClick={handleRoutes} className={`${routes ? "scale-125 font-bold" : ""} hover:scale-125 hover:font-bold transition-all duration-300 ease-in-out`}>Our Routes</li>
                <li onClick={handleAbout}  className={`${about ? "scale-125 font-bold" : ""} hover:scale-125 hover:font-bold transition-all duration-300 ease-in-out`}>About</li>
                <li onClick={handleContact}  className={`${contact ? "scale-125 font-bold" : ""} hover:scale-125 hover:font-bold transition-all duration-300 ease-in-out`}>Contact Us</li>
                <li onClick={handleHelp}  className={`${help ? "scale-125 font-bold" : ""} hover:scale-125 hover:font-bold transition-all duration-300 ease-in-out`}>Help</li>
            </ul>

            <AnimatePresence >
                {!menu && (
                    <motion.ul id="sidenav" className="absolute right-5 top-28 md:hidden bg-white z-20 w-[300px] h-dvh p-8"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", bounce: 0.6,  duration: 0.6 }}
                    exit={{ x: 500, opacity: 0 }}
                    >
                        <li onClick={handleHome} className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full">Home</li>
                        <li onClick={handleRoutes} className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full">Our Routes</li>
                        <li onClick={handleAbout} className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full">About</li>
                        <li onClick={handleContact} className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full">Contact Us</li>
                        <li onClick={handleHelp} className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full">Help</li>
                        <li className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full"><Link href='/signup/login'>Login</Link></li>
                        <li className="cursor-pointer font-semibold mb-5 transition-all duration-300 ease-in-out hover:bg-red-400 hover:p-3 hover:rounded-full"><Link href='/signup'>Sign-Up</ Link></li>
                    </motion.ul>
                )}

            </AnimatePresence>
            
            <button onClick={handleMenu} className="md:hidden ">
                {
                    menu ? <HiOutlineMenuAlt1 className="text-4xl transition-all duration-200 ease-in-out hover:scale-125" /> : <FaTimes className="text-4xl transition-all duration-200 ease-in-out hover:scale-125" />
                }     
            </button>

            <div className="hidden md:flex">
                <div>
                    {/* language */}
                </div>

                <ul className="hidden md:flex items-center justify-between gap-x-2 cursor-pointer">
                    <li className="p-3 bg-[#dae3ea] transition-all duration-300 ease-in-out hover:bg-black hover:text-white"><Link href='/signup/login'>Login</Link></li>
                    <li className="p-3 bg-[#dae3ea] transition-all duration-300 ease-in-out hover:bg-black hover:text-white"><Link href='/signup'>Sign-Up</ Link></li>
                </ul>
            </div>
        </nav>
        </header>
        
    )
}