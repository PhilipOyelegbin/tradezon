import React from 'react'
import Nav from './components/Nav.jsx'
import Mainpage from './components/Mainpage.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Carousel from './components/Carousel.jsx'
import Products from './components/Products.jsx'

const App = () => {
  return (
    <>
      <Nav/>
      <Mainpage>
        <Hero/>
        <Carousel />
        <div className='px-3 my-3'>
          <script type="text/javascript" src="https://konga.postaffiliatepro.com/scripts/bo3dhla?k_id=MoonShot&amp;k_bid=4c65bc86"></script>
        </div>
        <Products/>
      </Mainpage>
      <Footer/>
    </>
  )
}

export default App
