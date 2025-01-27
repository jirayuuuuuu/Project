import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Layout from './../Template/Layout';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

  useEffect(() => {
    if (!cart.length) {
      alert('No items in the cart. Redirecting to products.');
      navigate('/Product');
    }
  }, [cart, navigate]);

  return (
    <Layout>
      <div className="p-4 border-4 border-blue-500 rounded-lg bg-white shadow-md">
        <h1 className="text-5xl font-bold mb-6 text-center text-blue-400">Your Cart</h1>
        <hr className="mb-4 border-blue-400" />
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="mb-4 p-4 border rounded shadow-md bg-gray-100">
                <p className="font-bold text-xl">{item.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
        {cart.length > 0 && (
          <div className="mt-4">
            <p className="text-lg font-bold text-gray-700">
              Total Items: {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </p>
            <p className="text-lg font-bold text-gray-700">
              Total Price: $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <Link
            to="/Product"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
