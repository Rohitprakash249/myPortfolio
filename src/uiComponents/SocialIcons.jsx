import React,{useEffect} from 'react'
import AOS from "aos"
import "aos/dist/aos.css"

import SingleIcon from './SingleIcon'
export default function SocialIcons(props) {
 

    return (
        <> 
        <div >
        <div  className='flex items-center justify-center flex-wrap bg-slate-800 px-2 py-3'>
            <SingleIcon url={"https://iili.io/2qknP2I.png"}/>
            <SingleIcon url={"https://iili.io/2qknskX.png"}/>
            <SingleIcon url={"https://iili.io/2qknLpn.png"}/>
            <SingleIcon url={"https://iili.io/2qknZIs.png"}/>
            <SingleIcon url={"https://iili.io/2qkn4rN.png"}/>
            <SingleIcon url={"https://iili.io/2qknr1p.png"}/>
            <SingleIcon url={"https://iili.io/2qkni7t.png"}/>
            </div>
        </div>
          
        </>
    )
}
