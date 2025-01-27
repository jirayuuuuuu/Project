import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    navigate('/product');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-4xl p-6">
        {/* Header */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img
            src="src/image/Logo.png" // ใส่ URL ของโลโก้จริง
            alt="Logo"
            className="w-24 h-24 mb-4"
          />
          {/* Title */}
          <h1 className="text-2xl font-bold text-blue-800 text-center">
          ของฝากจากนครปฐม
          </h1>
          <p className="text-sm text-gray-500 text-center">
          Souvenirs from Nakhon Pathom
          </p>
        </div>

        {/* Content Section */}
        <div className="bg-blue-700 text-white mt-6 p-6 rounded-lg">
          <p className="text-lg text-center">
            " แหล่งศูนย์รวมของฝากจากนครปฐม "
          </p>
        </div>

        {/* Footer Section */}
        <div className="mt-6 flex justify-center">
          <button
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600"
            onClick={navigateToProduct} // ใช้ฟังก์ชัน navigate
          >
            เข้าสู่หน้าสินค้า
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
