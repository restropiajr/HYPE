import { useEffect, useState, useContext } from 'react';
import { AppContext, cartFetcher } from '../lib';
import { useNavigate, Link } from 'react-router-dom';
import { LoadingSpinner, MyCartList } from '../components';

export function MyCart() {
  const [cart, setCart] = useState();
  const { user, token } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [cartError, setCartError] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    async function loadCart() {
      try {
        const loadedCart = await cartFetcher(token);
        setCart(loadedCart);
      } catch (error) {
        setCartError(error);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(true);
    loadCart();
  }, [user, navigate, token]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="myCart-container w-full">
        <div className="row-one">
          <div className="col-one mb-8 mt-24 flex w-full flex-col items-center justify-center">
            <h2 className="text-3xl">MY CART</h2>
            {cartError && (
              <div className="mt-8 flex items-center justify-center">
                <p className="text-center text-xl">{cartError.message}</p>
                <Link to="/products">
                  <h2 className="absolute left-[50%] top-[40%] z-0 -translate-x-1/2 -translate-y-1/2 rounded bg-red-600 p-2 text-center text-xl text-black md:text-3xl">
                    SHOP NOW
                  </h2>
                </Link>
              </div>
            )}
          </div>
        </div>
        <MyCartList cart={cart} />
      </div>
    </>
  );
}
