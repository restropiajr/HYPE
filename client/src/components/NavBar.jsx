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
          <div className="col-one fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white">
            <div className="m-4 cursor-pointer" onClick={() => openSideMenu()}>
              <FaBars size={30} color="black" />
            </div>
            <Link to="/">
              <h1 className="m-4 cursor-pointer text-5xl">HYPE</h1>
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
              className={`overlay fixed inset-0 z-20 w-full bg-gray-500 bg-opacity-50 transition-transform duration-300 ease-in-out ${
                isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
              onClick={() => closeSideMenu()}></div>
            <div
              className={`content fixed inset-0 z-30 w-3/4 bg-white ring-gray-600 transition-transform duration-300 ease-in-out md:w-96 ${
                isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
              }`}>
              <div className="row-one">
                <div className="col-one flex w-full justify-center">
                  <h2 className="m-4 text-3xl">MENU</h2>
                </div>
              </div>
              <div className="row-two">
                <div className="flex w-full justify-start">
                  <ul>
                    <Link to="/">
                      <li
                        onClick={() => closeSideMenu()}
                        className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                        HOME
                      </li>
                    </Link>
                    <Link to="/products">
                      <li
                        onClick={() => closeSideMenu()}
                        className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                        PRODUCTS
                      </li>
                    </Link>
                    <Link to="/contact">
                      <li
                        onClick={() => closeSideMenu()}
                        className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                        CONTACT
                      </li>
                    </Link>
                    {!user ? (
                      <Link to="/signup">
                        <li
                          onClick={() => closeSideMenu()}
                          className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                          SIGN UP
                        </li>
                      </Link>
                    ) : (
                      <Link to="/mycart">
                        <li
                          onClick={() => closeSideMenu()}
                          className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                          MY CART
                        </li>
                      </Link>
                    )}
                    {!user ? (
                      <Link to="/login">
                        <li
                          onClick={() => closeSideMenu()}
                          className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
                          LOGIN
                        </li>
                      </Link>
                    ) : (
                      <Link to="/">
                        <li
                          onClick={() => handleLogout()}
                          className="m-4 cursor-pointer rounded p-2 text-xl transition duration-200 ease-in-out md:hover:bg-red-600">
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
