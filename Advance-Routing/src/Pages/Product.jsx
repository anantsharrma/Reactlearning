import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div className='flex justify-center gap-10 py-4'>
            <Link to='/product/men' className='font-semibold text-xl'>Men</Link>
            <Link to='/product/women' className='font-semibold text-xl'>Women</Link>
            <Link to='/product/children' className='font-semibold text-xl'>Children</Link>
        </div>
        <Outlet />
    </div>
  )
}

export default Product