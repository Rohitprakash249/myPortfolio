import React from 'react'

export function Button({nameOfButton , linkTo}) {
    

    return (
        <>
            <a href={linkTo}><button  className='hover:bg-[#dd4460] hover:shadow-md hover:scale-110 duration-100 text-white text-black px-3 py-1 rounded-lg mx-1 sm:mx-3' >{nameOfButton}</button></a>
        </>
    )
}
{/* <>
<button  className='hover:bg-[#dd4460] hover:shadow-md hover:scale-110 duration-100 text-white text-black px-3 py-1 rounded-lg mx-1 sm:mx-3' >{nameOfButton}</button>
</> */}