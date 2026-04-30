export default function TopProducts() {
  const products = [
    {
      name: "Gaming Joy Stick",
      units: "156 units sold",
      price: "$3,120",
      image: "/images/product-1.jpg",
    },
    {
      name: "Wireless Headphones",
      units: "134 units sold",
      price: "$2,680",
      image: "/images/product-2.jpg",
    },
    {
      name: "Smartwatch",
      units: "98 units sold",
      price: "$1,960",
      image: "/images/product-3.jpg",
    },
  ];

  return (
    <div className="border border-gray-300 rounded-lg bg-white p-6">
      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl  text-[#404040]">Top Products</h1>
      </div>

      {/* Product list */}
      <div className="divide-y divide-gray-200">
        {products.map((product, index) => (
          <div key={index} className="flex items-center justify-between py-4">

            {/* Left side */}
            <div className="flex items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded mr-4"
              />
              <div>
                <h2 className="text-lg font-medium text-[#262626]">
                  {product.name}
                </h2>
                <p className="text-md text-[#404040]">{product.units}</p>
              </div>
            </div>

            {/* Right side */}
            <h3 className="text-lg font-semibold text-[#404040]">
              {product.price}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
