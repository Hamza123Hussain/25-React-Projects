import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Load_Data from './Loader/Load_Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Load_Data/>
    </>
  )
}

export default App
