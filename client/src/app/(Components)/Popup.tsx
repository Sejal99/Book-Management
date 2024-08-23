import React from "react";

interface FilterPopupProps {
  categories: { [key: string]: boolean };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, category: string) => void;
  closePopup: () => void;
}

const FilterPopup: React.FC<FilterPopupProps> = ({ categories, handleChange, closePopup }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-[50%] max-w-md mx-auto">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={closePopup}
        >
          &times;
        </button>
        <h3 className="text-md font-semibold text-gray-700 mb-4">Filter by Category</h3>
        <div className="space-y-4">
          {Object.keys(categories).map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <input
                id={category}
                type="checkbox"
                name="category"
                checked={categories[category]}
                onChange={(e) => handleChange(e, category)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor={category} className="text-sm font-medium text-gray-700">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-start">
          <button
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 "
            onClick={closePopup}
          >
            Apply 
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
