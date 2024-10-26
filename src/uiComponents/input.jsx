import React from 'react'

export default function Input({placeholder}) {
    

    return (
        <>
              <input className='block w-full rounded-lg text-[15px] px-3 py-2 sm:w-[500px] hover:border transition-transform duration-5000 hover:border-[#97eaf0] duration-100 focus:outline-[#97eaf0] ' placeholder={placeholder}></input>
        </>
    )
}
