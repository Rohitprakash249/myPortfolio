import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import SingleSkill from '../uiComponents/singleSkill'

export default function Skills(props) {
    
    // useEffect(()=>{
    //     AOS.init({
    //         duration: 900,
    //         delay:100
    //     })
    // })
    return (
        <>
            <div id="skills"  className='bg-[#F2D7D0] py-5'>
            {/* <div className='bg-[#F2D7D0] flex justify-center flex-wrap py-5'> */}
            <div data-aos="fade-right" className='block flex justify-center'>
            <h1 className='uppercase block text-gray-700 font-mono text-center text-[20px] sm:text-[30px] inline-block  px-2 border-b-2 border-gray-500 '>Skills</h1>

            </div>
                <div className='mx-4 my-2 px-4 py-3 sm:justify-between sm:flex sm:flex-wrap  rounded-3xl border-2 border-slate-500'>
                   <div className='text-slate-700 text-lg border-b-2  border-slate-500 font-bold sm:block sm:w-full sm:flex sm:my-3 sm:text-2xl sm:justify-center
                   '>Front-End</div>
                   
                   <SingleSkill url={"https://iili.io/2qvqMMl.png"} nameOfSkill={"HTML"}/>
                    <SingleSkill url={"https://iili.io/2qkIPMG.png"} nameOfSkill={"CSS"}/>
                    <SingleSkill url={"https://iili.io/2qvBXWv.png"} nameOfSkill={"Bootstrap"}/>
                    <SingleSkill url={"https://iili.io/2qkIQcl.md.png"} nameOfSkill={"JavaScript"}/>
                    <SingleSkill url={"https://iili.io/2qkIiPf.png"} nameOfSkill={"Material Ui"}/>
                    <SingleSkill url={"https://iili.io/2qkIS9I.png"} nameOfSkill={"React Js"}/>
                    <SingleSkill url={"https://iili.io/2qvCkEQ.png"} nameOfSkill={"Redux"}/>
                    <SingleSkill url={"https://iili.io/2qvn7cB.png"} nameOfSkill={"Tailwind CSS"}/>
                 
                   
                </div>
                <div className='mx-4 my-2 px-4 py-3 sm:justify-between sm:flex sm:flex-wrap  rounded-3xl border-2 border-slate-500'>
                <div className='text-slate-700 text-lg border-b-2  border-slate-500 font-bold sm:block sm:w-full sm:flex sm:my-3 sm:text-2xl sm:justify-center
                   '>Back-End</div>
                <SingleSkill url={"https://iili.io/2qkIwMJ.png"} nameOfSkill={"Node Js"}/>
                    <SingleSkill url={"https://iili.io/2qkIN6v.png"} nameOfSkill={"Express"}/>
                    <SingleSkill url={"myPortfolio/mongodb.svg"} nameOfSkill={"MongoDb"}/>
                    <SingleSkill url={"https://iili.io/2qkIkap.png"} nameOfSkill={"Restful Api"}/>

                </div>
               </div>
        </>
    )
}
