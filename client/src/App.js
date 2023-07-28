import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home, Contact, SignUp, Login } from './pages';
import './App.css';

export default function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="catalog" element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
