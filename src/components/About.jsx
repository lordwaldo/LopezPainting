import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)

export const About = () => {
  const [BannerImage, setBannerImage] = useState('https://www.deehechinteriors.com/wp-content/uploads/2024/11/interior-painting-services.jpg');
  return (
    <>
      <section id='about' className='bg-white min-h-[500px]'>
        <p className=' flex justify-center p-10 font-bold text-[50px]'>About</p>
        <div className=' flex flex-col lg:flex-row gap-8 lg:gap-12 '>
          <div className=' w-full lg:w-2/5 font-semibold text-4xl pl-40'>
            <p>Why hire us?</p><br></br>
            <p>Here's why i'm the right painter for your home...</p>
          </div>
          <div className=' w-full lg:w-3/5 font-normal text-2xl'>
            <p className=' px-50 tracking-widest'>My commitment to meticulous preparation, clean lines, and
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
      <div className=' relative m-auto'>
        <img src={BannerImage} className='w-screen h-[400px] object-cover brightness-30'/>
        <div className=' absolute inset-0 text-white flex flex-col justify-center items-center text-[20px] gap-4'>
          <p>The process of how we work,</p>
          <p>we ensure that your painting project will be handle properly and
          your home will be treated with care.</p>
          <ul className=' flex flex-row gap-20 text-[40px] pt-4 pl-36'>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-paint-roller" /><p className=' text-[19px] ml-[-25px] '>We Paint To<br></br> Your Liking</p></li>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-handshake" /><p className=' text-[19px] ml-[-25px] '>We Respect<br></br> Your Property</p></li>
            <li className=' flex flex-col'><FontAwesomeIcon icon="fa-solid fa-comments" /><p className=' text-[19px] ml-[-32px] '>Communication<br></br> Is Key</p></li>
            <li></li>
          </ul>
        </div>
      </div>
      </section>
    </>
  )
}
