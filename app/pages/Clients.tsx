"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaQuoteLeft } from "react-icons/fa";

const clients = [
  {
    id: 1,
    name: "Ali Hassan",
    about:
      "Fresh bread and amazing service. Everything tasted premium and delicious.",
  },
  {
    id: 2,
    name: "Ahmed Khan",
    about: "Best bakery experience. Warm breads and beautiful presentation.",
  },
  {
    id: 3,
    name: "Sara Noor",
    about: "Loved the breakfast menu and handcrafted quality products.",
  },
  {
    id: 4,
    name: "Usman",
    about: "Professional service with fresh bakery products every day.",
  },
];

export default function Clients() {
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
      py-20
      px-6
      md:px-12
      flex
      flex-col
      items-center
      gap-16
      bg-cover
      bg-center
      "
      style={{
        backgroundImage: "url('/a1.png')",
      }}
    >
      <h1
        className="
        text-3xl
        md:text-5xl
        font-bold
        text-white
        text-center
        "
        data-aos="fade-up"
      >
        Read What Our Clients Say
      </h1>

      <div
        className="
        w-full
        grid
        lg:grid-cols-4
        md:grid-cols-2
        grid-cols-1
        gap-12
        "
      >
        {clients.map(item => (
          <div
            key={item.id}
            data-aos="zoom-in"
            className="
            relative
            bg-orange-500
            rounded-3xl
            p-8
            pt-16
            flex
            flex-col
            items-center
            text-center
            shadow-xl
            "
          >
            <div
              className="
              absolute
              -top-8
              bg-white
              p-5
              rounded-full
              text-orange-600
              "
            >
              <FaQuoteLeft size={30} />
            </div>

            <p className="text-white leading-8">{item.about}</p>

            <h2 className="mt-6 text-white text-xl font-bold uppercase">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
