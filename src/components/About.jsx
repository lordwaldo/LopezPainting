import React, { useState } from 'react'
import Blue from '../assets/blue.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const About = () => {
  const [BannerImage, setBannerImage] = useState(Blue);
  return (
    <>
      <section id='about' className='bg-white min-h-[500px]'>
        <p className=' flex justify-center p-10 font-bold lg:text-[50px] sm:text-[20px] text-[35px]'>About</p>
        <div className=' lg:flex lg:flex-row gap-8 lg:gap-12 flex flex-col justify-center items-center'>
          <div className=' lg:w-2/5 font-semibold text-[20px] sm:text-[18px] lg:text-4xl lg:pl-40 sm:px-5 px-10 text-center'>
            <p>Why hire us?</p><br></br>
            <p>Here's why i'm the right painter for your home...</p>
          </div>
          <div className=' lg:w-3/5 font-normal lg:text-2xl sm:text-[15px] text-[18px]'>
            <p className=' px-15 sm:px-10 lg:px-50 lg:tracking-widest text-center'>My commitment to meticulous preparation, clean lines, and
             flawless finishes ensures a beautiful, long-lasting result you'll love.
             Let me handle the details. With my expertise in color consultation and
              surface preparation, I'll help you avoid common pitfalls and ensure
               a result that truly enhances your home.</p>
          </div>
        </div>
        <div className=' flex justify-center p-13'>
          <button className=' flex flex-col justify-center items-center cursor-pointer border-0 bg-blue-300 px-7 py-5 rounded-2xl
         font-semibold text-2xl transition-all hover:bg-blue-400'><a href='#contact'>free estimate</a></button>
        </div>
      </section>

      {/* display image with text */}
      <section className=' bg-gray-300'>
      <div className=' relative m-auto text-center'>
        <img src={BannerImage} className='w-screen h-[400px] object-cover brightness-30'/>
        <div className=' absolute inset-0 text-white flex flex-col justify-center items-center text-[17px] text-center lg:text-[20px] gap-4'>
          <p>The process of how we work,</p>
          <p>we ensure that your painting project will be handle properly and
          your home will be treated with care.</p>
          <ul className=' flex flex-row gap-20 text-[30px] lg:text-[40px] pt-4 pl-20 lg:pl-36 text-center'>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-paint-roller" /><p className=' text-[14px] lg:text-[19px] lg:ml-[-25px] '>We Paint To<br></br> Your Liking</p></li>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-handshake" /><p className='text-[14px] lg:text-[19px] lg:ml-[-25px] '>We Respect<br></br> Your Property</p></li>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-comments" /><p className='text-[14px] lg:text-[19px] lg:ml-[-15px] ml-[-10px] '>Feedback<br></br> Is Key</p></li>
            <li></li>
          </ul>
        </div>
      </div>
      </section>
    </>
  )
}
