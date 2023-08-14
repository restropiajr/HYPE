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
    handleCheckOut,
    updateQuantityError,
    setUpdateQuantityError,
    removeProductError,
    setRemoveProductError,
    emptyCartError,
    setEmptyCartError,
    checkOutError,
    setCheckOutError,
  } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    setUpdateQuantityError(null);
    setRemoveProductError(null);
    setEmptyCartError(null);
    setCheckOutError(null);
  }, [
    user,
    navigate,
    setUpdateQuantityError,
    setRemoveProductError,
    setEmptyCartError,
    setCheckOutError,
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
                updateQuantityError ||
                removeProductError ||
                emptyCartError ||
                checkOutError
                  ? 'mb-8'
                  : 'mb-0'
              }`}>
              MY CART
            </h2>
            {updateQuantityError && (
              <div className="flex w-full items-center justify-center md:w-1/2">
                <p className="mx-8 mb-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {updateQuantityError.message}
                </p>
              </div>
            )}
            {removeProductError && (
              <div className="flex w-full items-center justify-center md:w-1/2">
                <p className="mx-8 mb-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {removeProductError.message}
                </p>
              </div>
            )}
            {emptyCartError && (
              <div className="flex w-full items-center justify-center md:w-1/2">
                <p className="mx-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {emptyCartError.message}
                </p>
              </div>
            )}
            {checkOutError && (
              <div className="flex w-full items-center justify-center md:w-1/2">
                <p className="mx-8 text-justify text-xl text-red-600 md:mx-0">
                  ERROR: {checkOutError.message}
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
              <div className="flex w-5/6 flex-col rounded border-2 border-black lg:w-2/6">
                <div className="flex justify-between">
                  <p className="p-4 text-start text-xl font-bold">
                    TOTAL NUMBER OF ITEMS
                  </p>
                  <p className="p-4 text-start text-xl font-bold text-red-600">
                    {String(totalCartQuantity(cart))}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="p-4 text-start text-xl font-bold">
                    TOTAL COST (USD)
                  </p>
                  <p className="p-4 text-start text-xl font-bold text-red-600">
                    {`$${totalCartCost(cart).toFixed(2)}`}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    onClick={handleCheckOut}
                    type="button"
                    className="m-4 w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                    CHECKOUT
                  </button>
                  <button
                    type="button"
                    onClick={handleEmptyCart}
                    className="m-0 my-4 mr-4 w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                    EMPTY CART
                  </button>
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
