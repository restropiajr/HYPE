import { Routes, Route } from 'react-router-dom';
import {
  NavBar,
  Footer,
  ScrollUpButton,
  LoadingSpinner,
  DisclaimerModal,
} from './components';
import {
  Home,
  Contact,
  SignUp,
  Login,
  Products,
  ProductDetails,
  MyCart,
  CheckoutSuccess,
  NotFound,
} from './pages';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext, ShoppingCartProvider } from './lib';

const tokenKey = 'react-context-jwt';

export default function App() {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function loadUser() {
      const auth = localStorage.getItem(tokenKey);
      if (auth) {
        const authParsed = JSON.parse(auth);
        const { user, token } = authParsed;
        setUser(user);
        setToken(token);
      }
      setIsAuthorizing(false);
    }
    document.documentElement.classList.add('overflow-hidden');
    setIsAuthorizing(true);
    loadUser();
  }, []);

  if (isAuthorizing) {
    return <LoadingSpinner />;
  }

  function handleLogin(auth) {
    const { user, token } = auth;
    localStorage.setItem(tokenKey, JSON.stringify(auth));
    setUser(user);
    setToken(token);
    navigate(-1);
  }

  function handleSignOut() {
    localStorage.removeItem(tokenKey);
    setUser(undefined);
    setToken(undefined);
  }

  function hideModal() {
    setIsModalOpen(false);
    document.documentElement.classList.remove('overflow-hidden');
  }

  const contextValue = { user, token, handleLogin, handleSignOut };

  return (
    <AppContext.Provider value={contextValue}>
      <ShoppingCartProvider>
        <div className="app-container relative flex min-h-screen flex-col">
          {isModalOpen && <DisclaimerModal onClick={hideModal} />}
          <NavBar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route
                path="/product/details/:productId"
                element={<ProductDetails />}
              />
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/checkout/success" element={<CheckoutSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <ScrollUpButton />
        </div>
      </ShoppingCartProvider>
    </AppContext.Provider>
  );
}
