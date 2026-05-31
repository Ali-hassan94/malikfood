"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

export default function OurMenue() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });

    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("/data/products.json");

      setProducts(response.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-20 px-4 md:px-8 lg:px-10 bg-cover bg-center"
      style={{
        backgroundImage: "url('/mn3.png')",
      }}
    >
      <h1
        className="text-3xl md:text-4xl font-semibold text-center mb-10 text-white"
        data-aos="zoom-in"
      >
        Our Fresh Menu
      </h1>

      {loading ? (
        <div className="text-center text-xl text-white">Loading...</div>
      ) : (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          data-aos-delay="200"
        >
          {products.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 shadow-lg flex flex-col hover:scale-105 duration-300"
            >
              <Image
                src={item.thumbnail}
                alt={item.title}
                width={400}
                height={250}
                className="rounded-lg h-[220px] w-full object-cover"
              />

              <h2 className="text-xl font-bold mt-4">{item.title}</h2>

              <p className="text-gray-600 mt-2">{item.description}</p>

              <p className="font-bold mt-3">PKR {item.price}</p>

              <span className="text-sm text-gray-500 mt-1">
                {item.category}
              </span>

              <Link href="/order">
                <button
                  className="
                mt-4
                px-6
                py-3
                border
                border-black
                rounded-lg
                hover:bg-black
                hover:text-white
                duration-300
                "
                >
                  Order Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
