import React from 'react';
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="mb-4">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <img src={item.img} alt={item.title} className="w-32 h-32 object-cover" />
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
