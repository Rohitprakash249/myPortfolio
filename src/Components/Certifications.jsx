import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import SingleCertifications from '../uiComponents/SingleCertifications'
export default function Certifications(props) {
    
    useEffect(()=>{
        AOS.init({
            duration: 300,
            delay:50
        })
    })

    return (
        <><section id="certificates">
             <div  data-aos="fade-up"  data-aos-duration="1500" className='bg-[#F29191] flex flex-col'>
                <div className='flex justify-center text-white text-4xl uppercase w-[auto]'>
                <p className='border-b-2 text-[18px] pt-3' >Certifications</p>
                </div>
               
                {/* <div className='flex flex-wrap my-3'> */}
                <div className='flex flex-wrap  my-3'>
                    <SingleCertifications url={"https://iili.io/2qv7KzB.md.png"} description={"Completed 1 month internship as full stack developer"} />
                    <SingleCertifications url={"https://iili.io/2qvoQdN.md.png"} description={"The Ultimate React Course 2024: React, Next.js, Redux & More "} Author={"Jonas Schmedtmann"}/>
                    <SingleCertifications  url={"https://iili.io/2qvoQdN.md.png"} description={"The Complete 2024 Web Development Bootcamp"} Author={"Angela Yu"} />
                    <SingleCertifications  url={"https://iili.io/2qvoQdN.md.png"} description={"Node.js, Express, MongoDB & More: The Complete Bootcamp by Jonas Schmedtmann "} Author={"Jonas Schmedtmann"} />
                </div>
             </div>
             </section>
        </>
    )
}
