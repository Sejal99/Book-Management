"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "./base";
//@ts-ignore
const Filter = ({setData,currentItems}) => {
  const [categories, setCategories] = useState({
    fiction: false,
    nonfiction: false,
    drama: false,
    comics: false,
  });

  const router = useRouter();
  
   {/*@ts-ignore*/ }
  const handleChange = (e, category) => {
    console.log(category);
    setCategories((prev) => {
      const options = { ...prev };
         {/*@ts-ignore*/ }
      options[category] = !options[category];
      router.replace(`?category=${category}`);
      return options;
    });

    
   
    // const arr = [];
    // for (let filteredItem in categories) {
    //   if (categories[filteredItem] === true) {
    //     const a = arr.find((value) => {
    //       value === filteredItem;
    //     });
        
    //       arr.push(filteredItem);
     
    //   }
    // }

    // arr.push(category);
    // console.log(arr);
  };
  // console.log(categories);

  const filteredProduct=async()=>{
    const arry=[]
    for(let items in categories){
         {/*@ts-ignore*/ }
      if(categories[items]===true){
        arry.push(items)
      }
    }
    let str = '';
    for(let i = 0; i < arry.length; i++){
      str += arry[i];
      str += ',';
    }
    
    
    try {
      const res=await fetch(`${BASE_URL}/books/allBooks?category=${str}`,{
        method:"GET"
      })
      const data=await res.json();
      setData(data);
      
    } catch (error) {
      
    }
  }
useEffect(()=>{
filteredProduct()
},[categories])
  return (
    <div className="bg-white shadow rounded-lg p-4">
    <h3 className="text-md font-semibold text-gray-700 mb-4">Filter by Category</h3>
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
          <label htmlFor={category} className="text-sm font-medium text-gray-700">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </label>
        </div>
      ))}
    </div>
  </div>
  );
};
export default Filter;
