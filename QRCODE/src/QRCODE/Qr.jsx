import React from 'react'
import { useState } from 'react'
import QRCode from 'react-qr-code'
const Qr = () => {
const [qr,setqr]=useState("")
const [input,setinput]=useState("")

const QrGenerator=()=>{
    setqr(input)
    setinput("")
}


  return (
    <>
    <div>
        <input type="text" name='Qrcode' placeholder='Enter Text For QR Code' value={input} onChange={(e)=>setinput(e.target.value)} />
        <button onClick={()=>QrGenerator()} disabled={input==""?true:false} >GENERATE QR</button>
    </div>
    <QRCode
    value={qr} // needs a value to generate different Qr
    id='123345' // needs an id
    />
    </>
  )
}

export default Qr