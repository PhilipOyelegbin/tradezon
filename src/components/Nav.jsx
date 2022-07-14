import React, {useState} from 'react'
import harmbuger from '../images/harmbuger.svg';
import close from '../images/close.svg';

const Nav = () => {
  const [show, setShow] = useState(false)

  const handleMenuContent = () => {
    setShow(!show)
  }

  return (
    <nav className='fixed w-screen top-0 bg-indigo-900 text-white flex justify-between items-center p-5 md:px-10'>
        <h1 className='flex items-center text-2xl font-bold'>Trade<ion-icon size='large' name="logo-deviantart"></ion-icon>on</h1>

        {/* menu button */}
        <button className="text-4xl cursor-pointer md:hidden block" onClick={handleMenuContent}>
          {/* Icon when menu is closed. Heroicon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
          <img src={harmbuger} className={`md:hidden h-6 w-6 ${show ? 'hidden' : 'block'}`} alt="icon" />

          {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
          <img src={close} className={`h-6 w-6 ${show ? 'block' : 'hidden'}`} alt="icon" />
        </button>
        
        <ul id='menuContent' className={`fixed md:flex md:items-center md:static bg-indigo-900 w-full md:w-auto md:py-0 py-4 top-12 transition-all ease-in-out duration-300 ${show ? 'right-0' : '-right-full'}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#hot-deals">Hot Deals</a></li>
            <li><a href="#products">Products</a></li>
        </ul>
    </nav>
  )
}

export default Nav