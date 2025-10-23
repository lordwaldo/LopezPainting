import React, {useState} from 'react'
import Logo from '../assets/Painter-logo.png'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div id='home' className='bg-white shadow-sm'>
      {/* Desktop Navbar */}
      <div className='flex justify-between items-center px-4 sm:px-8 lg:px-30 py-1.5  mx-auto'>
        {/* Logo */}
        <img src={Logo} className='h-16 md:h-[75px] w-auto' alt='Painter Logo' />
        
        {/* Desktop Navigation - Hidden on mobile */}
        <div className='hidden md:flex gap-8 lg:gap-30 px-4 lg:px-30 text-black'>
          <a 
            href='#home' 
            className='text-lg cursor-pointer transition-all rounded-full hover:font-bold hover:bg-blue-400 px-4 py-2 lg:px-5 scroll-smooth'
          >
            Home
          </a>
          <a 
            href='#about' 
            className='text-lg cursor-pointer transition-all rounded-full hover:font-bold hover:bg-blue-400 px-4 py-2 lg:px-5 scroll-smooth'
          >
            About Us
          </a>
          <a 
            href='#service' 
            className='text-lg cursor-pointer transition-all rounded-full hover:font-bold hover:bg-blue-400 px-4 py-2 lg:px-5 scroll-smooth'
          >
            Service
          </a>
          <a 
            href='#contact' 
            className='text-lg cursor-pointer transition-all rounded-full hover:font-bold hover:bg-blue-400 px-4 py-2 lg:px-5 scroll-smooth'
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button 
          className='md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path 
              strokeLinecap='round' 
              strokeLinejoin='round' 
              strokeWidth={2} 
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t`}>
        <div className='px-4 pt-2 pb-4 space-y-2'>
          <a 
            href='#home' 
            className='block text-lg cursor-pointer transition-all rounded-lg hover:font-bold hover:bg-blue-400 px-4 py-3 scroll-smooth'
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href='#about' 
            className='block text-lg cursor-pointer transition-all rounded-lg hover:font-bold hover:bg-blue-400 px-4 py-3 scroll-smooth'
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </a>
          <a 
            href='#service' 
            className='block text-lg cursor-pointer transition-all rounded-lg hover:font-bold hover:bg-blue-400 px-4 py-3 scroll-smooth'
            onClick={() => setIsMenuOpen(false)}
          >
            Service
          </a>
          <a 
            href='#contact' 
            className='block text-lg cursor-pointer transition-all rounded-lg hover:font-bold hover:bg-blue-400 px-4 py-3 scroll-smooth'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  )
}
