"use client";

import Image from "next/image";

export default function BurgersPage() {
  const burgers = [
    {
      id: 1,
      title: "Zinger Burger",
      price: 12,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 2,
      title: "Cheese Burger",
      price: 15,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 3,
      title: "Chicken Burger",
      price: 10,
      image:
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 4,
      title: "Beef Burger",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 5,
      title: "Tower Burger",
      price: 20,
      image:
        "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 6,
      title: "Double Patty Burger",
      price: 22,
      image:
        "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 7,
      title: "Jalapeno Burger",
      price: 17,
      image:
        "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 8,
      title: "BBQ Burger",
      price: 19,
      image:
        "https://images.unsplash.com/photo-1610614819513-58e34989848b?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 9,
      title: "Crispy Burger",
      price: 14,
      image:
        "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 10,
      title: "Anday Wala Burger",
      price: 11,
      image:
        "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 11,
      title: "Chapli Kebab Burger",
      price: 16,
      image:
        "https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 12,
      title: "Spicy Pakistani Burger",
      price: 18,
      image:
        "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 13,
      title: "Malik Special Burger",
      price: 25,
      image:
        "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-16">Our Burgers</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {burgers.map(item => (
          <div
            key={item.id}
            className="
            bg-white
            rounded-3xl
            shadow-xl
            overflow-hidden
            hover:scale-105
            duration-300
            "
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-[250px] object-cover"
            />

            <div className="p-5">
              <h2 className="text-2xl font-bold">{item.title}</h2>

              <p className="mt-2 text-xl font-semibold text-orange-500">
                ${item.price}
              </p>

              <button
                className="
                mt-5
                w-full
                bg-black
                text-white
                px-8
                py-3
                rounded-full
                hover:bg-orange-500
                duration-300
                "
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
