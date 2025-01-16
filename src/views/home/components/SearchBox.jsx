import React from 'react'
import { MdLocalTaxi } from "react-icons/md";
import { MdMyLocation } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";

function SearchBox() {
  return (
    <div className='flex flex-col justify-center items-center relative top-[-35px]  ' >
        
        <form action="" className='flex flex-wrap justify-center items-center p-3 border gap-2  rounded-full bg-white shadow-md '>

           <div className='search-group rounded-l-full' >
               <MdLocalTaxi className='text-3xl text-gray-600'/>
              <input type="text" className='search-input   border-l-gray-300 focus:border-l-[#e84e1a] ' placeholder='From'/>

           </div>
           <div className='search-group rounded-r-full '>
              <input type="text" className='search-input  border-r-gray-300 focus:border-r-[#e84e1a] ' placeholder='To'/>
              <button className='border-none outline-none'>

               <FaSearchLocation className='text-2xl text-gray-600'/>
              </button>

           </div>
          
        </form>

    </div>
  )
}

export default SearchBox