
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './clientshow/home'
import About from './clientshow/About'
import Contact from './clientshow/Contact'
import Service from './clientshow/Service'
import Register from './clientshow/Register'
import Login from './clientshow/Login'
import { Error } from './clientshow/Error'
import Navbar from './components/Navbar'
import Logout from './clientshow/logout'


function App() {
 

  return (
    <>
         <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/service' element={<Service/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/logout' element={<Logout/>}/>
              <Route path="*"      element={<Error/>}/>
            </Routes>
         </BrowserRouter>
      
    </>
  )
}

export default App
