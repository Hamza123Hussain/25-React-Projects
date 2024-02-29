import React from 'react'
import { useState } from 'react'
import Modal from './Modal'

import './Modal.css'


const Parent = () => {
    const [modalopen,setmodal]=useState(false)

const openmodal=()=>{
    setmodal(!modalopen)
}


  return (
   <>
   <span>Parent</span>
   <button onClick={()=>openmodal()}>OPEN MODAL</button>
   {modalopen?<Modal modalopen setmodal={setmodal}/>:null}
   
   </>
  )
}

export default Parent