import React from 'react'
import { useParams } from 'react-router-dom'
const Cloth = () => {
    const params = useParams() 
  return (
    <div>{params.id} for men</div>
  )
}

export default Cloth