import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../utils/menuItems";

type Item = string;

const Sidebar: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>('خانه');

  const handleClick = (item: Item): void => {
    if (selectedItem === item) {
      setSelectedItem(null);
    } else {
      setSelectedItem(item);
    }
  };

  return (
    <aside className="w-44 shadow h-full fixed right-0 bg-gray-800">
      <nav className="p-4">
        <ul className="space-y-4 pt-20">
            {menuItems.map((item, index) => (
                <Link
                  to={item.path} 
                  onClick={() => handleClick(item.label)}
                  key={index} 
                  className={` flex group cursor-pointer items-center space-x-2 py-2 px-4 rounded-md
                    bg-gray-800 hover:bg-yellow-500 transition duration-0 hover:duration-700 ease-in-out  
                    ${ selectedItem === (item.label) ? "bg-yellow-500" : "bg-gray-800"}
                  `}
                >
                  <item.icon 
                    className={`text-xl group-hover:text-black ml-2 ${
                    selectedItem === (item.label) ? "text-black" : "text-white"
                  }`}
                  />
                  <span
                      className={`text-lg font-medium group-hover:text-black ${
                        selectedItem === (item.label) ? "text-black" : "text-white"
                      }`}
                  >
                      {item.label}
                  </span>
                </Link>
            ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
