import React  from 'react'

function Navbar() {
   
    
    const navitems =(
       <>
       <li><a href='/'>Home</a></li>
            <li><a>Shop </a></li>
            <li><a href='womenclothes'>Women</a></li>
            <li><a href='menclothes'>Men </a></li>
            <li><a href='contact'>Contact</a></li>
            <li><a>About </a></li>
            </>
    )
    return (
       
        <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }} >
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                          {navitems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-md md:text-xl  ">FashionFlow</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                     {navitems}
                    </ul>
                </div>
                <div className='navbar-end px-6'>
                    <img className='m-2 h-[15px] w-[15px] md:h-[20px] w-[22px]' src="https://cdn-icons-png.flaticon.com/128/151/151910.png"  alt="error" />
                    <img className='m-2 h-[15px] w-[15px] md:h-[20px] w-[22px]' src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png"  alt="error" />
            
                    <img className='m-2 h-[15px] w-[15px] md:h-[20px] w-[22px]' src="https://cdn-icons-png.flaticon.com/128/456/456283.png"  alt="error" />
                       </div>
            </div>
            <hr />
        </div>

    )
}

export default Navbar