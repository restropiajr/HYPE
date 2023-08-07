import { useEffect, useContext } from 'react';
import {
  AppContext,
  ShoppingCartContext,
  totalCartQuantity,
  totalCartCost,
} from '../lib';
import { useNavigate, Link } from 'react-router-dom';
import { LoadingSpinner, ErrorMessage, MyCartList } from '../components';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function MyCart() {
  const { user } = useContext(AppContext);
  const {
    cart,
    isCartLoading,
    cartError,
    handleEmptyCart,
    updateQuantityError,
    setUpdateQuantityError,
    removeProductError,
    setRemoveProductError,
    emptyCartError,
    setEmptyCartError,
  } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    setUpdateQuantityError(null);
    setRemoveProductError(null);
    setEmptyCartError(null);
  }, [
    user,
    navigate,
    setUpdateQuantityError,
    setRemoveProductError,
    setEmptyCartError,
  ]);

  if (isCartLoading) {
    return <LoadingSpinner />;
  }

  if (cartError) {
    return <ErrorMessage error={cartError} />;
  }

  return (
    <>
      <div className="myCart-container w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center justify-center">
            <Link
              to="/products"
              className="mb-8 flex cursor-pointer items-center justify-center rounded p-2 transition duration-200 ease-in-out md:hover:bg-red-600">
              <FaArrowLeftLong size={30} color={'black'} />
              <p className="p-2 text-center text-xl font-bold">
                BACK TO PRODUCTS
              </p>
            </Link>
            <h2
              className={`text-3xl ${
                updateQuantityError || removeProductError || emptyCartError
                  ? 'mb-8'
                  : 'mb-0'
              }`}>
              MY CART
            </h2>
            {updateQuantityError && (
              <div className="flex w-full items-center justify-center md:w-1/3">
                <p className="mx-8 mb-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {updateQuantityError.message}
                </p>
              </div>
            )}
            {removeProductError && (
              <div className="flex w-full items-center justify-center md:w-1/3">
                <p className="mx-8 mb-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {updateQuantityError.message}
                </p>
              </div>
            )}
            {emptyCartError && (
              <div className="flex w-full items-center justify-center md:w-1/3">
                <p className="mx-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {updateQuantityError.message}
                </p>
              </div>
            )}
            {totalCartQuantity(cart) === 0 && (
              <p className="my-8 text-center text-xl">CART IS EMPTY</p>
            )}
          </div>
        </div>
        {totalCartQuantity(cart) > 0 && (
          <div className="row-two">
            <div className="col-one mb-8 flex w-full justify-center">
              <div className="flex w-5/6 flex-col rounded border-2 border-black md:w-2/6">
                <div className="flex justify-between">
                  <p className="p-4 text-start text-xl font-bold">
                    TOTAL NUMBER OF ITEMS
                  </p>
                  <p className="p-4 text-start text-xl font-bold text-red-600">
                    {`${totalCartQuantity(cart)}`}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="p-4 text-start text-xl font-bold">
                    TOTAL COST (USD)
                  </p>
                  <p className="p-4 text-start text-xl font-bold text-red-600">
                    {`$${totalCartCost(cart)}`}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="https://www.google.com/"
                    className="m-4"
                    target="_blank">
                    <button
                      type="button"
                      className="w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                      CHECKOUT
                    </button>
                  </Link>
                  <div className="m-4">
                    <button
                      type="button"
                      onClick={handleEmptyCart}
                      className="w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                      EMPTY CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <MyCartList />
      </div>
    </>
  );
}
