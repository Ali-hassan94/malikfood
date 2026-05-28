import Image from "next/image";
import Hero from "./pages/Hero";
import OurBreads from "./pages/OurBreads";
import WhyUs from "./pages/WhyUs";
import OurMeue from "./pages/OurMenue";
import Banner from "./pages/Banner";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <OurBreads />
      <WhyUs />
      <OurMeue />
      <Banner />
      <Clients />
      <Contact />
    </>
  );
}
