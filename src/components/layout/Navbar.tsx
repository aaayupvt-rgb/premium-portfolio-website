"use client";

import { useEffect, useState } from "react";
import Container from "@/components/shared/Container";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-50 w-full transition-all duration-500
          ${scrolled ? "border-b border-white/10 bg-black/80 backdrop-blur-xl" : "bg-transparent"}
        `}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <a
              href="#home"
              className="text-sm font-semibold uppercase tracking-[0.3em] transition-all duration-300 hover:text-[#FF4301]"
            >
              VISUAL BY AYUSH
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden gap-12 text-sm md:flex">
              <a href="#home" className="transition-colors duration-300 hover:text-[#FF4301]">
                Home
              </a>
              <a href="#about" className="transition-colors duration-300 hover:text-[#FF4301]">
                About
              </a>
              <a href="#toolkit" className="transition-colors duration-300 hover:text-[#FF4301]">
                Toolkit
              </a>
              <a href="#experience" className="transition-colors duration-300 hover:text-[#FF4301]">
                Experience
              </a>
              <a
                href="https://www.behance.net/ayushpatidar14"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-300 hover:text-[#FF4301]"
              >
                Portfolio
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="flex flex-col gap-1.5 md:hidden"
            >
              <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`h-[2px] w-6 bg-white transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>

            {/* Desktop CTA */}
            <a
              href="https://web.whatsapp.com/send?phone=918871132361&text=Hi%20Ayush!%20I%20visited%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20collaboration.%20Are%20you%20available%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="
                hidden md:block
                rounded-full
                border border-white/10
                px-6 py-3
                text-sm
                transition-all duration-300
                hover:bg-[#FF4301]
                hover:border-[#FF4301]
                hover:text-white
              "
            >
              Let&apos;s Talk
            </a>

          </div>
        </Container>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-black transition-all duration-500 md:hidden
          ${menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}
        `}
      >
        <div className="flex h-full flex-col justify-center px-10">

          {[
            { label: "Home", href: "#home" },
            { label: "About", href: "#about" },
            { label: "Toolkit", href: "#toolkit" },
            { label: "Experience", href: "#experience" },
            { label: "Portfolio", href: "https://www.behance.net/ayushpatidar14", external: true },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              onClick={() => !item.external && setMenuOpen(false)}
              className="border-b border-white/10 py-6 text-4xl tracking-[-0.04em] transition-colors duration-300 hover:text-[#FF4301]"
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://web.whatsapp.com/send?phone=918871132361&text=Hi%20Ayush!%20I%20visited%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20collaboration.%20Are%20you%20available%3F"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-12 text-lg font-medium text-[#FF4301]"
          >
            Let&apos;s Talk →
          </a>

        </div>
      </div>
    </>
  );
}