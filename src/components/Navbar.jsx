import React, { useEffect, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdDashboard, MdHelpOutline } from "react-icons/md";
import { BiTransfer, BiLogOut } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    name: "Dashboard",
    icon: MdDashboard,
  },
  {
    name: "Activity",
    icon: FaRegClock,
  },
  {
    name: "Analytics",
    icon: BiTransfer,
  },
  {
    name: "Help",
    icon: MdHelpOutline,
  },
];

const Navbar = () => {
  const [activeNavIndex, setActiveIndex] = useState(0);

  const [logout, setlogout] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("user")) navigate("/");
  }, [logout]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.clear();

    setlogout(true);
  };

  return (
    <div className="px-4 py-10 border-r flex flex-col w-1/5 h-screen">
      <div className="flex space-x-3 items-center">
        <h1 className="font-bold items-center hidden text-xl sm:block gap-1">
          Welcome
        </h1>
      </div>
      <div className=" mt-10 felx-col space-y-8">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={
              "flex flex-sol space-x-2 items-center p-2 cursor-pointer" +
              (activeNavIndex === index
                ? " bg-sky-400 w-fit text-white font-semibold rounded"
                : " ")
            }
            onClick={() => setActiveIndex(index)}
          >
            <item.icon className="w-fit" />
            <span className="hidden sm:block sm:text-xs text-md">
              {item.name}
            </span>
          </div>
        ))}
        <div className="flex items-center">
          <BiLogOut onClick={handleClick} className="w-fit mt-32" />
          <button
            onClick={handleClick}
            className="mt-32 hidden sm:flex items-center text-md space-x-2 p-2 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
