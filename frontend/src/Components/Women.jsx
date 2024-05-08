import React from 'react'
import Navbar from './Navbar'
import womenclothes from '../../public/womenclothes.json';
import Cards from './Cards';
function Women() {
  return (
    <div>
        <Navbar />
        <div className='mt-20 grid grid-cols-1 md:grid-cols-3'>
     
     {womenclothes.map((item)=>(<Cards item={item} key={item.id}/>)) }
     
  </div>
    </div>
  )
}

export default Women