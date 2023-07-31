import { Link } from 'react-router-dom';
import { FaBars, FaCartShopping } from 'react-icons/fa6';
import { useState, useContext } from 'react';
import { AppContext } from '../lib/AppContext';

export function NavBar() {
  const [isSideMenuOpen, setisSideMenuOpen] = useState(false);
  const { user, handleSignOut } = useContext(AppContext);

  function openSideMenu() {
    setisSideMenuOpen(true);
    document.documentElement.classList.add('overflow-hidden');
  }

  function closeSideMenu() {
    setisSideMenuOpen(false);
    document.documentElement.classList.remove('overflow-hidden');
  }

  function handleLogout() {
    closeSideMenu();
    handleSignOut();
  }

  return (
    <>
      <nav className="navbar-container w-full">
        <div className="row-one">
          <div className="col-one w-full flex justify-between fixed top-0 left-0 z-10 bg-white items-center">
            <div className="m-4 cursor-pointer" onClick={() => openSideMenu()}>
              <FaBars size={30} color="black" />
            </div>
            <Link to="/">
              <h1 className="text-5xl m-4 cursor-pointer">HYPE</h1>
            </Link>
            <Link to="/mycart">
              <div className="m-4">
                <FaCartShopping size={30} color="black" />
              </div>
            </Link>
          </div>
        </div>
        <div className="row-two">
          <div className="col-one">
            <div
              className={`overlay w-full fixed bg-gray-500 bg-opacity-50 inset-0 z-20 transition-transform duration-300 ease-in-out ${
                isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              onClick={() => closeSideMenu()}></div>
            <div
              className={`content w-3/4 md:w-96 fixed bg-white ring-gray-600 inset-0 z-30 transition-transform duration-300 ease-in-out ${
                isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}>
              <div className="row-one">
                <div className="col-one w-full flex justify-center">
                  <h2 className="text-3xl m-4">MENU</h2>
                </div>
              </div>
              <div className="row-two">
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
                    {!user ? (
                      <Link to="/signup">
                        <li
                          onClick={() => closeSideMenu()}
                          className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                          SIGN UP
                        </li>
                      </Link>
                    ) : (
                      <Link to="/mycart">
                        <li
                          onClick={() => closeSideMenu()}
                          className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                          MY CART
                        </li>
                      </Link>
                    )}
                    {!user ? (
                      <Link to="/login">
                        <li
                          onClick={() => closeSideMenu()}
                          className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                          LOGIN
                        </li>
                      </Link>
                    ) : (
                      <Link to="/">
                        <li
                          onClick={() => handleLogout()}
                          className="text-xl m-4 cursor-pointer p-2 rounded transition duration-200 ease-in-out md:hover:bg-red-600">
                          LOGOUT
                        </li>
                      </Link>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
