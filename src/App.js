import './App.css';
import { useState } from 'react';
import  { Toaster } from 'react-hot-toast';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Model3 from './components/Model3';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import Shop from './components/Shop';
import CartItem from './components/CartItems'

const App = () => {

  const [cart, setCart] = useState([])

return (
  <div className="App">
    <NavBar cart={cart}/>
    <Routes> 
      <Route path='/' element = {<HomePage />} />
      <Route path='/Model3' element = {<Model3 />} />
      <Route path='/ModelX' element = {<ModelX />} />
      <Route path='/ModelY' element = {<ModelY />} />
      <Route path='/Shop' element = {<Shop 
      cart={cart}
      setCart={setCart}
      />} />
      <Route path='/CartItem' element = {<CartItem 
      cart={cart}
      setCart={setCart}
      />} />
    </Routes>
    <Toaster />
  </div>
  )
}

export default App;

