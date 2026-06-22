import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Toolkit from "@/components/sections/Toolkit";
import Clients from "@/components/sections/Clients";
import Experience from "@/components/sections/Experience";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Toolkit />

      <Clients />

      <Experience />

      <Portfolio />

      <Contact />

      <Footer />
    </>
  );
}