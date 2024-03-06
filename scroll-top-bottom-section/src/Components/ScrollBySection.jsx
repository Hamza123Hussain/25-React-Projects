import React, { useRef, useState } from 'react'

const ScrollBySection = () => {
    const bottomref=useRef(null)
    const [number,setnumber]=useState(1)
    const scrollSection=()=>{
        bottomref.current.scrollIntoView({ behavior: "smooth" });                     
        }

        const data = [
            {
              label: "First Card",
              style: {
                width: "100%",
                height: "600px",
                background: "red",
              },
            },
            {
              label: "Second Card",
              style: {
                width: "100%",
                height: "600px",
                background: "grey",
              },
            },
            {
              label: "Third Card",
              style: {
                width: "100%",
                height: "600px",
                background: "blue",
              },
            },
            {
              label: "Fourth Card",
              style: {
                width: "100%",
                height: "600px",
                background: "green",
              },
            },
            {
              label: "Fifth Card",
              style: {
                width: "100%",
                height: "600px",
                background: "orange",
              },
            },
          ];
    
        
        


  return (
    <div>
        <input value={number} onChange={(e)=>setnumber(e.target.value)} type="number" />
        <button onClick={scrollSection}>GO TO SECTION</button>
      {
        data.map((ele,index)=>{
            index+=1
            console.log(index)
            return <div key={index} style={ele.style}>
                <div ref={index==number?bottomref:null}>
                <h1>{ele.label}</h1>
                </div>


            </div>
        })
      }
    </div>
  )
}

export default ScrollBySection
