import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer, ScrollUpButton } from './components';
import { Home, Contact, SignUp, Login } from './pages';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './lib/AppContext';

const tokenKey = 'react-context-jwt';

export default function App() {
  const [user, setUser] = useState(undefined);
  const [token, setToken] = useState(undefined);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem(tokenKey);
    if (auth) {
      const authParsed = JSON.parse(auth);
      const { user, token } = authParsed;
      setUser(user);
      setToken(token);
    }
    setIsAuthorizing(false);
  }, []);

  if (isAuthorizing) return null;

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
    navigate('/');
  }

  const contextValue = { user, token, handleLogin, handleSignOut };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="app-container flex flex-col min-h-screen relative">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/products" element={<Products />} />
          <Route path="/details/:productId" element={<ProductDetails />} />
          <Route path="/mycart" element={<MyCart />} />
          <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer />
        <ScrollUpButton />
      </div>
    </AppContext.Provider>
  );
}
