import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer } from './components';
import { Home } from './pages';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="details/:productId" element={<ProductDetails />} />
            <Route path="mycart" element={<MyCart />} />
            <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
