import React from 'react';
import { useForm } from 'react-hook-form';

const Newsletter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const subscribe = (data) => {
        console.log(data);    
    }

    return (
        <form action="" onSubmit={(e) => handleSubmit(subscribe)(e)} className='flex flex-col justify-center align-middle' >
            <div className='w-[410px] max-w-[500px] flex items-center'>
                <input className={`appearance-none block w-full border-transparent bg-slate-200 px-3 py-2 text-xl my-1 rounded-tl-md rounded-bl-md border-solid  ${errors.email ? 'border-red-500 border-2 text-red-500' : ''}`} type="text" id='email' placeholder='Enter Your Email' {...register('email', {
                    required: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/  })} />
                <button className='transition-all duration-200 ease-in-out text-center flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-medium h-[48px] rounded-tr-md rounded-br-md px-3'>Subscribe</button>
            </div>
            {errors.email && <p className='text-red-500'>Please enter a valid email</p>} 
        </form>
    );
};

export default Newsletter;