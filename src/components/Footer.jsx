import React from 'react'

export const Footer = () => {
  return (
    <section className=' h-auto bg-blue-300 py-8'>
        <p className=' flex justify-center items-center text-[25px] py-2 font-bold'>Lopez Painting</p>
        <ul className=' flex flex-row gap-10 p-5 justify-center items-center'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About Us</a></li>
            <li><a href='#service'>Service</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <p className=' flex justify-center items-center'>Copyright &copy;2025 made by Waldo Lopez </p>
        <a className=' flex justify-center items-center font-bold' href='https://lordwaldo.github.io/portfolio.html'>Click to see my Portfolio</a>
    </section>
  )
}
