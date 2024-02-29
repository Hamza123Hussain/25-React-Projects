import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.css'
const Main = ({url}) => {
const [data,setdata]=useState([])
const [loading,setloading]=useState(true)
const [scrollpercentage,setScrollPercentage]=useState(0)

const fetchdata=async(url)=>{
    try{
const response= await fetch(url)
const datas= await response.json()
console.log(datas.products)

if (datas){
    setdata(datas.products)
}

setloading(false)
}

catch(error){
    console.log(error)
    setloading(false)
}
}



useEffect(()=>{

fetchdata(url)
},)



    function handleScrollPercentage() {
        console.log(
          document.body.scrollTop,
          document.documentElement.scrollTop,
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight
        );
    
        const howMuchScrolled =
          document.body.scrollTop || document.documentElement.scrollTop;
    
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
    
        setScrollPercentage((howMuchScrolled / height) * 100);
      }


    useEffect(()=>{
        window.addEventListener('scroll',handleScrollPercentage)

        return()=>{window.removeEventListener('scroll',handleScrollPercentage)}
    },[scrollpercentage])  
    
  return (
    <div>
{loading?<div>loading............</div>:
<div><div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollpercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
    { 
        data?
            data.map((ele)=>(
                <div style={{border:'3px solid white',marginBottom:"30px"}}>
                 <h2>{ele.title}</h2>
           
                 </div>
  )):
        <div>NO DATA TO BE SHOWN</div>

    }
        </div>
    </div>}


        
    </div>
  )
}

export default Main