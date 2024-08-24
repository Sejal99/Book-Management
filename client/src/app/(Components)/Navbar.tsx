"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import bg from "../../../public/shop.png";
import Cart from "./Cart";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./GlobalRedux/store";
import { reset } from "./GlobalRedux/Features/CounterSlice";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartCount = useSelector((state: RootState) => state.count);
  const [token, setToken] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, []);

  const handleOpen = () => {
    if (localStorage.getItem("token")) {
      dispatch(reset());
      setIsCartOpen(!isCartOpen);
    } else {
      router.push('/login');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    alert("Logged out successfully!");
    router.push('/');
  };

  return (
    <div className="p-4 sticky top-0 bg-gradient-to-r from-gray-800 to-black flex justify-between items-center shadow-lg z-50">
      <div 
        onClick={() => router.push('/')} 
        className="text-white cursor-pointer text-3xl font-bold transition-transform transform hover:scale-105"
      >
        Booksy
      </div>
      <div className="flex gap-5 items-center">
        <div 
          onClick={() => router.push('/my-orders')} 
          className="text-white cursor-pointer p-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
        >
          My Orders
        </div>
        {token && (
          <div 
            onClick={handleLogout} 
            className="text-white cursor-pointer p-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
          >
            Logout
          </div>
        )}
        <div className="relative cursor-pointer" onClick={handleOpen}>
          <Image        
            src={bg}
            alt="Cart"
            width={30}
            height={40}
            className="mr-2 transition-transform transform hover:scale-105"
          />
          {cartCount.value > 0 && (
            <div className="absolute top-[-12px] right-[-12px] bg-red-500 rounded-full flex items-center justify-center w-6 h-6 text-white text-xs font-semibold">
              {cartCount.value}
            </div>
          )}
        </div>
        {isCartOpen && token && <Cart isOpen={isCartOpen} toggleDrawer={handleOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
