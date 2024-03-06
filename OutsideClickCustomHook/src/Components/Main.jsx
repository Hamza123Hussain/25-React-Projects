import React, { useRef, useState } from 'react'
import ClickOutside from './ClickOutside'

const Content = () => {

    const [showcontent,setshowcontent]=useState(false)
   
const ref=useRef()
ClickOutside(ref,()=>setshowcontent(false))
console.log(ref)
  return (
    <div>
      {
        showcontent?
        <div ref={ref}>
        <h1>I AM THE CONTENT THAT IS BEING SHOWN</h1>
        <h1>Too Close me A custom hook will be made </h1>
        <h1>That Custom Hook will give my reference and then close me </h1>
        </div>
        :
        <button onClick={()=>setshowcontent(true)}>SHOW CONTENT</button>


      }


    </div>
  )
  
}

export default Content
