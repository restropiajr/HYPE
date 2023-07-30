import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer, ScrollUpButton } from './components';
import { Home, Contact, SignUp, Login } from './pages';

export default function App() {
  return (
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
  );
}
