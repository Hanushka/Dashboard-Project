import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import SalesOverview from "../UI/SalesOverview";
import TopProducts from "../UI/TopProducts";

export default function Reports() {
  return (
    <div className="p-6">
      {/* Top Section */}
      <div className="mb-6">
        <h1 className="text-4xl text-[#404040]">Reports</h1>
        <p className="text-lg text-[#404040]">
          View your inventory analytics and reports
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="border border-gray-300 rounded p-4 bg-white">
          <h3 className="text-lg text-[#404040] mb-2">Total Revenue</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-[#404040] mt-5">
            $45,231
          </h1>
          <p className="flex items-center text-[#00c951] text-sm md:text-md mt-4">
            <FaArrowUp className="mr-2" /> 12% from last month
          </p>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded p-4 bg-white">
          <h3 className="text-lg text-[#404040] mb-2">Products Sold</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-[#404040] mt-5">
            1,234
          </h1>
          <p className="flex items-center text-[#00c951] text-sm md:text-md mt-4">
            <FaArrowUp className="mr-2" /> 8% from last month
          </p>
        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded p-4 bg-white">
          <h3 className="text-lg text-[#404040] mb-2">Low Stock Items</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-[#404040] mt-5">
            23
          </h1>
          <p className="flex items-center text-[#fb2c36] text-sm md:text-md mt-4">
            <FaArrowDown className="mr-2" /> 3% from last month
          </p>
        </div>

        {/* Card 4 */}
        <div className="border border-gray-300 rounded p-4 bg-white">
          <h3 className="text-lg text-[#404040] mb-2">Out of Stock</h3>
          <h1 className="text-2xl md:text-3xl font-bold text-[#404040] mt-5">
            5
          </h1>
          <p className="flex items-center text-[#fb2c36] text-sm md:text-md mt-4">
            <FaArrowDown className="mr-2" /> 2% from last month
          </p>
        </div>
      </div>

      {/* Sales Overview */}
      <div className="mt-10">
        <SalesOverview />
      </div>

      {/* Top Products */}
      <div className="mt-10">
        <TopProducts />
      </div>
    </div>
  );
}
