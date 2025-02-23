import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './../Template/Layout';
import QRCode from 'react-qr-code';

const Checkout = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    slip: null,
    orderId: '12345',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      slip: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
    if (!formData.name || !formData.address || !formData.cardNumber || !formData.slip) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่องและอัพโหลดสลิปการชำระเงิน");
      return;
    }
    
    alert('ชำระเงินสำเร็จ');
    navigate('/');
  };

  return (
    <Layout>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-500">Checkout</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          
          {formData.orderId && (
            <div className="mt-6 flex justify-center items-center">
              <div className="text-center">
                <p className="font-semibold text-gray-700">QR Code for Order ID: {formData.orderId}</p>
                <QRCode value={formData.orderId} size={128} />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700">Upload Payment Slip</label>
            <input
              type="file"
              name="slip"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
              accept="image/*,.pdf"
            />
            {formData.slip && (
              <p className="text-sm text-gray-600 mt-2">Selected File: {formData.slip.name}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Confirm Payment
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Checkout;