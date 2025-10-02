import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { placeOrder } from "../services/api";
import "./CartPage.css";
const CartPage = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({ firstName: "", lastName: "", address: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = async () => {
    try {
      const res = await placeOrder({ ...form, cart });
      setMessage(res.message);
      clearCart();
    } catch (err) {
      setMessage("Error placing order.");
    }
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id}>
          {item.name} x {item.quantity} = ${item.price * item.quantity}
        </div>
      ))}
      <p><b>Total: ${total}</b></p>

      <h3>Customer Details</h3>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="address" placeholder="Address" onChange={handleChange} />

      <button onClick={handleOrder}>Place Order</button>
      <p>{message}</p>
    </div>
  );
};

export default CartPage;
