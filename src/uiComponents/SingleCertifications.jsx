import React from 'react'

export default function SingleCertifications({url,description, Author}) {
    

    return (
        <>
            <div className='flex my-2 mx-4 items-center hover:scale-105 duration-100'>
                        <img className='h-[70px] px-2 ' src={url}></img>
                        <div className='mx-2 px-2'>
                        <p className='text-[15px] sm:text-[20px]'>{description}</p>
                        <p className='text-blue-600 text-[15px]'>{Author && "By"} {Author}</p>
                        </div>
                        
                    </div>
        </>
    )
}
