import React from "react";

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex justify-between items-center border-b py-4">
      <div>
        <h3 className="text-lg font-semibold">{item.name}</h3>
        <p className="text-gray-600">₹{item.price} x {item.qty}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className="font-bold">₹{item.price * item.qty}</span>
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
