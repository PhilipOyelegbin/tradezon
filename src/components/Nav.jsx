import {useState} from 'react'
import harmbuger from '../assets/harmbuger.svg';
import close from '../assets/close.svg';

const Nav = () => {
  const [show, setShow] = useState(false)

  function handleMenuContent() {
    setShow(!show)
  }

  return (
    <header className='fixed w-screen top-0 bg-indigo-900 text-white flex justify-between items-center p-5 z-30 md:px-20'>
      <h1 className='flex items-center text-2xl font-bold'>Trade<ion-icon size='large' name="logo-deviantart"></ion-icon>on</h1>

      {/* menu button */}
      <button className="text-4xl cursor-pointer md:hidden block" onClick={handleMenuContent}>
        {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <img src={harmbuger} className={`md:hidden h-6 w-6 ${show ? 'hidden' : 'block'}`} alt="icon" />

        {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
        <img src={close} className={`h-6 w-6 ${show ? 'block' : 'hidden'}`} alt="icon" />
      </button>
      
      <nav id='menuContent' className={`fixed md:static bg-indigo-900 w-full md:w-auto md:py-0 py-4 top-12 transition-all ease-in-out duration-300 ${show ? 'right-0' : '-right-full'}`}>
        <ul className="md:flex md:items-center">
          <li><a href="#home" onClick={handleMenuContent}>Home</a></li>
          <li><a href="#hot-deals" onClick={handleMenuContent}>Hot Deals</a></li>
          <li><a href="#products" onClick={handleMenuContent}>Products</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
