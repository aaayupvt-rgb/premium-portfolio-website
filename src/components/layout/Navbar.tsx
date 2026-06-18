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

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <>
      <header
        className={`
          fixed
          left-0
          top-0
          z-50
          w-full
          transition-all
          duration-500
          ${
            scrolled
              ? "border-b border-black/5 bg-white/80 backdrop-blur-xl"
              : "bg-transparent"
          }
        `}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <a
              href="#"
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                transition-all
                duration-300
                hover:text-[#FF4301]
              "
            >
              AYUSH PATIDAR
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden gap-12 text-sm md:flex">

              <a
                href="https://www.behance.net/ayushpatidar14"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#FF4301]
                "
              >
                Portfolio
              </a>

              <a
                href="#experience"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#FF4301]
                "
              >
                Experience
              </a>

              <a
                href="#toolkit"
                className="
                  transition-colors
                  duration-300
                  hover:text-[#FF4301]
                "
              >
                Toolkit
              </a>

            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="
                flex
                flex-col
                gap-1.5
                md:hidden
              "
            >
              <span
                className={`
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "translate-y-[7px] rotate-45"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : ""
                  }
                `}
              />

              <span
                className={`
                  h-[2px]
                  w-6
                  bg-black
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-translate-y-[7px] -rotate-45"
                      : ""
                  }
                `}
              />
            </button>

            {/* Desktop CTA */}
            <a
              href="mailto:aaayujpg@gmail.com"
              className="
                hidden
                md:block
                rounded-full
                border
                border-black/10
                px-6
                py-3
                text-sm
                transition-all
                duration-300
                hover:bg-black
                hover:text-[#FF4301]
              "
            >
              Let's Talk
            </a>

          </div>
        </Container>
      </header>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`
          fixed
          inset-0
          z-40
          bg-white
          transition-all
          duration-500
          md:hidden

          ${
            menuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      >
        <div className="flex h-full flex-col justify-center px-10">

          <a
            href="https://www.behance.net/ayushpatidar14"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-black/10
              py-6
              text-4xl
              tracking-[-0.04em]
            "
          >
            Portfolio
          </a>

          <a
            href="#experience"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-black/10
              py-6
              text-4xl
              tracking-[-0.04em]
            "
          >
            Experience
          </a>

          <a
            href="#toolkit"
            onClick={() => setMenuOpen(false)}
            className="
              border-b
              border-black/10
              py-6
              text-4xl
              tracking-[-0.04em]
            "
          >
            Toolkit
          </a>

          <a
            href="mailto:aaayujpg@gmail.com"
            className="
              mt-12
              text-lg
              font-medium
              text-[#FF4301]
            "
          >
            Let's Talk
          </a>

        </div>
      </div>
    </>
  );
}