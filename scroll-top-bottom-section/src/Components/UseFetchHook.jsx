import { useEffect } from "react";
import { useState } from "react";

export default function UseFetchHook(url){
const [user,setuser]=useState([])
const [loading,setloading]=useState(true)

const fetchdata=async(url)=>{
    try {
        
const response= await fetch(url)
const data = await response.json()

if(data && data.products.length>1){
setuser(data.products)
setloading(false)
}

    } catch (error) {
        console.log(error)

    }
}


useEffect(()=>{

    fetchdata(url)
},[])

return{user,loading}

}