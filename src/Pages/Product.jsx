import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './../Template/Layout';

const ProductCard = ({ name, price, description, image, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-md bg-white flex flex-col items-center  w-full  transition-transform hover:scale-105 hover:shadow-lg">
      <img
  src={image}
  alt={name}
  className="w-[200px] h-[200px] object-cover rounded-lg mb-3"
/>
      <p className="font-semibold text-lg text-gray-800 text-center mb-1">
        {name}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        Price: <span className="text-gray-800 font-medium">${price}</span>
      </p>
      <p className="text-gray-500 text-xs text-center mb-3 line-clamp-2">
        {description}
      </p>
      <div className="flex items-center justify-center gap-3 mb-3">
        <button
          className="bg-red-500 text-white px-3 py-1.5 rounded-md hover:bg-red-600 shadow transition"
          onClick={decreaseQuantity}
        >
          -
        </button>
        <span className="text-lg font-semibold px-2">{quantity}</span>
        <button
          className="bg-green-500 text-white px-3 py-1.5 rounded-md hover:bg-green-600 shadow transition"
          onClick={increaseQuantity}
        >
          +
        </button>
      </div>
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 shadow transition"
        onClick={() => onAddToCart({ name, price, quantity })}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Product = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      const existingProduct = cart.find((item) => item.name === product.name);
      if (existingProduct) {
        const updatedCart = cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        setCart(updatedCart);
      } else {
        setCart([...cart, product]);
      }
    } else {
      alert('Please select at least 1 item.');
    }
  };

  const navigateToCart = () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }
    navigate('/cart', { state: { cart } });
  };

  const products = [
    {
      name: 'ขนมเปี๊ยะ',
      price: 80,
      description: 'Delicious Chocolate Bar',
      image: 'src/image/ขนมเปี๊ยะ.jpg',
    },
    {
      name: 'น้ำพริกแม่เล็ก',
      price: 70,
      description: 'Vanilla Bar with Oatmeal',
      image: 'src/image/น้ำพริกแม่เล็ก.jpg',
    },
    {
      name: 'วุ้นคุณอุ๊',
      price: 75,
      description: 'Sweet Strawberry Bar',
      image: 'src/image/วุ้นคุณอุ๊.jpg',
    },
  ];

  return (
    <Layout>
      <div className="p-4 border-4 border-blue-500 rounded-lg bg-gradient-to-b from-blue-50 to-blue-100 shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center text-blue-600">
          Products
        </h1>
        <hr className="mb-4 border-blue-400" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <button
          className="w-full mt-5 bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 shadow transition"
          onClick={navigateToCart}
        >
          Go to Cart
        </button>
      </div>
    </Layout>
  );
};

export default Product;
