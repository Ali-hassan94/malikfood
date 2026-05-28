"use client";

import Image from "next/image";

export default function SamosaPage() {
  const samosa = [
    {
      id: 1,
      title: "Aloo Samosa",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Chicken Samosa",
      price: 90,
      image:
        "https://butteroverbae.com/wp-content/uploads/2021/01/chicken-tikka-samosa.jpg",
    },
    {
      id: 3,
      title: "Beef Keema Samosa",
      price: 110,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR54Kp10FV3YbL6gmq6C3lpyRpGWjejCc-Kvw&s",
    },
    {
      id: 4,
      title: "Vegetable Samosa",
      price: 50,
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 5,
      title: "Cheese Samosa",
      price: 120,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwUqIj4l-m5GyW8jFWZFE39wi7WSBTmkAMlg&s",
    },
    {
      id: 6,
      title: "Chicken Tikka Samosa",
      price: 130,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9HMYB99B65e4efWxbvakQRbZ3kpPT9B_RPQ&s",
    },
    {
      id: 7,
      title: "Chicken Mayo Samosa",
      price: 100,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9BhRzU9Z_yiQ86bcTxOGP_A_dAwL_-gcctg&s",
    },
    {
      id: 8,
      title: "BBQ Samosa",
      price: 140,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkhZ_kMyH9foZ_gIJqbNt2nh2FyIBcoDaig&s",
    },
    {
      id: 9,
      title: "Spicy Aloo Samosa",
      price: 55,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6x3ynXqqil5fXnMzgXTkiKKNo3kKN0e4nw&s",
    },
    {
      id: 10,
      title: "Paneer Samosa",
      price: 115,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyva0G4jqDLvsIj_SC6_qcCddN--WONFS5hQ&s",
    },
    {
      id: 11,
      title: "Mini Samosa Pack",
      price: 150,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5iZCoBdgcYKd-EeNC747guXeh2oRxVnraw&s",
    },
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-14">
        🥟 Pakistani Samosa Menu
      </h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
        {samosa.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-xl p-5 hover:scale-105 transition"
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              unoptimized
            />

            <h2 className="text-xl font-bold mt-4">{item.title}</h2>

            <p className="text-gray-700 font-semibold mt-2">PKR {item.price}</p>

            <button className="mt-5 w-full bg-black text-white py-3 rounded-full hover:bg-orange-500 transition">
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
