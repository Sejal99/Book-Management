import React from "react";

const Pagination = ({ data, itemsPerPage, currentPage, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 py-4 pl-14">
      <button
        onClick={handlePrev}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <span className="text-lg font-semibold text-gray-800">
      {currentPage}
      </span>
      <button
        onClick={handleNext}
        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
        disabled={currentPage >= Math.ceil(data.length / itemsPerPage)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
