import React from 'react'

export default function SingleIcon({url}) {
    

    return (
        <>
            <div className='mx-2 hover:scale-125 duration-100'>
                <a href='http://gooogle.com'>
                <img className='h-[40px w-[24px]' src={url}></img>
                </a>
            </div>
        </>
    )
}
