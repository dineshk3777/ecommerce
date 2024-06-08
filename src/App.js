import React from 'react';
// import Counter from './Components/Counter'
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<Product></Product>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
