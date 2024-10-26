import React from 'react'

export default function SingleSkill({url,nameOfSkill}) {
    

    return (
        <>
                            <div className='text-black flex justify-start  dura items-center my-2 hover:scale-110 duration-300'>
                   <img className='h-[50px] w-[50px]  mx-2' src={url} alt={nameOfSkill}></img>
                   <p className='hover:bg-[#f0c2b6] text-[15px] px-3 rounded-lg'>{nameOfSkill}</p>
                </div>
        </>
    )
}
