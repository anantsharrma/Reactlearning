import React from 'react'

const Card = ({ elem, idx }) => {
  return (
    <div key={idx}>
        <a href={elem.url} target='_blank' >
        <div className='h-40 w-44 overflow-hidden rounded-xl'><img src={elem.download_url} alt={elem.author} className='h-full w-full object-cover' /></div>
        <h3 className='font-bold text-white text-lg'>{elem.author}</h3>
        </a>
      </div>
  )
}

export default Card