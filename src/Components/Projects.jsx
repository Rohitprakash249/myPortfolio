import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import SingleProject from '../uiComponents/SingleProject'

export default function Projects(props) {
    useEffect(()=>{
        AOS.init({
            duration: 100000,
            delay:50000
        })
    })

    return (
        <>
        <section id="projects">
            <div data-aos="zoom-in" data-aos-duration="1000" className=' bg-purple-300 flex flex-col justify-center'>
               <div className='flex justify-center'>
               <p className='text-center text-[18px py-2 mt-10] uppercase border-b-2 w-[70px] text-white'>Projects</p>

               </div>
                
              <div className='flex flex-col'>
               <SingleProject url={"https://iili.io/2qkCCtj.png"} projectUrl={"https://drive.google.com/drive/folders/1oYjk3aKtcPodtT1bJS_4pqgdrpx3nFGR?usp=sharing"} nameOfProject={"worldwise"} featuresUsed={"context api, reducer , react router , useEffect , fetching data from api, useSearchParams , useState etc."} purpose={"one can mark places they visited on map, and can also add current location to the list of places they visited"} />

               <SingleProject url={"https://iili.io/2qkCqAu.png"} projectUrl={"https://rohitprakash249.github.io/usepopcorn/"} nameOfProject={"usePopcorn"} featuresUsed={"useState, useEffect, useRef, custom hooks, fetching data from Api. "} purpose={"one can search and rate movie and save them in their watch list."} />
               <SingleProject url={"https://iili.io/2qkCf9e.png"} projectUrl={"https://rohitprakash249.github.io/packitup/"} nameOfProject={"Pack it up"} featuresUsed={"useState, components, props"} purpose={"one can make a list of items they need to pack and they can mark and see what's packed and what's left to be packed."} />
               <SingleProject url={"https://iili.io/2qkC3c7.png"} projectUrl={"https://rohitprakash249.github.io/eatandsplit"} nameOfProject={"Split your bill"} featuresUsed={"useState, components, props."} purpose={"one can add their friends and split their bills with. its just a simple bill splitting app."} />
              </div> 
            </div>
            </section>
        </>
    )
}
