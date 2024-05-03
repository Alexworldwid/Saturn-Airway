"use client";

import React, { useState } from 'react';
import { FaPlaneDeparture, FaTags, FaStopwatch } from "react-icons/fa6";
import BookAFlightForm from './bookAFlight-form';


const ManageFlight = () => {
    const [depature, setDepature] = useState(true);
    const [booking, setBooking] = useState(false);
    const [flightStatus, setFlightStatus] = useState(false);

    const handleDepature = () => {
        setDepature(true);
        setBooking(false);
        setFlightStatus(false);
    }

    const handleBooking = () => {
        setDepature(false);
        setBooking(true);
        setFlightStatus(false);
    }

    const handleFlightStatus = () => {
        setDepature(false);
        setBooking(false);
        setFlightStatus(true);
    }

    return (
        <section className='bg-white w-full max-w-[1000px] '>
            <ul className='grid w-full grid-cols-3 '>
                <li className={`flex flex-col cursor-pointer text-center items-center border-b-blue-300 transition-all duration-150 ease-in-out border-r-blue-300 border-2 p-6  md:text-2xl md:font-semibold ${depature ? 'border-b-blue-700 border-b-4' : ''}`} onClick={handleDepature}>
                    <FaPlaneDeparture className={`text-blue-300 mb-2 text-4xl transition-all duration-200 ease-in-out hover:scale-125 ${depature ? 'text-blue-700' : ''}`} />
                    BOOK A FLIGHT
                </li>
                <li className={`flex flex-col cursor-pointer transition-all duration-150 ease-in-out text-center items-center border-b-blue-300 border-r-blue-300 border-2 p-6  md:text-2xl md:font-semibold ${booking ? 'border-b-blue-700 border-b-4' : ''}`} onClick={handleBooking}>
                    <FaTags className={`text-blue-300 mb-2 text-4xl transition-all duration-200 ease-in-out hover:scale-125 ${booking ? 'text-blue-700' : ''}`} />
                    MANAGE BOOKING/CHECK_IN
                </li>
                <li className={`flex flex-col text-center transition-all duration-150 ease-in-out cursor-pointer items-center border-b-blue-300 border-2 p-6 md:text-2xl md:font-semibold ${flightStatus ? 'border-b-blue-700 border-b-4' : ''}`} onClick={handleFlightStatus}>
                    <FaStopwatch className={`text-blue-300 mb-2 text-4xl transition-all duration-200 ease-in-out hover:scale-125 ${flightStatus ? 'text-blue-700' : ''}`} />
                    FLIGHT STATUS
                </li>
            </ul>

            {
                depature && <BookAFlightForm />
            }

            
        </section>
    );
};

export default ManageFlight;