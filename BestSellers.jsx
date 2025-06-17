import { useState } from "react";

const products = [
  { name: "Product A", img: "https://via.placeholder.com/300" },
  { name: "Product B", img: "https://via.placeholder.com/300" },
  { name: "Product C", img: "https://via.placeholder.com/300" },
];

export default function BestSellers() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % products.length);
  const prev = () => setIndex((index - 1 + products.length) % products.length);

  return (
    <section className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Best Selling Products</h2>
      <div className="relative w-full overflow-hidden">
        <div className="transition-transform duration-500 ease-in-out flex"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {products.map((product, i) => (
            <div key={i} className="min-w-full px-4">
              <img src={product.img} alt={product.name} className="w-full rounded-lg" />
              <p className="mt-2 text-center">{product.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 transition-all">Prev</button>
          <button onClick={next} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 transition-all">Next</button>
        </div>
      </div>
    </section>
  );
}
