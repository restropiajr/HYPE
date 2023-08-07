import {
  createContext,
  useEffect,
  useState,
  useContext,
  useCallback,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { cartFetcher } from './cartFetcher';
import { addToCartFetcher } from './addToCartFetcher';
import { emptyCartFetcher } from './emptyCartFetcher';
import { updateQuantityFetcher } from './updateQuantityFetcher';
import { removeProductFetcher } from './removeProductFetcher';
import { checkOutFetcher } from './checkOutFetcher';
import { AppContext } from './AppContext';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const { user, token } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [cartError, setCartError] = useState();
  const [addToCartError, setAddToCartError] = useState();
  const [updateQuantityError, setUpdateQuantityError] = useState();
  const [removeProductError, setRemoveProductError] = useState();
  const [emptyCartError, setEmptyCartError] = useState();
  const [checkOutError, setCheckOutError] = useState();
  const navigate = useNavigate();

  async function loadCart(token) {
    try {
      setIsCartLoading(true);
      const loadedCart = await cartFetcher(token);
      setCart(loadedCart);
    } catch (error) {
      setCartError(error);
    } finally {
      setIsCartLoading(false);
    }
  }

  useEffect(() => {
    if (user) {
      setCartError(null);
      loadCart(token);
    }
  }, [user, token]);

  const handleAddToCart = useCallback(
    async (event, productId) => {
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
        setAddToCartError(error);
      } finally {
        setIsCartLoading(false);
      }
    },
    [navigate, user, token]
  );

  const handleUpdateQuantity = useCallback(
    async (event, productId, size) => {
      event.preventDefault();
      try {
        setIsCartLoading(true);
        await updateQuantityFetcher(event, token, productId, size);
        await loadCart(token);
      } catch (error) {
        setUpdateQuantityError(error);
      } finally {
        setIsCartLoading(false);
      }
    },
    [token]
  );

  const handleRemoveProduct = useCallback(
    async (productId, size) => {
      try {
        setIsCartLoading(true);
        await removeProductFetcher(token, productId, size);
        await loadCart(token);
      } catch (error) {
        setRemoveProductError(error);
      } finally {
        setIsCartLoading(false);
      }
    },
    [token]
  );

  const handleEmptyCart = useCallback(async () => {
    try {
      setIsCartLoading(true);
      await emptyCartFetcher(token);
      await loadCart(token);
    } catch (error) {
      setEmptyCartError(error);
    } finally {
      setIsCartLoading(false);
    }
  }, [token]);

  const handleCheckOut = useCallback(async () => {
    try {
      setIsCartLoading(true);
      const session = await checkOutFetcher(token);
      const { url } = session;
      window.location = url;
    } catch (error) {
      setCheckOutError(error);
    } finally {
      setIsCartLoading(false);
    }
  }, [token]);

  const contextValue = {
    cart,
    isCartLoading,
    cartError,
    handleAddToCart,
    addToCartError,
    setAddToCartError,
    handleUpdateQuantity,
    updateQuantityError,
    setUpdateQuantityError,
    handleRemoveProduct,
    removeProductError,
    setRemoveProductError,
    handleEmptyCart,
    emptyCartError,
    setEmptyCartError,
    handleCheckOut,
    checkOutError,
    setCheckOutError,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
