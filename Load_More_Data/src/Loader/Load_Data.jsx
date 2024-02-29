import React, { useEffect, useState } from 'react'
import './Styles.css'
const Load_Data = () => {

const [count,setcount]=useState(10)
const [products,setproducts]=useState([])
const [loading,setloading]=useState(true)
const [disabled,setdisabled]=useState(false)





const fecthdata=async()=>{
try{
setloading(false)
    const response = await fetch(
        `https://dummyjson.com/products?limit=${count}&skip=0`) // increaseing the number of items according to the count
     const data= await response.json()
     
  console.log(data.products)

     if(data){
        setproducts(prev=>([...prev,...data.products])) // storing the new data of products
     }
console.log(products.length)

}
catch(error){
    console.log(error);
    setloading(false)
}
}

useEffect(()=>{
fecthdata()
if(count==100){setdisabled(true)}
},[count])



  return (
    <div>
        {loading? <div>Loading...........</div>: 
             <div className="load-more-container">
             <div className="product-container">
               {products && products.length
                 ? products.map((item) => (
                     <div className="product" key={item.id}>
                       <img src={item.thumbnail} alt={item.title} />
                       <p>{item.title}</p>
                     </div>
                   ))
                 : null}
             </div>
             </div>
        }
<div >
  <button onClick={() => {  setcount(prev => prev + 10); }} disabled={disabled}>Load More</button>
</div>
      {
disabled? <div>TOTAL LIMIT REACHED. NO MORE PRODUCTS AVALIABLE</div>:""
      } 

    </div>
  )
}

export default Load_Data