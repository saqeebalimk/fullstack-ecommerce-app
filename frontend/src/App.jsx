import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <nav>
          <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
