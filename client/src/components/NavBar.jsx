import { Link } from 'react-router-dom';
import { FaBars, FaCartShopping } from 'react-icons/fa6';
import { useState } from 'react';

export function NavBar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);

  function openSideMenu() {
    setisSideMenuOpen(true);
    document.documentElement.classList.add('overflow-hidden');
  }

  function closeSideMenu() {
    setisSideMenuOpen(false);
    document.documentElement.classList.remove('overflow-hidden');
  }

  return (
    <>
      <nav className="navbar-container w-full">
        <div className="navbar-row flex">
          <div className="w-full flex justify-between fixed top-0 left-0 z-10 bg-white">
            <div className="m-4 cursor-pointer" onClick={() => openSideMenu()}>
              <FaBars size={25} color="black" />
            </div>
            <Link to="/">
              <h1 className="text-4xl m-4 cursor-pointer">HYPE</h1>
            </Link>
            <Link to="/mycart">
              <div className="m-4">
                <FaCartShopping size={25} color="black" />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <section className="navbar-sidemenu-container">
        <div className="navbar-sidemenu-row flex">
          <div
            className={`overlay w-full fixed bg-gray-500 bg-opacity-50 inset-0 z-20 transition-transform duration-300 ease-in-out ${
              isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            onClick={() => closeSideMenu()}></div>
          <div
            className={`content w-3/4 md:w-96 fixed bg-white ring-gray-600 inset-0 z-30 transition-transform duration-300 ease-in-out ${
              isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
            <div className="content-row flex">
              <div className="w-full flex justify-center">
                <h1 className="text-3xl m-4">MENU</h1>
              </div>
            </div>
            <div className="content-row flex">
              <div className="w-full flex justify-start">
                <ul>
                  <Link to="/">
                    <li
                      onClick={() => closeSideMenu()}
                      className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                      HOME
                    </li>
                  </Link>
                  <Link to="/catalog">
                    <li
                      onClick={() => closeSideMenu()}
                      className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                      PRODUCTS
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li
                      onClick={() => closeSideMenu()}
                      className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                      CONTACT
                    </li>
                  </Link>
                  <Link to="/signup">
                    <li
                      onClick={() => closeSideMenu()}
                      className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                      SIGN UP
                    </li>
                  </Link>
                  <Link to="/login">
                    <li
                      onClick={() => closeSideMenu()}
                      className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                      LOGIN
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
