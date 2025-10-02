import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchProducts = async () => {
  const res = await axios.get(`${API_URL}/products`);
  return res.data;
};

export const placeOrder = async (orderData) => {
  const res = await axios.post(`${API_URL}/orders`, orderData);
  return res.data;
};
