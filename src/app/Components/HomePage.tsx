"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Modal from "./Modal";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [storedBeer, setBeer] = useState({});
  const [getindex, setIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [arr, setArr] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch("https://api.sampleapis.com/beers/ale", {
        method: "GET",
      });
      const result = await res.json();
      console.log(result.length);

      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAdd = (beer) => {
    setArr((prev) => {
      console.log(prev);

      const b = [...prev];
      console.log(b);
      b.push({ name: beer.name, price: beer.price });
      return b;
    });

    setCount(count + 1);
  };
  const handleSub = (beer) => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const handleDelete = (id) => {
    setData((prev) => {
      const newArray = [...prev];
      const deletedProduct = newArray.filter((prev) => prev.id !== id);
      return deletedProduct;
    });
  };
  const handleUpdate = (beer,index) => {
    setBeer(beer);
    setIndex(index);
    setIsOpen(true);

  };

  return (
    <div>
      <Navbar count={count} setCount={setCount} />
      <div className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {data?.map((beer, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img src={beer.image} alt={beer.name} className="w-50% h-50%" />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{beer.name}</h2>

                <button
                  onClick={() => {
                    handleDelete(beer.id);
                  }}
                  className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    handleUpdate(beer, index);
                  }}
                  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
                <button
                  className="mt-2 px-4 py-2 bg-gray-300 rounded"
                  onClick={() => {
                    handleSub(beer);
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => {
                    handleAdd(beer);
                  }}
                  className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
                >
                  +
                </button>
              </div>
            </div>
          ))}
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
