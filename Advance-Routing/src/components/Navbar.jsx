import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-cyan-700 flex justify-between items-center p-3 text-white'>
        <h3 className='text-2xl px-3 font-bold'>Anant</h3>
        <div className='flex gap-3 font-bold text-lg'>
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/product' >Product</Link>
        </div>
    </div>
  )
}

export default Navbar