import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Main from './Scroll/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Main url={'https://dummyjson.com/products?limit=100&skip=0'}/>
    </>
  )
}

export default App
