import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home, Contact, SignUp, Login } from './pages';

export default function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-evenly min-h-screen">
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
    </>
  );
}
