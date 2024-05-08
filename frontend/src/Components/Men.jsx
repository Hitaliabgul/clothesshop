import React from 'react'
import Navbar from './Navbar'
import menclothes from '../../public/menscolthes.json'
import Cards from './Cards'
function Men() {
  return (
    <>
    <div>
      <Navbar />
      <div className='mt-20 grid grid-cols-1 md:grid-cols-3'>
     
     {menclothes.map((item)=>(<Cards item={item} key={item.id}/>)) }
     
  </div>
    </div>
    
    </>
  )
}

export default Men