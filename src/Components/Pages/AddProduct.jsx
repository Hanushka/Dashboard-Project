import React from "react";

export default function AddProduct() {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl text-[#404040]">Add Inventory</h1>
          <p className="text-lg text-[#404040]">Manage your inventory items</p>
        </div>
        <button
          className="bg-[#e66239] text-white  text-sm sm:text-base md:text-lg px-3 py-1  sm:px-4 sm:py-2 md:px-6 md:py-2 rounded hover:bg-[#a0300e] transition"
        >
          Go to Inventory List
        </button>
      </div>

      {/* Form Border */}
      <div className="border border-gray-300 rounded p-6 bg-white">
        <form className="grid grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <h2 className="text-lg text-[#404040] mb-1">Product Name</h2>
            <input
              type="text"
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded text-lg px-4 py-2 focus:outline-none focus:border-[#fed5d7]"
            />
          </div>

          {/* SKU */}
          <div>
            <h2 className="text-lg text-[#404040] mb-1">SKU</h2>
            <input
              type="text"
              placeholder="Enter SKU"
              className="w-full border border-gray-300 rounded text-lg px-4 py-2 focus:outline-none focus:border-[#fed5d7]"
            />
          </div>

          {/* Price */}
          <div>
            <h2 className="text-lg text-[#404040] mb-1">Price</h2>
            <input
              type="number"
              placeholder="0.00"
              className="w-full border border-gray-300 rounded text-lg px-4 py-2 focus:outline-none focus:border-[#fed5d7]"
            />
          </div>

          {/* Stock Quantity */}
          <div>
            <h2 className="text-lg text-[#404040] mb-1">Stock Quantity</h2>
            <input
              type="number"
              placeholder="0"
              className="w-full border border-gray-300 rounded text-lg px-4 py-2 focus:outline-none focus:border-[#fed5d7]"
            />
          </div>

          {/* Category */}
          <div className="col-span-2">
            <h2 className="text-lg text-[#404040] mb-1">Category</h2>
            <select className="w-full border border-gray-300 rounded text-lg px-4 py-3 focus:outline-none focus:border-[#fed5d7]">
              <option>Select Category</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Food</option>
            </select>
          </div>

          {/* Product Image */}
          <div className="col-span-2">
            <h2 className="text-lg text-[#404040] mb-1">Product Image</h2>
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              {/* Choose File button */}
              <label
                htmlFor="productImage"
                className="bg-[#f5f5f5] px-4 py-2 cursor-pointer text-[#404040] font-medium hover:bg-gray-200"
              >
                Choose File
              </label>

              {/* Divider */}
              <div className="w-px h-full bg-gray-300"></div>

              {/* No file chosen */}
              <span className="px-4 py-2 text-gray-500">No file chosen</span>

              <input id="productImage" type="file" className="hidden" />
            </div>
          </div>

          {/* Description */}
          <div className="col-span-2">
            <h2 className="text-lg text-[#404040] mb-1">Description</h2>
            <textarea
              placeholder="Enter product description"
              className="w-full border border-gray-300 rounded text-lg px-4 py-5 focus:outline-none focus:border-[#fed5d7]"
            />
          </div>

          {/* Buttons */}
          <div className="col-span-2 flex space-x-4 mt-4">
            <button
              type="submit"
              className="bg-[#e66239] text-white text-lg px-6 py-2 rounded hover:bg-[#a0300e] transition"
            >
              Add Product
            </button>
            <button
              type="reset"
              className="bg-[#525252] text-white text-lg px-6 py-2 rounded hover:bg-gray-700 transition"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
