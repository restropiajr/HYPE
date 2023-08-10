import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useContext, useEffect } from 'react';
import { ShoppingCartContext, AppContext } from '../lib';
import { LoadingSpinner, ErrorMessage } from '../components';
import { useNavigate } from 'react-router-dom';

export function CheckoutSuccess() {
  const { handleEmptyCart, emptyCartError, isCartLoading } =
    useContext(ShoppingCartContext);
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
    handleEmptyCart();
  }, [user, navigate, handleEmptyCart]);

  if (isCartLoading) {
    return <LoadingSpinner />;
  }

  if (emptyCartError) {
    return <ErrorMessage error={emptyCartError} />;
  }

  return (
    <div className="mt-24 flex flex-col items-center justify-center">
      <h2 className="mb-8 text-center text-3xl">THANK YOU FOR YOUR ORDER</h2>
      <p className="mb-8 text-center text-xl font-bold">
        IF YOU HAVE ANY QUESTIONS, PLEASE EMAIL US AT:
      </p>
      <a
        className="mb-8 text-center text-xl font-bold"
        href="mailto:storehype@gmail.com">
        storehype@gmail.com
      </a>
      <Link
        to="/products"
        className="flex cursor-pointer items-center justify-center rounded p-2 transition duration-200 ease-in-out md:hover:bg-red-600">
        <FaArrowLeftLong size={30} color={'black'} />
        <p className="p-2 text-center text-xl font-bold">CONTINUE SHOPPING</p>
      </Link>
    </div>
  );
}
