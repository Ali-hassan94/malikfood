"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WhyUs() {
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-10 px-5 sm:px-8 md:px-12 lg:px-20 py-16 overflow-hidden">
      {/* LEFT CONTENT */}
      <div
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        data-aos="fade-right"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Fresh taste that
          <br />
          makes your day better
        </h1>

        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 max-w-[700px]">
          We serve freshly prepared burgers, pizzas, shawarma, and snacks made
          with high-quality ingredients. Our goal is to deliver fast, tasty, and
          hygienic food to your doorstep in Sahiwal.
        </p>

        {/* EXTRA CONTENT (READ MORE) */}
        {showMore && (
          <div className="text-gray-600 text-sm sm:text-base md:text-lg leading-7 max-w-[700px] space-y-3">
            <p>
              Our kitchen is fully hygienic and we prepare every order fresh. We
              focus on taste, quality, and customer satisfaction.
            </p>

            <p>
              You can order online easily and get fast delivery in your area. We
              also accept Cash on Delivery, EasyPaisa, and JazzCash.
            </p>

            <p>
              Our special deals and discounts are available daily for students
              and families.
            </p>
          </div>
        )}

        {/* BUTTON */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="px-8 md:px-12 py-3 rounded-full border-2 border-black font-semibold hover:bg-black hover:text-white duration-300"
        >
          {showMore ? "Show Less" : "Read More"}
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
        <div className="relative w-full max-w-[700px] aspect-[4/3]">
          <Image
            src="/bn3.png"
            alt="food banner"
            fill
            className="object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
