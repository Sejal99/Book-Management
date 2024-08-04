import React from "react";
//@ts-ignore
const Cart = ({ isOpen, toggleDrawer, arr }) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 1100 }}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Cart</h2>
          {arr.length > 0 ? (
            //@ts-ignore
            arr.map((item, index) => (
              <div key={index} className="mb-2">
                {item.bookname}
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
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
