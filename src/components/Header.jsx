import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className='fixed w-full max-w-7xl flex bg-[#000a] justify-between px-4 items-center z-20 backdrop-blur'>
      <div>
        <img src={Logo} alt="ideaflow-logo" className='h-12' />
      </div>
      <div>
        <ul className='flex gap-4'>
          <li className=''><a className='font-light hover:underline hover:text-white text-white' href="#">Home</a></li>
          <li className=''><a className='font-light hover:underline hover:text-[#00c8ce] text-[#00c8ce]' href="#">We&apos;re Hiring!</a></li>
          <li className=''><a className='font-light hover:underline hover:text-white text-white' href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Header
