import { AiFillHome, AiOutlineDashboard } from "react-icons/ai";
import { BsGear } from "react-icons/bs";

export const menuItems = [
  {
    label: "خانه",
    path: "/",
    icon: AiFillHome,
  },
  {
    label: "داشبورد",
    path: "/dashboard",
    icon: AiOutlineDashboard,
  },
  {
    label: "تنظیمات",
    path: "/settings",
    icon: BsGear,
  },
];
