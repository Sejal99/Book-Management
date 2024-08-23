"use client";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../(Components)/base";
import Navbar from "../(Components)/Navbar";
import { useRouter } from "next/navigation";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  const fetchOrders = async () => {
    try {
      const res = await fetch(`${BASE_URL}/user/orders`, {
        method: "GET",
        //@ts-ignore
        headers: {
          "Content-Type": "application/json",
          authorization: localStorage.getItem("token"),
        },
      });
      if (!res.ok) {
        throw new Error("Network problem!");
      }
      const data = await res.json();
      setOrders(data.myOrders);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {orders.length > 0 ? (
        <div className="container mx-auto p-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">My Orders</h2>
          <div className="grid grid-cols-5 gap-4 mb-6 text-md font-semibold text-gray-600 border-b-2 border-gray-300 pb-2">
            <div>Book Info</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Payment Status</div>
            <div>Order Placed</div>
          </div>
          <div className="space-y-6">
            {orders.map((item, i) => (
              <div key={i} className="bg-white shadow-md rounded-md p-4">
                {/*@ts-ignore */}
                <div className="font-medium text-gray-700 mb-2">Order ID: {item.orderId}</div>
                <div className="space-y-4">
                  {/*@ts-ignore */}
                  {item.products.map((val, index) => (
                    <div key={index} className="grid grid-cols-5 gap-4 items-center bg-gray-50 p-4 rounded-md border border-gray-200">
                      <div className="flex items-center gap-4">
                        <img
                          src={val.image}
                          alt={val.bookname}
                          className="h-16 w-16 rounded object-cover"
                        />
                        <div className="font-medium text-gray-800">{val.bookname}</div>
                      </div>
                      <div className="text-gray-700">${val.price.toFixed(2)}</div>
                      <div className="text-gray-700">{val.quantity}</div>
                      {/*@ts-ignore */}
                      <div className={`font-semibold ${item.status === "succeeded" ? 'text-green-700' : 'text-red-700'}`}>
                        {/*@ts-ignore */}
                        {item.status === "succeeded" ? "Succeeded" : "Failed"}
                      </div>
                      <div className="text-gray-600">{val.createdAt.slice(0, 10)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[70vh] justify-center items-center">
          <div className="flex flex-col items-center text-center">
            <div className="text-xl font-medium text-gray-800 mb-4">No Orders Yet!</div>
            <button
              onClick={() => router.push('/')}
              className="bg-green-600 text-white p-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Shop Books
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
