import React, { useState } from "react"
import {motion} from 'framer-motion'
import { Header } from './Header'

export const Hero = () => {
  const [BannerImage, setBannerImage] = useState('https://www.mydomaine.com/thmb/u3hyKF8q868xl_lb0dK8764_VW4=/7360x0/filters:no_upscale():strip_icc()/NewportHome-034-93685cb6c6a64076880091a4800c8111.jpg');
  return (
    <div className=" h-screen">
      <div className=" absolute z-[-1] m-auto">
        <img src={BannerImage} className=" h-screen object-cover w-screen brightness-50" />
      </div> 
      <Header />
      <motion.div initial={{ opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
      transition={{duration:0.5}}>
      <div className=" flex flex-col justify-center items-center h-[700px] ">
        <p className=" text-[25px] sm:text-[20px] lg:text-[40px] text-center font-semibold text-white ">Professional Exterior and Interior House Painter </p>
        <p className=" text-white p-8 text-[18px] text-center">Call or email for a free estimate to achieve a luminous quality</p>
        <button className=" cursor-pointer border-0 bg-blue-300 px-7 py-5 rounded-2xl
         font-semibold text-2xl transition-all hover:bg-blue-400"><a href='#contact'>Get a free Estimate</a></button>
      </div>
      </motion.div>
    </div>
  )
}
