"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg from "../../../public/shop.png";
import Cart from "./Cart";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./GlobalRedux/store";
import { reset } from "./GlobalRedux/Features/CounterSlice";
import logo from "../../../public/user.png";
import orderIcon from "../../../public/orderIcon.png"; 
import logoutIcon from "../../../public/logoutIcon.png"; 



const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const cartCount = useSelector((state: RootState) => state.count);
  const [token, setToken] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleOpen = () => {
    if (localStorage.getItem("token")) {
      dispatch(reset());
      setIsCartOpen(!isCartOpen);
    } else {
      router.push("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    alert("Logged out successfully!");
    router.push("/");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-4 sticky top-0 bg-gradient-to-r from-gray-800 to-black flex justify-between items-center shadow-lg z-50">
      <div
        onClick={() => router.push("/")}
        className="text-white cursor-pointer text-3xl font-bold transition-transform transform hover:scale-105"
      >
        Booksy
      </div>
    
      <div className="flex gap-5 items-center">
        {/* User Profile Icon */}
        <div className="relative">
          <Image
            src={logo}
            alt="User Profile"
            className="h-10 w-10 cursor-pointer transition-transform transform hover:scale-105"
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
              <div
                onClick={() => router.push("/my-orders")}
                className="flex items-center gap-2 px-4 py-2 text-gray-800 cursor-pointer hover:bg-red-400"
              >
                <Image
                  src={orderIcon}
                  alt="Orders Icon"
                  width={20}
                  height={20}
                />
                <span>My Orders</span>
              </div>
              {token && (
                <div
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-gray-800 cursor-pointer  hover:bg-red-400"
                >
                  <Image
                    src={logoutIcon}
                    alt="Logout Icon"
                    width={20}
                    height={20}
                  />
                  <span>Logout</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Cart Icon */}
        <div className="relative cursor-pointer" onClick={handleOpen}>
          <Image
            src={bg}
            alt="Cart"
            className="h-10 w-10 cursor-pointer transition-transform transform hover:scale-105"
          />
          {cartCount.value > 0 && (
            <div className="absolute top-[-12px] right-[-12px] bg-red-500 rounded-full flex items-center justify-center w-6 h-6 text-white text-xs font-semibold">
              {cartCount.value}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
