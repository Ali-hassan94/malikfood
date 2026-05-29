"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function WhyUs() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 700,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="
      w-full
      min-h-screen
      flex
      flex-col-reverse
      lg:flex-row
      items-center
      justify-center
      gap-10
      px-5
      sm:px-8
      md:px-12
      lg:px-20
      py-16
      overflow-hidden
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
        w-full
        lg:w-1/2
        flex
        flex-col
        items-center
        lg:items-start
        text-center
        lg:text-left
        gap-6
        "
        data-aos="fade-right"
      >
        <h1
          className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-bold
          leading-tight
          "
        >
          Where every taste
          <br />
          tells a tale
        </h1>

        <p
          className="
          text-gray-600
          text-sm
          sm:text-base
          md:text-lg
          leading-7
          max-w-[700px]
          "
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias
          reprehenderit perspiciatis quasi consequatur magni voluptate velit.
          Voluptatem aliquam.
        </p>

        <button
          className="
          px-8
          md:px-12
          py-3
          rounded-full
          border-2
          border-black
          font-semibold
          hover:bg-black
          hover:text-white
          duration-300
          "
        >
          Read More
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="
        w-full
        lg:w-1/2
        flex
        justify-center
        "
        data-aos="fade-left"
      >
        <div
          className="
          relative
          w-full
          max-w-[700px]
          aspect-[4/3]
          "
        >
          <Image
            src="/bn3.png"
            alt="hero banner"
            fill
            className="
            object-cover
            rounded-3xl
            shadow-xl
            "
          />
        </div>
      </div>
    </section>
  );
}
