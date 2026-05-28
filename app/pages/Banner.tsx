"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Banner() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full py-20 px-6 md:px-16 flex flex-col items-center gap-10">
      {/* Text */}
      <div className="max-w-[900px] text-center" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Our Freshly Baked Breads <br />
          Are The Hero Of Our Breakfast Menu
        </h1>

        <p className="mt-6 text-gray-600 text-lg md:text-2xl leading-8">
          Enjoy warm handcrafted breads made daily with premium ingredients and
          traditional bakery methods for a perfect breakfast experience.
        </p>

        <button
          className="
          mt-8
          border-2
          border-black
          rounded-full
          px-10
          py-4
          hover:bg-black
          hover:text-white
          duration-300
          "
        >
          Read More
        </button>
      </div>

      {/* Image */}
      <div
        className="w-full flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <Image
          src="/bn5.png"
          alt="Fresh Bakery Banner"
          width={1200}
          height={700}
          className="
          rounded-3xl
          w-full
          max-w-[1100px]
          h-auto
          object-cover
          shadow-xl
          "
        />
      </div>
    </section>
  );
}
