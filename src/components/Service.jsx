import React from 'react'
import Cabinet from '../assets/cabinet-img-1.webp'
import Drywall from '../assets/drywall.jpeg'
import Exterior from '../assets/exterior.jpeg'
import Interior from '../assets/interior.jpeg'
import Staining from '../assets/staining.jpg'
import Washing from '../assets/washing.jpg'

export const Service = () => {
  return (
    <section id='service' className=' bg-white h-auto py-10'>
    <p className=' flex justify-center p-6 font-bold text-[50px]'>Service We Offer</p>
    <div className=' flex justify-center items-center'>
    {/* grid code here */}
    <div className=' grid grid-cols-3 gap-8 py-4'>
    {/* each card */}
      <div className=' w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className=' w-[100%] object-cover overflow-hidden' src={Interior} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Interior painting</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
      {/* each card */}
      <div className='  w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className=' w-[100%] object-cover overflow-hidden' src={Exterior} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Exterior Painting</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
      {/* each card */}
      <div className=' w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className='h-[62%] w-[100%] object-cover overflow-hidden' src={Cabinet} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Cabinet painting</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
      {/* each card */}
      <div className=' h-97  w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className=' w-[100%] object-cover overflow-hidden' src={Drywall} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Drywall Repair</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
      {/* each card */}
      <div className='  w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className=' w-[100%] object-cover overflow-hidden' src={Staining} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Staining</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
      {/* each card */}
      <div className=' w-[370px] bg-blue-300 rounded overflow-hidden transition-transform duration-300 hover:-translate-y-[10px] hover:scale-110'>{/* display card */}
        <img className='h-61.5 w-[100%] object-cover overflow-hidden' src={Washing} />
        <div className='flex flex-col justify-center items-center py-1 gap-3'>
        <p>Pressure Washing</p>
        <button className=' cursor-pointer border-0 bg-blue-500 px-5 py-5 rounded'><a href='#contact'>Free Quote</a></button>
        </div>
      </div>
    </div>
    </div>

    </section>
  )
}

