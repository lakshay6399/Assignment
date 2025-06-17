import { useState } from "react";

const faqs = [
  { q: "What is this product?", a: "It’s a premium product made for you." },
  { q: "What’s the return policy?", a: "Returns accepted within 30 days." },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
      {faqs.map((faq, i) => (
        <div key={i} className="mb-3 border-b pb-2">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left text-lg font-medium"
          >
            {faq.q}
          </button>
          <div
            className={`transition-all duration-500 overflow-hidden ${
              open === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-600">{faq.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
