import React from 'react'



const Modal = ({setmodal,modalopen}) => {
  return (
    <div className='modal'>


    <div className='modal-content'>
        <div>MODAL</div>


    <button onClick={()=>{setmodal(!modalopen)}}>CLOSE MODAL</button>
    </div>

    </div>
  )
}

export default Modal