import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Light_Mode from './Main/Light_Mode'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Light_Mode/>
    </>
  )
}

export default App
