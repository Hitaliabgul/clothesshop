import React from 'react'
import Cards from './Cards'
import womenclothes from '../../public/womenclothes.json';
function Home() {

  const women = womenclothes.filter((womenclothes) => womenclothes.name === "T-shirt")
  console.log(women);

  return (
    <>
      <div className='mt-20 mx-6 py-4 mb-5' >
        <h3 className='font-sans bold m-0 opacity-25 inline'>Home --</h3>
        <h3 className='inline cursor-pointer'>whishlist</h3>
      </div>

      <div className='mt-3 grid grid-cols-1 md:grid-cols-3'>

        {women.map((item) => (<Cards item={item} key={item.id} />))}

      </div>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
        <div className='order-2 md:order-1 w-full md:w-1/2 '>
          <h4 className='text-xl opacity-45'>Our Newsletter</h4><br />
          <h1 className='text-3xl font-bold'>Subscribe to Our </h1>
          <h1 className='text-3xl font-bold'>Newsletter for Updates on </h1>
          <h1 className='text-3xl font-bold'>Our Latest Collection</h1><br />
          <h4 className='text-xl opacity-45'>Get 20% off on your first order just by subscribing to our newsletter</h4> <br />
          <label className="input input-bordered flex items-center gap-2"><br />
            <input type="text" className="grow" placeholder="Your business email" />
            <span className=" bg-blue-600 px-4 py-1 md:px-6 md:py-2 rounded-md cursor-pointer">Start</span>
          </label>
        </div>
        
        <div className=' order-1'>
          <img className=' h-[200px] w-[400px] md:h-[300px] md:w-[500px] mx-3 md:mx-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI51DxWh4jp8UI3iGrvbobxGlfxsOxWFZ5y9mjWd65iQ&s" alt="" />
        </div>
        </div>
      
    </>
  )
}

export default Home