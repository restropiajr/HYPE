import { createContext, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartFetcher } from './cartFetcher';
import { addToCartFetcher } from './addToCartFetcher';
import { emptyCartFetcher } from './emptyCartFetcher';
import { updateQuantityFetcher } from './updateQuantityFetcher';
import { removeProductFetcher } from './removeProductFetcher';
import { AppContext } from './AppContext';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const { user, token } = useContext(AppContext);
  const [cart, setCart] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [cartError, setCartError] = useState();
  const [addToCartError, setAddToCartError] = useState();
  const [updateQuantityError, setUpdateQuantityError] = useState(true);
  const [removeProductError, setRemoveProductError] = useState(true);
  const [emptyCartError, setEmptyCartError] = useState(true);
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
      setAddToCartError(error);
    } finally {
      setIsCartLoading(false);
    }
  }

  async function handleUpdateQuantity(event, productId, size) {
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
  }

  async function handleRemoveProduct(productId, size) {
    try {
      setIsCartLoading(true);
      await removeProductFetcher(token, productId, size);
      await loadCart(token);
    } catch (error) {
      setRemoveProductError(error);
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
      setEmptyCartError(error);
    } finally {
      setIsCartLoading(false);
    }
  }

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
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
