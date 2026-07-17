import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Children from './Pages/Children'
import Women from './Pages/Women'
import Cloth from './Pages/Cloth'
const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='men/:id' element={<Cloth />} />
          <Route path='women' element={<Women />} />
          <Route path='children' element={<Children />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App