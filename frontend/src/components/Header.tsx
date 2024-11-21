import React from "react";
import { FaBell, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Logo from "../assets/images/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center bg-gray-800 text-white shadow px-4 py-3">
      <div className="flex items-center space-x-3  mr-48 gap-4">
        <img src={Logo} alt="Logo" className="w-8 h-8" />
        <h1 className="text-2xl font-semibold text-white"> مدیریت اپراتور پایش هوشمند حریق</h1>
      </div>
      <div className="flex items-center  rtl:space-x-reverse gap-8 ml-10">        
        <button className="text-gray-200 hover:text-yellow-500 transition duration-300">
          <FaBell size={25} />
        </button>
        <button className="text-gray-200  hover:text-yellow-500 transition duration-300">
          <FaUserCircle size={25} />
        </button>
        <button className="text-gray-200  hover:text-yellow-500 transition duration-300">
          <FaSignOutAlt size={25} />
        </button>
      </div>
    </header>
  );
};

export default Header;
