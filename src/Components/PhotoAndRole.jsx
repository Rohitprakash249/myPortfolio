import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

export default function PhotoAndRole(props) {
  useEffect(()=>{
    AOS.init({
        duration: 500,
        delay:100
    })
})

    return (
        <>
          {/* <div className='bg-[#F2F2F2] flex justify-center items-center py-3'> */}
          
           <div  className='bg-[#9CD3D9] flex justify-center items-center py-6'> 
             <div className=' w-[80%] flex items-center justify-center'>
              <img data-aos="zoom-in" data-aos-duration="1000"  className='h-[120px] hover:h-[125px] duration-150 shadow-xl sm:h-[200px] sm:hover:h-[220px] rounded-full my-3 mx-3 float-left ' src='https://iili.io/2qkIgwX.md.jpg'></img>
              <div data-aos="zoom-in" className='mx-3 uppercase sm:text-[30px]'>
                 <p>Hello,</p>
              <p className='block'>I'm Rohit</p>
                
                <p className='block w-full'>Full-Stack web-Developer.</p></div>
             
            </div>
          </div>
        </>
    )
}
