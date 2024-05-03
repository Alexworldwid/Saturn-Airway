"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from 'next/link';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const login = (data) => {
        console.log(data); 
        reset();   
    }

    const handlePassword = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className='p-10 w-full'>
            <p className='text-blue-600 text-4xl font-bold mb-6'>Login</p>

            <form action="" method='POST' onSubmit={handleSubmit(login)}>
                <div>
                    <input className={`appearance-none border block w-full bg-slate-200 px-3 py-4 text-xl my-1 rounded-tl-md rounded-bl-md border-solid  ${errors.email ? 'border-red-500' : ''}`} type="text" id='email' placeholder='Email' {...register('email', {
                        required: "email is required",
                        pattern: {
                            value : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                            message : 'enter a valid email'
                        }
                        })} />
                    {errors.email && <p className='text-red-600 mb-2'>{errors.email.message}</p>}
                    
                </div>

                <div className='relative'>
                    <input className={`appearance-none block w-full border bg-slate-200 px-3 py-4 text-xl my-3 rounded-tl-md rounded-bl-md border-solid  ${errors.password ? 'border-red-500' : ''}`} type={showPassword ? "text" : "password"} id='password' placeholder='password' {...register('password', {
                        required: 'Enter your password',
                        pattern: {
                            value: /^[a-z0-9._+-]{6,}$/,
                            message: 'password is too weak'
                        }
                    })} />
                    {errors.password && <p className='text-red-600 mb-2'>{errors.password.message}</p>}
                    {showPassword ? <FaEye className='absolute right-4 top-6 cursor-pointer' onClick={handlePassword} /> : <FaEyeSlash className='absolute cursor-pointer right-4 top-6' onClick={handlePassword} />}
                </div>

                <div>
                    <label className='flex items-center' htmlFor="checkbox">
                        <input className='mr-2' type="checkbox" id='checkbox' name='checkbox' />
                        <p>keep me logged in on this device</p>
                    </label>
                </div>

                <button className='p-4 my-4 w-full bg-blue-600 text-white text-xl font-medium transition-all duration-300 ease-in-out rounded-lg hover:bg-black'>Login</button>
            </form>
            <Link className='text-slate-600 text-xl font-semibold' href='/'>FORGOT YOUR DETAILS?</Link>
        </div>
    );
};

export default Login;