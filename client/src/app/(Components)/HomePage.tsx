"use client"
import React, { useCallback, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Filter from "./Filter";
import Pagination from "./Pagination";
import { BASE_URL } from "./base";
import { AppDispatch } from "./GlobalRedux/store";
import { useDispatch } from "react-redux";
import { addBook } from "./GlobalRedux/Features/BookSlice";
import { increment } from "./GlobalRedux/Features/CounterSlice";
import NextJsCarousel from "./NextJsCarousel";
import Shimmer from "./Shimmer";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const [getDisable, setDisable] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const dispatch: AppDispatch = useDispatch();

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch(`${BASE_URL}/books/allBooks`, {
        method: "GET",
      });
      const result = await res.json();
      const arr = new Array(result.length).fill(false);
      //@ts-ignore
      setDisable(arr);
      setData(result);
      setLoading(false); // Set loading to false once data is loaded
    } catch (error) {
      console.error(error);
      setLoading(false); // Set loading to false if there's an error
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  //@ts-ignore
  const handleAdd = (beer, index) => {
    setDisable((prev) => {
      let newArr = [...prev];
        //@ts-ignore
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
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <NextJsCarousel />
      <div className="flex flex-col">
        <div className="flex bg-green-800">
          <div className="w-[15%] p-6 bg-gray-50">
            <Filter setData={setData} currentItems={currentItems} />
          </div>
          <div className="w-[85%] min-h-screen p-6 bg-gray-50">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {loading ? (
                  // Render 15 shimmer placeholders while loading
                  Array(itemsPerPage).fill(<Shimmer />)
                ) : (
                  currentItems.map((beer, index) => (
                    <div
                      key={index}
                      className="bg-blue border border-gray-400 shadow-lg rounded-lg overflow-hidden transform transition-transform duration-200 hover:scale-105 flex flex-col h-[320px] w-[75%] mx-auto"
                    >
                      <div className="flex-grow flex justify-center items-center">
                        <img
                          //@ts-ignore
                          src={beer.image}
                          className="h-40 w-auto object-contain mt-4 text-sm"
                            //@ts-ignore
                          alt={beer.bookname}
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-between p-2 text-center">
                        <div>
                          <h2 className="text-sm font-semibold text-gray-800 mt-4">
                        {/*@ts-ignore */}
                            {beer.bookname}
                          </h2>
                          <p className="mt-1 text-sm font-semibold text-gray-800">
                                    {/*@ts-ignore */}
                            ${beer.price}
                          </p>
                        </div>
                        <div className="mt-2">
                          <button
                            disabled={getDisable[index]}
                            onClick={() => handleAdd(beer, index)}
                            className={`${
                              getDisable[index]
                                ? "bg-gray-600"
                                : "bg-red-600"
                            } p-2 rounded-lg text-white text-sm`}
                          >
                            {getDisable[index]
                              ? "Added to Cart"
                              : "Add To Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-2">

     
      <Pagination
        data={data}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
       </div>
    </div>
  );
};

export default HomePage;
