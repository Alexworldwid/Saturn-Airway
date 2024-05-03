import React from 'react';
import Newsletter from './newsletter';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
    return (
        <footer className='bg-slate-600 w-full p-2 flex flex-col md:items-center'>
            <div className='flex flex-col items-center mt-6 lg:mt-10'>
                <h4 className='text-3xl text-white font-semibold my-2 lg:text-5xl'>Subscribe To Our Newsletter</h4>
                <p className='text-slate-200 md:text-xl max-w-[500px] text-center my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet et veniam aspernatur possimus id mollitia accusamus</p>
                <Newsletter />
            </div>

            <div className='my-14 h-[1px] w-full border-solid border-[0.3px] border-slate-300 max-w-[1440px]'>

            </div>

            <div className='w-full mb-6 max-w-[1440px] grid gap-6 justify-between grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                <ul>
                    <li className='text-white text-xl mb-4 font-semibold '>About Saturn</li>
                    <li className='mb-2 text-slate-300 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>About Us</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Careers</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>News Hub</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Investor Relations</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Buisness Travel</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Mobile App</li>
                </ul>

                <ul>
                    <li className='text-white text-xl mb-4 font-semibold'>Customer Service</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Help Center</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Message Us</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Comment/Compaint</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>FAQs</li>
                </ul>

                <ul>
                    <li className='text-white text-xl mb-4 font-semibold'>Site Support</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Login Help</li>
                    <li className='text-slate-300 transition-all mb-2 duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Site Map</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Browser Compatability</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Accessibility</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Booking Information</li>
                </ul>

                <ul>
                    <li className='text-white text-xl mb-4 font-semibold'>Policies</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Customer Commitment</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Tarmac Delay Plan</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Legal</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Compatability</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Contract of Carriage</li>
                    <li className='text-slate-300 mb-2 transition-all duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Cookie, Privacy & Security</li>
                    <li className='text-slate-300 transition-all mb-2 duration-200 ease-in cursor-pointer hover:translate-x-3 hover:text-white'>Human Trafficking Statement (PDF)</li>
                </ul>

            </div>

            <div className='w-full max-w-[1440px] flex flex-col md:items-center mb-6'>
                <h5 className='text-white text-xl mb-4 font-semibold md:text-center'>Connect With Us</h5>
                <ul className='flex flex-row gap-x-4 md:gap-x-8 lg:gap-x-12 items-center'>
                    <li className='text-4xl hover:text-white transition-all duration-300 ease-in-out text-slate-300 hover:scale-125 cursor-pointer'><FaFacebook /></li>
                    <li><FaInstagram className='text-4xl hover:text-white transition-all duration-300 ease-in-out text-slate-300 hover:scale-125 cursor-pointer' /></li>
                    <li><FaXTwitter className='text-4xl hover:text-white transition-all duration-300 ease-in-out text-slate-300 hover:scale-125 cursor-pointer' /></li>
                    <li><FaLinkedin className='text-4xl hover:text-white transition-all duration-300 ease-in-out text-slate-300 hover:scale-125 cursor-pointer' /></li>
                    <li><FaYoutube className='text-4xl hover:text-white transition-all duration-300 ease-in-out text-slate-300 hover:scale-125 cursor-pointer' /></li>
                </ul>
            </div>
            
            <div>
                <p className='text-center text-white my-2 text-sm'>&copy; Copyright SATURN inc</p>
                <p className='text-center text-white my-2 text-sm'>Terms and conditions apply to all offers and SaturnMiles benefits. See specify offer for details, and visit Saturnmiles Membership Guide and Program Rules</p>
            </div>
        </footer>
    );
};

export default Footer;