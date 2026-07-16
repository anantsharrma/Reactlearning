import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const App = () => {
  const [Userdata, setUserdata] = useState([])
  const [Index, setIndex] = useState(1)
  let printUserdata = <div className='flex justify-center items-center h-screen w-full'>
    <h3 className='text-gray-500 text-sm '>Loading...</h3>
  </div>
  useEffect(() => {
    getData()
  }, [Index])
  if (Userdata.length > 0) {
    printUserdata = Userdata.map(
      (elem,idx) => {
      return <div key={idx}>
        <a href={elem.url} target='_blank' >
        <div className='h-40 w-44 overflow-hidden rounded-xl'><img src={elem.download_url} alt={elem.author} className='h-full w-full object-cover' /></div>
        <h3 className='font-bold text-white text-lg'>{elem.author}</h3>
        </a>
      </div>
  })}

  const getData = async () => {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=15`)
      setUserdata(response.data)
      console.log(Userdata)
  }

  return (
    <div className='bg-black text-white h-screen w-full p-7 overflow-auto'>
      <div className='flex flex-wrap gap-5 py-3'>
        {printUserdata}
      </div>
      <div className='flex gap-5 justify-center items-center'>
        <button
        style={{opacity: Index === 1 ? 0.5 : 1}} 
        className='bg-yellow-500 text-white font-bold text-lg py-2 px-4 rounded-full active:scale-90'
        onClick={() => {
            if(Index > 1) {
            setIndex(Index - 1)
            setUserdata([])
          }
        }}>Prev</button>
        <h3>Page {Index}</h3>
        <button className='bg-yellow-500 text-white font-bold text-lg py-2 px-4 rounded-full active:scale-90'
        onClick={() => {
          setIndex(Index + 1)
          setUserdata([])
        }}>Next</button>
      </div>
    </div>
  )
}

export default App