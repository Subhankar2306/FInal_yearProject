import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './views/home/Home'
import About from './views/about/About'
import Contact from './views/contact/contact'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import SignIn from './views/auth/SignIn'
import SignUp from './views/auth/SignUp'


function App() {
  const [count, setCount] = useState(0)

  return (
  
    <Router>
       
       <Routes>
        <Route path='/' element={<Layout/>}>  
           <Route index element={<Home/>}/>
           <Route path='/about' element={<About/>} />
           <Route path='/contact' element={<Contact/>} />
        </Route>

      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/*' element={<h2>404 error</h2>}/>
       </Routes>

     </Router>
   
  )
}

export default App
