import React from 'react'

const Hero = () => {
  return (
    <header className='h-screen bg-hero bg-no-repeat bg-center bg-cover bg-fixed' id='home'>
        <div className='h-full bg-black bg-opacity-60 flex flex-col justify-center'>
            <h2 className='w-4/5 md:w-3/5 text-2xl font-bold md:text-4xl text-white text-center mb-5 mx-auto'>We independently review everything we recommend. Explore our product line curated just for you!</h2>
            <a className='bg-white hover:bg-slate-200 text-indigo-500 text-center text-2xl w-3/5 md:w-2/5 py-5 rounded-lg mx-auto' href="https://payporte.com/dresses.html?source=banner&key=10&u=1261" target={"_blank"}>Go Shopping</a>
        </div>
    </header>
  )
}

export default Hero