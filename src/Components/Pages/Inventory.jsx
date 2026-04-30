import {
  FaFilter,
  FaFileExcel,
  FaFilePdf,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

export default function Inventory() {
  const products = [
    {
      id: 1,
      image: "/images/product-1.jpg",
      name: "Gaming Joy Stick",
      code: "PRD001",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$99.99",
      unit: "pcs",
      quantity: 150,
    },
    {
      id: 2,
      image: "/images/product-2.jpg",
      name: "Wireless Earphones",
      code: "PRD002",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$89.99",
      unit: "pcs",
      quantity: 320,
    },
    {
      id: 3,
      image: "/images/product-3.jpg",
      name: "Smart Watch Pro",
      code: "PRD003",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$98.00",
      unit: "pcs",
      quantity: 200,
    },
    {
      id: 4,
      image: "/images/product-4.jpg",
      name: "USB-C Fast Charger",
      code: "PRD004",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$86.00",
      unit: "pcs",
      quantity: 80,
    },
    {
      id: 5,
      image: "/images/product-5.jpg",
      name: "Portable Bluetooth Speaker",
      code: "PRD005",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$32.00",
      unit: "pcs",
      quantity: 110,
    },
    {
      id: 6,
      image: "/images/product-6.jpg",
      name: "Magic Keyboard",
      code: "PRD006",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$49.00",
      unit: "pcs",
      quantity: 10,
    },
    {
      id: 7,
      image: "/images/product-7.jpg",
      name: "MacBook Pro 16",
      code: "PRD007",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$99.00",
      unit: "pcs",
      quantity: 10,
    },
    {
      id: 8,
      image: "/images/product-8.jpg",
      name: "Wireless Earphones",
      code: "PRD008",
      category: "Electronics",
      brand: "Tech Pro",
      price: "$109.00",
      unit: "pcs",
      quantity: 200,
    },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-4xl text-[#404040]">Inventory</h1>
      <p className="text-[#404040] mb-6 text-lg">
        Manage your product inventory
      </p>

      {/* Search + Button */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-6 w-full">
        <input
          type="text"
          placeholder="Search Products..."
          className="border border-gray-300 rounded px-3 py-2 w-full sm:w-56 focus:outline-none text-base text-[#404040]"
        />

        <button className="bg-[#e66239] text-white text-base px-3 py-2 rounded hover:bg-[#a0300e] transition w-full sm:w-auto shrink-0">
          Add Product
        </button>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-start md:justify-end gap-3 mb-6">
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-[#525252] hover:text-white transition">
          <FaFilter className="mr-2" /> <span>Filter</span>
        </button>
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-[#525252] hover:text-white transition">
          <FaFileExcel className="mr-2" /> <span>Excel</span>
        </button>
        <button className="flex items-center border border-gray-300 px-4 py-2 rounded hover:bg-[#525252] hover:text-white transition">
          <FaFilePdf className="mr-2" /> <span>PDF</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <div className="min-w-225 border border-gray-300 rounded-md divide-y divide-gray-300">

          {/* Header */}
          <div className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.6fr] font-bold text-[#525252] bg-gray-100 p-4">
            <h1>Product</h1>
            <h1>Code</h1>
            <h1>Category</h1>
            <h1>Brand</h1>
            <h1>Price</h1>
            <h1>Unit</h1>
            <h1>Qty</h1>
            <h1 className="text-center">Action</h1>
          </div>

          {/* Rows */}
          {products.map((product) => (
            <div
              key={product.id}
              className="grid grid-cols-[2.5fr_1fr_1fr_1fr_1fr_1fr_1fr_0.6fr] items-center p-4 hover:bg-[#f5f5f5] transition text-lg text-black"
            >
              {/* Product */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-14 h-14 rounded"
                />
                <h1 className="text-gray-600 truncate hover:text-[#e66239]">
                  {product.name}
                </h1>
              </div>

              <h1>{product.code}</h1>
              <h1>{product.category}</h1>
              <h1>{product.brand}</h1>
              <h1>{product.price}</h1>
              <h1>{product.unit}</h1>
              <h1>{product.quantity}</h1>

              {/* Actions */}
              <div className="flex justify-center gap-3">
                <FaEdit className="cursor-pointer hover:text-[#fb2c36]" />
                <FaTrash className="cursor-pointer hover:text-[#fb2c36]" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <h2 className="text-[#404040] text-lg">
          Showing products per page
        </h2>

        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <span className="px-4 py-2 bg-gray-200 cursor-pointer">
            Previous
          </span>
          <span className="px-4 py-2 bg-[#e66239] text-white">1</span>
          <span className="px-4 py-2 hover:text-[#e66239] cursor-pointer">
            2
          </span>
          <span className="px-4 py-2 hover:text-[#e66239] cursor-pointer">
            3
          </span>
          <span className="px-4 py-2 hover:text-[#e66239] cursor-pointer">
            Next
          </span>
        </div>
      </div>
    </div>
  );
}