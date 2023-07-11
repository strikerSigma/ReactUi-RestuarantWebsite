import React, { useState } from 'react'

const Header = () => {
  const [displaymenu,setDisplayMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="logo"><img src='./src/assets/Logo.png'/></div>
      <ul className="flex space-x-4 menu">
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Home</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">About Us</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Menu</a></li>
        <li><a className="text-gray-800 hover:text-gray-600 font-semibold text-xl pr-4" href="#">Contact</a></li>
      </ul>
      <div className='md:hidden cursor-pointer' onClick={()=>{setDisplayMenu(true)}}><img src='./src/assets/BurgerMenu.png'/></div>
      
      {displaymenu &&
       (<div className='MenuElements top-0 left-0 p-48'>
       {/* <svg class="crossmark addClass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="crossmark__circle addClass" cx="26" cy="26" r="25" fill="none"/>
          <path class="cross__path cross__path--right addClass" fill="none" d="M16,16 l20,20" />
          <path class="cross__path cross__path--left addClass" fill="none" d="M16,36 l20,-20" />
        </svg> */}
        <div className='w-5 absolute top-4 right-10 cursor-pointer' onClick={()=>{setDisplayMenu(false)}}><img src='./src/assets/close.png'/></div>
    <a className='menu-link'>Home</a>
    <a className='menu-link'>About</a>
    <a className='menu-link'>Menu</a>
    <a className='menu-link'>Contact</a>
        </div>)
}
    </nav>
  )
}

export default Header