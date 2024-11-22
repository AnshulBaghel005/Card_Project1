
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './compontes/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'

function App() {
  

  return (
    
     <>
    <div>
      <Navbar/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
     </>
  )
}

export default App
