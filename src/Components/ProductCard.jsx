import React, { useState } from 'react';

const ProductCard = ({ name, price, description, image, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);

  return (
    <div className="p-4 border border-gray-200 rounded-xl shadow-md bg-white flex flex-col items-center w-full transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={image}
        alt={name}
        className="w-[200px] h-[200px] object-cover rounded-lg mb-3"
      />
      <p className="font-semibold text-lg text-gray-800 text-center mb-1">
        {name}
      </p>
      <p className="text-gray-600 text-sm mb-1">
        Price: <span className="text-gray-800 font-medium">{price} บาท</span>
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

export default ProductCard;
