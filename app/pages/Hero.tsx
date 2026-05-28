"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 bg-white">
      {/* LEFT IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in">
        <div className="relative w-full max-w-[500px] aspect-[4/3]">
          <Image
            src="/hero1.png"
            alt="Fresh Bread"
            fill
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
        {/* LOGO */}
        <div
          className="mb-6 flex justify-center gap-7 p-4 md:justify-start"
          data-aos="fade-up"
        >
          <Image
            src="/lgo2.png"
            alt="Bread Logo"
            width={90}
            height={90}
            className="rounded-full shadow-md"
          />
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          data-aos="fade-up"
        >
          Fresh Breads <br />
          <span className="text-yellow-600">Handcrafted Daily</span>
        </h1>

        <p
          className="mt-6 text-gray-600 text-base text-center md:text-lg leading-11"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience the taste of freshly baked bread made with love, quality
          ingredients, and traditional baking methods.
        </p>

        <button
          className="mt-8 w-fit px-8 py-3 rounded-full border border-black 
          hover:bg-black hover:text-white transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Menu
        </button>
      </div>
    </section>
  );
}
