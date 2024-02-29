import React, { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({item}) {
const [showchildren,setshowchildren]=useState(false)

const displaychildren=()=>{
    setshowchildren(!showchildren)
}
  return (
    <li> 
      <div className="menu-item">
   <h1>{item.label}</h1>
   
   {item.children? showchildren?
<FaMinus onClick={()=>displaychildren()}/>:
<FaPlus onClick={()=>displaychildren()}/>
:""}


      </div>

   
{
    item.children&&item.children.length>0&&showchildren?
    <MenuList list={item.children}/>:''
}


    </li>
  );
}
