import React from 'react'

export default function SingleProjects({url, nameOfProject,featuresUsed,purpose,projectUrl}) {
    

    return (
        <>
         <div className='flex flex-wrap hover:scale-105 duration-125 items-center justify-center my-5 border mx-3 mb-8 py-3 border-purple-800 sm:mx-12 shadow-2xl rounded-2xl'>
            <div className='rounded'>  <img className=' h-[300px] py-2 rounded-2xl' src={url}></img></div>
          
            <div>
            <p className='px-4 py-2 text-purple-800 uppercase mx-3'> {nameOfProject}</p>
            <p className='block px-4 py-2 mx-3'>{purpose}</p>
            <p className='px-4 py-2 mb-3 mx-3'><span className='text-purple-900 uppercase'>utilizing :-  </span>{featuresUsed}</p>
            <a  className='px-4 mx-7 text-purple-800 border border-purple-900  rounded  py-1 ' href={projectUrl}>Click me!</a>
            </div>
          
         </div>
        </>
    )
}
