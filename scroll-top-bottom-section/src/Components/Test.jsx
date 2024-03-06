import React, { useRef } from 'react'
import UseFetchHook from './UseFetchHook'

const Test = () => {
  const { user, loading } = UseFetchHook("https://dummyjson.com/products?limit=100")
console.log(user)
const bottomref=useRef(null)

const scrolltop=()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:'smooth'
    })
}

const scrollbottom=()=>{
bottomref.current.scrollIntoView({ behavior: "smooth" });                     
}
  return (
   
  <>
  <button onClick={scrollbottom}>SCROLL TO BOTTOM</button>
  {
    loading?<h1>loading............</h1>:

    user.map((ele)=>{
        return <div key={ele.id}>
            <h5>{ele.title}</h5>
        </div>
    })
  }
    <button onClick={scrolltop}>SCROLL TO TOP</button>
<h3 ref={bottomref}>I AM THE BOTTOM OF THE PAGE</h3>
  
  </>
  )
}

export default Test
