import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/Home'
import About from './views/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
     <About/>
    </>
  )
}

export default App
