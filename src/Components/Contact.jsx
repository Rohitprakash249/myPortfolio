import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import Input from '../uiComponents/input'
import TitleOfInput from '../uiComponents/titleOfInput'

export default function Contact(props) {
    

    return (
        <><div id="contact" className='w-full'>
            <div className=''> 
                <div className='flex justify-center items-center text-gray-500 bg-[#BCF2F6] py-5 px-2'>  
                <div  data-aos="flip-left" data-aos-duration="1500"  className='contactForm border-2 border-[#97eaf0] shadow-lg px-3 py-2 w-[80%] rounded-2xl'>
                <p className='text-[20px] text-center'>Contact Form</p>
                    <TitleOfInput titleOfInput={"Full Name"} />
                  <Input placeholder={"Enter your Name"}/>
                  <TitleOfInput titleOfInput={"Email Address"} />
                  <Input placeholder={"Enter your Email Address."}/>
                  <TitleOfInput titleOfInput={"Subject"} />
                  <Input placeholder={"Subject"}/>
                  <TitleOfInput titleOfInput={"Message"} />
                  <div className='block '> 
                    <textarea  className='w-full rounded-lg px-2 focus:outline-[#97eaf0] focus:outline-1 ' placeholder='Enter your message here.'></textarea>
                    {/* <input className=' h-[100px] sm:w-[500px] rounded-lg px-3' placeholder='Enter your message.'></input> */}
                    </div>
                 
                  {/* <Input placeholder={"Enter your Message"}/> */}
                   
                    <button className='bg-[#97eaf0] hover:scale-105 duration-100 w-full uppercase border text-[15px] border-gray-700 my-3 py-1  px-2 rounded-xl rounded-lg px-3mx-2'>Submit</button>
                </div>
            </div></div>
           
        </div>
            
        </>
    )
}
