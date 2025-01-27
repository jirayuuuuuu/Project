// import React from 'react'
// import { useLocation, Link } from 'react-router-dom';
// import Layout from './../Template/Layout';

// const ProductCard = ({ name, price, description, image, onAddToCart }) => {
//     const [quantity, setQuantity] = useState(0);
  
//     const increaseQuantity = () => setQuantity(quantity + 1);
//     const decreaseQuantity = () => setQuantity(quantity > 0 ? quantity - 1 : 0);
  
//     return (
//       <div className="mb-4 p-5 border border-gray-400 rounded shadow-md bg-white">
//         <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-3" />
//         <p className="font-bold text-xl text-gray-800">{name}</p>
//         <p className="text-gray-600">Price: ${price}</p>
//         <p className="text-gray-500 mb-3">{description}</p>
//         <div className="flex items-center justify-between mb-3">
//           <button
//             className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//             onClick={decreaseQuantity}
//           >
//             -
//           </button>
//           <span className="text-xl font-semibold">{quantity}</span>
//           <button
//             className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
//             onClick={increaseQuantity}
//           >
//             +
//           </button>
//         </div>
//         <button
//           className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
//           onClick={() => onAddToCart({ name, price, quantity })}
//         >
//           Add to Cart
//         </button>
//       </div>
//     );
//   };

// export default ProductCard