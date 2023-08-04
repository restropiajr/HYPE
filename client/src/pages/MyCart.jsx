import { useEffect, useState, useContext } from 'react';
import {
  AppContext,
  cartFetcher,
  totalCartQuantity,
  totalCartCost,
  emptyCartFetcher,
} from '../lib';
import { useNavigate, Link } from 'react-router-dom';
import {
  LoadingSpinner,
  // MyCartList,
} from '../components';
import { FaArrowLeftLong } from 'react-icons/fa6';

export function MyCart() {
  const [cart, setCart] = useState();
  const { user, token } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    async function loadCart() {
      try {
        const loadedCart = await cartFetcher(token);
        setCart(loadedCart);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCart();
  }, [user, navigate, token]);

  async function handleClick(event) {
    try {
      setIsLoading(true);
      await emptyCartFetcher(token);
      setCart([]);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
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
            <h2 className="text-3xl">MY CART</h2>
            {cart.length === 0 && (
              <p className="my-8 text-center text-xl">CART IS EMPTY</p>
            )}
          </div>
        </div>
        {cart.length > 0 && (
          <div className="row-two">
            <div className="col-one mb-8 flex w-full justify-center">
              <div className="flex w-5/6 flex-col rounded border-2 border-black">
                <div className="flex justify-between">
                  <p className="p-2 text-start text-xl font-bold">
                    TOTAL NUMBER OF ITEMS
                  </p>
                  <p className="p-2 pr-4 text-start text-xl font-bold text-red-600">
                    {`${totalCartQuantity(cart)}`}
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="p-2 text-start text-xl font-bold">
                    TOTAL COST (USD)
                  </p>
                  <p className="p-2 pr-4 text-start text-xl font-bold text-red-600">
                    {`$${totalCartCost(cart)}`}
                  </p>
                </div>
                <div className="flex justify-center">
                  <Link
                    to="https://www.google.com/"
                    className="m-2"
                    target="_blank">
                    <button
                      type="button"
                      className="w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                      CHECKOUT
                    </button>
                  </Link>
                  <div className="m-2">
                    <button
                      type="button"
                      onClick={handleClick}
                      className="w-full rounded border-2 border-black p-4 font-bold transition duration-200 ease-in-out md:hover:bg-red-600">
                      EMPTY CART
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <MyCartList cart={cart} /> */}
      </div>
    </>
  );
}
