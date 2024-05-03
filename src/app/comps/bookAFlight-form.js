import React from 'react';
import { useForm } from 'react-hook-form';
import { RxTriangleDown } from "react-icons/rx";


const BookAFlightForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const bookAFlight = (data) => {
        console.log(data); 
        reset();   
    }


    return (
        <form action="#" method='POST' onSubmit={handleSubmit(bookAFlight)}> 
           <p>Latest update: We now fly beyond the shores of Nigeria at best price and perfect security</p>
           <div>
            <div>
                <label htmlFor="departure"></label>
                <select name="departure" id="departure">
                    <option value=""></option>
                </select>
            </div>
           </div>
        </form>
    );
};

export default BookAFlightForm;