import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './components';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        {/* <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
}
