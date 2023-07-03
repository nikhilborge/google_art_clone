import React, { useState,useEffect } from 'react'

const Navbar = () => {
  const [navshow, setNavshow] =useState(false)

  useEffect(()=> {

  },[navshow])
  const setNavshowHandler = () => {
    setNavshow(!navshow)
    console.log("clicked")
  }
  return (
<section className="overflow-hidden">
  <div className="flex items-center justify-between px-8 py-2 bg-slate-200 fixed top-0 left-0 right-0 z-50">
    <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-auto mr-14">
          <a href="#">
            <p className='font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg'>Google Arts & Culture</p>
          </a>
        </div>
      </div>
    </div>
    <div className="w-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-auto hidden lg:block">
          <ul className="flex items-center mr-10">
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg border-b-4 border-[#1A73E8]"><a to="/">Home</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="explore">Explore</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="/play">Play</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="/nearby">Nearby</a></li>
            <li className="font-heading text-gray-900 hover:text-gray-700 text-lg"><a to="/fav">Favorite</a></li>
          </ul>
        </div>
        <div className="w-auto hidden lg:block">
          <button className="group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
            <div className="">
              <button className="relative z-10 bg-[#1A73E8] px-6 py-2 rounded-lg text-white">Sign In</button>
            </div>
          </button>
        </div>
        
       

  <div className="w-auto lg:hidden transition-transform duration-300">
          <div onClick={() => setNavshowHandler()}>
            <svg className="navbar-burger text-gray-800" width="51" height="51" viewbox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" >
              <rect width="56" height="56" rx="28" fill="currentColor"></rect>
              <path d="M37 32H19M37 24H19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </div>
        </div>

      </div>
    </div>
  </div>
  
  <div className={`${navshow ? '' : 'hidden'} transition-transform duration-300  navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
    <nav className="relative z-10 px-9 py-8 bg-white h-full">
      <div className="flex flex-wrap justify-between h-full">
        <div className="w-full">
          <div className="flex items-center justify-between -m-2">
            <div className="w-auto p-2">
              <a className="inline-block" href="#">
                <img src="gradia-assets/logos/gradia-name-black.svg" alt=""/>
              </a>
            </div>
            <div className="w-auto p-2">
              <div className="navbar-burger cursor-pointer" onClick={() => setNavshowHandler()}>
                <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center py-8 w-full ">
          <ul>
            <li className="mb-4"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Features</a></li>
            <li className="mb-4"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Solutions</a></li>
            <li className="mb-4"><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Resources</a></li>
            <li><a className="font-heading font-medium text-lg text-gray-900 hover:text-gray-700" href="#">Pricing</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-end w-full">
          <div className="flex flex-wrap">
            <div className="w-full mb-3">
              <button className="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                <div className="py-2 px-5 rounded-10">
                  <p>Login</p>
                </div>
              </button>
            </div>
            <div className="w-full">
              <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                <div className="py-2 px-5 bg-white rounded-lg">
                  <p className="relative z-10">Start Free Trial</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</section>
  )
}

export default Navbar