import { useLayoutEffect } from "react";

import { useState } from "react";


export default function useWindowResizeHook () {
    const [resizes,setresize]=useState({
        width:innerWidth,
        height:innerHeight,
    })
    
    
    function handlesize(){
        setresize({
            width:innerWidth,
            height:innerHeight
        })
    }
    useLayoutEffect(()=>{
    
    window.addEventListener('resize',handlesize)
    
    return()=>{window.removeEventListener('resize',handlesize)}
    },[resizes])
    
    
return resizes
    
    }


