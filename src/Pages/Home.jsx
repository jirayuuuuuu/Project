import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const navigateToProduct = (category) => {
    navigate('/product', { state: { category } });
  };

  const slides = [
    'src/image/ส้มโอนครชัยศรี/1.jpg',
    'src/image/หมูแผ่น/1.jpg',
    'src/image/กุนเชียงหมู/1.jpg',
    'src/image/เค้กภคกรณ์/1.jpg',
    'src/image/ข้าวหลาม/1.jpg',
    'src/image/น้ำพริกแม่เล็ก/1.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          <img src="src/image/Logo.png" alt="Logo" className="w-24 h-24 mb-4" />
          <h1 className="text-2xl font-bold text-blue-800 text-center">JD.shop ของฝากจากนครปฐม</h1>
          <p className="text-sm text-gray-500 text-center">JD.shop Souvenirs from Nakhon Pathom</p>
        </div>

        {/* Slider Section */}
        <div className="mt-6 flex flex-col items-center">
          <div className="relative w-full max-w-lg">
            <img src={slides[slideIndex]} alt="ของฝาก" className="w-full h-64 object-cover rounded-lg shadow-md" />
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full"
              onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}
            >
              &#10094;
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white px-3 py-2 rounded-full"
              onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}
            >
              &#10095;
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-col gap-4">
          <button className="bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600" onClick={() => navigateToProduct('promotions')}>
            ดูโปรโมชั่น
          </button>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-full hover:bg-yellow-600" onClick={() => navigateToProduct('popular')}>
            ดูสินค้ายอดนิยม
          </button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600" onClick={() => navigateToProduct('allProducts')}>
            ดูสินค้าทั้งหมด
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;