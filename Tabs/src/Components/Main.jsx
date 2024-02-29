import React from 'react'
import { useState } from 'react'

const Main = ({tabs}) => {
 const[currentindex,setcurrentindex]=useState(1);

 const handleindex=(index)=>{
    setcurrentindex(index)
    // console.log(index);
 }



const TabElements=tabs.map((ele,index)=>(
 <div key={ele.id}>
        <h2 style={{border:'4px solid red',backgroundColor:'black'}}> <button onClick={()=>handleindex(ele.id)} style={{border:'none'}}> TAB {ele.id+1} </button></h2>
      {currentindex==ele.id?  <h3>{ele.label}</h3>:""}  
    </div>
))
// console.log(tabs)


  return (
    <>
  

    <div style={{display:'flex',gap:'40px'}}>
        {TabElements}
    </div>
    <h1>{tabs[currentindex]&&tabs[currentindex].label}</h1> {/** Here we are only loading the content of the tab that has been selected */}

    </>
  )
}

export default Main