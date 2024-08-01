import Image from "next/image";
import React from "react";
import bg from "../../../public/image.png";

const Navbar = () => {
  return (
    <div className="p-4 sticky top-0 bg-black flex justify-between items-center">
      <div className="text-white ">Books</div>

      <Image 
      src={bg} 
      alt="Description of the image" 
      width={30} 
      height={30} />
    </div>
  );
};

export default Navbar;
