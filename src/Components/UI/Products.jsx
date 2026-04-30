import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function Products() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {/* Left Table */}
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl">Top Selling Products</h1>
          <button className="flex items-center px-3 py-1 border border-gray-black rounded hover:bg-[#525252] hover:text-white transition">
            <FaRegCalendarAlt className="mr-2" /> Today
          </button>
        </div>
        <hr className="mb-4 border border-gray-200 mt-4" />

        {/* Block 1 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-2.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Wireless Earphones</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">$89</h4>
                <span>•</span>
                <h3 className="text-lg">1,250 Units</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#fb2c36] font-bold border bg-[#fed5d7] py-1 px-1 rounded-md text-sm">
            18%
          </h5>
        </div>

        {/* Block 2 */}
        <div className="flex justify-between items-center border border-gray-300  rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-1.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Gaming Joy Stick</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">$49</h4>
                <span>•</span>
                <h3 className="text-lg">5,420 Units</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#e66239] font-bold border py-1 px-1 rounded-md text-sm bg-[#fae0d7]">
            22%
          </h5>
        </div>

        {/* Block 3 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-3.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Smart Watch Pro</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">$98</h4>
                <span>•</span>
                <h3 className="text-lg">862 Units</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#00b8db] font-bold border border-[#00b8db] py-1 px-1 rounded-md text-sm bg-[#ccf1f8]">
            22%
          </h5>
        </div>

        {/* Block 4 */}
        <div className="flex justify-between items-center  border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-4.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">USB-C Fast Charger</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">$35</h4>
                <span>•</span>
                <h3 className="text-lg">3,200 Units</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#00c951] font-bold border border-[#00c951] py-1 px-1 rounded-md text-sm bg-[#ccf4dc]">
            28%
          </h5>
        </div>

        {/* Block 5 */}
        <div className="flex justify-between items-center  border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-5.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Portable Bluetooth Speaker</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">$65</h4>
                <span>•</span>
                <h3 className="text-lg">2,890 Units</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#f0b100] font-bold border border-[#f0b100] bg-[#fae0d7]  py-1 px-1 rounded-md text-sm">
            12%
          </h5>
        </div>
      </div>

      {/* Center Table */}
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl">Low Stock Products</h1>
          <h5 className="underline text-[#e66239] cursor-pointer">View all</h5>
        </div>
        <hr className="mb-4 border border-gray-200 mt-4" />

        {/* Block 1 */}
        <div className="flex justify-between items-center p-2 mb-6 border border-gray-300">
          <div className="flex items-center">
            <img
              src="/images/product-8.jpg"
              alt="Item"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Wireless Headphones</h2>
              <h3 className="text-md text-black">ID: #554433</h3>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[#e66239] font-bold text-xl">06</h4>
            <h5 className="text-md text-gray-600">In Stock</h5>
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex justify-between items-center p-2 mb-6 border border-gray-300">
          <div className="flex items-center">
            <img
              src="/images/product-4.jpg"
              alt="Item"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">USB-C Cable Pack</h2>
              <h3 className="text-md text-black">ID: #887766</h3>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[#e66239] font-bold text-xl">06</h4>
            <h5 className="text-md text-gray-600">In Stock</h5>
          </div>
        </div>

        {/* Block 3 */}
        <div className="flex justify-between items-center p-2 mb-6  border border-gray-300">
          <div className="flex items-center">
            <img
              src="/images/product-10.jpg"
              alt="Item"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Phone Screen Protector</h2>
              <h3 className="text-md text-black">ID: #332211</h3>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[#e66239] font-bold text-xl">06</h4>
            <h5 className="text-md text-gray-600">In Stock</h5>
          </div>
        </div>

        {/* Block 4 */}
        <div className="flex justify-between items-center p-2 mb-6 border border-gray-300">
          <div className="flex items-center">
            <img
              src="/images/product-4.jpg"
              alt="Item"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Portable Charger 20000mAh</h2>
              <h3 className="text-md text-black">ID: #998877</h3>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[#e66239] font-bold text-xl">06</h4>
            <h5 className="text-md text-gray-600">In Stock</h5>
          </div>
        </div>

        {/* Block 5 */}
        <div className="flex justify-between items-center p-2 mb-6 border border-gray-300">
          <div className="flex items-center">
            <img
              src="/images/product-6.jpg"
              alt="Item"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Mechanical Keyboard RGB</h2>
              <h3 className="text-md text-black">ID: #665544</h3>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-[#e66239] font-bold text-xl">06</h4>
            <h5 className="text-md text-gray-600">In Stock</h5>
          </div>
        </div>
      </div>

      {/* Right Table */}
      <div className="bg-white shadow-md rounded-lg p-4 border divide border-gray-200">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl">Recent Sales</h1>
          <button className="flex items-center px-3 py-1 border border-gray-300 rounded hover:bg-[#525252] hover:text-white transition">
            <FaRegCalendarAlt className="mr-2" /> Weekly
          </button>
        </div>
        <hr className="mb-4 border border-gray-200 mt-4" />

        {/* Block 1 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-7.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">MacBook Pro 16"</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">Computers</h4>
                <span>•</span>
                <h3 className="text-lg">$22,499</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#00c951] font-bold bg-[#ccf4dc] py-1 px-1 rounded-md text-sm ">
            Completed
          </h5>
        </div>

        {/* Block 2 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-9.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">AirPods Pro Max</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">Audio</h4>
                <span>•</span>
                <h3 className="text-lg">$549</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#fb2c36] font-bold bg-[#fed5d7] py-1 px-1 rounded-md text-sm">
            Processing
          </h5>
        </div>

        {/* Block 3 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-8.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">iPad Air 11</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">Tablets</h4>
                <span>•</span>
                <h3 className="text-lg">$799</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#00c951] font-bold bg-[#ccf1f8] py-1 px-1 rounded-md text-sm">
            Completed
          </h5>
        </div>

        {/* Block 4 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-3.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Apple Watch Ultra</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">Wearables</h4>
                <span>•</span>
                <h3 className="text-lg">$799</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#f0b100] font-bold bg-[#fae0d7] py-1 px-1 rounded-md text-sm">
            Pending
          </h5>
        </div>

        {/* Block 5 */}
        <div className="flex justify-between items-center border border-gray-300 rounded p-2 mb-6">
          <div className="flex items-center">
            <img
              src="/images/product-6.jpg"
              alt="Product"
              className="w-14 h-14 rounded mr-3"
            />
            <div>
              <h2 className="text-lg">Magic Keyboard</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <h4 className="font-bold text-md">Accessories</h4>
                <span>•</span>
                <h3 className="text-lg">$299</h3>
              </div>
            </div>
          </div>
          <h5 className="text-[#fb2c36] font-bold bg-[#fed5d7] py-1 px-1 rounded-md text-sm">
            Pending
          </h5>
        </div>
      </div>
    </div>
  );
}
