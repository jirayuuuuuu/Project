import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from './../Template/Layout';
import ProductCard from './../Components/ProductCard';

const Product = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const location = useLocation(); // ใช้สำหรับรับค่าที่ถูกส่งมาจาก Home

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      // ดึงข้อมูลตะกร้าจาก localStorage
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProduct = existingCart.find((item) => item.name === product.name);
  
      let updatedCart;
      if (existingProduct) {
        // อัปเดตจำนวนสินค้าในตะกร้า
        updatedCart = existingCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      } else {
        updatedCart = [...existingCart, product];
      }
  
      // บันทึกตะกร้าลง localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
      alert('เพิ่มสินค้าแล้ว!');
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

  // ฟังก์ชันเลื่อนหน้าไปยังหมวดหมู่
  useEffect(() => {
    if (location.state?.category) {
      const section = document.getElementById(location.state.category);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.state]);

  const categories = {
    promotions: [
      {
        name: 'ขนมเปี๊ยะ',
        price: 70,
        description: 'โปรโมชั่นลดราคาพิเศษ ขนมเปี๊ยะสูตรต้นตำรับ',
        image: 'src/image/ขนมเปี๊ยะ.jpg',
      },
      {
        name: 'น้ำพริกแม่เล็ก',
        price: 70,
        description: 'น้ำพริกสูตรพิเศษ ขายดีอันดับ 1',
        image: 'src/image/น้ำพริกแม่เล็ก.jpg',
      },
      {
        name: 'น้ำพริกแม่ศรี',
        price: 70,
        description: 'น้ำพริกแม่เล็ก (สุบิน) นครปฐมต้นตำรับน้ำพริกคลุกข้าวและเครื่องพริกแกงทุกชนิดของดีประจำจังหวัดนครปฐม OTOP 5 ดาวประจำปี 2548',
        image: 'src/image/น้ำพริกแม่ศรี/1.jpg',
      },
    ],
    popular: [
      {
        name: 'น้ำพริกแม่เล็ก',
        price: 70,
        description: 'น้ำพริกสูตรพิเศษ ขายดีอันดับ 1',
        image: 'src/image/น้ำพริกแม่เล็ก.jpg',
      },
      {
        name: 'ขนมเปี๊ยะ',
        price: 80,
        description: 'ขนมเปี๊ยะครูสมทรง แป้งบาง ไส้แน่น',
        image: 'src/image/ขนมเปี๊ยะ.jpg',
      },
      {
        name: 'วุ้นคุณอุ๊',
        price: 75,
        description: 'วุ้นคุณอุ๊ ต้นตำรับจากแบรนด์ดังในนาม วุ้นคุณอุ๊ ของ จังหวัดนครปฐม สร้างชื่อเสียงในด้านรสชาติและคุณภาพ',
        image: 'src/image/วุ้นคุณอุ๊.jpg',
      },
    ],
    allProducts: [
      {
        name: 'ขนมเปี๊ยะ',
        price: 80,
        description: 'ขนมเปี๊ยะครูสมทรง แป้งบาง ไส้แน่น',
        image: 'src/image/ขนมเปี๊ยะ.jpg',
      },
      {
        name: 'น้ำพริกแม่เล็ก',
        price: 70,
        description: 'น้ำพริกชื่อดังของนครปฐม',
        image: 'src/image/น้ำพริกแม่เล็ก.jpg',
      },
      {
        name: 'น้ำพริกแม่ศรี',
        price: 70,
        description: 'น้ำพริกแม่เล็ก (สุบิน) นครปฐมต้นตำรับน้ำพริกคลุกข้าวและเครื่องพริกแกงทุกชนิดของดีประจำจังหวัดนครปฐม OTOP 5 ดาวประจำปี 2548',
        image: 'src/image/น้ำพริกแม่ศรี/1.jpg',
      },
      {
        name: 'วุ้นคุณอุ๊',
        price: 75,
        description: 'วุ้นคุณอุ๊ ต้นตำรับจากแบรนด์ดังในนาม วุ้นคุณอุ๊ ของ จังหวัดนครปฐม สร้างชื่อเสียงในด้านรสชาติและคุณภาพ',
        image: 'src/image/วุ้นคุณอุ๊.jpg',
      },
      {
        name: 'ส้มโอนครชัยศรี',
        price: 75,
        description: 'ส้มโอนครชัยศรีเป็นผลไม้ขึ้นชื่อของจังหวัดนครปฐมประกอบด้วยส้มโอสองสายพันธุ์หลักคือ พันธุ์ทองดี และ พันธุ์ขาวน้ำผึ้ง',
        image: 'src/image/ส้มโอนครชัยศรี/2.jpg',
      },
      {
        name: 'หมูแผ่น',
        price: 75,
        description: 'หมูแผ่นเป็นของฝากยอดนิยมจากจังหวัดนครปฐม มีรสชาติอร่อย หอมหวาน และกรอบกำลังดี เหมาะสำหรับรับประทานเป็นของว่างหรือทานคู่กับข้าวต้ม',
        image: 'src/image/หมูแผ่น/2.jpg',
      },
      {
        name: 'กุนเชียงหมู',
        price: 75,
        description: 'กุนเชียงหมูเป็นหนึ่งในของฝากขึ้นชื่อจากจังหวัดนครปฐม มีรสชาติอร่อย เนื้อแน่น และผลิตด้วยกรรมวิธีที่สะอาดปลอดภัย',
        image: 'src/image/กุนเชียงหมู/1.jpg',
      },
      {
        name: 'ข้าวหลาม',
        price: 75,
        description: 'ข้าวหลามเป็นของฝากขึ้นชื่อจากจังหวัดนครปฐม มีรสชาติหวานมัน กลิ่นหอม และเนื้อข้าวเหนียวนุ่ม',
        image: 'src/image/ข้าวหลาม/1.jpg',
      },
      {
        name: 'เค้กภคกรณ์',
        price: 75,
        description: 'ภคกรณ์เบเกอรี่เป็นร้านขนมชื่อดังในจังหวัดนครปฐม มีชื่อเสียงจากเมนูเค้กลอดช่องที่ได้รับรางวัลชนะเลิศอันดับ 1 ของประเทศ',
        image: 'src/image/เค้กภคกรณ์/1.jpg',
      },
      {
        name: 'ขนมตาลป้าไข่',
        price: 75,
        description: 'ขนมตาลป้าไข่เป็นร้านขนมไทยดั้งเดิมที่มีชื่อเสียงในตลาดน้ำดอนหวาย จังหวัดนครปฐม ร้านนี้เปิดดำเนินการมากว่า 60 ปี',
        image: 'src/image/ขนมตาลป้าไข่/2.png',
      },
    ],
  };

  return (
    <Layout>
      <div className="p-4 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-5 text-center text-yellow-500">หมวดหมู่สินค้าทั้งหมด</h1>
        <hr className="mb-4 border-yellow-400" />

        {/* หมวดโปรโมชั่น */}
        <div id="promotions" className="bg-red-50 border border-red-300 p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-red-600 mb-3">โปรโมชั่น</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.promotions.map((product, index) => (
              <ProductCard key={index} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* หมวดสินค้ายอดนิยม */}
        <div id="popular" className="bg-blue-50 border border-blue-300 p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-3">สินค้ายอดนิยม</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.popular.map((product, index) => (
              <ProductCard key={index} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        {/* หมวดสินค้าทั้งหมด */}
        <div id="allProducts" className="bg-green-50 border border-green-300 p-4 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">สินค้าทั้งหมด</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.allProducts.map((product, index) => (
              <ProductCard key={index} {...product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>

        <button
          className="w-full mt-6 bg-green-500 text-white py-2.5 rounded-lg hover:bg-green-600 shadow transition"
          onClick={navigateToCart}
        >
          ไปที่ตะกร้า
        </button>
      </div>
    </Layout>
  );
};

export default Product;
