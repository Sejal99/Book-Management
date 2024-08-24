
import { useRouter } from 'next/navigation'
import React from 'react'

const OrderSuccessful = () => {
    const router= useRouter()
  return (
    <div className="flex items-center justify-center min-h-screen ">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 flex items-center justify-center bg-green-100 rounded-full">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-2">Payment Done!</h2>
      <p className="text-gray-600 mb-4">
        Thank you for completing your secure online payment.
      </p>
      <p className="text-gray-600 mb-8">Have a great day!</p>
      <button onClick={()=>{
       router.push("/my-orders")
      }}>
        <a className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-600">
          My Orders
        </a>
      </button>
    </div>
  </div>
  )
}

export default OrderSuccessful