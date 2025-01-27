import React from 'react'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Notfound from './Pages/Notfound';
import ProductDetail from './Pages/ProductDetail';
import Cart from './Pages/Cart';

const App = () => {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/about" element={<About/>} /> */}
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<Notfound/>} />
      <Route path="/product/:id" element={<ProductDetail/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App