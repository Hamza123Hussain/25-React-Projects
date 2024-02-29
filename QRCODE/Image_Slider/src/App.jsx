import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './Image_Slider/Image_slider'


function App() {


  return (
    <>
<ImageSlider  url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"20"}/>
    </>
  )
}

export default App
