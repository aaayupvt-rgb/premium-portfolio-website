import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import Approach from "@/components/sections/Approach";
import Clients from "@/components/sections/Clients";
import Portfolio from "@/components/sections/Portfolio";
import Toolkit from "@/components/sections/Toolkit";

export default function HomePage() {
  return (
   <>
  <Navbar />

  <Hero />
   
  <Toolkit />

  <Story />

  <Clients />

  <Approach />

  <Experience />

  <Portfolio />
   
  <Contact />

  <Footer />
</>
  );
}