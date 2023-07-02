import React from 'react'

const Navbar = () => {
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
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg border-b-4 border-gray-500"><a to="/">Home</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="explore">Explore</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="/play">Play</a></li>
            <li className="font-heading mr-9 text-gray-900 hover:text-gray-700 text-lg"><a to="/nearby">Nearby</a></li>
            <li className="font-heading text-gray-900 hover:text-gray-700 text-lg"><a to="/fav">Favorite</a></li>
          </ul>
        </div>
        <div className="w-auto hidden lg:block">
          <button className="group relative p-0.5 font-heading block w-full md:w-auto text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
            <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
            <div className="py-2 px-5 bg-white rounded-lg">
              <p className="relative z-10">Sign In</p>
            </div>
          </button>
        </div>
        
      </div>
    </div>
  </div>
  
</section>
  )
}

export default Navbar