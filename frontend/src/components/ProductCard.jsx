import React from "react";
import { useCart } from "../context/CartContext";
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><b>${product.price}</b></p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
