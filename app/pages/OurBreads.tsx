"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function OurBreads() {
  const [breads, setBreads] = useState([]);
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

      // LOCAL JSON FETCH
      const response = await axios.get("/data/breads.json");

      setBreads(response.data);
    } catch (error) {
      console.log("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-20 px-10 bg-center bg-cover"
      style={{
        backgroundImage: "url('/hero1.png')",
      }}
    >
      <h1
        className="text-4xl font-semibold text-center mb-10"
        data-aos="zoom-in"
      >
        Our Breads
      </h1>

      {loading ? (
        <div className="text-center text-xl">Loading...</div>
      ) : (
        <div
          data-aos-delay="200"
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6"
        >
          {breads.map(item => (
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

              <p className="font-bold mt-3">${item.price}</p>

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
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
