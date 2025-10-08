import React from 'react'
import Logo from '../assets/Painter-logo.png'

export const Header = () => {

  return (
    <div id='home' className='flex justify-between items-center px-30 py-1.5 bg-white'>
      <img src={Logo} className=' h-[75px]' />
      <div className='flex gap-28 px-30 text-black'>
        <a href='#home' className=' text-lg cursor-pointer transition-all rounded-full hover:font-bold
         hover:bg-blue-400 px-5 py-1 scroll-smooth'>Home</a>
        <a href='#about'  className=' text-lg cursor-pointer transition-all rounded-full hover:font-bold
         hover:bg-blue-400 px-5 py-1 scroll-smooth'>About Us</a>
         <a href='#service'  className=' text-lg cursor-pointer transition-all rounded-full hover:font-bold
         hover:bg-blue-400 px-5 py-1 scroll-smooth'>Service</a>
        <a href='#contact' className=' text-lg cursor-pointer transition-all rounded-full hover:font-bold
         hover:bg-blue-400 px-5 py-1 scroll-smooth'>Contact</a>
      </div>
    </div>
  )
}
