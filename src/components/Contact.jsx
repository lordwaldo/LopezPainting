import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

export const Contact = () => {
  return (
    <section id='contact' className=' bg-blue-500 h-auto py-5 text-white pb-10'>
    <div className=' text-[25px] flex flex-col items-center justify-center py-10 gap-5'>
      <p className='font-bold text-[30px] sm:text-[25px] lg:text-[50px]'>Contact Us</p>
      <p className=' text-[18px] lg:text-[25px] text-center'>We are here to assist you in any questions, painting estimate, and feedback
       that you may have.</p>
      <p className=' text-[18px] lg:text-[25px] text-center'>Please don't hesitate to contact us below.</p>
    </div>
      <ul className=' flex flex-row gap-15 lg:gap-35 lg:text-[40px] pt-4 justify-center items-center'>
        <li className=' flex flex-col justify-center items-center'><FontAwesomeIcon icon="fa-solid fa-phone" />
        <p className='text-[20px]'>Phone</p><button onClick={()=>window.open('tel:+6786561455')} className='cursor-pointer transition-all hover:bg-blue-400 border-0 bg-blue-300 px-7 py-5 rounded-2xl lg:text-[25px] text-black'>Call Us</button></li>
        <li className=' flex flex-col justify-center items-center'><FontAwesomeIcon icon="fa-solid fa-envelope" />
        <p className='text-[20px]'>Email</p><button onClick={()=>window.open('mailto:waldo20033@gmail.com')} className='cursor-pointer transition-all hover:bg-blue-400 border-0 bg-blue-300 px-7 py-5 rounded-2xl lg:text-[25px] text-black'>Email Us</button></li>
      </ul>
    </section>
  )
}
