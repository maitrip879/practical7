import React from "react";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
      icon: "💻",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
      icon: "📱",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
      icon: "🎧",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
      icon: "⌨️",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 px-6 py-12">
      <div className="mx-auto max-w-6xl">

        
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Products
          </p>

          <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
            Product List
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-500">
            Explore our collection of quality electronics and accessories.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              
              <div className="mb-5 flex h-28 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 transition duration-300 group-hover:scale-105">
                <span className="text-6xl drop-shadow-sm">
                  {product.icon}
                </span>
              </div>

              
              <h2 className="text-xl font-bold text-gray-800 transition group-hover:text-blue-600">
                {product.name}
              </h2>

              
              <div className="mt-3">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                  {product.category}
                </span>
              </div>

              
              <div className="mt-5 flex items-center justify-between">
                <p className="text-2xl font-extrabold text-blue-600">
                  ₹{product.price.toLocaleString("en-IN")}
                </p>

                <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-blue-600 active:scale-95">
                  View
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-gray-700">
              {products.length}
            </span>{" "}
            products
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductList;