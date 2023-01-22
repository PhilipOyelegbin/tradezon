const Hero = () => {
  return (
    <section className='h-screen bg-hero bg-no-repeat bg-center bg-cover bg-fixed' id='home'>
      <div className='h-full bg-gray-800 bg-opacity-60 flex flex-col justify-center text-slate-200'>
          <h2 className='w-4/5 md:w-3/5 text-2xl font-bold md:text-4xl text-center mb-5 mx-auto'>We independently review everything we recommend. Explore our product line curated just for you!</h2>
          <a className='bg-slate-100 hover:bg-slate-300 text-indigo-500 text-center text-xl w-1/2 md:w-1/5 py-2 rounded-lg mx-auto' href="https://payporte.com/dresses.html?source=banner&key=10&u=1261" target={"_blank"}>Go Shopping</a>
      </div>
    </section>
  )
}

export default Hero