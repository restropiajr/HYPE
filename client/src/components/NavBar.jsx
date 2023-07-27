import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaCartShopping, FaXmark } from 'react-icons/fa6';
import { useState } from 'react';
import './NavBar.css';

export function NavBar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="container">
          <div className="row">
            <div className="w-full flex justify-between border-b-4 border-black">
              <div
                className="m-4 cursor-pointer"
                onClick={() => setisSideMenuOpen(true)}>
                <FaBars size={25} color="black" />
              </div>
              <Link to="home">
                <h1 className="text-4xl m-2 cursor-pointer">HYPE</h1>
              </Link>
              <Link to="mycart">
                <div className="m-4">
                  <FaCartShopping size={25} color="black" />
                </div>
              </Link>
            </div>
          </div>
        </nav>
        <section className="navbar-side-menu">
          <div
            className={`navbaroverlay bg-gray-500 bg-opacity-50 absolute inset-0 z-0 transition-transform duration-300 ease-in-out ${
              isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={() => setisSideMenuOpen(false)}></div>
          <div
            className={`content w-10/12 bg-white ring-gray-600 absolute inset-0 z-10 transition-transform duration-300 ease-in-out ${
              isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className="container">
              <div className="row">
                <div className="w-full flex justify-start border-b-4 border-black">
                  <div
                    className="m-4 cursor-pointer"
                    onClick={() => setisSideMenuOpen(false)}>
                    <FaXmark size={25} color="black" />
                  </div>
                  <Link to="home" className="flex-grow flex justify-center">
                    <h1 className="text-4xl m-2 cursor-pointer">HYPE</h1>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="w-full flex justify-start">
                  <ul>
                    <li className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out hover:bg-red-500">
                      <Link to="catalog">PRODUCTS</Link>
                    </li>
                    <li className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out hover:bg-red-500">
                      <Link to="catalog">CONTACT</Link>
                    </li>
                    <li className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out hover:bg-red-500">
                      <Link to="catalog">SIGN UP</Link>
                    </li>
                    <li className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out hover:bg-red-500">
                      <Link to="catalog">LOGIN</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <Outlet />
    </>
  );
}
