import { createContext, useEffect, useState, useContext } from 'react';
import { cartFetcher, totalCartQuantity, AppContext } from './lib';
import { LoadingSpinner } from '../components';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { token } = useContext(AppContext);

  useEffect(() => {
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
  }, [token]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const totalQuantity = totalCartQuantity(cart);

  return (
    <ShoppingCartContext.Provider value={totalQuantity}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
