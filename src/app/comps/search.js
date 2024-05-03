"use client";

import React, { useState } from 'react';
import { FaMagnifyingGlass } from "react-icons/fa6";
import { CiMicrophoneOn } from "react-icons/ci";


const Search = () => {
    // some data
    const staticData = [
        {id: 1, name: "USA"},
        {id: 2, name: "United Kingdom"},
        {id: 3, name: "Italy"},
        {id: 4, name: "Maldives"},
        {id: 5, name: "Nigeria"}
    ]

    const [searchQuery, setSeachQuery] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchQuery === "") {
            setSearchResult([]);
        } else {
            const fileteredResult = staticData.filter(item => 
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
              );
              setSearchResult(fileteredResult);
        }
        
    };

    return (
        <>
            <form action="" method="POST" onSubmit={handleSearch} className="relative max-w-[1000px] mb-4 flex items-center">
                <input type="text" id="search" name="search" placeholder="Search" value={searchQuery} onChange={(e) => setSeachQuery(e.target.value)} className=" h-14 w-[400px] max-w-[400px] rounded-tl-lg rounded-bl-lg pl-3" />
                <button type='submit'><FaMagnifyingGlass className='text-2xl p-2 bg-slate-400 h-14 w-12 rounded-tr-lg rounded-br-lg' /></button>
                <CiMicrophoneOn className='absolute right-14 text-3xl cursor-pointer' />
            </form>

            <div className='mb-4 w-full'>
                {/* display searh result */}
                {searchResult.map(item => (
                    <div className='bg-white w-full' key={item.id} >
                        <h1 className='mb-2'>{item.name}</h1>
                    </div>
                ))}
            </div>
        </>
        
    );
};

export default Search;