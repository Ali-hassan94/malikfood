"use client";

import Image from "next/image";
import Link from "next/link";

export default function PizzaRollsPage() {
  const pizzas = [
    {
      id: 1,
      title: "Chicken Tikka Pizza",
      oldPrice: 3200,
      price: 2499,
      discount: "22% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 3,
      title: "Malai Boti Pizza",
      oldPrice: 3500,
      price: 2699,
      discount: "23% OFF",
      image:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 4,
      title: "Cheese Lover Pizza",
      oldPrice: 2800,
      price: 2199,
      discount: "18% OFF",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 5,
      title: "BBQ Chicken Pizza",
      oldPrice: 3300,
      price: 2599,
      discount: "21% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 6,
      title: "Pepperoni Pizza",
      oldPrice: 3600,
      price: 2899,
      discount: "19% OFF",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 8,
      title: "Vegetable Pizza",
      oldPrice: 2500,
      price: 1899,
      discount: "24% OFF",
      image:
        "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 9,
      title: "Creamy Tikka Pizza",
      oldPrice: 3900,
      price: 3099,
      discount: "21% OFF",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 10,
      title: "Stuff Crust Pizza",
      oldPrice: 4200,
      price: 3499,
      discount: "17% OFF",
      image:
        "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 11,
      title: "Seekh Kebab Pizza",
      oldPrice: 3700,
      price: 2899,
      discount: "22% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 12,
      title: "Arabian Pizza",
      oldPrice: 4000,
      price: 3199,
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 13,
      title: "Crown Crust Pizza",
      oldPrice: 4500,
      price: 3699,
      discount: "18% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 14,
      title: "Supreme Special Pizza",
      oldPrice: 5000,
      price: 3999,
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 15,
      title: "Malik Special Pizza",
      oldPrice: 5500,
      price: 4499,
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 16,
      title: "Hot & Spicy Pizza",
      oldPrice: 3800,
      price: 2999,
      discount: "21% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 18,
      title: "Loaded Cheese Pizza",
      oldPrice: 4700,
      price: 3899,
      discount: "17% OFF",
      image:
        "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 19,
      title: "Peri Peri Pizza",
      oldPrice: 3900,
      price: 3099,
      discount: "20% OFF",
      image:
        "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 20,
      title: "Desi Special Pizza",
      oldPrice: 5200,
      price: 4299,
      discount: "24% OFF",
      image:
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    },

    {
      id: 21,
      title: "Mega Crown Pizza",
      oldPrice: 6000,
      price: 4999,
      discount: "25% OFF",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-20 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-5">
        Pakistani Pizza Deals
      </h1>

      <p className="text-center text-gray-600 mb-16 text-lg">
        Delicious Pakistani Style Pizzas with Amazing Deals & Discounts
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {pizzas.map(item => (
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
            {/* IMAGE */}
            <div className="relative">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={300}
                className="w-full h-[250px] object-cover"
              />

              {/* DISCOUNT BADGE */}
              <span
                className="
                absolute
                top-4
                left-4
                bg-red-600
                text-white
                px-4
                py-2
                rounded-full
                text-sm
                font-bold
                "
              >
                {item.discount}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h2 className="text-2xl font-bold">{item.title}</h2>

              {/* PRICE */}
              <div className="flex items-center gap-4 mt-3">
                <p className="text-gray-400 line-through text-lg">
                  Rs. {item.oldPrice}
                </p>

                <p className="text-2xl font-bold text-orange-500">
                  Rs. {item.price}
                </p>
              </div>

              {/* BUTTON */}
             <Link href="/order">
             
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
             </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
