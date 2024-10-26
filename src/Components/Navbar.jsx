import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { Button } from '../uiComponents/Button'

export function Navbar() {
 
    useEffect(()=>{
        AOS.init({
            duration: 9000,
            delay:1000
        })
    })

    return (
        <>
        <section >
        <div data-aos="fade-down" data-aos-duration="1500" >
        <div  className='h-[auto] border-b-[2px] border-[#c0304a]   bg-[#F2385A] py-3 flex justify-center flex-wrap'>
        <Button nameOfButton={"Home"} />
       
        <Button linkTo={"#skills"} nameOfButton={"Skills"} />
        <Button linkTo={"#certificates"} nameOfButton={"Certifications"} />
        <Button linkTo={"#projects"} nameOfButton={"Projects"} />
        <Button linkTo={"#contact"} nameOfButton={"Contact"} />
      
        </div>
        
        </div>
        </section>
        </>
    )
}
