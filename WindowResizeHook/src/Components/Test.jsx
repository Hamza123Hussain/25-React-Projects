import React from 'react'
import WindowResizeHook from './WindowResizeHook'

const Test = () => {
    const {width,height}=WindowResizeHook()


  return (
    <div>
      <h1>WIDTH OF THE WINDOW {width}</h1>
      <h1>HEIGHT OF THE WINDOW {height}</h1>
    </div>
  )
}

export default Test
