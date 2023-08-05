import { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartFetcher } from './cartFetcher';
import { addToCartFetcher } from './addToCartFetcher';
import { emptyCartFetcher } from './emptyCartFetcher';
import { AppContext } from './AppContext';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const { user, token } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [cartError, setCartError] = useState();
  const navigate = useNavigate();

  async function loadCart(token) {
    try {
      const loadedCart = await cartFetcher(token);
      setCart(loadedCart);
      setCartError(null);
    } catch (error) {
      setCartError(error);
    } finally {
      setIsCartLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      setIsCartLoading(true);
      loadCart(token);
    }
  }, [user, token]);

  async function handleAddToCart(event, productId) {
    event.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }
    try {
      setIsCartLoading(true);
      await addToCartFetcher(event, token, productId);
      await loadCart(token);
      navigate('/mycart');
    } catch (error) {
      alert(error);
      navigate('/mycart');
    } finally {
      setIsCartLoading(false);
    }
  }

  async function handleEmptyCart() {
    try {
      setIsCartLoading(true);
      await emptyCartFetcher(token);
      await loadCart(token);
    } catch (error) {
      alert(error);
    } finally {
      setIsCartLoading(false);
    }
  }

  const contextValue = {
    cart,
    isCartLoading,
    cartError,
    handleAddToCart,
    handleEmptyCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
