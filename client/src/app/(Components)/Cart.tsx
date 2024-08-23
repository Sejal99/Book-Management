import React from "react";
import { BASE_URL } from "./base";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./GlobalRedux/store";
import { setBooks } from "./GlobalRedux/Features/BookSlice";
import logo from "../../../public/shopping.png";
import Image from "next/image";
interface Book {
  id: number;
  bookname: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const Cart = ({ isOpen, toggleDrawer }: CartProps) => {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const cartBooks = useSelector((state: RootState) => state.books);

  const totalPrice = cartBooks.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle increment for a specific book
  const handleIncrement = (index: number) => {
    const updatedArr = cartBooks.map((item, idx) =>
      idx === index ? { ...item, quantity: item.quantity + 1 } : item
    );
    dispatch(setBooks(updatedArr));
  };

  // Handle decrement for a specific book
  const handleDecrement = (index: number) => {
    const updatedArr = cartBooks
      .map((item, idx) => {
        if (idx === index) {
          const newCount = item.quantity - 1;
          return { ...item, quantity: newCount };
        }
        return item;
      })
      .filter((item) => item.quantity > 0); // Filter out items with 0 count

    dispatch(setBooks(updatedArr));
    // setArr(updatedArr);
  };

  const handleCheckout = async () => {
    try {
      const price = totalPrice.toFixed(2);
      localStorage.setItem("amount", JSON.stringify(totalPrice));
      router.push("/checkout");
    } catch (err) {
      console.log(err);
    }

   
  };

  const handleClick=()=>{
    toggleDrawer(); 
    router.push("/")
  }

  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-[40%] md:w-[40%] bg-white shadow-lg transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 9999 }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">My Cart</h2>
            <button
              onClick={toggleDrawer}
              className="text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              &#10005;
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto" style={{ maxHeight: "70vh" }}>
            {cartBooks.length > 0 ? (
              cartBooks.map((item, index) => (
                <div
                  // @ts-ignore
                  key={item.id}
                  className="mb-4 p-4 bg-gray-100 rounded-lg shadow-sm flex items-center space-x-4"
                >
                  <img
                    src={item.image}
                    alt={item.bookname}
                    className="h-16 w-16 rounded object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-lg">{item.bookname}</div>
                    <div className="text-gray-500">
                      ${item.price.toFixed(2)}
                    </div>
                    <div className="flex items-center mt-2 space-x-2">
                      <button
                        onClick={() => handleDecrement(index)}
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded transition-colors duration-200"
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrement(index)}
                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded transition-colors duration-200"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-full mt-12">
                <Image src={logo} alt="Empty Cart" className="h-40 w-40 " />
                <p className="text-black text-lg mt-2 font-semibold">
                  Your cart is empty.
                </p>
                <p className="text-gray-600 text-md mb-4">
                  Add items to get started.
                </p>
                <button 
                 onClick={()=>{
                  handleClick();
                 }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {cartBooks.length > 0 && (
            <div className="mt-6 pt-4 border-t border-gray-300">
              <div className="flex justify-between text-xl font-semibold mb-4">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleCheckout}
                  className="w-[40%] bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
          style={{ zIndex: 1000 }}
        ></div>
      )}
    </>
  );
};

export default Cart;
