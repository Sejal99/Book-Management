"use client";
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { BASE_URL } from "./base";
import { AppDispatch, RootState } from "./GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "./GlobalRedux/Features/BookSlice";
import { increment } from "./GlobalRedux/Features/CounterSlice";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [getDisable, setDisable] = useState([]);
  const dispatch: AppDispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/books/allBooks`, {
        method: "GET",
      });
      const result = await res.json();
      const arr = new Array(result.length).fill(false);
      // @ts-ignore
      setDisable(arr);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  //@ts-ignore
  const handleAdd = (beer, index) => {
    setDisable((prev) => {
      let newArr = [...prev];
      // @ts-ignore
      newArr[index] = true;
      return newArr;
    });

   
    dispatch(
       //@ts-ignore
      addBook({
        bookname: beer.bookname,
        price: beer.price,
        image: beer.image,
        quantity: 1,
        fileId: beer.fileId,
      })
    );

    dispatch(increment());
  };

  return (
    <div>
      <Navbar />
      <div className="flex h-[100vh]">
        <div className="w-[15%] p-6 bg-gray-100">
          <Filter setData={setData} currentItems={currentItems} />
        </div>
        <div className="w-[85%] bg-gray-50 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {currentItems.map((beer, index) => (
              <div
                key={index}
                className="bg-blue shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 flex flex-col h-auto w-[70%] mx-auto"
              >
                <div className="w-full h-40">
                  <img
                    //@ts-ignore
                    src={beer.image}
                    className="h-full w-full object-contain mt-4"
                    //@ts-ignore
                    alt={beer.bookname}
                  />
                </div>
                <div className="w-full p-2 text-center">
                  <h2 className="text-md font-bold text-gray-800 mt-4">
                    {/* @ts-ignore*/}
                    {beer.bookname}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    {/* @ts-ignore*/}
                    ${beer.price}
                  </p>
                  <div className="mt-2">
                    <button
                      disabled={getDisable[index]}
                      onClick={() => handleAdd(beer, index)}
                      className={`${
                        getDisable[index] ? "bg-gray-600" : "bg-blue-600"
                      } p-2 rounded-lg text-white text-sm`}
                    >
                      {getDisable[index] ? "Added to Cart" : "Add To Cart"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
