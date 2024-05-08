import React from 'react'

function Cards({item}) {
  return (
    <div> <div className='mt-4 my-3 p-3 flex '>
    <div className="card w-92 bg-base-100 shadow-xl px-3 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title">
               {item.name}
                <div className="badge badge-secondary">NEW</div>
            </h2>
            <p></p>
            <div className="card-actions justify-between">
                <div className="badge badge-outline">{item.price}</div>
                <div className="hover:bg-pink-500 hover:text-white cursor-pointer px-2 py-1 rounded-full border-[2px] ">Buy Now</div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Cards