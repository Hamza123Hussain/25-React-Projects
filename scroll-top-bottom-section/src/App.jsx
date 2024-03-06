import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Components/Test'
import ScrollBySection from './Components/ScrollBySection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <ScrollBySection/>
    </>
  )
}

export default App
