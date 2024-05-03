"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const signup = (data) => {
        console.log(data); 
        reset();   
    }

    const handlePassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <form className='form max-w-[1340px] w-full my-6 p-8 bg-white shadow-xl gap-x-6 gap-y-3 lg:grid lg:grid-cols-9 lg:grid-rows-5' action='#' method='POST' onSubmit={handleSubmit(signup)} >
            <div className='gender mb-4 col-start-1 col-end-2'>
                <select className={`p-3 lg:p-5 w-full border-black border rounded-lg ${errors.gender ? 'border-red-500' : ''}`} name="gender" id="gender" {...register('gender', {
                    required: 'pick a gender'
                })}>
                    <option value="">Title</option>
                    <option value="mr">Mr</option>
                    <option value="mrs">Mrs</option>
                    <option value="miss">Miss</option>
                </select>
                {errors.gender && <p className='text-red-500'>{errors.gender.message}</p>}
            </div>

            <div className='firstName mb-4 col-start-2 col-end-6'>
                <input className={`p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.firstName ? 'border-red-500' : ''} `} type="text" id='firstName' placeholder='First Name' {...register('firstName', {
                     required: 'first name is required',
                     pattern: {
                        value: /^[a-zA-Z]+$/,
                        message: 'name must not contain Numbers or Symbols',
                     }
                })} />
                {errors.firstName && <p className='text-red-500'>{errors.firstName.message}</p>}
            </div>

            <div className='lastName mb-4 col-start-6 col-end-10'>
                <input className={`p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.lastName ? 'border-red-500' : ''} `} type="text" id='lastName' placeholder='Last Name' {...register('lastName', {
                    required: 'Last name is required',
                    pattern: {
                        value: /^[a-z]+$/i,
                        message: 'name must not contain Numbers or Symbols'
                    }
                })} />
                {errors.lastName && <p className='text-red-500'>{errors.lastName.message}</p>}
            </div>

            <div className='email mb-4 col-start-1 col-end-5'>
                <input className={`p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.email ? 'border-red-500' : ''} `} type="text" id='email' placeholder='Email' {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 
                        message: 'enter a valid email'
                    }
                })} />
                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </div>

            <div className='relative mb-4 col-start-5 col-end-10'>
                <input className={` p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.password ? 'border-red-500' : ''} `} type={showPassword ? "text" : "password"} id='password' placeholder='Password' {...register('password', {
                    required: 'Password is required',
                    pattern: {
                        value: /^[a-zA-Z0-9.%-_]+$/i
                    }
                })} />
                {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                {showPassword ? <FaEye className='absolute right-4 top-5 cursor-pointer lg:top-6' onClick={handlePassword} /> : <FaEyeSlash className='absolute cursor-pointer right-4 top-5 lg:top-6' onClick={handlePassword} />}
            </div>

            <div className='dateOfBirth mb-4 col-start-1 col-end-5'>
                <input className={` p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.dateOfBirth ? 'border-red-500' : ''} `} type="date" id='dateOfBirth' placeholder='Date of birth: dd/mm/yy' {...register('dateOfBirth', {
                    required: 'please select a date',
                })} />
                {errors.dateOfBirth && <p className='text-red-500'>{errors.dateOfBirth.message}</p>}
            </div>

            <div className='country mb-4 col-start-5 col-end-10'>
                <input className={`p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.country ? 'border-red-500' : ''} `} type="text" id='country' placeholder='Country/Territory' {...register('country', {
                    required: 'Country is required'
                })} />
                {errors.country && <p className='text-red-500'>{errors.country.message}</p>}
            </div>

            <div className='language mb-4 col-start-1 col-end-4'>
                <select className={`p-3 lg:p-5 w-full border-black border rounded-lg ${errors.language ? 'border-red-500' : ''} `} name="language" id="language" {...register('language', {
                    required: 'Select your prefered Language'
                })}>
                    <option value="">Prefered Language</option>
                    <option value="EN-NG">EN-NG</option>
                    <option value="EN-US">EN-US</option>
                    <option value="FR-FR">FR-FR</option>
                </select>
                {errors.language && <p className='text-red-500'>{errors.language.message}</p>}
            </div>

            <div className='countryCode mb-4 col-start-4 col-end-7'>
                <select className={`p-3 lg:p-5 w-full border-black border rounded-lg ${errors.countryCode ? 'border-red-500' : ''} `} name="countryCode" id="countryCode" {...register('countryCode', {
                    required: 'country code is required'
                })}>
                    <option value="">country code</option>
                    <option value="+234">+234</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                </select>
                {errors.countryCode && <p className='text-red-500'>{errors.countryCode.message}</p>}
            </div>

            <div className='phoneNumber mb-4 col-start-7 col-end-10'>
                <input className={`p-3 lg:p-5 appearance-none w-full border-black border rounded-lg ${errors.phoneNumber ? 'border-red-500' : ''} `} type="number" id='phoneNumber' placeholder='phone number' {...register('phoneNumber', {
                    required: 'Phone number is required',
                    pattern: {
                        value: /^[0-9]{9}$/,
                        message: 'Enter a valid Phone Number'
                    }
                })} />
                {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber.message}</p>}
            </div>

            <div className='w-full flex flex-col items-center btn col-start-4 col-end-7'>
                <button className='bg-blue-600 w-full lg:w-72 p-4 text-white text-2xl font-semibold rounded-lg transition-all duration-300 ease-in-out hover:bg-black' type='submit'>Create an account</button>
            </div>
        </form>
    );
};

export default SignUpForm;