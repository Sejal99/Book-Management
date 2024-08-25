import React from 'react';

const Shimmer = () => {
  return (
    <div className="flex shadow-lg rounded-lg overflow-hidden m-2 bg-white animate-pulse">
      <div className="w-[40%] flex justify-center items-center bg-gray-300 h-40">
        
      </div>
      <div className="w-[60%] p-1 flex flex-col justify-between">
        <div>
          <div className="h-4 bg-gray-300 rounded mb-2 mt-1"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        </div>
        <div>
          <div className="flex justify-between items-center mb-2">
            <div className="w-[100%]">
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
