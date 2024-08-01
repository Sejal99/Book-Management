"use client";
import Image from "next/image";
import React, { useState } from "react";
import bg from "../../../public/image.png";
import Cart from "./Cart";

const Navbar = ({ count, setCount ,arr}) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className="p-4 sticky top-0 bg-black flex justify-between items-center">
      <div className="text-white">Books</div>
      <div className="relative cursor-pointer" onClick={handleOpen}>
        <Image
          src={bg}
          alt="Cart"
          width={30}
          height={30}
        />
        {count > 0 && (
          <div className="absolute top-[-12px] right-0 left-3  flex items-center justify-center w-6 h-6  text-white text-xs ">
            {count}
          </div>
        )}
      </div>
      {isCartOpen && <Cart arr={arr} />}
    </div>
  );
};

export default Navbar;
