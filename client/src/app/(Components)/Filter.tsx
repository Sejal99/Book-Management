"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./base";
import { FilterIcon } from "../../Icons";
import FilterPopup from "./Popup";

//@ts-ignore
const Filter = ({ setData, currentItems }) => {
  const [categories, setCategories] = useState({
    fiction: false,
    nonfiction: false,
    drama: false,
    comics: false,
  });
  
  const [showPopup, setShowPopup] = useState(false); 
  const router = useRouter();
//@ts-ignore
  const handleChange = (e, category) => {
    setCategories((prev) => {
      const options = { ...prev };
      //@ts-ignore
      options[category] = !options[category];
      router.replace(`?category=${category}`);
      return options;
    });
  };

  const filteredProduct = async () => {
    const arry = [];
    for (let items in categories) {
      //@ts-ignore
      if (categories[items] === true) {
        arry.push(items);
      }
    }
    const str = arry.join(",");

    try {
      const res = await fetch(`${BASE_URL}/books/allBooks?category=${str}`, {
        method: "GET",
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    filteredProduct();
  }, [categories]);

  return (
    <div>
      {/* Filter Icon for mobile view */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          className="flex items-center text-gray-700"
          onClick={() => setShowPopup(true)} // Show popup on click
        >
          <FilterIcon />
        </button>
      </div>

      {/* Filter Options - Always visible on larger screens */}
      <div className="bg-white shadow rounded-lg p-4 hidden md:block">
        <h3 className="text-md font-semibold text-gray-700 mb-4">
          Filter by Category
        </h3>
        <div className="space-y-4">
          {Object.keys(categories).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input
                id={category}
                type="checkbox"
                name="category"
                //@ts-ignore
                checked={categories[category]}
                onChange={(e) => handleChange(e, category)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor={category}
                className="text-sm font-medium text-gray-700"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Render the FilterPopup component for mobile view */}
      {showPopup && (
        <FilterPopup
          categories={categories}
          handleChange={handleChange}
          closePopup={() => setShowPopup(false)} // Function to close the popup
        />
      )}
    </div>
  );
};

export default Filter;
