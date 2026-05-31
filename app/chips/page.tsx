"use client";

import Image from "next/image";
import Link from "next/link";
export default function ChipsPage() {
  const chips = [
    {
      id: 1,
      title: "Plain Aloo Chips",
      desc: "Simple salted crispy potato chips",
      price: 120,
      discount: "10% OFF",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Masala Aloo Chips",
      desc: "Pakistani spicy masala chips",
      price: 140,
      discount: "12% OFF",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Chatpata Chips",
      desc: "Tangy street style chips",
      price: 150,
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Chilli Garlic Chips",
      desc: "Hot & garlicky flavor chips",
      price: 160,
      discount: "10% OFF",
      image:
        "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Chicken Masala Chips",
      desc: "Chips mixed with chicken masala topping",
      price: 260,
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Chicken Mayo Chips",
      desc: "Creamy mayo chicken loaded chips",
      price: 280,
      discount: "22% OFF",
      image:
        "https://images.unsplash.com/photo-1617196034796-73dfa7b1fd56?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Cheese Loaded Chips",
      desc: "Melted cheese over crispy fries",
      price: 250,
      discount: "18% OFF",
      image:
        "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 9,
      title: "Peri Peri Chips",
      desc: "Spicy peri peri seasoning chips",
      price: 210,
      discount: "15% OFF",
      image:
        "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 12,
      title: "Crispy Golden Chips",
      desc: "Extra crispy fried potatoes",
      price: 150,
      discount: "8% OFF",
      image:
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 13,
      title: "Loaded Masala Fries",
      desc: "Fully loaded spicy fries",
      price: 240,
      discount: "18% OFF",
      image:
        "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 15,
      title: "Ultimate Chips Platter",
      desc: "Mix of all fries styles (signature)",
      price: 350,
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mb-12">
        🍟 Pakistani Chips Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chips.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden hover:scale-105 transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="h-[220px] w-full object-cover"
            />

            <div className="p-5">
              <h2 className="text-xl font-bold">{item.title}</h2>

              <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

              <p className="text-green-600 font-semibold mt-2">
                {item.discount}
              </p>

              <p className="font-bold mt-2">PKR {item.price}</p>

              <Link href="/order">
                <button className="mt-4 w-full bg-black text-white py-3 rounded-full hover:bg-orange-500 transition">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
