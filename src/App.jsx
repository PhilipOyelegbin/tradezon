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
        <Products/>
      </Mainpage>
      <Footer/>
    </>
  )
}

export default App
