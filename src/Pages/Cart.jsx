import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import Layout from './../Template/Layout';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cart, setCart] = useState(location.state?.cart || []);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleUpdateQuantity = (index, quantityChange) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];

    let newQuantity = item.quantity + quantityChange;
    if (newQuantity < 1) newQuantity = 1; // ให้ขั้นต่ำเป็น 1

    item.quantity = newQuantity;

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleInputChange = (index, event) => {
    const updatedCart = [...cart];
    const item = updatedCart[index];
    const newQuantity = parseInt(event.target.value, 10);

    if (!isNaN(newQuantity) && newQuantity > 0) {
      item.quantity = newQuantity;
    }

    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, idx) => idx !== index);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    localStorage.removeItem('cart');
    setCart([]);
    navigate('/checkout');
  };

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
              <li key={index} className="mb-4 p-4 border rounded shadow-md bg-gray-100 flex justify-between items-center">
                <div>
                  <p className="font-bold text-xl">{item.name}</p>
                  <p>Total: {item.price * item.quantity} บาท</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleUpdateQuantity(index, -1)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(event) => handleInputChange(index, event)}
                    className="text-center w-16 border rounded"
                  />
                  <button
                    onClick={() => handleUpdateQuantity(index, 1)}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemoveFromCart(index)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    ลบรายการสินค้า
                  </button>
                </div>
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
              Total Price: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)} บาท
            </p>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
        <div className="mt-6 text-center">
          <Link to="/Product" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Back to Products
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
