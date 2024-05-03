

import React from 'react';
import Login from '@/app/comps/login';
import Link from 'next/link';


export const metadata = {
    title: "Saturn | Login",
    description: "Generated by create next app",
  };

const Signup = () => {
    

    return (
        <main key={Signup} className=' flex flex-col items-center w-full bg-[#f5f5f5]'>
            <section className='flex flex-col gap-y-4 w-full max-w-[1240px] '>
                <div className='flex flex-col items-center mt-4'>
                    <h1 className='text-blue-600 lg:text-6xl text-4xl font-bold mb-6'>Log in to Saturn</h1>
                    <p className='text-xl text-center px-2 lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis omnis nulla,</p>
                </div>

                <div className='flex flex-col lg:flex-row items-center bg-white mb-10 mt-10 shadow-lg'>
                    <Login />

                    <div id='signup' className='w-full flex flex-col items-center justify-center h-[400px] md:h-[450px] lg:h-[500px]'>
                        <h2 className='text-4xl text-white font-bold mb-6'>Signup</h2>
                        <p className='px-2 text-white text-xl my-4 max-w-[400px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, sit officia. Omnis est ipsum tempore saepe.  Cupiditate quis eaque modi dolores quo.</p>
                        <button className='p-2 border-white border-2 text-white font-medium transition-all duration-200 ease-linear hover:bg-black hover:border-0'><Link href='/signup'>Join now</ Link> </button>
                    </div>
                </div>
            </section>
            <aside className='w-full bg-white p-5 lg:px-20 mt-6'>
                <ul className='flex items-center gap-x-3'>
                    <li className='text-2xl font-bold'><Link href='/'>Saturn</Link></li>
                    <li className='text-2xl'>&gt;</li>
                    <li className='text-2xl text-slate-500'>Login</li>
                </ul>
            </aside>
        </main>
    );
};

export default Signup;