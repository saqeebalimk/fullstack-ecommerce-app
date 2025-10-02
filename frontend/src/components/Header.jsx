import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-800 text-gray-200 text-sm py-2 px-6 flex justify-between items-center">
      <span>📦 Free Shipping on Orders Over ₹2000</span>
      <div className="space-x-4">
        <a href="tel:+911234567890" className="hover:text-white">📞 +91 12345 67890</a>
        <a href="mailto:support@eshop.com" className="hover:text-white">✉ support@eshop.com</a>
      </div>
    </div>
  );
};

export default Header;
