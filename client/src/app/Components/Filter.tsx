"use client";
import React, { useState } from "react";

const Filter = () => {
  const [categories, setCategories] = useState({
    fiction: false,
    nonfiction: false,
    drama: false,
    comics: false,
  });

  const handleChange=()=>{
  
  }
  return (
    <div>
      {Object.keys(categories).map((category) => (
        <div key={category}>
          <label>
            <input
            type="checkbox"
            name="category"
            checked={categories[category]}
            onChange={handleChange}
            />
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};
export default Filter;
