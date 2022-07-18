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
        <div>
          <a href="https://www.konga.com/category/automotive-industrial-2051?utm_source=affiliates&utm_medium=web&utm_term=acquisition&utm_content=09_15_2020&utm_campaign=acquisition&amp;k_id=MoonShot&amp;k_bid=125e451d" rel="nofollow" target="_top"><img src="//konga.postaffiliatepro.com/accounts/default1/bo3dhla/125e451d.jpg" alt="" title="" width="728" height="90" /></a><img style="border:0" src="https://konga.postaffiliatepro.com/scripts/io3dhla?k_id=MoonShot&amp;k_bid=125e451d" width="1" height="1" alt=""/>
        </div>
        <Products/>
      </Mainpage>
      <Footer/>
    </>
  )
}

export default App
