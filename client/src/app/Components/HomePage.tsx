"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";
import Filter from "./Filter";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [storedBeer, setBeer] = useState({});
  const [getindex, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [arr, setArr] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:3002/books/allBooks", {
        method: "GET",
      });
      const result = await res.json();
      console.log(result.length);
      setData(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = (beer) => {
    setArr((prev) => {
      const b = [...prev];
      b.push({ name: beer.name, price: beer.price });
      return b;
    });
    setCount(count + 1);
  };

  const handleSub = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleDelete = (id) => {
    setData((prev) => {
      const newArray = [...prev];
      const deletedProduct = newArray.filter((prev) => prev.id !== id);
      return deletedProduct;
    });
  };

  const handleUpdate = (beer, index) => {
    setBeer(beer);
    setIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Navbar count={count} setCount={setCount} arr={arr} />
      <div className="flex h-[100vh]">
        <div className="w-[15%] p-6 bg-gray-100">
         <Filter/>
        </div>
        <div className="w-[85%] bg-red-300 p-6">
          <div className="grid grid-cols-3 gap-6">
            {data?.map((beer, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <img src={beer.image} alt={beer.name} className="w-full h-auto" />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{beer.name}</h2>
                  <button
                    onClick={() => handleDelete(beer.id)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleUpdate(beer, index)}
                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Update
                  </button>
                  <button
                    className="mt-2 px-4 py-2 bg-gray-300 rounded"
                    onClick={handleSub}
                  >
                    -
                  </button>
                  <button
                    onClick={() => handleAdd(beer)}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          storedBeer={storedBeer}
          setData={setData}
          getindex={getindex}
          data={data}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default HomePage;
